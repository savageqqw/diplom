/* ============================================================
   PCForge — Конфігуратор ПК  |  app.js (vanilla JS)
   ============================================================ */

// ── DATA (завантажується з components.json) ───────────────────────────────────
let CD = {};   // заповнюється через loadComponents()

// ── LOAD COMPONENTS ───────────────────────────────────────────────────────────
async function loadComponents() {
  // Спочатку пробуємо завантажити з сервера (актуальні дані з components.json)
  try {
    const res = await fetch(`${API}/components`, { signal: AbortSignal.timeout(2000) });
    if (res.ok) {
      const data = await res.json();
      CD = data;
      Object.entries(CD).forEach(([cat, c]) => c.items.forEach(i => { i.cat = cat; }));
      state.loadError = null;
      return;
    }
  } catch { /* сервер недоступний — падаємо на components.js */ }

  // Fallback: дані з <script src="components.js">
  if (!window.COMPONENTS_DATA) {
    state.loadError = 'Файл components.js не знайдено.<br>Переконайся що він лежить поруч з index.html.';
    return;
  }
  CD = window.COMPONENTS_DATA;
  Object.entries(CD).forEach(([cat, c]) => c.items.forEach(i => { i.cat = cat; }));
  state.loadError = null;
}


const STEPS = ['cpu','gpu','ram','motherboard','storage','psu','case','cooling'];
const TIERS  = ['all','ultra','high','mid','budget'];
const TIER_COLORS = {ultra:'#ff4444',high:'#ff8c00',mid:'#00d4ff',budget:'#22c55e'};
const TIER_UA     = {ultra:'Ultra',high:'High-End',mid:'Mid-Range',budget:'Budget'};

const PRESETS = [
  {
    id:'ultra-gaming',name:'ULTRA GAMING',subtitle:'Максимум для 4K & 144fps',tag:'ULTRA',tagColor:'#ff4444',price:4452,
    comps:{cpu:'cpu2',gpu:'gpu1',ram:'ram1',motherboard:'mb1',storage:'st1',psu:'psu1',case:'case1',cooling:'cool1'},
    perf:{gaming:99,streaming:95,rendering:90,productivity:97},
    use:['4K Gaming 144fps','Стримінг у 4K','3D-Рендеринг','ML / AI задачі'],icon:'👑',
    desc:'Не йдемо на компроміси. RTX 4090 + i9-14900K — це абсолютна межа споживчого заліза у 2024 році.'
  },
  {
    id:'pro-gaming',name:'PRO GAMING',subtitle:'Ідеал для 1440p без обмежень',tag:'HIGH',tagColor:'#ff8c00',price:2855,
    comps:{cpu:'cpu4',gpu:'gpu3',ram:'ram2',motherboard:'mb3',storage:'st3',psu:'psu2',case:'case3',cooling:'cool3'},
    perf:{gaming:85,streaming:80,rendering:75,productivity:82},
    use:['1440p Gaming 165fps','Full HD Стримінг','Відеомонтаж','Фотообробка'],icon:'🎮',
    desc:'RTX 4080 Super та i7-14700K дають змогу грати в будь-яку гру без жодних обмежень на максимальних налаштуваннях.'
  },
  {
    id:'workstation',name:'WORKSTATION PRO',subtitle:'Для професійної творчості',tag:'PRO',tagColor:'#a855f7',price:3795,
    comps:{cpu:'cpu1',gpu:'gpu2',ram:'ram1',motherboard:'mb2',storage:'st1',psu:'psu1',case:'case2',cooling:'cool2'},
    perf:{gaming:88,streaming:92,rendering:98,productivity:99},
    use:['3D Рендеринг / VFX','Машинне навчання','CAD / BIM','Відео 8K'],icon:'🏭',
    desc:'Ryzen 9 7950X з 16 ядрами і RX 7900 XTX 24GB — ідеальний інструмент для митців та інженерів.'
  },
  {
    id:'streaming',name:'STREAMING PRO',subtitle:'Кращий вибір для стримерів',tag:'STREAM',tagColor:'#ff6b9d',price:2198,
    comps:{cpu:'cpu3',gpu:'gpu4',ram:'ram2',motherboard:'mb4',storage:'st3',psu:'psu2',case:'case3',cooling:'cool3'},
    perf:{gaming:75,streaming:98,rendering:70,productivity:78},
    use:['1080p/1440p Стримінг','YouTube-контент','Подкасти','Багатозадачність'],icon:'🎙️',
    desc:'Ryzen 7 7700X + RTX 4070 Ti Super забезпечують ідеальний стримінг та геймінг одночасно без просідань.'
  },
  {
    id:'mid-gaming',name:'MID GAMING',subtitle:'Розумний вибір за кращою ціною',tag:'MID',tagColor:'#00d4ff',price:1558,
    comps:{cpu:'cpu6',gpu:'gpu5',ram:'ram3',motherboard:'mb5',storage:'st5',psu:'psu3',case:'case4',cooling:'cool4'},
    perf:{gaming:68,streaming:58,rendering:52,productivity:64},
    use:['1080p Gaming 144fps','Базовий стримінг','Легкий монтаж','Навчання'],icon:'⚡',
    desc:'RX 7800 XT з 16GB VRAM та i5-14600K — найкраще поєднання ціна/якість у 2024 році.'
  },
  {
    id:'budget',name:'BUDGET BUILD',subtitle:'Максимум за мінімум коштів',tag:'BUDGET',tagColor:'#22c55e',price:783,
    comps:{cpu:'cpu7',gpu:'gpu7',ram:'ram4',motherboard:'mb6',storage:'st5',psu:'psu4',case:'case5',cooling:'cool5'},
    perf:{gaming:46,streaming:34,rendering:28,productivity:52},
    use:['1080p Gaming','Офісні задачі','Навчання','Медіа-плеєр'],icon:'💡',
    desc:'Найдоступніше рішення для тих, хто хоче увійти у PC-гейминг без великих витрат.'
  },
];

// ── STATE ─────────────────────────────────────────────────────────────────────
const state = {
  page: 'home',
  selected: {cpu:null,gpu:null,ram:null,motherboard:null,storage:null,psu:null,case:null,cooling:null},
  // Configurator
  step: 0,
  tier: 'all',
  search: '',
  showSummary: false,
  // Catalog
  catalogFilter: 'all',
  // Compare
  compareSlots: [null, null, null],
  compareCatSel: 'cpu',
  compareSelectorOpen: null,
  // Auth
  authModal: null,       // null | 'login' | 'register'
  authTab: 'login',      // active tab inside modal
  authUser: null,        // { name, email } when logged in
  authError: '',
  authSuccess: '',
  // Currency
  usdToUah: 41.5,        // fallback rate, replaced on load
  rateLoading: true,
  rateSource: '',
  rateUpdated: '',
  // Bootstrap
  appReady: false,
  loadError: null,
  // Admin panel
  adminCat: null,
  adminEditId: null,
  // Category-specific filters
  catFilters: {},
};

// ── UTILS ─────────────────────────────────────────────────────────────────────
function findComp(cat, id) { return CD[cat]?.items.find(i => i.id === id); }

// ── CURRENCY ──────────────────────────────────────────────────────────────────
function fmt(usd) {
  const uah = Math.round(usd * state.usdToUah);
  return uah.toLocaleString('uk-UA') + '\u00a0₴';
}

async function fetchRate() {
  // Try two public CORS-friendly exchange-rate APIs in sequence
  const sources = [
    {
      url: 'https://open.er-api.com/v6/latest/USD',
      parse: d => ({ rate: d.rates.UAH, source: 'open.er-api.com', updated: d.time_last_update_utc })
    },
    {
      url: 'https://api.exchangerate-api.com/v4/latest/USD',
      parse: d => ({ rate: d.rates.UAH, source: 'exchangerate-api.com', updated: d.date })
    },
  ];
  for (const s of sources) {
    try {
      const res = await fetch(s.url);
      if (!res.ok) continue;
      const data = await res.json();
      const { rate, source, updated } = s.parse(data);
      if (rate && rate > 1) {
        state.usdToUah   = rate;
        state.rateSource = source;
        state.rateUpdated = updated;
        state.rateLoading = false;
        return;
      }
    } catch (_) { /* try next */ }
  }
  // All failed — use fallback silently
  state.rateLoading = false;
  state.rateSource  = 'резервний курс';
}

function calcPrice(sel) {
  return Object.entries(sel).reduce((s, [cat, id]) => {
    if (!id) return s;
    return s + (findComp(cat, id)?.price || 0);
  }, 0);
}

function calcPerf(sel) {
  const cpu = findComp('cpu', sel.cpu);
  const gpu = findComp('gpu', sel.gpu);
  if (!cpu && !gpu) return 0;
  return Math.round((cpu?.perf || 0) * 0.35 + (gpu?.perf || 0) * 0.65);
}

function checkCompat(sel) {
  const errs = [], warns = [];
  const cpu = findComp('cpu', sel.cpu);
  const mb  = findComp('motherboard', sel.motherboard);
  const psu = findComp('psu', sel.psu);
  const gpu = findComp('gpu', sel.gpu);
  if (cpu && mb && cpu.socket !== mb.socket)
    errs.push(`Сокет CPU (${cpu.socket}) не сумісний з MB (${mb.socket})`);
  if (psu && cpu && gpu) {
    const need = cpu.tdp + gpu.tdp + 100;
    if (psu.wattage < need)          errs.push(`БЖ ${psu.wattage}W замало — потрібно ~${need}W`);
    else if (psu.wattage < need*1.2) warns.push(`Рекомендується запас: ~${Math.ceil(need*1.2/50)*50}W`);
  }
  return { errs, warns };
}

function getSpecs(item, cat) {
  if (cat==='cpu')        return [`${item.cores} ядер / ${item.threads} потоків`,`Boost ${item.boost}`,`TDP ${item.tdp}W`,`Сокет ${item.socket}`];
  if (cat==='gpu')        return [`VRAM ${item.vram}`,`TDP ${item.tdp}W`];
  if (cat==='ram')        return [item.speed, item.capacity, item.cl];
  if (cat==='motherboard')return [item.socket, item.chipset];
  if (cat==='storage')    return [item.type, item.capacity, item.read];
  if (cat==='psu')        return [`${item.wattage}W`, item.rating];
  if (cat==='case')       return [item.formFactor];
  if (cat==='cooling')    return [item.type];
  return [];
}

function getCompareSpecs(item) {
  if (!item) return {};
  if (item.cat==='cpu') return {'Бренд':item.brand,'Ядра':item.cores,'Потоки':item.threads,'Boost Clock':item.boost,'TDP':item.tdp+'W','Сокет':item.socket,'Продуктивність':item.perf+'/100','Ціна':fmt(item.price)};
  if (item.cat==='gpu') return {'Бренд':item.brand,'VRAM':item.vram,'TDP':item.tdp+'W','Продуктивність':item.perf+'/100','Ціна':fmt(item.price)};
  return {'Бренд':item.brand,'Ціна':fmt(item.price)};
}

// ── HTML HELPERS ──────────────────────────────────────────────────────────────
function tag(text, color='#00d4ff') {
  return `<span class="tag" style="display:inline-flex;align-items:center;padding:2px 10px;border-radius:3px;background:${color}22;border:1px solid ${color}55;color:${color};font-size:10px;letter-spacing:.12em;font-weight:700">${text}</span>`;
}

function perfBar(label, val, color='#00d4ff') {
  return `<div style="margin-bottom:10px">
    <div style="display:flex;justify-content:space-between;margin-bottom:4px;font-size:12px;color:#94a3b8">
      <span>${label}</span><span style="color:${color};font-weight:700">${val}%</span>
    </div>
    <div style="height:5px;background:rgba(255,255,255,.06);border-radius:4px;overflow:hidden">
      <div style="height:100%;width:${val}%;background:linear-gradient(90deg,${color}88,${color});border-radius:4px;transition:width 1s ease"></div>
    </div>
  </div>`;
}

// ── CATEGORY FILTERS CONFIG ───────────────────────────────────────────────────
const CAT_FILTERS = {
  cpu: [
    { key:'brand',  label:'Бренд',  values:['AMD','Intel'] },
    { key:'socket', label:'Сокет',  values:['AM5','LGA1700'] },
    { key:'tier',   label:'Клас',   values:['ultra','high','mid','budget'], colors:{ultra:'#ff4444',high:'#ff8c00',mid:'#00d4ff',budget:'#22c55e'} },
  ],
  gpu: [
    { key:'brand', label:'Бренд', values:['NVIDIA','AMD','Intel'] },
    { key:'vram',  label:'VRAM',  values:['8GB GDDR6','12GB GDDR6X','16GB GDDR6','16GB GDDR6X','20GB GDDR6','24GB GDDR6','24GB GDDR6X'] },
  ],
  ram: [
    { key:'ram_type', label:'Тип',      values:['DDR4','DDR5'] },
    { key:'capacity', label:"Об'єм",    values:['16GB','32GB','64GB','128GB'] },
    { key:'cl',       label:'Таймінги', values:['CL14','CL16','CL18','CL30','CL32','CL34','CL36','CL40'] },
    { key:'speedGroup',label:'Частота', values:['≤3600','≤4800','≤5600','≤6000','6000+'] },
  ],
  motherboard: [
    { key:'socket',   label:'Сокет',   values:['AM5','LGA1700'] },
    { key:'ram_type', label:'RAM',      values:['DDR4','DDR5'] },
    { key:'brand',    label:'Бренд',   values:['ASUS','MSI','Gigabyte','ASRock'] },
  ],
  storage: [
    { key:'type',     label:'Інтерфейс', values:['NVMe M.2','SATA 2.5"'] },
    { key:'capacity', label:"Об'єм",     values:['500GB','1TB','2TB','4TB'] },
    { key:'brand',    label:'Бренд',     values:['Samsung','WD','Seagate','Kingston','Crucial'] },
  ],
  psu: [
    { key:'rating',       label:'Сертифікат',values:['80+ Bronze','80+ Gold','80+ Platinum','80+ Titanium'] },
    { key:'wattageGroup', label:'Потужність', values:['≤650W','≤750W','≤850W','≤1000W','1000W+'] },
  ],
  case: [
    { key:'formFactor', label:'Форм-фактор', values:['Mid Tower','Full Tower'] },
    { key:'brand',      label:'Бренд',       values:['Lian Li','Fractal','NZXT','Corsair','DeepCool','Zalman','be quiet!'] },
  ],
  cooling: [
    { key:'typeGroup', label:'Тип',   values:['Повітряне','СВО 240мм','СВО 280мм','СВО 360мм'] },
    { key:'brand',     label:'Бренд', values:['Noctua','NZXT','Corsair','DeepCool','be quiet!','Lian Li','Cooler Master'] },
  ],
};

