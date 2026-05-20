/**
 * PCForge — локальний сервер
 * Запуск: node server.js
 * Сайт відкриється на: http://localhost:3000
 */

const http   = require('http');
const fs     = require('fs');
const path   = require('path');
const crypto = require('crypto');

const PORT            = 3000;
const USERS_FILE      = path.join(__dirname, 'users.json');
const COMPONENTS_FILE = path.join(__dirname, 'components.json');
const BUILDS_FILE     = path.join(__dirname, 'builds.json');

// ── УТИЛІТИ ───────────────────────────────────────────────────────────────────

function hashPassword(password) {
  return crypto.createHash('sha256').update(password + 'pcforge_salt').digest('hex');
}

function readUsers() {
  if (!fs.existsSync(USERS_FILE)) return [];
  try { return JSON.parse(fs.readFileSync(USERS_FILE, 'utf8')); }
  catch { return []; }
}

function saveUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
}

function readComponents() {
  if (!fs.existsSync(COMPONENTS_FILE)) return {};
  try { return JSON.parse(fs.readFileSync(COMPONENTS_FILE, 'utf8')); }
  catch { return {}; }
}

function saveComponents(data) {
  fs.writeFileSync(COMPONENTS_FILE, JSON.stringify(data, null, 2), 'utf8');
}

function readBuilds() {
  if (!fs.existsSync(BUILDS_FILE)) return [];
  try { return JSON.parse(fs.readFileSync(BUILDS_FILE, 'utf8')); }
  catch { return []; }
}

function saveBuilds(builds) {
  fs.writeFileSync(BUILDS_FILE, JSON.stringify(builds, null, 2), 'utf8');
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try { resolve(JSON.parse(body)); }
      catch { resolve({}); }
    });
    req.on('error', reject);
  });
}

function sendJSON(res, status, data) {
  res.writeHead(status, {
    'Content-Type':                'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers':'Content-Type',
  });
  res.end(JSON.stringify(data));
}

function serveStatic(req, res) {
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  const extMap = {
    '.html':'text/html', '.css':'text/css', '.js':'application/javascript',
    '.json':'application/json', '.png':'image/png', '.jpg':'image/jpeg', '.ico':'image/x-icon',
  };
  const contentType = extMap[path.extname(filePath)] || 'text/plain';
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Не знайдено: ' + req.url); return; }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
}

function isAdmin(email) {
  const users = readUsers();
  const user  = users.find(u => u.email.toLowerCase() === (email || '').toLowerCase());
  return user?.isAdmin === true;
}

// ── AUTH ──────────────────────────────────────────────────────────────────────