function matchCatFilter(item, key, val) {
  if (key === 'speedGroup') {
    const mhz = parseInt((item.speed || '').replace(/\D/g,'')) || 0;
    if (val === '≤3600') return mhz <= 3600;
    if (val === '≤4800') return mhz <= 4800;
    if (val === '≤5600') return mhz <= 5600;
    if (val === '≤6000') return mhz <= 6000;
    if (val === '6000+')  return mhz > 6000;
  }
  if (key === 'wattageGroup') {
    const w = item.wattage || 0;
    if (val === '≤650W')  return w <= 650;
    if (val === '≤750W')  return w <= 750;
    if (val === '≤850W')  return w <= 850;
    if (val === '≤1000W') return w <= 1000;
    if (val === '1000W+') return w > 1000;
  }
  if (key === 'typeGroup') {
    const t = (item.type || '').toLowerCase();
    if (val === 'Повітряне')  return t === 'повітряне';
    if (val === 'СВО 240мм') return t.includes('240');
    if (val === 'СВО 280мм') return t.includes('280');
    if (val === 'СВО 360мм') return t.includes('360');
  }
  return item[key] === val;
}

function renderCatFilters(cat) {
  const groups = CAT_FILTERS[cat];
  if (!groups) return '';
  const active = state.catFilters || {};
  const hasAny = Object.values(active).some(Boolean);

  return `<div style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:10px;padding:12px 14px;margin-bottom:16px">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
      <span style="font-size:10px;color:#334155;font-family:'Orbitron',sans-serif;letter-spacing:.12em">ФІЛЬТРИ</span>
      ${hasAny ? `<button data-action="clearCatFilters" style="background:none;border:none;color:#475569;font-size:11px;cursor:pointer;font-family:'Exo 2',sans-serif;text-decoration:underline">✕ скинути</button>` : ''}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${groups.map(g => `
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <span style="font-size:10px;color:#475569;font-family:'Orbitron',sans-serif;letter-spacing:.06em;min-width:68px;flex-shrink:0">${g.label}:</span>
          <div style="display:flex;gap:4px;flex-wrap:wrap">
            ${g.values.map(v => {
              const isAct = active[g.key] === v;
              const c = g.colors ? (g.colors[v] || '#00e5ff') : '#00e5ff';
              return `<button data-action="setCatFilter" data-key="${g.key}" data-val="${v}"
                style="background:${isAct?`rgba(${hexToRgb(c)},.18)`:'rgba(255,255,255,.04)'};border:1px solid ${isAct?c+'66':'rgba(255,255,255,.08)'};color:${isAct?c:'#64748b'};padding:3px 9px;border-radius:5px;font-size:11px;cursor:pointer;font-family:'Exo 2',sans-serif;font-weight:${isAct?'700':'400'};transition:all .15s">
                ${v}
              </button>`;
            }).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  </div>`;
}

function hexToRgb(hex) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r ? `${parseInt(r[1],16)},${parseInt(r[2],16)},${parseInt(r[3],16)}` : '0,229,255';
}


function renderAdminPage() {
  if (!state.authUser?.isAdmin) return `<div style="padding:80px;text-align:center;color:#ef4444;font-family:'Orbitron',sans-serif">⛔ Доступ заборонено</div>`;

  const cats = Object.keys(CD);
  const selCat = state.adminCat || cats[0] || 'cpu';
  const catData = CD[selCat];
  const editId  = state.adminEditId || null;
  const editItem = editId ? catData?.items.find(i => i.id === editId) : null;

  // Поля форми залежно від категорії
  const fieldsByCat = {
    cpu:        ['name','brand','price','socket','ram_type','power_w','cores','threads','boost','tdp','tier','perf','desc'],
    gpu:        ['name','brand','price','power_w','vram','tdp','tier','perf','desc'],
    ram:        ['name','brand','price','ram_type','power_w','speed','capacity','cl','tier','perf','desc'],
    motherboard:['name','brand','price','socket','ram_type','power_w','chipset','tier','perf','desc'],
    storage:    ['name','brand','price','power_w','type','capacity','read','tier','perf','desc'],
    psu:        ['name','brand','price','power_w','wattage','rating','tier','perf','desc'],
    case:       ['name','brand','price','formFactor','tier','perf','desc'],
    cooling:    ['name','brand','price','power_w','type','tier','perf','desc'],
  };
  const fields = fieldsByCat[selCat] || ['name','brand','price','tier','perf','desc'];

  const fieldLabel = { name:'Назва*',brand:'Бренд*',price:'Ціна USD*',socket:'Сокет',ram_type:'Тип RAM',power_w:'Споживання (W)',cores:'Ядра',threads:'Потоки',boost:'Boost Clock',tdp:'TDP (W)',tier:'Клас*',perf:'Бал (0-100)',desc:'Опис',vram:'VRAM',speed:'Швидкість',capacity:'Обсяг',cl:'CL',chipset:'Чіпсет',type:'Тип',read:'Читання MB/s',wattage:'Потужність W',rating:'Сертифікат',formFactor:'Форм-фактор' };

  const inputStyle = `width:100%;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:9px 12px;font-size:13px;color:#e8eaf6;font-family:'Exo 2',sans-serif;outline:none;box-sizing:border-box`;

  const formFields = fields.map(f => {
    const val = editItem ? (editItem[f] ?? '') : '';
    if (f === 'tier') return `
      <div><label style="font-size:10px;color:#64748b;letter-spacing:.1em;display:block;margin-bottom:4px">${fieldLabel[f] || f}</label>
      <select id="af_${f}" style="${inputStyle}">
        ${['ultra','high','mid','budget'].map(t => `<option value="${t}" ${val===t?'selected':''}>${t}</option>`).join('')}
      </select></div>`;
    return `
      <div><label style="font-size:10px;color:#64748b;letter-spacing:.1em;display:block;margin-bottom:4px">${fieldLabel[f] || f}</label>
      <input id="af_${f}" type="${f==='price'||f==='power_w'||f==='cores'||f==='threads'||f==='tdp'||f==='wattage'||f==='perf'?'number':'text'}" value="${val}" placeholder="${fieldLabel[f]||f}" style="${inputStyle}" /></div>`;
  }).join('');

  return `
  <div style="max-width:1200px;margin:0 auto;padding:36px 24px;position:relative;z-index:1">

    <!-- Header -->
    <div style="margin-bottom:32px">
      <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.25);border-radius:50px;padding:5px 16px;margin-bottom:16px;font-size:11px;color:#ef4444;font-family:'Orbitron',sans-serif;letter-spacing:.1em">
        👑 АДМІН ПАНЕЛЬ
      </div>
      <h1 style="font-family:'Orbitron',sans-serif;font-size:28px;font-weight:900;color:#e8eaf6">Управління комплектуючими</h1>
      <p style="color:#475569;font-size:13px;margin-top:6px">Всі зміни зберігаються у <code style="color:#00e5ff">components.json</code> на сервері</p>
    </div>

    <div style="display:grid;grid-template-columns:1fr 360px;gap:24px;align-items:start">

      <!-- Список компонентів -->
      <div>
        <!-- Вибір категорії -->
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:20px">
          ${cats.map(c => `<button data-action="adminSetCat" data-cat="${c}"
            style="background:${c===selCat?'rgba(0,229,255,.15)':'rgba(255,255,255,.04)'};border:1px solid ${c===selCat?'rgba(0,229,255,.4)':'rgba(255,255,255,.1)'};color:${c===selCat?'#00e5ff':'#64748b'};padding:6px 14px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;font-family:'Exo 2',sans-serif">
            ${CD[c].icon} ${CD[c].short}
          </button>`).join('')}
        </div>

        <!-- Таблиця -->
        <div style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.07);border-radius:14px;overflow:hidden">
          <div style="display:grid;grid-template-columns:1fr auto auto;padding:10px 16px;background:rgba(0,229,255,.05);border-bottom:1px solid rgba(255,255,255,.06)">
            <span style="font-size:11px;color:#334155;font-family:'Orbitron',sans-serif;letter-spacing:.1em">НАЗВА</span>
            <span style="font-size:11px;color:#334155;font-family:'Orbitron',sans-serif;letter-spacing:.1em;margin-right:48px">ЦІНА</span>
            <span style="font-size:11px;color:#334155;font-family:'Orbitron',sans-serif;letter-spacing:.1em">ДІЇ</span>
          </div>
          ${(catData?.items || []).map(item => `
            <div style="display:grid;grid-template-columns:1fr auto auto;align-items:center;padding:11px 16px;border-bottom:1px solid rgba(255,255,255,.04);${editId===item.id?'background:rgba(0,229,255,.05);':''}"
>
              <div>
                <div style="font-size:13px;color:#e8eaf6;font-weight:600">${item.name}</div>
                <div style="font-size:11px;color:#334155;margin-top:2px">${item.brand} · ${item.tier} · бал: ${item.perf}</div>
              </div>
              <div style="font-size:13px;font-weight:700;color:#00e5ff;margin-right:16px">${fmt(item.price)}</div>
              <div style="display:flex;gap:6px">
                <button data-action="adminEdit" data-cat="${selCat}" data-id="${item.id}"
                  style="background:rgba(0,229,255,.1);border:1px solid rgba(0,229,255,.25);color:#00e5ff;padding:5px 12px;border-radius:6px;font-size:12px;cursor:pointer;font-family:'Exo 2',sans-serif">✎</button>
                <button data-action="adminDelete" data-cat="${selCat}" data-id="${item.id}" data-name="${item.name.replace(/"/g,'')}"
                  style="background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.25);color:#ef4444;padding:5px 12px;border-radius:6px;font-size:12px;cursor:pointer;font-family:'Exo 2',sans-serif">✕</button>
              </div>
            </div>`).join('')}
        </div>
      </div>

      <!-- Форма додавання / редагування -->
      <div style="background:rgba(255,255,255,.02);border:1px solid ${editId?'rgba(0,229,255,.25)':'rgba(255,255,255,.07)'};border-radius:14px;padding:22px;position:sticky;top:80px">
        <div style="font-family:'Orbitron',sans-serif;font-size:13px;font-weight:800;color:#e8eaf6;margin-bottom:6px">
          ${editId ? '✎ Редагування' : '+ Новий компонент'}
        </div>
        <div style="font-size:11px;color:#334155;margin-bottom:18px">
          Категорія: <span style="color:#00e5ff">${CD[selCat]?.label || selCat}</span>
          ${editId ? `<span style="color:#64748b"> · id: ${editId}</span>` : ''}
        </div>

        <div id="adminFormError" style="display:none;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.3);border-radius:8px;padding:10px;margin-bottom:14px;font-size:12px;color:#fca5a5"></div>

        <div style="display:flex;flex-direction:column;gap:10px">
          ${formFields}
        </div>

        <div style="display:flex;gap:8px;margin-top:18px">
          <button data-action="${editId ? 'adminSaveEdit' : 'adminAddItem'}" data-cat="${selCat}" data-id="${editId || ''}"
            style="flex:1;background:linear-gradient(135deg,${editId?'#00e5ff,#0066cc':'#22c55e,#16a34a'});border:none;color:#000;padding:11px;border-radius:9px;font-size:13px;font-weight:800;cursor:pointer;font-family:'Exo 2',sans-serif">
            ${editId ? '💾 Зберегти' : '+ Додати'}
          </button>
          ${editId ? `<button data-action="adminCancelEdit" style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);color:#64748b;padding:11px 16px;border-radius:9px;font-size:13px;cursor:pointer;font-family:'Exo 2',sans-serif">✕</button>` : ''}
        </div>
      </div>
    </div>
  </div>`;
}

// ── AUTH MODAL ────────────────────────────────────────────────────────────────
function renderAuthModal() {
  if (!state.authModal) return '';
  const isLogin = state.authModal === 'login';

  const loginForm = `
    <div style="display:flex;flex-direction:column;gap:14px">
      <div>
        <label style="font-size:11px;color:#64748b;letter-spacing:.1em;font-family:'Orbitron',sans-serif;display:block;margin-bottom:6px">EMAIL</label>
        <input id="auth-email" type="email" placeholder="your@email.com"
          style="width:100%;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:11px 14px;font-size:14px;color:#e8eaf6;font-family:'Exo 2',sans-serif;outline:none;transition:border .2s"
          onfocus="this.style.borderColor='rgba(0,229,255,.4)'" onblur="this.style.borderColor='rgba(255,255,255,.12)'" />
      </div>
      <div>
        <label style="font-size:11px;color:#64748b;letter-spacing:.1em;font-family:'Orbitron',sans-serif;display:block;margin-bottom:6px">ПАРОЛЬ</label>
        <div style="position:relative">
          <input id="auth-password" type="password" placeholder="••••••••"
            style="width:100%;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:11px 14px;font-size:14px;color:#e8eaf6;font-family:'Exo 2',sans-serif;outline:none;transition:border .2s"
            onfocus="this.style.borderColor='rgba(0,229,255,.4)'" onblur="this.style.borderColor='rgba(255,255,255,.12)'" />
          <button onclick="const i=document.getElementById('auth-password');i.type=i.type==='password'?'text':'password'"
            style="position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;color:#475569;cursor:pointer;font-size:16px">👁</button>
        </div>
      </div>
      ${state.authError ? `<div style="background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.25);border-radius:8px;padding:10px 14px;font-size:12px;color:#fca5a5">⚠ ${state.authError}</div>` : ''}
      ${state.authSuccess ? `<div style="background:rgba(34,197,94,.1);border:1px solid rgba(34,197,94,.25);border-radius:8px;padding:10px 14px;font-size:12px;color:#86efac">✓ ${state.authSuccess}</div>` : ''}
      <button data-action="submitLogin"
        style="width:100%;background:linear-gradient(135deg,#00e5ff,#0066cc);border:none;color:#000;padding:13px;border-radius:10px;font-size:15px;font-weight:800;cursor:pointer;font-family:'Exo 2',sans-serif;margin-top:4px;letter-spacing:.04em">
        Увійти →
      </button>
      <div style="text-align:center;font-size:13px;color:#475569">
        Немає акаунту?
        <button data-action="openAuth" data-modal="register"
          style="background:none;border:none;color:#00e5ff;cursor:pointer;font-size:13px;font-family:'Exo 2',sans-serif;font-weight:600;padding:0 4px">
          Зареєструватись
        </button>
      </div>
    </div>`;

  const registerForm = `
    <div style="display:flex;flex-direction:column;gap:14px">
      <div>
        <label style="font-size:11px;color:#64748b;letter-spacing:.1em;font-family:'Orbitron',sans-serif;display:block;margin-bottom:6px">ІМ'Я</label>
        <input id="reg-name" type="text" placeholder="Ваше ім'я"
          style="width:100%;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:11px 14px;font-size:14px;color:#e8eaf6;font-family:'Exo 2',sans-serif;outline:none;transition:border .2s"
          onfocus="this.style.borderColor='rgba(124,58,237,.5)'" onblur="this.style.borderColor='rgba(255,255,255,.12)'" />
      </div>
      <div>
        <label style="font-size:11px;color:#64748b;letter-spacing:.1em;font-family:'Orbitron',sans-serif;display:block;margin-bottom:6px">EMAIL</label>
        <input id="reg-email" type="email" placeholder="your@email.com"
          style="width:100%;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:11px 14px;font-size:14px;color:#e8eaf6;font-family:'Exo 2',sans-serif;outline:none;transition:border .2s"
          onfocus="this.style.borderColor='rgba(124,58,237,.5)'" onblur="this.style.borderColor='rgba(255,255,255,.12)'" />
      </div>
      <div>
        <label style="font-size:11px;color:#64748b;letter-spacing:.1em;font-family:'Orbitron',sans-serif;display:block;margin-bottom:6px">ПАРОЛЬ</label>
        <div style="position:relative">
          <input id="reg-password" type="password" placeholder="Мін. 6 символів"
            style="width:100%;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:11px 14px;font-size:14px;color:#e8eaf6;font-family:'Exo 2',sans-serif;outline:none;transition:border .2s"
            onfocus="this.style.borderColor='rgba(124,58,237,.5)'" onblur="this.style.borderColor='rgba(255,255,255,.12)'"
            oninput="updatePasswordStrength(this.value)" />
          <button onclick="const i=document.getElementById('reg-password');i.type=i.type==='password'?'text':'password'"
            style="position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;color:#475569;cursor:pointer;font-size:16px">👁</button>
        </div>
        <div id="pwd-strength-bar" style="margin-top:6px;height:3px;border-radius:2px;background:rgba(255,255,255,.06);overflow:hidden">
          <div id="pwd-strength-fill" style="height:100%;width:0;border-radius:2px;transition:width .3s,background .3s"></div>
        </div>
        <div id="pwd-strength-label" style="font-size:10px;color:#334155;margin-top:4px"></div>
      </div>
      <div>
        <label style="font-size:11px;color:#64748b;letter-spacing:.1em;font-family:'Orbitron',sans-serif;display:block;margin-bottom:6px">ПІДТВЕРДЖЕННЯ ПАРОЛЯ</label>
        <input id="reg-confirm" type="password" placeholder="Повторіть пароль"
          style="width:100%;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:11px 14px;font-size:14px;color:#e8eaf6;font-family:'Exo 2',sans-serif;outline:none;transition:border .2s"
          onfocus="this.style.borderColor='rgba(124,58,237,.5)'" onblur="this.style.borderColor='rgba(255,255,255,.12)'" />
      </div>
      ${state.authError ? `<div style="background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.25);border-radius:8px;padding:10px 14px;font-size:12px;color:#fca5a5">⚠ ${state.authError}</div>` : ''}
      ${state.authSuccess ? `<div style="background:rgba(34,197,94,.1);border:1px solid rgba(34,197,94,.25);border-radius:8px;padding:10px 14px;font-size:12px;color:#86efac">✓ ${state.authSuccess}</div>` : ''}
      <button data-action="submitRegister"
        style="width:100%;background:linear-gradient(135deg,#7c3aed,#a855f7);border:none;color:#fff;padding:13px;border-radius:10px;font-size:15px;font-weight:800;cursor:pointer;font-family:'Exo 2',sans-serif;margin-top:4px;letter-spacing:.04em">
        Створити акаунт →
      </button>
      <div style="text-align:center;font-size:13px;color:#475569">
        Вже є акаунт?
        <button data-action="openAuth" data-modal="login"
          style="background:none;border:none;color:#00e5ff;cursor:pointer;font-size:13px;font-family:'Exo 2',sans-serif;font-weight:600;padding:0 4px">
          Увійти
        </button>
      </div>
    </div>`;

  return `
  <div class="modal-overlay" id="authOverlay" data-action="closeAuthOverlay">
    <div style="background:#0a0a14;border:1px solid rgba(${isLogin?'0,229,255':'124,58,237'},.25);border-radius:20px;padding:36px;width:100%;max-width:420px;position:relative;animation:fadeUp .3s ease forwards;box-shadow:0 24px 80px rgba(0,0,0,.6)">

      <!-- Top accent line -->
      <div style="position:absolute;top:0;left:0;right:0;height:3px;border-radius:20px 20px 0 0;background:linear-gradient(90deg,${isLogin?'#00e5ff,#0066cc':'#7c3aed,#a855f7'})"></div>

      <!-- Close button -->
      <button data-action="closeAuth"
        style="position:absolute;top:16px;right:16px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);color:#64748b;width:32px;height:32px;border-radius:8px;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s">✕</button>

      <!-- Logo -->
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:28px">
        <div style="width:36px;height:36px;background:linear-gradient(135deg,#00e5ff,#7c3aed);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:18px">⚙️</div>
        <div>
          <div style="font-family:'Orbitron',sans-serif;font-size:13px;font-weight:800;background:linear-gradient(90deg,#00e5ff,#7c3aed);-webkit-background-clip:text;-webkit-text-fill-color:transparent">PCFORGE</div>
          <div style="font-size:10px;color:#334155;letter-spacing:.12em">КОНФІГУРАТОР ПК</div>
        </div>
      </div>

      <!-- Tab switcher -->
      <div style="display:flex;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:4px;margin-bottom:28px">
        <button data-action="openAuth" data-modal="login"
          style="flex:1;padding:9px;border-radius:7px;border:none;font-size:13px;font-weight:700;font-family:'Exo 2',sans-serif;cursor:pointer;transition:all .2s;
          background:${isLogin?'rgba(0,229,255,.15)':'transparent'};
          color:${isLogin?'#00e5ff':'#475569'};
          box-shadow:${isLogin?'0 0 0 1px rgba(0,229,255,.2)':'none'}">
          Вхід
        </button>
        <button data-action="openAuth" data-modal="register"
          style="flex:1;padding:9px;border-radius:7px;border:none;font-size:13px;font-weight:700;font-family:'Exo 2',sans-serif;cursor:pointer;transition:all .2s;
          background:${!isLogin?'rgba(124,58,237,.15)':'transparent'};
          color:${!isLogin?'#a855f7':'#475569'};
          box-shadow:${!isLogin?'0 0 0 1px rgba(124,58,237,.2)':'none'}">
          Реєстрація
        </button>
      </div>

      <!-- Title -->
      <h2 style="font-family:'Orbitron',sans-serif;font-size:20px;font-weight:900;color:#e8eaf6;margin-bottom:6px">
        ${isLogin ? 'Вітаємо назад!' : 'Створити акаунт'}
      </h2>
      <p style="font-size:13px;color:#475569;margin-bottom:24px">
        ${isLogin ? 'Увійдіть, щоб зберігати свої збірки' : 'Зареєструйтесь безкоштовно'}
      </p>

      <!-- Form -->
      ${isLogin ? loginForm : registerForm}
    </div>
  </div>`;
}

// Password strength indicator (called inline from input)
function updatePasswordStrength(val) {
  const bar   = document.getElementById('pwd-strength-fill');
  const label = document.getElementById('pwd-strength-label');
  if (!bar || !label) return;
  let score = 0;
  if (val.length >= 6)  score++;
  if (val.length >= 10) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;
  const levels = [
    {w:'0%',  color:'transparent', text:''},
    {w:'25%', color:'#ef4444',     text:'Слабкий'},
    {w:'50%', color:'#f59e0b',     text:'Середній'},
    {w:'75%', color:'#00d4ff',     text:'Добрий'},
    {w:'100%',color:'#22c55e',     text:'Надійний'},
  ];
  const l = levels[Math.min(score, 4)];
  bar.style.width    = l.w;
  bar.style.background = l.color;
  label.textContent  = l.text;
  label.style.color  = l.color;
}

// ── NAVBAR ────────────────────────────────────────────────────────────────────
function renderNavBar() {
  const links = [
    {key:'home',         label:'Головна'},
    {key:'configurator', label:'Конфігуратор'},
    {key:'catalog',      label:'Каталог збірок'},
    {key:'compare',      label:'Порівняння'},
    {key:'about',        label:'Про проєкт'},
    ...(state.authUser?.isAdmin ? [{key:'admin', label:'⚙ Адмін'}] : []),
  ];
  const authButtons = state.authUser
    ? `<div style="display:flex;align-items:center;gap:10px">
        <div style="display:flex;align-items:center;gap:8px;background:rgba(0,229,255,.08);border:1px solid rgba(0,229,255,.2);border-radius:8px;padding:6px 14px">
          <div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#00e5ff,#7c3aed);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;color:#000">${state.authUser.name.charAt(0).toUpperCase()}</div>
          <span style="font-size:13px;font-weight:600;color:#e8eaf6;max-width:100px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${state.authUser.name}</span>
        </div>
        <button data-action="logout"
          style="background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.25);color:#f87171;padding:7px 14px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;font-family:'Exo 2',sans-serif;transition:all .2s">
          Вийти
        </button>
      </div>`
    : `<div style="display:flex;gap:8px">
        <button data-action="openAuth" data-modal="login"
          style="background:transparent;border:1px solid rgba(0,229,255,.3);color:#00e5ff;padding:8px 18px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:'Exo 2',sans-serif;transition:all .2s;letter-spacing:.02em">
          Вхід
        </button>
        <button data-action="openAuth" data-modal="register"
          style="background:linear-gradient(135deg,#00e5ff,#0066cc);border:none;color:#000;padding:8px 18px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;font-family:'Exo 2',sans-serif;letter-spacing:.03em;box-shadow:0 4px 15px rgba(0,229,255,.25)">
          Реєстрація
        </button>
      </div>`;

  return `
  <nav class="navbar" id="navbar">
    <div class="navbar-inner">
      <div class="navbar-logo" data-action="setPage" data-page="home">
        <div class="navbar-logo-icon">⚙️</div>
        <div>
          <div class="navbar-logo-name">PCFORGE</div>
          <div class="navbar-logo-sub">КОНФІГУРАТОР ПК</div>
        </div>
      </div>
      <div class="navbar-links">
        ${links.map(l => `
          <button class="nav-link${state.page===l.key?' active':''}"
            data-action="setPage" data-page="${l.key}"
            style="${l.key==='admin'?'color:#ef4444 !important;border-color:rgba(239,68,68,.3) !important;':''}">${l.label}</button>
        `).join('')}
      </div>
      <div style="display:flex;align-items:center;gap:10px">
        <div title="Курс USD/UAH · ${state.rateSource}"
          style="display:flex;align-items:center;gap:5px;background:rgba(34,197,94,.07);border:1px solid rgba(34,197,94,.2);border-radius:7px;padding:5px 10px;cursor:default">
          ${state.rateLoading
            ? `<span style="font-size:11px;color:#475569;font-family:'Orbitron',sans-serif;animation:pulseBorder 1.2s infinite">⟳ Курс…</span>`
            : `<span style="font-size:10px;color:#475569">🌐 USD/UAH</span>
               <span style="font-family:'Orbitron',sans-serif;font-size:12px;font-weight:800;color:#22c55e">${state.usdToUah.toFixed(2)}</span>`
          }
        </div>
        ${authButtons}
      </div>
    </div>
  </nav>
  ${renderAuthModal()}`;
}

// ── HOME PAGE ─────────────────────────────────────────────────────────────────
function renderHomePage() {
  const features = [
    {icon:'🔧',title:'Розумний підбір',desc:'Алгоритм автоматично перевіряє сумісність всіх компонентів у реальному часі'},
    {icon:'💰',title:'Контроль бюджету',desc:'Відстежуйте загальну вартість збірки та знаходьте оптимальне співвідношення ціна/якість'},
    {icon:'📊',title:'Аналіз продуктивності',desc:'Оцінка продуктивності для ігор, рендерингу та продуктивності на основі реальних тестів'},
    {icon:'🏷️',title:'Готові збірки',desc:'6 збалансованих пресетів від бюджетного до ультра-преміум класу'},
    {icon:'🔄',title:'Порівняння',desc:'Детальне порівняння компонентів для прийняття обґрунтованих рішень'},
    {icon:'📤',title:'Експорт збірки',desc:'Зберігайте та діліться своєю конфігурацією з іншими'},
  ];
  const stats = [
    {val:500,suffix:'+',label:'Компонентів у базі'},
    {val:6,suffix:'',label:'Готових збірок'},
    {val:8,suffix:'',label:'Категорій деталей'},
    {val:100,suffix:'%',label:'Перевірка сумісності'},
  ];
  const steps3 = [
    {n:'01',title:'Оберіть компоненти',desc:"Переглядайте і обирайте з нашого каталогу процесорів, відеокарт, пам'яті та інших компонентів",icon:'🔍',color:'#00e5ff'},
    {n:'02',title:'Перевірте сумісність',desc:'Система автоматично виявить несумісності та попередить про потенційні проблеми',icon:'✅',color:'#22c55e'},
    {n:'03',title:'Отримайте збірку',desc:'Подивіться підсумок конфігурації з оцінкою продуктивності та загальною вартістю',icon:'🚀',color:'#a855f7'},
  ];

  return `
  <div style="position:relative;z-index:1">

    <!-- HERO -->
    <section style="min-height:92vh;display:flex;align-items:center;justify-content:center;padding:60px 24px;position:relative;overflow:hidden">
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 50% 0%,rgba(0,229,255,.08) 0%,transparent 60%)"></div>
      <div style="text-align:center;max-width:800px;position:relative;animation:fadeUp .8s ease forwards">
        <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(0,229,255,.08);border:1px solid rgba(0,229,255,.2);border-radius:50px;padding:6px 18px;margin-bottom:28px;font-size:12px;color:#00e5ff;letter-spacing:.12em;font-family:'Orbitron',sans-serif">
          ✦ КОНФІГУРАТОР ПК НОВОГО ПОКОЛІННЯ ✦
        </div>
        <h1 style="font-family:'Orbitron',sans-serif;font-size:clamp(36px,6vw,72px);font-weight:900;line-height:1.05;margin-bottom:20px;letter-spacing:-.02em">
          <span style="display:block;color:#e8eaf6">ЗБЕРИ СВІЙ</span>
          <span class="shimmer-text" style="display:block">ІДЕАЛЬНИЙ ПК</span>
        </h1>
        <p style="font-size:18px;color:#94a3b8;line-height:1.7;margin-bottom:40px;max-width:560px;margin-left:auto;margin-right:auto">
          Інтелектуальний конфігуратор персонального комп'ютера з перевіркою сумісності,
          аналізом продуктивності та підбором оптимального заліза під ваш бюджет.
        </p>
        <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-bottom:60px">
          <button class="btn-primary" data-action="setPage" data-page="configurator"
            style="background:linear-gradient(135deg,#00e5ff,#0066cc);border:none;color:#000;padding:14px 32px;border-radius:10px;font-size:16px;font-weight:800;font-family:'Exo 2',sans-serif;letter-spacing:.05em;box-shadow:0 8px 30px rgba(0,229,255,.35)">
            🔧 Почати конфігурацію
          </button>
          <button class="btn-secondary" data-action="setPage" data-page="catalog"
            style="background:rgba(124,58,237,.15);border:1px solid rgba(124,58,237,.4);color:#a855f7;padding:14px 32px;border-radius:10px;font-size:16px;font-weight:700;font-family:'Exo 2',sans-serif;letter-spacing:.05em;box-shadow:0 8px 30px rgba(124,58,237,.2);cursor:pointer">
            📦 Готові збірки
          </button>
        </div>
        <div style="display:flex;gap:32px;justify-content:center;flex-wrap:wrap">
          ${stats.map((s,i) => `
            <div style="text-align:center;animation:fadeUp .6s ease ${i*.15}s both">
              <div style="font-family:'Orbitron',sans-serif;font-size:32px;font-weight:900" class="gradient-text">
                <span class="counter" data-target="${s.val}" data-suffix="${s.suffix}">0${s.suffix}</span>
              </div>
              <div style="font-size:12px;color:#64748b;margin-top:4px;letter-spacing:.06em">${s.label}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section style="padding:80px 24px;max-width:1200px;margin:0 auto">
      <div style="text-align:center;margin-bottom:60px">
        ${tag('МОЖЛИВОСТІ')}
        <h2 style="font-family:'Orbitron',sans-serif;font-size:clamp(24px,4vw,40px);font-weight:800;margin-top:16px;margin-bottom:16px;color:#e8eaf6">Що вміє PCForge?</h2>
        <p style="color:#64748b;font-size:16px;max-width:500px;margin:0 auto;line-height:1.6">Всі необхідні інструменти для грамотного вибору комплектуючих</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px">
        ${features.map((f,i) => `
          <div class="card-hover" style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:28px;position:relative;overflow:hidden;animation:fadeUp .6s ease ${i*.1}s both">
            <div style="position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,rgba(0,229,255,.3),transparent)"></div>
            <div style="font-size:32px;margin-bottom:16px">${f.icon}</div>
            <h3 style="font-family:'Orbitron',sans-serif;font-size:14px;font-weight:700;color:#e8eaf6;margin-bottom:10px;letter-spacing:.03em">${f.title}</h3>
            <p style="font-size:13px;color:#64748b;line-height:1.65">${f.desc}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- PRESET PREVIEW -->
    <section style="padding:80px 24px;background:rgba(0,229,255,.02);border-top:1px solid rgba(255,255,255,.04);border-bottom:1px solid rgba(255,255,255,.04)">
      <div style="max-width:1200px;margin:0 auto">
        <div style="text-align:center;margin-bottom:60px">
          ${tag('ГОТОВІ ЗБІРКИ','#a855f7')}
          <h2 style="font-family:'Orbitron',sans-serif;font-size:clamp(24px,4vw,40px);font-weight:800;margin-top:16px;margin-bottom:16px;color:#e8eaf6">Популярні конфігурації</h2>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:24px">
          ${PRESETS.slice(0,3).map(p => `
            <div class="card-hover" style="background:rgba(255,255,255,.03);border:1px solid ${p.tagColor}22;border-radius:16px;padding:28px;position:relative;overflow:hidden;cursor:pointer">
              <div style="position:absolute;top:0;left:0;right:0;height:2px;background:${p.tagColor}"></div>
              <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px">
                <div>
                  ${tag(p.tag, p.tagColor)}
                  <div style="font-family:'Orbitron',sans-serif;font-size:18px;font-weight:800;color:#e8eaf6;margin-top:8px">${p.icon} ${p.name}</div>
                  <div style="font-size:12px;color:#64748b;margin-top:4px">${p.subtitle}</div>
                </div>
                <div style="text-align:right">
                  <div style="font-family:'Orbitron',sans-serif;font-size:22px;font-weight:900;color:${p.tagColor}">${fmt(p.price)}</div>
                  <div style="font-size:10px;color:#64748b">загальна вартість</div>
                </div>
              </div>
              <div style="margin-bottom:16px">
                ${perfBar('Gaming',p.perf.gaming,p.tagColor)}
                ${perfBar('Rendering',p.perf.rendering,p.tagColor)}
              </div>
              <div style="display:flex;gap:6px;flex-wrap:wrap">
                ${p.use.slice(0,3).map(u => `<span style="font-size:11px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:4px;padding:3px 8px;color:#94a3b8">${u}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
        <div style="text-align:center;margin-top:40px">
          <button class="btn-secondary" data-action="setPage" data-page="catalog"
            style="background:rgba(124,58,237,.1);border:1px solid rgba(124,58,237,.3);color:#a855f7;padding:12px 28px;border-radius:8px;font-size:14px;font-weight:700;font-family:'Exo 2',sans-serif;cursor:pointer">
            Переглянути всі 6 збірок →
          </button>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section style="padding:80px 24px;max-width:1000px;margin:0 auto">
      <div style="text-align:center;margin-bottom:60px">
        ${tag('ЯК ЦЕ ПРАЦЮЄ','#22c55e')}
        <h2 style="font-family:'Orbitron',sans-serif;font-size:clamp(24px,4vw,40px);font-weight:800;margin-top:16px;color:#e8eaf6">Три кроки до ідеального ПК</h2>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:32px">
        ${steps3.map((s,i) => `
          <div style="position:relative;text-align:center;padding:24px">
            ${i<2?'<div style="position:absolute;top:30px;right:-16px;color:#1e293b;font-size:24px">→</div>':''}
            <div style="width:64px;height:64px;border-radius:16px;margin:0 auto 20px;background:${s.color}15;border:2px solid ${s.color}33;display:flex;align-items:center;justify-content:center;font-size:28px">${s.icon}</div>
            <div style="font-family:'Orbitron',sans-serif;font-size:11px;color:${s.color};letter-spacing:.15em;margin-bottom:8px">${s.n}</div>
            <h3 style="font-size:15px;font-weight:700;color:#e8eaf6;margin-bottom:10px">${s.title}</h3>
            <p style="font-size:13px;color:#64748b;line-height:1.65">${s.desc}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- CTA -->
    <section style="padding:80px 24px;text-align:center;position:relative;overflow:hidden">
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 50% 50%,rgba(0,229,255,.06) 0%,transparent 70%)"></div>
      <div style="position:relative;max-width:600px;margin:0 auto">
        <h2 style="font-family:'Orbitron',sans-serif;font-size:clamp(24px,4vw,44px);font-weight:900;color:#e8eaf6;margin-bottom:16px;line-height:1.1">
          Готовий зібрати<br/>
          <span class="gradient-text-2">свій ПК мрії?</span>
        </h2>
        <p style="color:#64748b;font-size:16px;margin-bottom:36px;line-height:1.6">Конфігуратор допоможе тобі зібрати оптимальний ПК під твої потреби та бюджет</p>
        <button class="btn-primary" data-action="setPage" data-page="configurator"
          style="background:linear-gradient(135deg,#00e5ff,#0066cc);border:none;color:#000;padding:16px 40px;border-radius:12px;font-size:18px;font-weight:900;font-family:'Exo 2',sans-serif;letter-spacing:.06em;box-shadow:0 0 40px rgba(0,229,255,.4);cursor:pointer">
          ⚙️ Запустити Конфігуратор
        </button>
      </div>
    </section>

    <!-- FOOTER -->
    <footer>
      <div class="footer-brand">PCFORGE</div>
      <p>Конфігуратор персонального комп'ютера · Розумний підбір комплектуючих</p>
      <p style="margin-top:6px">Розроблено з використанням vanilla JS · Всі ціни вказані в гривнях (₴)</p>
    </footer>
  </div>`;
}

// ── BUILD EXPORT HELPERS ──────────────────────────────────────────────────────
function buildConfigText() {
  const price = calcPrice(state.selected);
  const perf  = calcPerf(state.selected);
  const lines = [];
  const w = 52;
  const hr = '═'.repeat(w);
  lines.push(`╔${hr}╗`);
  lines.push(`║${'  ⚙  PCFORGE — КОНФІГУРАЦІЯ ПК'.padEnd(w)}║`);
  lines.push(`╚${hr}╝`);
  lines.push('');
  lines.push('┌─ КОМПОНЕНТИ ' + '─'.repeat(w - 13) + '┐');
  STEPS.forEach(s => {
    const item = state.selected[s] ? findComp(s, state.selected[s]) : null;
    const d    = CD[s];
    const label = `  ${d.short}`.padEnd(12);
    const name  = item ? item.name : '— не обрано';
    const price = item ? `  ${fmt(item.price)}` : '';
    lines.push(`│ ${label}  ${name}${price.padStart(w - 14 - name.length)} │`);
  });
  lines.push('└' + '─'.repeat(w) + '┘');
  lines.push('');
  lines.push(`  💰 Загальна вартість : ${fmt(price)}`);
  if (perf > 0) {
    lines.push(`  📊 Продуктивність    : ${perf}/100`);
    lines.push(`  🎮 Gaming            : ${Math.min(100,Math.round(perf*1.02))}%`);
    lines.push(`  🎨 Rendering         : ${Math.min(100,Math.round(perf*.9))}%`);
    lines.push(`  📡 Streaming         : ${Math.min(100,Math.round(perf*.96))}%`);
  }
  lines.push('');
  lines.push('═'.repeat(w + 2));
  lines.push(`  Зібрано на PCForge · ${new Date().toLocaleDateString('uk-UA')}`);
  return lines.join('\n');
}

// ── CONFIGURATOR PAGE ─────────────────────────────────────────────────────────
function renderConfiguratorPage() {
  const cat     = STEPS[state.step];
  const catData = CD[cat];
  // Smart compatibility filtering: filter motherboards by selected CPU socket
  const selectedCpu = findComp('cpu', state.selected.cpu);
  const mbCompatNote = (cat === 'motherboard' && selectedCpu)
    ? `<div style="display:flex;align-items:center;gap:8px;background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.25);border-radius:8px;padding:10px 14px;margin-bottom:16px;font-size:12px;color:#86efac">
        <span style="font-size:16px">🔗</span>
        <span>Показано лише плати з сокетом <strong style="color:#22c55e">${selectedCpu.socket}</strong> — сумісні з <strong style="color:#22c55e">${selectedCpu.name.split(' ').slice(0,3).join(' ')}</strong></span>
      </div>`
    : '';
  const items   = catData.items.filter(it => {
    const tierOk   = state.tier === 'all' || it.tier === state.tier;
    const searchOk = it.name.toLowerCase().includes(state.search.toLowerCase());
    const socketOk = (cat === 'motherboard' && selectedCpu) ? it.socket === selectedCpu.socket : true;
    const filtersOk = Object.entries(state.catFilters).every(([key, val]) =>
      !val || matchCatFilter(it, key, val)
    );
    return tierOk && searchOk && socketOk && filtersOk;
  });
  const price  = calcPrice(state.selected);
  const perf   = calcPerf(state.selected);
  const {errs, warns} = checkCompat(state.selected);
  const selectedCount = Object.values(state.selected).filter(Boolean).length;

  const summaryModal = state.showSummary ? `
    <div class="modal-overlay" id="summaryOverlay">
      <div class="modal-box" id="summaryBox" style="max-width:580px">

        <!-- Header -->
        <div style="text-align:center;margin-bottom:24px">
          <div style="font-size:48px;margin-bottom:10px">🎉</div>
          <h3 style="font-family:'Orbitron',sans-serif;font-size:22px;font-weight:900;color:#e8eaf6;margin-bottom:8px">Ваша збірка готова!</h3>
          <div style="font-family:'Orbitron',sans-serif;font-size:32px;font-weight:900;color:#00e5ff">${fmt(price)}</div>
          <div style="font-size:13px;color:#64748b;margin-top:4px">Загальна вартість конфігурації</div>
        </div>

        <!-- Export buttons -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:20px">
          <button data-action="downloadBuild"
            style="display:flex;align-items:center;justify-content:center;gap:8px;background:rgba(0,229,255,.1);border:1px solid rgba(0,229,255,.3);color:#00e5ff;padding:11px 16px;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;font-family:'Exo 2',sans-serif;transition:all .2s">
            📥 Зберегти .txt
          </button>
          <button data-action="copyBuild" id="copyBuildBtn"
            style="display:flex;align-items:center;justify-content:center;gap:8px;background:rgba(124,58,237,.1);border:1px solid rgba(124,58,237,.3);color:#a855f7;padding:11px 16px;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;font-family:'Exo 2',sans-serif;transition:all .2s">
            📋 Скопіювати все
          </button>
        </div>

        <!-- Component list with per-row copy -->
        <div style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.07);border-radius:12px;overflow:hidden;margin-bottom:20px">
          <div style="padding:10px 16px;background:rgba(0,229,255,.05);border-bottom:1px solid rgba(255,255,255,.06)">
            <span style="font-family:'Orbitron',sans-serif;font-size:10px;color:#334155;letter-spacing:.15em">КОМПОНЕНТИ ЗБІРКИ</span>
          </div>
          ${STEPS.map(s => {
            const item = state.selected[s] ? findComp(s, state.selected[s]) : null;
            const d    = CD[s];
            if (!item) return '';
            const lineText = `${d.short}: ${item.name} — ${fmt(item.price)}`;
            return `<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 16px;border-bottom:1px solid rgba(255,255,255,.04);gap:8px">
              <div style="flex:1;min-width:0">
                <span style="font-size:10px;color:${d.accent};font-family:'Orbitron',sans-serif;letter-spacing:.06em">${d.short} </span>
                <span style="font-size:13px;color:#e8eaf6">${item.name}</span>
              </div>
              <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
                <div style="font-size:13px;font-weight:700;color:#e8eaf6">${fmt(item.price)}</div>
                <button data-action="copyLine" data-line="${lineText.replace(/"/g,'&quot;')}"
                  style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);color:#64748b;width:28px;height:28px;border-radius:6px;font-size:13px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;flex-shrink:0"
                  title="Скопіювати">📋</button>
              </div>
            </div>`;
          }).join('')}
        </div>

        <!-- Perf bars -->
        ${perf > 0 ? `<div style="margin-bottom:20px">
          ${perfBar('Ігрова продуктивність', Math.min(100,Math.round(perf*1.02)), '#00d4ff')}
          ${perfBar('Рендеринг / 3D', Math.min(100,Math.round(perf*.9)), '#a855f7')}
          ${perfBar('Стримінг', Math.min(100,Math.round(perf*.96)), '#22c55e')}
          ${perfBar('Продуктивність', Math.min(100,Math.round(perf*.88)), '#f59e0b')}
        </div>` : ''}

        <!-- Compat errors -->
        ${errs.length>0 ? `<div style="background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.3);border-radius:8px;padding:12px;margin-bottom:16px">
          <div style="font-size:12px;color:#ef4444;font-weight:700;margin-bottom:6px">⚠ Проблеми сумісності!</div>
          ${errs.map(e=>`<div style="font-size:12px;color:#fca5a5">${e}</div>`).join('')}
        </div>` : ''}

        <button data-action="closeSummary"
          style="width:100%;background:linear-gradient(135deg,#00e5ff,#0066cc);border:none;color:#000;padding:14px;border-radius:10px;font-size:15px;font-weight:800;cursor:pointer;font-family:'Exo 2',sans-serif">
          ✓ Чудово!
        </button>
      </div>
    </div>` : '';

  return `
  <div class="configurator-layout">

    <!-- LEFT: Steps panel -->
    <div class="configurator-steps">
      <div style="font-family:'Orbitron',sans-serif;font-size:10px;color:#334155;letter-spacing:.15em;margin-bottom:16px;padding:0 8px">КОМПОНЕНТИ</div>
      ${STEPS.map((s,i) => {
        const d    = CD[s];
        const sel  = state.selected[s];
        const item = sel ? findComp(s,sel) : null;
        const active = state.step === i;
        return `<div class="step-item" data-action="setStep" data-step="${i}"
          style="padding:10px 12px;border-radius:8px;margin-bottom:4px;background:${active?d.accent+'15':'transparent'};border:${active?`1px solid ${d.accent}33`:'1px solid transparent'}">
          <div style="display:flex;align-items:center;gap:8px">
            <span style="font-size:14px">${d.icon}</span>
            <div style="flex:1;min-width:0">
              <div style="font-size:11px;font-weight:700;color:${active?d.accent:sel?'#e8eaf6':'#475569'};font-family:${active?"'Orbitron',sans-serif":"'Exo 2',sans-serif"};letter-spacing:${active?'.04em':'0'}">${d.short}</div>
              ${item?`<div style="font-size:10px;color:#64748b;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:2px">${item.name.split(' ').slice(0,3).join(' ')}</div>`:''}
            </div>
            <div style="width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${sel?'#22c55e':active?d.accent:'#1e293b'};box-shadow:${sel?'0 0 6px #22c55e88':active?`0 0 6px ${d.accent}88`:''}"></div>
          </div>
        </div>`;
      }).join('')}
      <div style="margin-top:16px;padding:12px;background:rgba(0,229,255,.04);border:1px solid rgba(0,229,255,.1);border-radius:8px">
        <div style="font-size:10px;color:#64748b;margin-bottom:4px">ОБРАНО</div>
        <div style="font-family:'Orbitron',sans-serif;font-size:20px;font-weight:900;color:#00e5ff">${selectedCount}<span style="font-size:12px;color:#334155">/8</span></div>
        <div style="font-size:10px;color:#64748b;margin-top:2px">компонентів</div>
      </div>
    </div>

    <!-- CENTER: Component selector -->
    <div class="configurator-center">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;flex-wrap:wrap;gap:12px">
        <div>
          <div style="display:flex;align-items:center;gap:10px">
            <span style="font-size:24px">${catData.icon}</span>
            <h2 style="font-family:'Orbitron',sans-serif;font-size:18px;font-weight:800;color:#e8eaf6">${catData.label}</h2>
          </div>
          ${state.selected[cat]?`<div style="font-size:12px;color:#22c55e;margin-top:4px">✓ Обрано: ${findComp(cat,state.selected[cat])?.name}</div>`:''}
        </div>
        <input class="search-input" data-action="setSearch" placeholder="Пошук..." value="${state.search}" />
      </div>

      ${mbCompatNote}

      ${renderCatFilters(cat)}

      <!-- Tier filter -->
      <div style="display:flex;gap:6px;margin-bottom:20px;flex-wrap:wrap">
        ${TIERS.map(t => {
          const active = state.tier === t;
          const c = t==='all'?'#00e5ff':TIER_COLORS[t];
          return `<button data-action="setTier" data-tier="${t}"
            style="background:${active?(t==='all'?'rgba(0,229,255,.15)':`${TIER_COLORS[t]}15`):'transparent'};border:${active?(t==='all'?'1px solid rgba(0,229,255,.35)':`1px solid ${TIER_COLORS[t]}44`):'1px solid rgba(255,255,255,.07)'};color:${active?c:'#64748b'};padding:5px 14px;border-radius:6px;font-size:12px;cursor:pointer;font-family:'Orbitron',sans-serif;letter-spacing:.06em;font-weight:700;transition:all .2s">
            ${TIER_UA[t]||t.toUpperCase()}
          </button>`;
        }).join('')}
      </div>

      <!-- Items grid -->
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:14px">
        ${items.length === 0 ? `
          <div style="grid-column:1/-1;text-align:center;padding:48px;color:#334155">
            <div style="font-size:40px;margin-bottom:16px">🔍</div>
            <div style="font-family:'Orbitron',sans-serif;font-size:14px">Нічого не знайдено</div>
            <div style="font-size:12px;margin-top:8px">Спробуйте змінити фільтри</div>
          </div>
        ` : items.map(item => {
          const isSel = state.selected[cat] === item.id;
          const sp    = getSpecs(item, cat);
          return `<div class="comp-card" data-action="selectComp" data-id="${item.id}"
            style="background:${isSel?catData.accent+'12':'rgba(255,255,255,.03)'};border:${isSel?`2px solid ${catData.accent}88`:'1px solid rgba(255,255,255,.07)'};border-radius:12px;padding:18px;cursor:pointer;position:relative;overflow:hidden;box-shadow:${isSel?`0 0 24px ${catData.accent}22`:'none'}">
            ${isSel?`<div style="position:absolute;top:0;left:0;right:0;height:2px;background:${catData.accent}"></div>`:''}
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px">
              ${tag(TIER_UA[item.tier]||item.tier.toUpperCase(), TIER_COLORS[item.tier]||'#00d4ff')}
              ${isSel?'<span style="color:#22c55e;font-size:16px">✓</span>':''}
            </div>
            <div style="font-size:13px;font-weight:700;color:#e8eaf6;margin-bottom:4px;line-height:1.35">${item.name}</div>
            <div style="font-size:11px;color:#64748b;margin-bottom:10px">${item.brand}</div>
            ${item.desc?`<div style="font-size:11px;color:#475569;margin-bottom:10px;line-height:1.5">${item.desc}</div>`:''}
            <div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:12px">
              ${sp.map(s=>`<span style="font-size:10px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.07);border-radius:4px;padding:2px 7px;color:#94a3b8">${s}</span>`).join('')}
            </div>
            ${item.perf!==undefined?`<div style="margin-bottom:10px">
              <div style="display:flex;justify-content:space-between;font-size:10px;color:#475569;margin-bottom:3px">
                <span>Продуктивність</span><span style="color:${catData.accent}">${item.perf}/100</span>
              </div>
              <div style="height:3px;background:rgba(255,255,255,.06);border-radius:2px">
                <div style="height:100%;width:${item.perf}%;background:linear-gradient(90deg,${catData.accent}66,${catData.accent});border-radius:2px"></div>
              </div>
            </div>`:''}
            <div style="display:flex;justify-content:space-between;align-items:center">
              <div style="font-family:'Orbitron',sans-serif;font-size:18px;font-weight:900;color:${isSel?catData.accent:'#e8eaf6'}">${fmt(item.price)}</div>
              <button style="background:${isSel?catData.accent:'rgba(255,255,255,.08)'};border:none;color:${isSel?'#000':'#94a3b8'};padding:5px 14px;border-radius:6px;font-size:12px;font-weight:700;cursor:pointer;font-family:'Exo 2',sans-serif;transition:all .2s" data-action="selectComp" data-id="${item.id}">
                ${isSel?'Обрано':'Обрати'}
              </button>
            </div>
          </div>`;
        }).join('')}
      </div>

      <!-- Navigation buttons -->
      <div style="display:flex;justify-content:space-between;margin-top:32px;padding-top:20px;border-top:1px solid rgba(255,255,255,.05)">
        <button data-action="prevStep"
          style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);color:${state.step===0?'#334155':'#94a3b8'};padding:10px 20px;border-radius:8px;font-size:13px;cursor:${state.step===0?'not-allowed':'pointer'};font-family:'Exo 2',sans-serif"
          ${state.step===0?'disabled':''}>← Попередній</button>
        <span style="color:#334155;font-size:12px;align-self:center">${state.step+1} / ${STEPS.length}</span>
        ${state.step < STEPS.length-1
          ? `<button data-action="nextStep" class="btn-primary" style="background:linear-gradient(135deg,#00e5ff,#0066cc);border:none;color:#000;padding:10px 20px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;font-family:'Exo 2',sans-serif">Наступний →</button>`
          : `<button data-action="openSummary" class="btn-primary" style="background:linear-gradient(135deg,#22c55e,#166534);border:none;color:#fff;padding:10px 20px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;font-family:'Exo 2',sans-serif">✓ Завершити збірку</button>`
        }
      </div>
    </div>

    <!-- RIGHT: Summary panel -->
    <div class="configurator-summary">
      <div style="font-family:'Orbitron',sans-serif;font-size:10px;color:#334155;letter-spacing:.15em;margin-bottom:16px">ПІДСУМОК ЗБІРКИ</div>
      <div style="background:rgba(0,229,255,.05);border:1px solid rgba(0,229,255,.15);border-radius:10px;padding:16px;margin-bottom:16px;text-align:center">
        <div style="font-size:11px;color:#64748b;margin-bottom:6px">ЗАГАЛЬНА ВАРТІСТЬ</div>
        <div style="font-family:'Orbitron',sans-serif;font-size:28px;font-weight:900;color:#00e5ff">${fmt(price)}</div>
      </div>
      ${perf > 0 ? `
      <div style="background:rgba(124,58,237,.05);border:1px solid rgba(124,58,237,.15);border-radius:10px;padding:16px;margin-bottom:16px">
        <div style="font-size:11px;color:#64748b;margin-bottom:10px">ПРОДУКТИВНІСТЬ</div>
        <div style="text-align:center;margin-bottom:10px">
          <div style="font-family:'Orbitron',sans-serif;font-size:36px;font-weight:900;background:linear-gradient(135deg,#a855f7,#7c3aed);-webkit-background-clip:text;-webkit-text-fill-color:transparent">${perf}</div>
          <div style="font-size:10px;color:#64748b">з 100 балів</div>
        </div>
        ${perfBar('Gaming', Math.min(100,Math.round(perf*1.02)), '#00d4ff')}
        ${perfBar('Rendering', Math.min(100,Math.round(perf*.92)), '#a855f7')}
        ${perfBar('Streaming', Math.min(100,Math.round(perf*.95)), '#22c55e')}
      </div>` : ''}
      ${errs.length>0?`<div style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.25);border-radius:8px;padding:12px;margin-bottom:10px">
        <div style="font-size:11px;color:#ef4444;font-weight:700;margin-bottom:6px">⚠ ПОМИЛКИ СУМІСНОСТІ</div>
        ${errs.map(e=>`<div style="font-size:11px;color:#fca5a5;margin-bottom:4px">${e}</div>`).join('')}
      </div>`:''}
      ${warns.length>0?`<div style="background:rgba(245,158,11,.08);border:1px solid rgba(245,158,11,.25);border-radius:8px;padding:12px;margin-bottom:10px">
        <div style="font-size:11px;color:#f59e0b;font-weight:700;margin-bottom:6px">⚡ ПОПЕРЕДЖЕННЯ</div>
        ${warns.map(w=>`<div style="font-size:11px;color:#fde68a;margin-bottom:4px">${w}</div>`).join('')}
      </div>`:''}
      ${errs.length===0&&selectedCount>=2?`<div style="background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.25);border-radius:8px;padding:10px;margin-bottom:10px;font-size:11px;color:#86efac;text-align:center">✓ Сумісність перевірено</div>`:''}
      <div style="margin-top:8px">
        <div style="font-size:11px;color:#334155;letter-spacing:.1em;margin-bottom:10px;font-family:'Orbitron',sans-serif">КОМПОНЕНТИ</div>
        ${STEPS.map(s => {
          const item = state.selected[s] ? findComp(s, state.selected[s]) : null;
          const d    = CD[s];
          return `<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.04);opacity:${item?1:.4}">
            <div style="flex:1;min-width:0">
              <div style="font-size:10px;color:${d.accent};letter-spacing:.08em;font-family:'Orbitron',sans-serif">${d.short}</div>
              <div style="font-size:11px;color:${item?'#94a3b8':'#334155'};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:1px">
                ${item?item.name.split(' ').slice(0,3).join(' '):'— не обрано'}
              </div>
            </div>
            ${item?`<div style="font-size:12px;font-weight:700;color:#e8eaf6;margin-left:8px;flex-shrink:0">${fmt(item.price)}</div>`:''}
          </div>`;
        }).join('')}
      </div>
      ${selectedCount>0?`<button data-action="clearAll"
        style="width:100%;margin-top:16px;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.2);color:#f87171;padding:8px;border-radius:8px;font-size:12px;cursor:pointer;font-family:'Exo 2',sans-serif;transition:all .2s">
        🗑 Очистити все
      </button>`:''}
    </div>

  </div>
  ${summaryModal}`;
}

// ── CATALOG PAGE ──────────────────────────────────────────────────────────────
function renderCatalogPage() {
  const cats      = ['all','gaming','workstation','budget'];
  const catLabels = {all:'Всі збірки',gaming:'Ігрові',workstation:'Робочі станції',budget:'Бюджетні'};
  const catMap    = {'ultra-gaming':'gaming','pro-gaming':'gaming','streaming':'gaming','workstation':'workstation','mid-gaming':'gaming','budget':'budget'};
  const filtered  = state.catalogFilter==='all' ? PRESETS : PRESETS.filter(p=>catMap[p.id]===state.catalogFilter);

  return `
  <div style="max-width:1200px;margin:0 auto;padding:48px 24px;position:relative;z-index:1">
    <div style="margin-bottom:48px">
      ${tag('КАТАЛОГ')}
      <h1 style="font-family:'Orbitron',sans-serif;font-size:clamp(24px,4vw,44px);font-weight:900;color:#e8eaf6;margin-top:12px;margin-bottom:8px">Готові збірки ПК</h1>
      <p style="color:#64748b;font-size:16px;max-width:500px">Збалансовані конфігурації для різних задач та бюджетів. Оберіть готову збірку або завантажте як основу для власної конфігурації.</p>
    </div>
    <div style="display:flex;gap:8px;margin-bottom:36px;flex-wrap:wrap">
      ${cats.map(c=>`<button data-action="setCatalogFilter" data-filter="${c}"
        style="background:${state.catalogFilter===c?'rgba(0,229,255,.12)':'rgba(255,255,255,.04)'};border:${state.catalogFilter===c?'1px solid rgba(0,229,255,.35)':'1px solid rgba(255,255,255,.07)'};color:${state.catalogFilter===c?'#00e5ff':'#64748b'};padding:8px 20px;border-radius:8px;font-size:13px;cursor:pointer;font-family:'Exo 2',sans-serif;font-weight:600;transition:all .2s">
        ${catLabels[c]}
      </button>`).join('')}
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(360px,1fr));gap:24px">
      ${filtered.map((p,i)=>`
        <div style="background:rgba(255,255,255,.03);border:1px solid ${p.tagColor}22;border-radius:20px;overflow:hidden;animation:fadeUp .5s ease ${i*.08}s both">
          <div style="background:linear-gradient(135deg,${p.tagColor}18,${p.tagColor}08);padding:20px 24px;border-bottom:1px solid ${p.tagColor}22;position:relative;overflow:hidden">
            <div style="position:absolute;top:0;left:0;right:0;height:3px;background:${p.tagColor}"></div>
            <div style="display:flex;justify-content:space-between;align-items:flex-start">
              <div>
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">${tag(p.tag,p.tagColor)}</div>
                <div style="font-family:'Orbitron',sans-serif;font-size:20px;font-weight:900;color:#e8eaf6">${p.icon} ${p.name}</div>
                <div style="font-size:13px;color:#64748b;margin-top:4px">${p.subtitle}</div>
              </div>
              <div style="text-align:right">
                <div style="font-family:'Orbitron',sans-serif;font-size:26px;font-weight:900;color:${p.tagColor}">${fmt(p.price)}</div>
                <div style="font-size:10px;color:#475569;letter-spacing:.08em">UAH → ₴</div>
              </div>
            </div>
          </div>
          <div style="padding:24px">
            <div style="margin-bottom:20px">
              <div style="font-size:11px;color:#334155;letter-spacing:.1em;font-family:'Orbitron',sans-serif;margin-bottom:10px">КЛЮЧОВІ КОМПОНЕНТИ</div>
              ${['cpu','gpu','ram'].map(cat=>{
                const item=findComp(cat,p.comps[cat]);
                const d=CD[cat];
                if(!item)return'';
                return`<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;padding:6px 10px;background:rgba(255,255,255,.03);border-radius:6px">
                  <span style="font-size:14px">${d.icon}</span>
                  <div style="flex:1;min-width:0">
                    <div style="font-size:10px;color:${d.accent};letter-spacing:.08em;font-family:'Orbitron',sans-serif">${d.short}</div>
                    <div style="font-size:12px;color:#94a3b8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${item.name}</div>
                  </div>
                  <div style="font-size:12px;font-weight:700;color:#475569;flex-shrink:0">${fmt(item.price)}</div>
                </div>`;
              }).join('')}
            </div>
            <div style="margin-bottom:20px">
              <div style="font-size:11px;color:#334155;letter-spacing:.1em;font-family:'Orbitron',sans-serif;margin-bottom:10px">ПРОДУКТИВНІСТЬ</div>
              ${perfBar('🎮 Gaming',p.perf.gaming,p.tagColor)}
              ${perfBar('📡 Streaming',p.perf.streaming,p.tagColor)}
              ${perfBar('🎨 Rendering',p.perf.rendering,p.tagColor)}
              ${perfBar('💼 Productivity',p.perf.productivity,p.tagColor)}
            </div>
            <div style="margin-bottom:20px">
              <div style="font-size:11px;color:#334155;letter-spacing:.1em;font-family:'Orbitron',sans-serif;margin-bottom:8px">ПРИЗНАЧЕННЯ</div>
              <div style="display:flex;gap:6px;flex-wrap:wrap">
                ${p.use.map(u=>`<span style="font-size:11px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:4px;padding:4px 10px;color:#94a3b8">${u}</span>`).join('')}
              </div>
            </div>
            <p style="font-size:12px;color:#475569;line-height:1.65;margin-bottom:20px">${p.desc}</p>
            <div style="display:flex;gap:10px">
              <button data-action="loadBuild" data-preset="${p.id}"
                style="flex:1;background:linear-gradient(135deg,${p.tagColor},${p.tagColor}99);border:none;color:${p.tag==='BUDGET'?'#000':'#fff'};padding:10px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;font-family:'Exo 2',sans-serif">
                🔧 Завантажити в конфігуратор
              </button>
              <button data-action="setPage" data-page="configurator"
                style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);color:#94a3b8;padding:10px 14px;border-radius:8px;font-size:13px;cursor:pointer;font-family:'Exo 2',sans-serif">
                ⚙
              </button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </div>`;
}

// ── COMPARE PAGE ──────────────────────────────────────────────────────────────
function renderComparePage() {
  const slots     = state.compareSlots;
  const catItems  = CD[state.compareCatSel].items;
  const slotItems = slots.filter(Boolean);
  const allKeys   = [...new Set(slotItems.flatMap(i=>Object.keys(getCompareSpecs(i))))];

  const selectorModal = state.compareSelectorOpen !== null ? `
    <div class="modal-overlay" id="compareSelectorOverlay">
      <div class="modal-box modal-box-lg" id="compareSelectorBox">
        <div style="margin-bottom:16px">
          <h3 style="font-family:'Orbitron',sans-serif;font-size:16px;font-weight:800;color:#e8eaf6;margin-bottom:12px">Оберіть компонент</h3>
          <div style="display:flex;gap:6px;flex-wrap:wrap">
            ${Object.keys(CD).map(c=>`<button data-action="setCompareCat" data-cat="${c}"
              style="background:${state.compareCatSel===c?'rgba(0,229,255,.12)':'transparent'};border:${state.compareCatSel===c?'1px solid rgba(0,229,255,.3)':'1px solid rgba(255,255,255,.07)'};color:${state.compareCatSel===c?'#00e5ff':'#64748b'};padding:4px 12px;border-radius:6px;font-size:11px;cursor:pointer;font-family:'Orbitron',sans-serif;letter-spacing:.06em;transition:all .2s">
              ${CD[c].short}
            </button>`).join('')}
          </div>
        </div>
        <div style="overflow-y:auto;flex:1;display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px">
          ${catItems.map(item=>`<div data-action="addToCompareSlot" data-id="${item.id}" data-cat="${state.compareCatSel}"
            class="comp-card" style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:14px;cursor:pointer">
            ${tag(TIER_UA[item.tier], TIER_COLORS[item.tier])}
            <div style="font-size:12px;font-weight:600;color:#e8eaf6;margin-top:8px;line-height:1.35">${item.name}</div>
            <div style="font-family:'Orbitron',sans-serif;font-size:16px;font-weight:900;color:#00e5ff;margin-top:8px">${fmt(item.price)}</div>
          </div>`).join('')}
        </div>
      </div>
    </div>` : '';

  return `
  <div style="max-width:1200px;margin:0 auto;padding:48px 24px;position:relative;z-index:1">
    <div style="margin-bottom:48px">
      ${tag('ПОРІВНЯННЯ','#f59e0b')}
      <h1 style="font-family:'Orbitron',sans-serif;font-size:clamp(24px,4vw,44px);font-weight:900;color:#e8eaf6;margin-top:12px;margin-bottom:8px">Порівняння компонентів</h1>
      <p style="color:#64748b;font-size:16px">Додайте до 3 компонентів для детального порівняння</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:40px">
      ${slots.map((s,i)=>`<div ${!s?`data-action="openCompareSelector" data-slot="${i}"`:''}
        style="background:${s?'rgba(255,255,255,.04)':'rgba(255,255,255,.02)'};border:${s?'1px solid rgba(0,229,255,.2)':'2px dashed rgba(255,255,255,.1)'};border-radius:16px;padding:24px;text-align:center;cursor:${s?'default':'pointer'};min-height:140px;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:all .2s;position:relative;overflow:hidden">
        ${s?`
          <div style="position:absolute;top:0;left:0;right:0;height:2px;background:${s.accent||'#00e5ff'}"></div>
          ${tag(s.catLabel, s.accent||'#00e5ff')}
          <div style="font-weight:700;color:#e8eaf6;margin-top:10px;font-size:14px;line-height:1.35">${s.name}</div>
          <div style="font-family:'Orbitron',sans-serif;font-size:20px;font-weight:900;color:#00e5ff;margin-top:8px">${fmt(s.price)}</div>
          <button data-action="removeCompareSlot" data-slot="${i}"
            style="margin-top:12px;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.2);color:#f87171;padding:4px 12px;border-radius:6px;font-size:11px;cursor:pointer;font-family:'Exo 2',sans-serif">Видалити</button>
        `:`
          <div style="font-size:36px;margin-bottom:12px;opacity:.3">+</div>
          <div style="font-size:13px;color:#334155">Додати компонент</div>
          <div style="font-size:11px;color:#1e293b;margin-top:4px">Слот ${i+1}</div>
        `}
      </div>`).join('')}
    </div>
    ${slotItems.length>=2?`
    <div style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.07);border-radius:16px;overflow:hidden">
      <div style="display:grid;grid-template-columns:200px repeat(${slotItems.length},1fr);background:rgba(0,229,255,.05);border-bottom:1px solid rgba(255,255,255,.07)">
        <div style="padding:16px 20px;font-family:'Orbitron',sans-serif;font-size:11px;color:#334155;letter-spacing:.1em">ХАРАКТЕРИСТИКА</div>
        ${slotItems.map(item=>`<div style="padding:16px 20px;border-left:1px solid rgba(255,255,255,.05)">
          <div style="font-size:12px;font-weight:700;color:#e8eaf6;line-height:1.35">${item.name}</div>
          <div style="font-family:'Orbitron',sans-serif;font-size:18px;font-weight:900;color:#00e5ff;margin-top:6px">${fmt(item.price)}</div>
        </div>`).join('')}
      </div>
      ${allKeys.map((key,ki)=>`<div style="display:grid;grid-template-columns:200px repeat(${slotItems.length},1fr);background:${ki%2===0?'transparent':'rgba(255,255,255,.015)'};border-bottom:1px solid rgba(255,255,255,.04)">
        <div style="padding:12px 20px;font-size:12px;color:#64748b">${key}</div>
        ${slotItems.map(item=>{
          const sp  = getCompareSpecs(item);
          const val = sp[key]||'—';
          const isNum = !isNaN(parseFloat(String(val).replace(/[^0-9.]/g,'')));
          let color = '#94a3b8';
          if(isNum&&key!=='TDP'){
            const vals = slotItems.map(it=>parseFloat(String(getCompareSpecs(it)[key]||'0').replace(/[^0-9.]/g,'')));
            const max  = Math.max(...vals);
            const cur  = parseFloat(String(val).replace(/[^0-9.]/g,''));
            color = cur===max ? '#22c55e' : '#94a3b8';
          }
          return`<div style="padding:12px 20px;border-left:1px solid rgba(255,255,255,.04);font-size:13px;font-weight:600;color:${color}">${val}</div>`;
        }).join('')}
      </div>`).join('')}
    </div>
    `:`<div style="text-align:center;padding:64px;color:#334155">
      <div style="font-size:60px;margin-bottom:20px;opacity:.3">⚖️</div>
      <div style="font-family:'Orbitron',sans-serif;font-size:16px;margin-bottom:8px">Додайте принаймні 2 компоненти</div>
      <div style="font-size:13px">Натисніть на порожні слоти щоб додати компоненти для порівняння</div>
    </div>`}
  </div>
  ${selectorModal}`;
}

// ── ABOUT PAGE ────────────────────────────────────────────────────────────────
function renderAboutPage() {
  const features = [
    {icon:'⚡',title:'Розумний конфігуратор',desc:'8-кроковий майстер підбору компонентів: обираєш процесор — і система автоматично показує лише сумісні материнські плати. Жодних несумісних пар.',color:'#00e5ff'},
    {icon:'🔗',title:'Перевірка сумісності',desc:'Автоматичне виявлення конфліктів сокетів CPU/MB та розрахунок необхідної потужності блоку живлення в реальному часі.',color:'#22c55e'},
    {icon:'📊',title:'Оцінка продуктивності',desc:'Кожна збірка отримує інтегральний бал на основі характеристик CPU та GPU — ігрова продуктивність, рендеринг, стримінг та загальна потужність.',color:'#a855f7'},
    {icon:'📦',title:'Каталог готових збірок',desc:'6 збалансованих конфігурацій від Budget до Ultra Gaming — з детальними метриками, призначенням та можливістю одразу завантажити в конфігуратор.',color:'#f59e0b'},
    {icon:'⚖️',title:'Порівняння компонентів',desc:'Паралельне порівняння до 3 будь-яких компонентів з підсвіткою кращих значень характеристик. Допомагає прийняти обґрунтоване рішення.',color:'#ff6b35'},
    {icon:'💰',title:'Контроль бюджету',desc:'Загальна вартість збірки оновлюється в реальному часі при кожному виборі. Чіткий підсумок усіх компонентів з цінами перед фінальним рішенням.',color:'#06b6d4'},
  ];

  const howItWorks = [
    {n:'01',title:'Обираєш процесор',desc:'Вибираєш CPU — AMD або Intel. Система запам\'ятовує сокет і одразу фільтрує материнські плати, щоб показати лише сумісні варіанти.',color:'#00e5ff',icon:'⚡'},
    {n:'02',title:'Підбираєш решту компонентів',desc:'Крок за кроком: GPU, RAM, материнська плата, SSD, блок живлення, корпус та охолодження. Фільтри за класом та пошук пришвидшують вибір.',color:'#a855f7',icon:'🔧'},
    {n:'03',title:'Отримуєш готову збірку',desc:'Система перевіряє сумісність, рахує вартість та продуктивність. Зведення конфігурації показує повний підсумок з балами по всіх сценаріях використання.',color:'#22c55e',icon:'🚀'},
  ];

  const tech = [
    {name:'Vanilla JS',icon:'🟨',desc:'Чистий JavaScript без жодних зовнішніх залежностей — весь функціонал реалізований нативно'},
    {name:'HTML5 + CSS3',icon:'🎨',desc:'CSS Grid, Flexbox, кастомні анімації та повністю адаптивний інтерфейс без CSS-фреймворків'},
    {name:'Single Page App',icon:'🌐',desc:'Весь застосунок — один HTML-файл. Навігація між сторінками без жодних перезавантажень'},
    {name:'Intersection Observer',icon:'👁️',desc:'Анімації при прокрутці та лічильники статистики — плавно та без важких бібліотек'},
  ];

  return `
  <div style="max-width:1100px;margin:0 auto;padding:48px 24px;position:relative;z-index:1">

    <!-- HERO -->
    <div style="text-align:center;margin-bottom:72px">
      ${tag('ПРО ПЛАТФОРМУ','#00e5ff')}
      <h1 style="font-family:'Orbitron',sans-serif;font-size:clamp(28px,5vw,52px);font-weight:900;color:#e8eaf6;margin-top:16px;margin-bottom:20px;line-height:1.1">
        PCForge — збери ПК<br/>
        <span class="gradient-text-2">без помилок та зайвих витрат</span>
      </h1>
      <p style="color:#94a3b8;font-size:17px;max-width:640px;margin:0 auto;line-height:1.8">
        PCForge — це інтелектуальний онлайн-конфігуратор, який допомагає підібрати сумісні
        комплектуючі, оцінити продуктивність збірки та контролювати бюджет — усе в одному місці.
      </p>
    </div>

    <!-- STATS -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:16px;margin-bottom:72px">
      ${[
        {val:'8',label:'Категорій комплектуючих',color:'#00e5ff'},
        {val:'46',label:'Компонентів у базі',color:'#a855f7'},
        {val:'6',label:'Готових збірок',color:'#22c55e'},
        {val:'100%',label:'Перевірка сумісності',color:'#ff6b35'},
        {val:'0',label:'Зовнішніх залежностей',color:'#06b6d4'},
        {val:'∞',label:'Варіантів конфігурацій',color:'#f59e0b'},
      ].map(s=>`<div style="background:rgba(255,255,255,.03);border:1px solid ${s.color}22;border-radius:14px;padding:22px;text-align:center">
        <div style="font-family:'Orbitron',sans-serif;font-size:32px;font-weight:900;color:${s.color};margin-bottom:8px">${s.val}</div>
        <div style="font-size:11px;color:#475569;line-height:1.5">${s.label}</div>
      </div>`).join('')}
    </div>

    <!-- FEATURES -->
    <div style="margin-bottom:72px">
      ${tag('МОЖЛИВОСТІ','#22c55e')}
      <h2 style="font-family:'Orbitron',sans-serif;font-size:clamp(20px,3vw,32px);font-weight:900;color:#e8eaf6;margin-top:14px;margin-bottom:32px">Що вміє PCForge?</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:18px">
        ${features.map(f=>`<div class="card-hover" style="background:rgba(255,255,255,.03);border:1px solid ${f.color}18;border-radius:16px;padding:24px;position:relative;overflow:hidden">
          <div style="position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,${f.color}55,transparent)"></div>
          <div style="font-size:28px;margin-bottom:14px">${f.icon}</div>
          <div style="font-family:'Orbitron',sans-serif;font-size:13px;font-weight:700;color:#e8eaf6;margin-bottom:10px;letter-spacing:.02em">${f.title}</div>
          <div style="font-size:12px;color:#64748b;line-height:1.7">${f.desc}</div>
        </div>`).join('')}
      </div>
    </div>

    <!-- HOW IT WORKS -->
    <div style="margin-bottom:72px">
      ${tag('ЯК ЦЕ ПРАЦЮЄ','#a855f7')}
      <h2 style="font-family:'Orbitron',sans-serif;font-size:clamp(20px,3vw,32px);font-weight:900;color:#e8eaf6;margin-top:14px;margin-bottom:32px">Три кроки до ідеального ПК</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px">
        ${howItWorks.map((s,i)=>`<div style="position:relative;background:rgba(255,255,255,.03);border:1px solid ${s.color}22;border-radius:16px;padding:28px;overflow:hidden">
          <div style="position:absolute;top:0;left:0;right:0;height:3px;background:${s.color}"></div>
          <div style="font-family:'Orbitron',sans-serif;font-size:11px;color:${s.color};letter-spacing:.15em;margin-bottom:14px">${s.n}</div>
          <div style="font-size:28px;margin-bottom:14px">${s.icon}</div>
          <div style="font-family:'Orbitron',sans-serif;font-size:14px;font-weight:700;color:#e8eaf6;margin-bottom:10px">${s.title}</div>
          <div style="font-size:12px;color:#64748b;line-height:1.7">${s.desc}</div>
        </div>`).join('')}
      </div>
    </div>

    <!-- SMART FILTERING HIGHLIGHT -->
    <div style="margin-bottom:72px;background:linear-gradient(135deg,rgba(0,229,255,.06),rgba(34,197,94,.04));border:1px solid rgba(0,229,255,.2);border-radius:20px;padding:36px;position:relative;overflow:hidden">
      <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#00e5ff,#22c55e)"></div>
      <div style="display:flex;align-items:flex-start;gap:20px;flex-wrap:wrap">
        <div style="font-size:48px;flex-shrink:0">🔗</div>
        <div style="flex:1;min-width:240px">
          <div style="font-family:'Orbitron',sans-serif;font-size:16px;font-weight:800;color:#e8eaf6;margin-bottom:10px">Розумна фільтрація материнських плат</div>
          <p style="font-size:14px;color:#94a3b8;line-height:1.7;margin-bottom:16px">
            Обираєш <strong style="color:#ff6b35">AMD-процесор</strong> (сокет AM5) — конфігуратор автоматично приховує всі плати під Intel і показує лише <strong style="color:#22c55e">AM5-сумісні</strong>.
            Те саме з <strong style="color:#00a8e8">Intel</strong> (LGA1700). Ніяких несумісних покупок.
          </p>
          <div style="display:flex;gap:10px;flex-wrap:wrap">
            ${[
              {label:'AMD Ryzen → AM5 плати',color:'#ff6b35'},
              {label:'Intel Core → LGA1700 плати',color:'#00a8e8'},
              {label:'Автоматично, без зусиль',color:'#22c55e'},
            ].map(b=>`<span style="font-size:11px;background:${b.color}15;border:1px solid ${b.color}33;border-radius:6px;padding:4px 12px;color:${b.color};font-family:'Orbitron',sans-serif;letter-spacing:.06em">${b.label}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>

    <!-- TECH STACK -->
    <div style="margin-bottom:56px">
      ${tag('ПІД КАПОТОМ','#f59e0b')}
      <h2 style="font-family:'Orbitron',sans-serif;font-size:clamp(20px,3vw,32px);font-weight:900;color:#e8eaf6;margin-top:14px;margin-bottom:32px">Технології</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px">
        ${tech.map(t=>`<div class="card-hover" style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:14px;padding:20px">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
            <span style="font-size:26px">${t.icon}</span>
            <div style="font-family:'Orbitron',sans-serif;font-size:12px;font-weight:700;color:#e8eaf6">${t.name}</div>
          </div>
          <div style="font-size:12px;color:#64748b;line-height:1.65">${t.desc}</div>
        </div>`).join('')}
      </div>
    </div>

    <!-- CTA -->
    <div style="text-align:center;padding:56px 24px;background:rgba(0,229,255,.03);border:1px solid rgba(0,229,255,.1);border-radius:20px">
      <div style="font-size:48px;margin-bottom:16px">⚙️</div>
      <h2 style="font-family:'Orbitron',sans-serif;font-size:clamp(20px,3vw,32px);font-weight:900;color:#e8eaf6;margin-bottom:12px">Готовий зібрати свій ПК?</h2>
      <p style="color:#64748b;font-size:15px;margin-bottom:28px">Запусти конфігуратор — це займе лише кілька хвилин</p>
      <button class="btn-primary" data-action="setPage" data-page="configurator"
        style="background:linear-gradient(135deg,#00e5ff,#0066cc);border:none;color:#000;padding:14px 36px;border-radius:10px;font-size:15px;font-weight:800;font-family:'Exo 2',sans-serif;letter-spacing:.05em;box-shadow:0 8px 30px rgba(0,229,255,.35)">
        🔧 Почати конфігурацію →
      </button>
    </div>

  </div>`;
}

// ── COUNTER ANIMATION ─────────────────────────────────────────────────────────
function initCounters() {
  document.querySelectorAll('.counter').forEach(el => {
    const target   = parseInt(el.dataset.target, 10);
    const suffix   = el.dataset.suffix || '';
    const duration = 2000;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      let start = null;
      const step = ts => {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        el.textContent = Math.floor(progress * target).toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.3 });
    obs.observe(el);
  });
}