async function handleRegister(req, res) {
  const { name, email, password } = await parseBody(req);
  if (!name || !email || !password)
    return sendJSON(res, 400, { ok: false, error: 'Заповніть усі поля' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return sendJSON(res, 400, { ok: false, error: 'Некоректний email' });
  if (password.length < 6)
    return sendJSON(res, 400, { ok: false, error: 'Пароль надто короткий (мін. 6 символів)' });

  const users = readUsers();
  if (users.find(u => u.email.toLowerCase() === email.toLowerCase()))
    return sendJSON(res, 409, { ok: false, error: 'Акаунт з таким email вже існує' });

  const newUser = {
    id: crypto.randomUUID(), name: name.trim(),
    email: email.trim().toLowerCase(), password: hashPassword(password),
    isAdmin: false, createdAt: new Date().toISOString(),
  };
  users.push(newUser);
  saveUsers(users);
  console.log(`  [+] Реєстрація: ${newUser.name} <${newUser.email}>`);
  sendJSON(res, 201, { ok: true, user: { id: newUser.id, name: newUser.name, email: newUser.email, isAdmin: false } });
}

async function handleLogin(req, res) {
  const { email, password } = await parseBody(req);
  if (!email || !password)
    return sendJSON(res, 400, { ok: false, error: 'Заповніть усі поля' });

  const users = readUsers();
  const user  = users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (!user)
    return sendJSON(res, 404, { ok: false, error: 'Акаунт з таким email не знайдено' });
  if (user.password !== hashPassword(password))
    return sendJSON(res, 401, { ok: false, error: 'Невірний пароль' });

  console.log(`  [✓] Вхід: ${user.name} <${user.email}> ${user.isAdmin ? '👑 АДМІН' : ''}`);
  sendJSON(res, 200, { ok: true, user: { id: user.id, name: user.name, email: user.email, isAdmin: user.isAdmin === true } });
}

function handleUsersList(req, res) {
  const users = readUsers().map(u => ({ id: u.id, name: u.name, email: u.email, isAdmin: u.isAdmin || false, createdAt: u.createdAt }));
  sendJSON(res, 200, { ok: true, count: users.length, users });
}

// ── COMPONENTS CRUD ───────────────────────────────────────────────────────────

function handleGetComponents(req, res) {
  sendJSON(res, 200, readComponents());
}

async function handleAddComponent(req, res) {
  const { adminEmail, category, item } = await parseBody(req);
  if (!isAdmin(adminEmail))
    return sendJSON(res, 403, { ok: false, error: 'Доступ заборонено — потрібні права адміна' });
  if (!category || !item || !item.name)
    return sendJSON(res, 400, { ok: false, error: 'Вкажіть category та item.name' });

  const data = readComponents();
  if (!data[category])
    return sendJSON(res, 400, { ok: false, error: `Категорія "${category}" не знайдена` });

  const maxNum = data[category].items.reduce((m, it) => Math.max(m, parseInt(it.id.replace(/\D/g,'')) || 0), 0);
  item.id       = category.slice(0,2) + (maxNum + 1);
  item.category = category;
  item.cat      = category;

  data[category].items.push(item);
  saveComponents(data);
  console.log(`  [+] Додано: [${category}] ${item.name}`);
  sendJSON(res, 201, { ok: true, item });
}

async function handleUpdateComponent(req, res) {
  const { adminEmail, category, item } = await parseBody(req);
  if (!isAdmin(adminEmail))
    return sendJSON(res, 403, { ok: false, error: 'Доступ заборонено' });

  const data = readComponents();
  if (!data[category]) return sendJSON(res, 400, { ok: false, error: 'Категорія не знайдена' });
  const idx = data[category].items.findIndex(i => i.id === item.id);
  if (idx === -1) return sendJSON(res, 404, { ok: false, error: 'Компонент не знайдено' });

  data[category].items[idx] = { ...data[category].items[idx], ...item };
  saveComponents(data);
  console.log(`  [✎] Оновлено: [${category}] ${item.name}`);
  sendJSON(res, 200, { ok: true, item: data[category].items[idx] });
}

async function handleDeleteComponent(req, res) {
  const { adminEmail, category, id } = await parseBody(req);
  if (!isAdmin(adminEmail))
    return sendJSON(res, 403, { ok: false, error: 'Доступ заборонено' });

  const data = readComponents();
  if (!data[category]) return sendJSON(res, 400, { ok: false, error: 'Категорія не знайдена' });
  const before = data[category].items.length;
  data[category].items = data[category].items.filter(i => i.id !== id);
  if (data[category].items.length === before)
    return sendJSON(res, 404, { ok: false, error: 'Компонент не знайдено' });

  saveComponents(data);
  console.log(`  [✗] Видалено: [${category}] id=${id}`);
  sendJSON(res, 200, { ok: true });
}

// ── BUILDS CRUD ───────────────────────────────────────────────────────────────

function handleGetBuilds(req, res) {
  const url   = new URL(req.url, `http://localhost:${PORT}`);
  const email = (url.searchParams.get('email') || '').toLowerCase().trim();
  if (!email) return sendJSON(res, 400, { ok: false, error: 'Вкажіть email' });

  const builds = readBuilds().filter(b => b.userEmail === email);
  sendJSON(res, 200, { ok: true, builds });
}

async function handleSaveBuild(req, res) {
  const { email, name, selected, price, perf } = await parseBody(req);
  if (!email || !name || !selected)
    return sendJSON(res, 400, { ok: false, error: 'Відсутні обовʼязкові поля' });

  const users = readUsers();
  const user  = users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (!user) return sendJSON(res, 404, { ok: false, error: 'Користувача не знайдено' });

  const builds = readBuilds();
  const build  = {
    id: crypto.randomUUID(),
    userEmail: email.toLowerCase().trim(),
    name: name.trim(),
    selected,
    price: price || 0,
    perf: perf || 0,
    createdAt: new Date().toISOString(),
  };
  builds.push(build);
  saveBuilds(builds);
  console.log(`  [💾] Збірка збережена: "${build.name}" для <${build.userEmail}>`);
  sendJSON(res, 201, { ok: true, build });
}

async function handleDeleteBuild(req, res) {
  const { email, id } = await parseBody(req);
  if (!email || !id) return sendJSON(res, 400, { ok: false, error: 'Відсутні email або id' });

  const builds = readBuilds();
  const idx    = builds.findIndex(b => b.id === id && b.userEmail === email.toLowerCase());
  if (idx === -1) return sendJSON(res, 404, { ok: false, error: 'Збірку не знайдено' });

  const [removed] = builds.splice(idx, 1);
  saveBuilds(builds);
  console.log(`  [🗑] Збірка видалена: "${removed.name}" для <${email}>`);
  sendJSON(res, 200, { ok: true });
}

// ── РОУТЕР ────────────────────────────────────────────────────────────────────
const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  if (method === 'OPTIONS') {
    res.writeHead(204, { 'Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Methods':'GET,POST,PUT,DELETE,OPTIONS', 'Access-Control-Allow-Headers':'Content-Type' });
    return res.end();
  }

  if (url === '/api/register'   && method === 'POST')   return handleRegister(req, res);
  if (url === '/api/login'      && method === 'POST')   return handleLogin(req, res);
  if (url === '/api/users'      && method === 'GET')    return handleUsersList(req, res);
  if (url === '/api/components' && method === 'GET')    return handleGetComponents(req, res);
  if (url === '/api/components' && method === 'POST')   return handleAddComponent(req, res);
  if (url === '/api/components' && method === 'PUT')    return handleUpdateComponent(req, res);
  if (url === '/api/components' && method === 'DELETE') return handleDeleteComponent(req, res);
  if (url.startsWith('/api/builds') && method === 'GET')    return handleGetBuilds(req, res);
  if (url === '/api/builds'     && method === 'POST')   return handleSaveBuild(req, res);
  if (url === '/api/builds'     && method === 'DELETE') return handleDeleteBuild(req, res);

  serveStatic(req, res);
});

// ── СТАРТ ─────────────────────────────────────────────────────────────────────
function ensureAdminExists() {
  const users = readUsers();
  if (users.find(u => u.isAdmin === true)) return;

  const admin = {
    id: crypto.randomUUID(), name: 'Admin',
    email: 'admin@pcforge.local', password: hashPassword('admin123'),
    isAdmin: true, createdAt: new Date().toISOString(),
  };
  users.unshift(admin);
  saveUsers(users);

  console.log('  ┌─────────────────────────────────────────┐');
  console.log('  │       СТВОРЕНО АКАУНТ АДМІНА            │');
  console.log('  │  Email  : admin@pcforge.local           │');
  console.log('  │  Пароль : admin123                      │');
  console.log('  │  Зміни пароль після першого входу!      │');
  console.log('  └─────────────────────────────────────────┘');
}

server.listen(PORT, () => {
  console.log('\n  ⚙  PCForge сервер запущено!\n');
  ensureAdminExists();
  console.log(`\n  🌐  http://localhost:${PORT}`);
  console.log('  Ctrl+C — зупинити\n');
});