// ── NAVBAR SCROLL ─────────────────────────────────────────────────────────────
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const handler = () => navbar.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', handler);
}

// ── MAIN RENDER ───────────────────────────────────────────────────────────────
function render() {
  const app = document.getElementById('app');

  // ── Loading screen ──
  if (!state.appReady) {
    app.innerHTML = `
      <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:24px">
        <div style="width:56px;height:56px;background:linear-gradient(135deg,#00e5ff,#7c3aed);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:28px;animation:float 1.5s ease-in-out infinite">⚙️</div>
        <div style="font-family:'Orbitron',sans-serif;font-size:18px;font-weight:800;background:linear-gradient(90deg,#00e5ff,#7c3aed);-webkit-background-clip:text;-webkit-text-fill-color:transparent">PCFORGE</div>
        <div style="display:flex;gap:8px;align-items:center">
          <div style="width:8px;height:8px;border-radius:50%;background:#00e5ff;animation:pulseBorder .8s ease-in-out infinite"></div>
          <div style="width:8px;height:8px;border-radius:50%;background:#7c3aed;animation:pulseBorder .8s ease-in-out infinite .2s"></div>
          <div style="width:8px;height:8px;border-radius:50%;background:#00e5ff;animation:pulseBorder .8s ease-in-out infinite .4s"></div>
        </div>
        <div style="font-size:13px;color:#334155;letter-spacing:.1em">Завантаження комплектуючих…</div>
      </div>`;
    return;
  }

  // ── Error screen ──
  if (state.loadError) {
    app.innerHTML = `
      <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:20px;padding:24px;text-align:center">
        <div style="font-size:48px">❌</div>
        <div style="font-family:'Orbitron',sans-serif;font-size:18px;font-weight:800;color:#ef4444">Помилка завантаження</div>
        <div style="background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.3);border-radius:10px;padding:16px 24px;max-width:480px;font-size:13px;color:#fca5a5;line-height:1.7">${state.loadError}</div>
        <div style="font-size:12px;color:#475569;max-width:400px;line-height:1.7">
          Переконайся, що файл <code style="background:rgba(255,255,255,.06);padding:2px 8px;border-radius:4px;color:#00e5ff">components.json</code>
          лежить у тій самій папці що й <code style="background:rgba(255,255,255,.06);padding:2px 8px;border-radius:4px;color:#00e5ff">index.html</code>,
          і що сайт відкритий через веб-сервер (не просто подвійним кліком на файл).
        </div>
        <button onclick="location.reload()" style="background:linear-gradient(135deg,#00e5ff,#0066cc);border:none;color:#000;padding:12px 28px;border-radius:10px;font-size:14px;font-weight:800;cursor:pointer;font-family:'Exo 2',sans-serif">
          🔄 Спробувати знову
        </button>
      </div>`;
    return;
  }

  let pageHTML = '';
  if (state.page === 'home')         pageHTML = renderHomePage();
  if (state.page === 'configurator') pageHTML = renderConfiguratorPage();
  if (state.page === 'catalog')      pageHTML = renderCatalogPage();
  if (state.page === 'compare')      pageHTML = renderComparePage();
  if (state.page === 'about')        pageHTML  = renderAboutPage();
  if (state.page === 'admin')        pageHTML  = renderAdminPage();

  app.innerHTML = renderNavBar() + pageHTML;

  window.scrollTo({ top: 0, behavior: 'smooth' });
  initNavbarScroll();
  initCounters();
  attachEvents();
}

// ── EVENT DELEGATION ──────────────────────────────────────────────────────────
function attachEvents() {

  // ── CLICKS ──
  document.addEventListener('click', handleClick, { once: true });

  // ── SEARCH INPUT ──
  const searchInput = document.querySelector('[data-action="setSearch"]');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      state.search = e.target.value;
      render();
    });
  }

  // ── MODAL BACKDROP CLICKS ──
  const summaryOverlay = document.getElementById('summaryOverlay');
  if (summaryOverlay) {
    summaryOverlay.addEventListener('click', e => {
      if (e.target === summaryOverlay) { state.showSummary = false; render(); }
    });
  }
  const compareOverlay = document.getElementById('compareSelectorOverlay');
  if (compareOverlay) {
    compareOverlay.addEventListener('click', e => {
      if (e.target === compareOverlay) { state.compareSelectorOpen = null; render(); }
    });
  }
}

async function handleClick(e) {
  const el = e.target.closest('[data-action]');
  if (!el) { document.addEventListener('click', handleClick, { once: true }); return; }

  const action = el.dataset.action;

  switch (action) {

    case 'setPage':
      state.page = el.dataset.page;
      // Reset configurator search/tier when navigating away
      if (state.page !== 'configurator') { state.search = ''; state.tier = 'all'; }
      render();
      break;

    case 'openSummary':
      state.showSummary = true;
      render();
      break;

    case 'closeSummary':
      state.showSummary = false;
      render();
      break;

    case 'selectComp': {
      const cat = STEPS[state.step];
      const id  = el.dataset.id;
      state.selected[cat] = state.selected[cat] === id ? null : id;
      render();
      break;
    }

    case 'setTier':
      state.tier = el.dataset.tier;
      render();
      break;

    case 'clearAll':
      state.selected = {cpu:null,gpu:null,ram:null,motherboard:null,storage:null,psu:null,case:null,cooling:null};
      render();
      break;

    case 'setCatalogFilter':
      state.catalogFilter = el.dataset.filter;
      render();
      break;

    case 'loadBuild': {
      const preset = PRESETS.find(p => p.id === el.dataset.preset);
      if (preset) {
        state.selected = { ...preset.comps };
        state.page = 'configurator';
        state.step = 0;
        render();
      }
      break;
    }

    case 'openCompareSelector':
      state.compareSelectorOpen = parseInt(el.dataset.slot, 10);
      render();
      break;

    case 'removeCompareSlot': {
      const ns = [...state.compareSlots];
      ns[parseInt(el.dataset.slot, 10)] = null;
      state.compareSlots = ns;
      render();
      break;
    }

    case 'setCompareCat':
      state.compareCatSel = el.dataset.cat;
      render();
      break;

    case 'addToCompareSlot': {
      const slotIdx = state.compareSelectorOpen;
      const catKey  = el.dataset.cat;
      const item    = CD[catKey].items.find(i => i.id === el.dataset.id);
      if (item && slotIdx !== null) {
        const ns = [...state.compareSlots];
        ns[slotIdx] = { ...item, cat: catKey, catLabel: CD[catKey].short, accent: CD[catKey].accent };
        state.compareSlots = ns;
        state.compareSelectorOpen = null;
        render();
      }
      break;
    }

    case 'downloadBuild': {
      const text = buildConfigText();
      const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement('a');
      a.href = url;
      a.download = `pcforge-build-${Date.now()}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      document.addEventListener('click', handleClick, { once: true });
      break;
    }

    case 'copyBuild': {
      const text = buildConfigText();
      navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById('copyBuildBtn');
        if (btn) {
          btn.textContent = '✅ Скопійовано!';
          btn.style.background = 'rgba(34,197,94,.15)';
          btn.style.borderColor = 'rgba(34,197,94,.4)';
          btn.style.color = '#22c55e';
          setTimeout(() => {
            btn.innerHTML = '📋 Скопіювати все';
            btn.style.background = 'rgba(124,58,237,.1)';
            btn.style.borderColor = 'rgba(124,58,237,.3)';
            btn.style.color = '#a855f7';
          }, 2000);
        }
      });
      document.addEventListener('click', handleClick, { once: true });
      break;
    }

    case 'copyLine': {
      const line = el.dataset.line;
      navigator.clipboard.writeText(line).then(() => {
        const orig = el.innerHTML;
        el.innerHTML = '✅';
        el.style.color = '#22c55e';
        el.style.borderColor = 'rgba(34,197,94,.3)';
        setTimeout(() => {
          el.innerHTML = orig;
          el.style.color = '';
          el.style.borderColor = '';
        }, 1500);
      });
      document.addEventListener('click', handleClick, { once: true });
      break;
    }

    case 'openAuth':
      state.authModal  = el.dataset.modal;
      state.authError  = '';
      state.authSuccess = '';
      render();
      break;

    case 'closeAuth':
    case 'closeAuthOverlay':
      if (action === 'closeAuthOverlay' && e.target.id !== 'authOverlay') {
        document.addEventListener('click', handleClick, { once: true }); break;
      }
      state.authModal  = null;
      state.authError  = '';
      state.authSuccess = '';
      render();
      break;

    case 'submitLogin': {
      const email = document.getElementById('auth-email')?.value.trim();
      const pwd   = document.getElementById('auth-password')?.value;
      if (!email || !pwd) { state.authError = 'Заповніть усі поля'; render(); break; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { state.authError = 'Некоректний email'; render(); break; }

      // Показати лоадер на кнопці
      const loginBtn = document.querySelector('[data-action="submitLogin"]');
      if (loginBtn) { loginBtn.textContent = '⏳ Перевірка…'; loginBtn.disabled = true; }

      const result = await apiLogin(email, pwd);
      if (!result.ok) { state.authError = result.error; render(); break; }

      SessionDB.save(result.user);
      state.authUser    = result.user;
      state.authModal   = null;
      state.authError   = '';
      state.authSuccess = '';
      render();
      break;
    }

    case 'submitRegister': {
      const name    = document.getElementById('reg-name')?.value.trim();
      const email   = document.getElementById('reg-email')?.value.trim();
      const pwd     = document.getElementById('reg-password')?.value;
      const confirm = document.getElementById('reg-confirm')?.value;
      if (!name || !email || !pwd || !confirm) { state.authError = 'Заповніть усі поля'; render(); break; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { state.authError = 'Некоректний email'; render(); break; }
      if (pwd.length < 6) { state.authError = 'Пароль надто короткий (мін. 6 символів)'; render(); break; }
      if (pwd !== confirm) { state.authError = 'Паролі не збігаються'; render(); break; }

      // Показати лоадер на кнопці
      const regBtn = document.querySelector('[data-action="submitRegister"]');
      if (regBtn) { regBtn.textContent = '⏳ Реєстрація…'; regBtn.disabled = true; }

      const result = await apiRegister(name, email, pwd);
      if (!result.ok) { state.authError = result.error; render(); break; }

      SessionDB.save(result.user);
      state.authUser    = result.user;
      state.authModal   = null;
      state.authError   = '';
      state.authSuccess = '';
      render();
      break;
    }

    case 'logout':
      SessionDB.clear();
      state.authUser = null;
      render();
      break;

    // ── ADMIN ACTIONS ─────────────────────────────────────────────────────────
    case 'adminSetCat':
      state.adminCat    = el.dataset.cat;
      state.adminEditId = null;
      render();
      break;

    case 'adminEdit':
      state.adminCat    = el.dataset.cat;
      state.adminEditId = el.dataset.id;
      render();
      // Scroll до форми
      setTimeout(() => document.querySelector('[id^="af_"]')?.scrollIntoView({ behavior:'smooth', block:'center' }), 80);
      break;

    case 'adminCancelEdit':
      state.adminEditId = null;
      render();
      break;

    case 'adminDelete': {
      const catDel  = el.dataset.cat;
      const idDel   = el.dataset.id;
      const nameDel = el.dataset.name;
      if (!confirm(`Видалити «${nameDel}»?\nЦю дію не можна скасувати.`)) {
        document.addEventListener('click', handleClick, { once: true }); break;
      }
      el.textContent = '…';
      el.disabled = true;
      try {
        const r = await fetch(`${API}/components`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ adminEmail: state.authUser.email, category: catDel, id: idDel }),
        });
        const d = await r.json();
        if (!d.ok) { alert('Помилка: ' + d.error); document.addEventListener('click', handleClick, { once:true }); break; }
        // Оновити локальний CD
        if (CD[catDel]) CD[catDel].items = CD[catDel].items.filter(i => i.id !== idDel);
        if (state.adminEditId === idDel) state.adminEditId = null;
      } catch { alert('Сервер недоступний'); }
      render();
      break;
    }

    case 'adminAddItem': {
      const catAdd   = el.dataset.cat;
      const catFields = Object.keys(CD[catAdd]?.items[0] || {}).filter(k => !['id','category','cat','image'].includes(k));
      const item = {};
      let hasError = false;

      // Читаємо всі поля форми
      document.querySelectorAll('[id^="af_"]').forEach(inp => {
        const field = inp.id.replace('af_', '');
        const val   = inp.value.trim();
        if (['price','power_w','cores','threads','tdp','wattage','perf'].includes(field)) {
          item[field] = val === '' ? 0 : Number(val);
        } else {
          item[field] = val;
        }
      });

      if (!item.name) {
        const errEl = document.getElementById('adminFormError');
        if (errEl) { errEl.style.display = 'block'; errEl.textContent = "Поле «Назва» обов'язкове"; }
        document.addEventListener('click', handleClick, { once: true }); break;
      }

      const btn = el; btn.textContent = '⏳ Збереження…'; btn.disabled = true;
      try {
        const r = await fetch(`${API}/components`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ adminEmail: state.authUser.email, category: catAdd, item }),
        });
        const d = await r.json();
        if (!d.ok) { alert('Помилка: ' + d.error); document.addEventListener('click', handleClick, { once:true }); break; }
        // Оновити локальний CD
        d.item.cat = catAdd;
        CD[catAdd].items.push(d.item);
      } catch { alert('Сервер недоступний. Зміни не збережено.'); }
      render();
      break;
    }

    case 'adminSaveEdit': {
      const catUpd = el.dataset.cat;
      const idUpd  = el.dataset.id;
      const item   = { id: idUpd };

      document.querySelectorAll('[id^="af_"]').forEach(inp => {
        const field = inp.id.replace('af_', '');
        const val   = inp.value.trim();
        if (['price','power_w','cores','threads','tdp','wattage','perf'].includes(field)) {
          item[field] = val === '' ? 0 : Number(val);
        } else {
          item[field] = val;
        }
      });

      if (!item.name) {
        const errEl = document.getElementById('adminFormError');
        if (errEl) { errEl.style.display = 'block'; errEl.textContent = "Поле «Назва» обов'язкове"; }
        document.addEventListener('click', handleClick, { once: true }); break;
      }

      const btnUpd = el; btnUpd.textContent = '⏳ Збереження…'; btnUpd.disabled = true;
      try {
        const r = await fetch(`${API}/components`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ adminEmail: state.authUser.email, category: catUpd, item }),
        });
        const d = await r.json();
        if (!d.ok) { alert('Помилка: ' + d.error); document.addEventListener('click', handleClick, { once:true }); break; }
        // Оновити локальний CD
        const idx = CD[catUpd].items.findIndex(i => i.id === idUpd);
        if (idx !== -1) CD[catUpd].items[idx] = { ...CD[catUpd].items[idx], ...d.item, cat: catUpd };
        state.adminEditId = null;
      } catch { alert('Сервер недоступний. Зміни не збережено.'); }
      render();
      break;
    }

    case 'setCatFilter': {
      const key = el.dataset.key;
      const val = el.dataset.val;
      const cur = { ...state.catFilters };
      if (cur[key] === val) { delete cur[key]; } else { cur[key] = val; }
      state.catFilters = cur;
      render();
      break;
    }

    case 'clearCatFilters':
      state.catFilters = {};
      render();
      break;

    case 'setStep':
      state.step       = parseInt(el.dataset.step);
      state.catFilters = {};
      state.search     = '';
      render();
      break;

    case 'nextStep':
      if (state.step < STEPS.length - 1) {
        state.step++;
        state.catFilters = {};
        state.search     = '';
        render();
      }
      break;

    case 'prevStep':
      if (state.step > 0) {
        state.step--;
        state.catFilters = {};
        state.search     = '';
        render();
      }
      break;

    default:
      document.addEventListener('click', handleClick, { once: true });
  }
}

// ── AUTH API ──────────────────────────────────────────────────────────────────
// Якщо сервер запущено (node server.js) — використовуємо API.
// Якщо відкрито як файл — fallback на localStorage.

const API = 'http://localhost:3000/api';
const SESSION_KEY = 'pcforge_session';

const SessionDB = {
  save(user)  { localStorage.setItem(SESSION_KEY, JSON.stringify(user)); },
  load()      { try { return JSON.parse(localStorage.getItem(SESSION_KEY)); } catch { return null; } },
  clear()     { localStorage.removeItem(SESSION_KEY); },
};

// Перевірити чи сервер доступний
async function serverAvailable() {
  try {
    const r = await fetch(`${API}/users`, { method: 'GET', signal: AbortSignal.timeout(1500) });
    return r.ok;
  } catch { return false; }
}

// Хеш для localStorage-fallback
function hashPassword(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h) ^ str.charCodeAt(i);
  return (h >>> 0).toString(16).padStart(8, '0');
}

const LocalUsersDB = {
  getAll()  { try { return JSON.parse(localStorage.getItem('pcforge_users') || '[]'); } catch { return []; } },
  saveAll(u){ localStorage.setItem('pcforge_users', JSON.stringify(u)); },
  find(email){ return this.getAll().find(u => u.email.toLowerCase() === email.toLowerCase()); },
  register(name, email, password) {
    if (this.find(email)) return { ok: false, error: 'Акаунт з таким email вже існує' };
    const users = this.getAll();
    const user  = { id: Date.now().toString(36), name: name.trim(), email: email.trim().toLowerCase(), password: hashPassword(password), createdAt: new Date().toISOString() };
    users.push(user);
    this.saveAll(users);
    return { ok: true, user: { id: user.id, name: user.name, email: user.email } };
  },
  login(email, password) {
    const user = this.find(email);
    if (!user) return { ok: false, error: 'Акаунт з таким email не знайдено' };
    if (user.password !== hashPassword(password)) return { ok: false, error: 'Невірний пароль' };
    return { ok: true, user: { id: user.id, name: user.name, email: user.email } };
  },
};

async function apiRegister(name, email, password) {
  if (await serverAvailable()) {
    const res  = await fetch(`${API}/register`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, password }) });
    const data = await res.json();
    return data;
  }
  return LocalUsersDB.register(name, email, password);
}

async function apiLogin(email, password) {
  if (await serverAvailable()) {
    const res  = await fetch(`${API}/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
    const data = await res.json();
    return data;
  }
  return LocalUsersDB.login(email, password);
}


document.addEventListener('DOMContentLoaded', async () => {
  // Відновити сесію якщо юзер вже логінився раніше
  const savedSession = SessionDB.load();
  if (savedSession) state.authUser = savedSession;

  render();   // показати loading screen одразу

  // Завантажуємо компоненти та курс паралельно
  await Promise.all([
    loadComponents(),
    fetchRate(),
  ]);

  state.appReady = true;
  render();   // повноцінний рендер із даними
});
