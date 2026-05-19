window.COMPONENTS_DATA = {

  /* ══════════════════════════════════════════════════════════════
     CPU — Процесори
  ══════════════════════════════════════════════════════════════ */
  "cpu": {
    "label": "Процесор (CPU)", "short": "CPU", "icon": "⚡", "accent": "#ff6b35",
    "items": [
      /* ── ULTRA ── */
      {"id":"cpu1","category":"cpu","name":"AMD Ryzen 9 9950X","brand":"AMD","price":699,"socket":"AM5","ram_type":"DDR5","power_w":170,"cores":16,"threads":32,"boost":"5.7 GHz","tdp":170,"tier":"ultra","perf":99,"image":"","desc":"Флагман Zen 5 — 16 ядер для рендерингу та AI"},
      {"id":"cpu2","category":"cpu","name":"AMD Ryzen 9 7950X3D","brand":"AMD","price":749,"socket":"AM5","ram_type":"DDR5","power_w":120,"cores":16,"threads":32,"boost":"5.7 GHz","tdp":120,"tier":"ultra","perf":99,"image":"","desc":"16 ядер + 3D V-Cache — ідеал для стримінгу та рендерингу"},
      {"id":"cpu3","category":"cpu","name":"Intel Core Ultra 9 285K","brand":"Intel","price":589,"socket":"LGA1851","ram_type":"DDR5","power_w":253,"cores":24,"threads":24,"boost":"5.7 GHz","tdp":253,"tier":"ultra","perf":97,"image":"","desc":"Arrow Lake — флагман Intel без HyperThreading"},
      {"id":"cpu4","category":"cpu","name":"Intel Core i9-14900K","brand":"Intel","price":519,"socket":"LGA1700","ram_type":"DDR5","power_w":253,"cores":24,"threads":32,"boost":"6.0 GHz","tdp":253,"tier":"ultra","perf":96,"image":"","desc":"Найшвидший ігровий процесор Intel 14 покоління"},
      {"id":"cpu5","category":"cpu","name":"AMD Ryzen 9 7950X","brand":"AMD","price":649,"socket":"AM5","ram_type":"DDR5","power_w":170,"cores":16,"threads":32,"boost":"5.7 GHz","tdp":170,"tier":"ultra","perf":98,"image":"","desc":"Zen 4 флагман для стримінгу та 3D рендерингу"},
      {"id":"cpu6","category":"cpu","name":"Intel Core i9-13900KS","brand":"Intel","price":469,"socket":"LGA1700","ram_type":"DDR5","power_w":253,"cores":24,"threads":32,"boost":"6.0 GHz","tdp":253,"tier":"ultra","perf":95,"image":"","desc":"Спеціальна Edition з підвищеними частотами"},
      /* ── HIGH ── */
      {"id":"cpu7","category":"cpu","name":"AMD Ryzen 9 9900X","brand":"AMD","price":449,"socket":"AM5","ram_type":"DDR5","power_w":120,"cores":12,"threads":24,"boost":"5.6 GHz","tdp":120,"tier":"high","perf":93,"image":"","desc":"12 ядер Zen 5 з покращеною ефективністю"},
      {"id":"cpu8","category":"cpu","name":"AMD Ryzen 9 7900X3D","brand":"AMD","price":399,"socket":"AM5","ram_type":"DDR5","power_w":120,"cores":12,"threads":24,"boost":"5.6 GHz","tdp":120,"tier":"high","perf":93,"image":"","desc":"3D V-Cache для стримінгу та рендерингу"},
      {"id":"cpu9","category":"cpu","name":"Intel Core Ultra 7 265K","brand":"Intel","price":394,"socket":"LGA1851","ram_type":"DDR5","power_w":253,"cores":20,"threads":20,"boost":"5.5 GHz","tdp":253,"tier":"high","perf":89,"image":"","desc":"Arrow Lake для ентузіастів з PCIe 5.0"},
      {"id":"cpu10","category":"cpu","name":"Intel Core i7-14700K","brand":"Intel","price":389,"socket":"LGA1700","ram_type":"DDR5","power_w":253,"cores":20,"threads":28,"boost":"5.6 GHz","tdp":253,"tier":"high","perf":88,"image":"","desc":"20 ядер для ентузіастів — відмінний OC потенціал"},
      {"id":"cpu11","category":"cpu","name":"AMD Ryzen 7 9700X","brand":"AMD","price":359,"socket":"AM5","ram_type":"DDR5","power_w":65,"cores":8,"threads":16,"boost":"5.5 GHz","tdp":65,"tier":"high","perf":87,"image":"","desc":"Zen 5 — ефективний 65W процесор для ігор"},
      {"id":"cpu12","category":"cpu","name":"AMD Ryzen 7 7800X3D","brand":"AMD","price":329,"socket":"AM5","ram_type":"DDR5","power_w":120,"cores":8,"threads":16,"boost":"5.0 GHz","tdp":120,"tier":"high","perf":91,"image":"","desc":"Найкращий геймерський CPU — 3D V-Cache"},
      /* ── MID ── */
      {"id":"cpu13","category":"cpu","name":"Intel Core Ultra 5 245K","brand":"Intel","price":309,"socket":"LGA1851","ram_type":"DDR5","power_w":159,"cores":14,"threads":14,"boost":"5.2 GHz","tdp":159,"tier":"mid","perf":78,"image":"","desc":"Arrow Lake для мейнстрім геймерів"},
      {"id":"cpu14","category":"cpu","name":"AMD Ryzen 5 9600X","brand":"AMD","price":279,"socket":"AM5","ram_type":"DDR5","power_w":65,"cores":6,"threads":12,"boost":"5.4 GHz","tdp":65,"tier":"mid","perf":76,"image":"","desc":"Zen 5 — ідеал для бюджетних ігрових систем"},
      {"id":"cpu15","category":"cpu","name":"Intel Core i5-14600K","brand":"Intel","price":299,"socket":"LGA1700","ram_type":"DDR5","power_w":181,"cores":14,"threads":20,"boost":"5.3 GHz","tdp":181,"tier":"mid","perf":76,"image":"","desc":"Збалансоване рішення для гравців і стримерів"},
      {"id":"cpu16","category":"cpu","name":"Intel Core i5-13600K","brand":"Intel","price":249,"socket":"LGA1700","ram_type":"DDR5","power_w":181,"cores":14,"threads":20,"boost":"5.1 GHz","tdp":181,"tier":"mid","perf":74,"image":"","desc":"Відмінний баланс ціна/продуктивність"},
      {"id":"cpu17","category":"cpu","name":"AMD Ryzen 7 7700X","brand":"AMD","price":279,"socket":"AM5","ram_type":"DDR5","power_w":105,"cores":8,"threads":16,"boost":"5.4 GHz","tdp":105,"tier":"mid","perf":82,"image":"","desc":"Оптимальний вибір для геймерів на AM5"},
      {"id":"cpu18","category":"cpu","name":"AMD Ryzen 5 7600X","brand":"AMD","price":189,"socket":"AM5","ram_type":"DDR5","power_w":105,"cores":6,"threads":12,"boost":"5.3 GHz","tdp":105,"tier":"mid","perf":72,"image":"","desc":"Найкращий у своєму ціновому діапазоні"},
      /* ── BUDGET ── */
      {"id":"cpu19","category":"cpu","name":"AMD Ryzen 5 7600","brand":"AMD","price":169,"socket":"AM5","ram_type":"DDR5","power_w":65,"cores":6,"threads":12,"boost":"5.1 GHz","tdp":65,"tier":"budget","perf":68,"image":"","desc":"Економна версія 7600X — 65W TDP"},
      {"id":"cpu20","category":"cpu","name":"AMD Ryzen 5 7500F","brand":"AMD","price":139,"socket":"AM5","ram_type":"DDR5","power_w":65,"cores":6,"threads":12,"boost":"5.0 GHz","tdp":65,"tier":"budget","perf":62,"image":"","desc":"Бюджетний вибір на платформі AM5 без iGPU"},
      {"id":"cpu21","category":"cpu","name":"Intel Core i5-13400F","brand":"Intel","price":149,"socket":"LGA1700","ram_type":"DDR4","power_w":65,"cores":10,"threads":16,"boost":"4.6 GHz","tdp":65,"tier":"budget","perf":66,"image":"","desc":"10 ядер за бюджетну ціну — популярний вибір"},
      {"id":"cpu22","category":"cpu","name":"Intel Core i5-12400F","brand":"Intel","price":119,"socket":"LGA1700","ram_type":"DDR4","power_w":65,"cores":6,"threads":12,"boost":"4.4 GHz","tdp":65,"tier":"budget","perf":58,"image":"","desc":"Популярний бюджетник під DDR4"},
      {"id":"cpu23","category":"cpu","name":"Intel Core i3-14100F","brand":"Intel","price":89,"socket":"LGA1700","ram_type":"DDR4","power_w":58,"cores":4,"threads":8,"boost":"4.7 GHz","tdp":58,"tier":"budget","perf":48,"image":"","desc":"Для офісу та базового геймінгу"},
      {"id":"cpu24","category":"cpu","name":"AMD Ryzen 5 5600X","brand":"AMD","price":99,"socket":"AM4","ram_type":"DDR4","power_w":65,"cores":6,"threads":12,"boost":"4.6 GHz","tdp":65,"tier":"budget","perf":60,"image":"","desc":"Ветеран AM4 — відмінне співвідношення ціна/якість"},
      {"id":"cpu25","category":"cpu","name":"AMD Ryzen 3 4100","brand":"AMD","price":69,"socket":"AM4","ram_type":"DDR4","power_w":65,"cores":4,"threads":8,"boost":"4.0 GHz","tdp":65,"tier":"budget","perf":40,"image":"","desc":"Мінімальний бюджет для ігрового ПК"}
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     GPU — Відеокарти (з вендорами)
  ══════════════════════════════════════════════════════════════ */
  "gpu": {
    "label": "Відеокарта (GPU)", "short": "GPU", "icon": "🎮", "accent": "#00d4ff",
    "items": [

      /* ── NVIDIA RTX 50 ULTRA ── */
      {"id":"gpu1","category":"gpu","name":"ASUS ROG Strix RTX 5090 OC 32GB","brand":"NVIDIA / ASUS","price":2299,"socket":null,"ram_type":null,"power_w":575,"vram":"32GB GDDR7","tdp":575,"tier":"ultra","perf":100,"image":"","desc":"Абсолютний флагман Blackwell — ROG Strix з трьома вентиляторами"},
      {"id":"gpu2","category":"gpu","name":"MSI Gaming Trio RTX 5090 32GB","brand":"NVIDIA / MSI","price":2099,"socket":null,"ram_type":null,"power_w":575,"vram":"32GB GDDR7","tdp":575,"tier":"ultra","perf":100,"image":"","desc":"Triple-fan охолодження від MSI — RTX 5090 Blackwell"},
      {"id":"gpu3","category":"gpu","name":"Zotac AMP Extreme Airo RTX 5090 32GB","brand":"NVIDIA / Zotac","price":1999,"socket":null,"ram_type":null,"power_w":570,"vram":"32GB GDDR7","tdp":570,"tier":"ultra","perf":99,"image":"","desc":"Масивна система охолодження від Zotac для RTX 5090"},

      /* ── NVIDIA RTX 40 ULTRA ── */
      {"id":"gpu4","category":"gpu","name":"ASUS ROG Strix RTX 4090 OC 24GB","brand":"NVIDIA / ASUS","price":1849,"socket":null,"ram_type":null,"power_w":480,"vram":"24GB GDDR6X","tdp":480,"tier":"ultra","perf":95,"image":"","desc":"ROG Strix — масивне охолодження та фабричний OC"},
      {"id":"gpu5","category":"gpu","name":"MSI Gaming X Trio RTX 4090 24GB","brand":"NVIDIA / MSI","price":1699,"socket":null,"ram_type":null,"power_w":470,"vram":"24GB GDDR6X","tdp":470,"tier":"ultra","perf":95,"image":"","desc":"Tri-Frozr 3 охолодження — тихо та ефективно"},
      {"id":"gpu6","category":"gpu","name":"Gigabyte AORUS Master RTX 4090 24GB","brand":"NVIDIA / Gigabyte","price":1749,"socket":null,"ram_type":null,"power_w":480,"vram":"24GB GDDR6X","tdp":480,"tier":"ultra","perf":95,"image":"","desc":"WINDFORCE Stack 3×100мм — максимальне охолодження"},
      {"id":"gpu7","category":"gpu","name":"Zotac AMP Extreme Airo RTX 4090 24GB","brand":"NVIDIA / Zotac","price":1599,"socket":null,"ram_type":null,"power_w":450,"vram":"24GB GDDR6X","tdp":450,"tier":"ultra","perf":94,"image":"","desc":"Найдоступніший варіант RTX 4090 з хорошим охолодженням"},

      /* ── AMD RX 7900 ULTRA ── */
      {"id":"gpu8","category":"gpu","name":"Sapphire Nitro+ RX 7900 XTX 24GB","brand":"AMD / Sapphire","price":1049,"socket":null,"ram_type":null,"power_w":365,"vram":"24GB GDDR6","tdp":365,"tier":"ultra","perf":91,"image":"","desc":"Nitro+ — преміум охолодження від Sapphire для топового AMD"},
      {"id":"gpu9","category":"gpu","name":"PowerColor Red Devil RX 7900 XTX 24GB","brand":"AMD / PowerColor","price":999,"socket":null,"ram_type":null,"power_w":360,"vram":"24GB GDDR6","tdp":360,"tier":"ultra","perf":90,"image":"","desc":"Культова Red Devil серія з трьома вентиляторами"},
      {"id":"gpu10","category":"gpu","name":"XFX Speedster Merc 310 RX 7900 XTX 24GB","brand":"AMD / XFX","price":979,"socket":null,"ram_type":null,"power_w":355,"vram":"24GB GDDR6","tdp":355,"tier":"ultra","perf":90,"image":"","desc":"MERC з потрійним вентилятором та подвійним BIOS"},

      /* ── NVIDIA RTX 50 HIGH ── */
      {"id":"gpu11","category":"gpu","name":"ASUS TUF Gaming RTX 5080 OC 16GB","brand":"NVIDIA / ASUS","price":1149,"socket":null,"ram_type":null,"power_w":380,"vram":"16GB GDDR7","tdp":380,"tier":"high","perf":89,"image":"","desc":"TUF Gaming — надійна PCB та OC Edition для RTX 5080"},
      {"id":"gpu12","category":"gpu","name":"Gigabyte Eagle RTX 5080 16GB","brand":"NVIDIA / Gigabyte","price":1049,"socket":null,"ram_type":null,"power_w":360,"vram":"16GB GDDR7","tdp":360,"tier":"high","perf":88,"image":"","desc":"Доступний RTX 5080 від Gigabyte з WINDFORCE охолодженням"},

      /* ── NVIDIA RTX 4080 HIGH ── */
      {"id":"gpu13","category":"gpu","name":"ASUS ROG Strix RTX 4080 Super OC 16GB","brand":"NVIDIA / ASUS","price":1079,"socket":null,"ram_type":null,"power_w":340,"vram":"16GB GDDR6X","tdp":340,"tier":"high","perf":86,"image":"","desc":"ROG Strix з LCD-дисплеєм на кришці та OC"},
      {"id":"gpu14","category":"gpu","name":"MSI Gaming X Slim RTX 4080 Super 16GB","brand":"NVIDIA / MSI","price":999,"socket":null,"ram_type":null,"power_w":320,"vram":"16GB GDDR6X","tdp":320,"tier":"high","perf":85,"image":"","desc":"Тонкий профіль Slim та ефективне охолодження"},
      {"id":"gpu15","category":"gpu","name":"Palit GameRock OC RTX 4080 Super 16GB","brand":"NVIDIA / Palit","price":969,"socket":null,"ram_type":null,"power_w":320,"vram":"16GB GDDR6X","tdp":320,"tier":"high","perf":85,"image":"","desc":"GameRock — масивна система охолодження за розумну ціну"},

      /* ── AMD RX 7900 XT HIGH ── */
      {"id":"gpu16","category":"gpu","name":"Sapphire Nitro+ RX 7900 XT 20GB","brand":"AMD / Sapphire","price":849,"socket":null,"ram_type":null,"power_w":320,"vram":"20GB GDDR6","tdp":320,"tier":"high","perf":83,"image":"","desc":"20GB VRAM — Nitro+ охолодження для творчих задач"},
      {"id":"gpu17","category":"gpu","name":"PowerColor Red Devil RX 7900 XT 20GB","brand":"AMD / PowerColor","price":809,"socket":null,"ram_type":null,"power_w":315,"vram":"20GB GDDR6","tdp":315,"tier":"high","perf":82,"image":"","desc":"Red Devil — флагман PowerColor для RX 7900 XT"},

      /* ── NVIDIA RTX 5070 Ti / RTX 4070 Ti Super HIGH ── */
      {"id":"gpu18","category":"gpu","name":"MSI Gaming X RTX 5070 Ti 16GB","brand":"NVIDIA / MSI","price":849,"socket":null,"ram_type":null,"power_w":300,"vram":"16GB GDDR7","tdp":300,"tier":"high","perf":84,"image":"","desc":"RTX 5070 Ti Blackwell — Gaming X Triple Fan від MSI"},
      {"id":"gpu19","category":"gpu","name":"ASUS TUF Gaming RTX 5070 Ti OC 16GB","brand":"NVIDIA / ASUS","price":879,"socket":null,"ram_type":null,"power_w":310,"vram":"16GB GDDR7","tdp":310,"tier":"high","perf":84,"image":"","desc":"TUF Gaming — міцна збірка та фабричний OC для RTX 5070 Ti"},
      {"id":"gpu20","category":"gpu","name":"Gigabyte AORUS Master RTX 4070 Ti Super 16GB","brand":"NVIDIA / Gigabyte","price":879,"socket":null,"ram_type":null,"power_w":295,"vram":"16GB GDDR6X","tdp":295,"tier":"high","perf":79,"image":"","desc":"AORUS Master — топова модель від Gigabyte з LCD"},
      {"id":"gpu21","category":"gpu","name":"ASUS TUF Gaming RTX 4070 Ti Super OC 16GB","brand":"NVIDIA / ASUS","price":849,"socket":null,"ram_type":null,"power_w":285,"vram":"16GB GDDR6X","tdp":285,"tier":"high","perf":78,"image":"","desc":"TUF Gaming з 3 вентиляторами та DLSS 3.5"},
      {"id":"gpu22","category":"gpu","name":"MSI Gaming X Slim RTX 4070 Ti Super 16GB","brand":"NVIDIA / MSI","price":819,"socket":null,"ram_type":null,"power_w":285,"vram":"16GB GDDR6X","tdp":285,"tier":"high","perf":78,"image":"","desc":"Slim-формат Tri-Frozr 3 — 1440p ultra без компромісів"},

      /* ── AMD RX 7900 GRE MID-HIGH ── */
      {"id":"gpu23","category":"gpu","name":"Sapphire Nitro+ RX 7900 GRE 16GB","brand":"AMD / Sapphire","price":649,"socket":null,"ram_type":null,"power_w":260,"vram":"16GB GDDR6","tdp":260,"tier":"high","perf":76,"image":"","desc":"GRE — доступна версія RX 7900 від Sapphire"},

      /* ── NVIDIA RTX 5070 / RTX 4070 Super MID ── */
      {"id":"gpu24","category":"gpu","name":"ASUS Dual RTX 5070 OC 12GB","brand":"NVIDIA / ASUS","price":669,"socket":null,"ram_type":null,"power_w":250,"vram":"12GB GDDR7","tdp":250,"tier":"mid","perf":75,"image":"","desc":"Dual-fan RTX 5070 Blackwell — компактна та ефективна"},
      {"id":"gpu25","category":"gpu","name":"Palit GamingPro RTX 5070 12GB","brand":"NVIDIA / Palit","price":629,"socket":null,"ram_type":null,"power_w":250,"vram":"12GB GDDR7","tdp":250,"tier":"mid","perf":74,"image":"","desc":"GamingPro RTX 5070 — трьохвентиляторна система за розумну ціну"},
      {"id":"gpu26","category":"gpu","name":"ASUS TUF Gaming RTX 4070 Super OC 12GB","brand":"NVIDIA / ASUS","price":649,"socket":null,"ram_type":null,"power_w":225,"vram":"12GB GDDR6X","tdp":225,"tier":"mid","perf":74,"image":"","desc":"TUF Gaming OC — посилений VRM та охолодження"},
      {"id":"gpu27","category":"gpu","name":"MSI Gaming X Slim RTX 4070 Super 12GB","brand":"NVIDIA / MSI","price":599,"socket":null,"ram_type":null,"power_w":220,"vram":"12GB GDDR6X","tdp":220,"tier":"mid","perf":74,"image":"","desc":"Slim Triple Fan — DLSS 3.5 та Frame Generation"},

      /* ── AMD RX 7800 XT / 7700 XT MID ── */
      {"id":"gpu28","category":"gpu","name":"Sapphire Pulse RX 7800 XT 16GB","brand":"AMD / Sapphire","price":499,"socket":null,"ram_type":null,"power_w":263,"vram":"16GB GDDR6","tdp":263,"tier":"mid","perf":68,"image":"","desc":"Pulse — надійне охолодження та 16GB VRAM за 500$"},
      {"id":"gpu29","category":"gpu","name":"PowerColor Hellhound RX 7800 XT 16GB","brand":"AMD / PowerColor","price":479,"socket":null,"ram_type":null,"power_w":260,"vram":"16GB GDDR6","tdp":260,"tier":"mid","perf":68,"image":"","desc":"Hellhound — трьохвентиляторне охолодження від PowerColor"},
      {"id":"gpu30","category":"gpu","name":"XFX Speedster Qick 319 RX 7700 XT 12GB","brand":"AMD / XFX","price":449,"socket":null,"ram_type":null,"power_w":245,"vram":"12GB GDDR6","tdp":245,"tier":"mid","perf":64,"image":"","desc":"Qick 319 — потрійний вентилятор для стабільного 1440p"},
      {"id":"gpu31","category":"gpu","name":"ASRock Challenger RX 7700 XT 12GB","brand":"AMD / ASRock","price":429,"socket":null,"ram_type":null,"power_w":245,"vram":"12GB GDDR6","tdp":245,"tier":"mid","perf":63,"image":"","desc":"Challenger OC — доступний Triple-fan варіант RX 7700 XT"},

      /* ── NVIDIA RTX 4060 Ti MID-LOW ── */
      {"id":"gpu32","category":"gpu","name":"ASUS TUF Gaming RTX 4060 Ti OC 16GB","brand":"NVIDIA / ASUS","price":529,"socket":null,"ram_type":null,"power_w":170,"vram":"16GB GDDR6","tdp":170,"tier":"mid","perf":63,"image":"","desc":"TUF 16GB — майбутньостійка RTX 4060 Ti"},
      {"id":"gpu33","category":"gpu","name":"Palit GameRock RTX 4060 Ti 16GB","brand":"NVIDIA / Palit","price":499,"socket":null,"ram_type":null,"power_w":165,"vram":"16GB GDDR6","tdp":165,"tier":"mid","perf":62,"image":"","desc":"GameRock масивна система охолодження для RTX 4060 Ti 16GB"},
      {"id":"gpu34","category":"gpu","name":"MSI Gaming X RTX 4060 Ti 8GB","brand":"NVIDIA / MSI","price":419,"socket":null,"ram_type":null,"power_w":165,"vram":"8GB GDDR6","tdp":165,"tier":"mid","perf":60,"image":"","desc":"Gaming X — Twin Frozr 9 з DLSS 3 для 1080p/1440p"},
      {"id":"gpu35","category":"gpu","name":"Gigabyte Eagle RTX 4060 Ti 8GB","brand":"NVIDIA / Gigabyte","price":399,"socket":null,"ram_type":null,"power_w":165,"vram":"8GB GDDR6","tdp":165,"tier":"mid","perf":60,"image":"","desc":"Eagle OC — Triple Fan від Gigabyte за найкращою ціною"},

      /* ── AMD RX 6800 XT MID-LOW ── */
      {"id":"gpu36","category":"gpu","name":"ASRock Taichi RX 6800 XT 16GB","brand":"AMD / ASRock","price":369,"socket":null,"ram_type":null,"power_w":300,"vram":"16GB GDDR6","tdp":300,"tier":"mid","perf":65,"image":"","desc":"Taichi — преміум варіант RX 6800 XT з 16GB VRAM"},

      /* ── NVIDIA RTX 4060 BUDGET ── */
      {"id":"gpu37","category":"gpu","name":"Zotac Twin Edge RTX 4060 8GB","brand":"NVIDIA / Zotac","price":299,"socket":null,"ram_type":null,"power_w":115,"vram":"8GB GDDR6","tdp":115,"tier":"budget","perf":52,"image":"","desc":"Twin Edge — компактний та тихий RTX 4060"},
      {"id":"gpu38","category":"gpu","name":"ASUS Dual RTX 4060 OC 8GB","brand":"NVIDIA / ASUS","price":319,"socket":null,"ram_type":null,"power_w":115,"vram":"8GB GDDR6","tdp":115,"tier":"budget","perf":53,"image":"","desc":"Dual OC — надійний RTX 4060 від ASUS з фабричним OC"},
      {"id":"gpu39","category":"gpu","name":"MSI Ventus 2X RTX 4060 8GB","brand":"NVIDIA / MSI","price":289,"socket":null,"ram_type":null,"power_w":115,"vram":"8GB GDDR6","tdp":115,"tier":"budget","perf":52,"image":"","desc":"Ventus 2X — найдоступніший RTX 4060 від MSI"},

      /* ── AMD RX 7600 BUDGET ── */
      {"id":"gpu40","category":"gpu","name":"Sapphire Pulse RX 7600 8GB","brand":"AMD / Sapphire","price":269,"socket":null,"ram_type":null,"power_w":165,"vram":"8GB GDDR6","tdp":165,"tier":"budget","perf":48,"image":"","desc":"Pulse — двохвентиляторна охолодження для 1080p gaming"},
      {"id":"gpu41","category":"gpu","name":"ASRock Challenger RX 7600 8GB","brand":"AMD / ASRock","price":249,"socket":null,"ram_type":null,"power_w":165,"vram":"8GB GDDR6","tdp":165,"tier":"budget","perf":48,"image":"","desc":"Challenger — доступний RX 7600 з Triple Fan охолодженням"},
      {"id":"gpu42","category":"gpu","name":"PowerColor Fighter RX 7600 8GB","brand":"AMD / PowerColor","price":239,"socket":null,"ram_type":null,"power_w":165,"vram":"8GB GDDR6","tdp":165,"tier":"budget","perf":47,"image":"","desc":"Fighter — бюджетний варіант RX 7600 від PowerColor"},

      /* ── INTEL ARC BUDGET ── */
      {"id":"gpu43","category":"gpu","name":"Intel Arc A770 Limited Edition 16GB","brand":"Intel","price":249,"socket":null,"ram_type":null,"power_w":225,"vram":"16GB GDDR6","tdp":225,"tier":"budget","perf":50,"image":"","desc":"Intel власна Limited Edition — 16GB VRAM у бюджетному сегменті"},
      {"id":"gpu44","category":"gpu","name":"ASRock Arc A770 Phantom Gaming 16GB","brand":"Intel / ASRock","price":259,"socket":null,"ram_type":null,"power_w":225,"vram":"16GB GDDR6","tdp":225,"tier":"budget","perf":51,"image":"","desc":"Phantom Gaming — Triple Fan охолодження для Arc A770"},
      {"id":"gpu45","category":"gpu","name":"Intel Arc A750 Limited Edition 8GB","brand":"Intel","price":189,"socket":null,"ram_type":null,"power_w":225,"vram":"8GB GDDR6","tdp":225,"tier":"budget","perf":44,"image":"","desc":"A750 — хороша альтернатива RTX 3060 від Intel"},

      /* ── NVIDIA RTX 30 LEGACY BUDGET ── */
      {"id":"gpu46","category":"gpu","name":"Zotac Twin Edge RTX 3060 12GB","brand":"NVIDIA / Zotac","price":229,"socket":null,"ram_type":null,"power_w":170,"vram":"12GB GDDR6","tdp":170,"tier":"budget","perf":46,"image":"","desc":"Twin Edge — компактний RTX 3060 12GB за розумну ціну"},
      {"id":"gpu47","category":"gpu","name":"MSI Ventus 2X RTX 3060 12GB","brand":"NVIDIA / MSI","price":219,"socket":null,"ram_type":null,"power_w":170,"vram":"12GB GDDR6","tdp":170,"tier":"budget","perf":46,"image":"","desc":"Ventus 2X — перевірений часом RTX 3060 з 12GB"},

      /* ── AMD RX 6600 LEGACY BUDGET ── */
      {"id":"gpu48","category":"gpu","name":"Sapphire Pulse RX 6600 8GB","brand":"AMD / Sapphire","price":179,"socket":null,"ram_type":null,"power_w":132,"vram":"8GB GDDR6","tdp":132,"tier":"budget","perf":40,"image":"","desc":"Pulse — тихий та надійний RX 6600 для 1080p"},
      {"id":"gpu49","category":"gpu","name":"ASUS Phoenix RTX 3050 8GB","brand":"NVIDIA / ASUS","price":149,"socket":null,"ram_type":null,"power_w":130,"vram":"8GB GDDR6","tdp":130,"tier":"budget","perf":34,"image":"","desc":"Phoenix — компактна одновентиляторна RTX 3050 для мінітауерів"},

      /* ── NVIDIA GTX 16XX ENTRY ── */
      {"id":"gpu50","category":"gpu","name":"MSI Gaming X GTX 1660 Super 6GB","brand":"NVIDIA / MSI","price":129,"socket":null,"ram_type":null,"power_w":125,"vram":"6GB GDDR6","tdp":125,"tier":"entry","perf":30,"image":"","desc":"Gaming X Twin Fan — GTX 1660 Super для стабільного 1080p Medium"},
      {"id":"gpu51","category":"gpu","name":"ASUS Dual GTX 1660 Super OC 6GB","brand":"NVIDIA / ASUS","price":119,"socket":null,"ram_type":null,"power_w":125,"vram":"6GB GDDR6","tdp":125,"tier":"entry","perf":29,"image":"","desc":"Dual OC — надійний GTX 1660 Super від ASUS для 1080p"},
      {"id":"gpu52","category":"gpu","name":"Zotac Twin Fan GTX 1660 6GB","brand":"NVIDIA / Zotac","price":99,"socket":null,"ram_type":null,"power_w":120,"vram":"6GB GDDR5","tdp":120,"tier":"entry","perf":26,"image":"","desc":"Twin Fan — базова GTX 1660 без Super для легкого геймінгу"},
      {"id":"gpu53","category":"gpu","name":"ASUS Dual GTX 1650 Super OC 4GB","brand":"NVIDIA / ASUS","price":89,"socket":null,"ram_type":null,"power_w":100,"vram":"4GB GDDR6","tdp":100,"tier":"entry","perf":22,"image":"","desc":"Dual OC — GTX 1650 Super для 1080p Low/Medium без 6-pin"},
      {"id":"gpu54","category":"gpu","name":"MSI Aero ITX GTX 1650 4GB","brand":"NVIDIA / MSI","price":75,"socket":null,"ram_type":null,"power_w":75,"vram":"4GB GDDR6","tdp":75,"tier":"entry","perf":19,"image":"","desc":"Aero ITX — тонка картка без додаткового живлення, лише слот PCIe"},

      /* ── NVIDIA GTX 10XX LEGACY ── */
      {"id":"gpu55","category":"gpu","name":"Palit Dual GTX 1060 6GB","brand":"NVIDIA / Palit","price":79,"socket":null,"ram_type":null,"power_w":120,"vram":"6GB GDDR5","tdp":120,"tier":"entry","perf":23,"image":"","desc":"Dual — GTX 1060 6GB ще впорається з 1080p на Low/Med"},
      {"id":"gpu56","category":"gpu","name":"Gigabyte Windforce GTX 1060 3GB","brand":"NVIDIA / Gigabyte","price":55,"socket":null,"ram_type":null,"power_w":120,"vram":"3GB GDDR5","tdp":120,"tier":"entry","perf":19,"image":"","desc":"Windforce — GTX 1060 3GB для дуже бюджетних збірок"},
      {"id":"gpu57","category":"gpu","name":"Zotac Mini GTX 1050 Ti 4GB","brand":"NVIDIA / Zotac","price":59,"socket":null,"ram_type":null,"power_w":75,"vram":"4GB GDDR5","tdp":75,"tier":"entry","perf":16,"image":"","desc":"Mini — компактна GTX 1050 Ti без додаткового живлення"},
      {"id":"gpu58","category":"gpu","name":"ASUS Phoenix GTX 1050 Ti 4GB","brand":"NVIDIA / ASUS","price":55,"socket":null,"ram_type":null,"power_w":75,"vram":"4GB GDDR5","tdp":75,"tier":"entry","perf":16,"image":"","desc":"Phoenix — однослотова GTX 1050 Ti для офісних ПК"},
      {"id":"gpu59","category":"gpu","name":"MSI Gaming X GTX 1070 8GB","brand":"NVIDIA / MSI","price":99,"socket":null,"ram_type":null,"power_w":150,"vram":"8GB GDDR5","tdp":150,"tier":"entry","perf":27,"image":"","desc":"Gaming X Twin Fan — GTX 1070 8GB ще актуальна для 1080p High"},
      {"id":"gpu60","category":"gpu","name":"ASUS Strix GTX 1080 8GB","brand":"NVIDIA / ASUS","price":119,"socket":null,"ram_type":null,"power_w":180,"vram":"8GB GDDR5X","tdp":180,"tier":"entry","perf":31,"image":"","desc":"Strix OC — GTX 1080 8GB для 1080p Ultra або 1440p Medium"},

      /* ── AMD RX 500 SERIES LEGACY ── */
      {"id":"gpu61","category":"gpu","name":"Sapphire Pulse RX 580 8GB","brand":"AMD / Sapphire","price":69,"socket":null,"ram_type":null,"power_w":185,"vram":"8GB GDDR5","tdp":185,"tier":"entry","perf":21,"image":"","desc":"Pulse — RX 580 8GB легенда бюджетного геймінгу 1080p"},
      {"id":"gpu62","category":"gpu","name":"MSI Gaming X RX 580 8GB","brand":"AMD / MSI","price":75,"socket":null,"ram_type":null,"power_w":185,"vram":"8GB GDDR5","tdp":185,"tier":"entry","perf":21,"image":"","desc":"Gaming X Twin Fan — RX 580 8GB з кращим охолодженням від MSI"},
      {"id":"gpu63","category":"gpu","name":"Gigabyte Gaming RX 580 4GB","brand":"AMD / Gigabyte","price":49,"socket":null,"ram_type":null,"power_w":185,"vram":"4GB GDDR5","tdp":185,"tier":"entry","perf":18,"image":"","desc":"Gaming — RX 580 4GB для мінімального 1080p геймінгу"},
      {"id":"gpu64","category":"gpu","name":"Sapphire Nitro+ RX 570 8GB","brand":"AMD / Sapphire","price":55,"socket":null,"ram_type":null,"power_w":150,"vram":"8GB GDDR5","tdp":150,"tier":"entry","perf":18,"image":"","desc":"Nitro+ — RX 570 8GB старший брат RX 580 з нижчим TDP"},
      {"id":"gpu65","category":"gpu","name":"PowerColor Red Dragon RX 570 4GB","brand":"AMD / PowerColor","price":39,"socket":null,"ram_type":null,"power_w":150,"vram":"4GB GDDR5","tdp":150,"tier":"entry","perf":15,"image":"","desc":"Red Dragon — бюджетна RX 570 4GB для офісу та Minecraft"},

      /* ── NVIDIA GT / LOW-END ENTRY ── */
      {"id":"gpu66","category":"gpu","name":"Gigabyte GT 1030 2GB","brand":"NVIDIA / Gigabyte","price":59,"socket":null,"ram_type":null,"power_w":30,"vram":"2GB GDDR5","tdp":30,"tier":"entry","perf":8,"image":"","desc":"GT 1030 — без додаткового живлення, для офісу та відео 4K"},
      {"id":"gpu67","category":"gpu","name":"ASUS Phoenix GT 1030 2GB","brand":"NVIDIA / ASUS","price":55,"socket":null,"ram_type":null,"power_w":30,"vram":"2GB GDDR5","tdp":30,"tier":"entry","perf":8,"image":"","desc":"Phoenix — GT 1030 пасивне/тихе охолодження від ASUS"},
      {"id":"gpu68","category":"gpu","name":"Zotac GT 1030 2GB LP","brand":"NVIDIA / Zotac","price":49,"socket":null,"ram_type":null,"power_w":30,"vram":"2GB DDR4","tdp":30,"tier":"entry","perf":6,"image":"","desc":"Low Profile — GT 1030 DDR4 для тонких корпусів без PCIe живлення"},
      {"id":"gpu69","category":"gpu","name":"MSI Aero ITX RX 550 4GB","brand":"AMD / MSI","price":49,"socket":null,"ram_type":null,"power_w":50,"vram":"4GB GDDR5","tdp":50,"tier":"entry","perf":9,"image":"","desc":"Aero ITX — RX 550 4GB мінімум для мультимонітора та відео"},
      {"id":"gpu70","category":"gpu","name":"Sapphire Pulse RX 550 4GB","brand":"AMD / Sapphire","price":45,"socket":null,"ram_type":null,"power_w":50,"vram":"4GB GDDR5","tdp":50,"tier":"entry","perf":9,"image":"","desc":"Pulse — RX 550 для офісу, 2 моніторів та легкої графіки"}
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     RAM — Оперативна пам'ять
  ══════════════════════════════════════════════════════════════ */
  "ram": {
    "label": "Оперативна пам'ять (RAM)", "short": "RAM", "icon": "💾", "accent": "#a855f7",
    "items": [
      /* ── DDR5 ULTRA ── */
      {"id":"ram1","category":"ram","name":"G.Skill Trident Z5 RGB 128GB DDR5-6400","brand":"G.Skill","price":649,"socket":null,"ram_type":"DDR5","power_w":16,"speed":"DDR5-6400","capacity":"128GB","cl":"CL32","tier":"ultra","perf":99,"image":"","desc":"128GB DDR5 для AI, ML та відеомонтажу — max конфігурація"},
      {"id":"ram2","category":"ram","name":"G.Skill Trident Z5 RGB 64GB DDR5-6000","brand":"G.Skill","price":299,"socket":null,"ram_type":"DDR5","power_w":10,"speed":"DDR5-6000","capacity":"64GB","cl":"CL30","tier":"ultra","perf":98,"image":"","desc":"64GB DDR5-6000 CL30 — ідеал для рендерингу"},
      {"id":"ram3","category":"ram","name":"G.Skill Trident Z5 RGB 32GB DDR5-7200","brand":"G.Skill","price":249,"socket":null,"ram_type":"DDR5","power_w":9,"speed":"DDR5-7200","capacity":"32GB","cl":"CL34","tier":"ultra","perf":97,"image":"","desc":"DDR5-7200 — для оверклокерів та екстремальних результатів"},
      {"id":"ram4","category":"ram","name":"Corsair Dominator Platinum 64GB DDR5-6600","brand":"Corsair","price":369,"socket":null,"ram_type":"DDR5","power_w":12,"speed":"DDR5-6600","capacity":"64GB","cl":"CL32","tier":"ultra","perf":97,"image":"","desc":"Dominator 64GB DDR5-6600 з вбудованим RGB"},
      {"id":"ram5","category":"ram","name":"Corsair Dominator Platinum 32GB DDR5-6400","brand":"Corsair","price":209,"socket":null,"ram_type":"DDR5","power_w":9,"speed":"DDR5-6400","capacity":"32GB","cl":"CL32","tier":"ultra","perf":95,"image":"","desc":"Культова серія DHX охолодженням та RGB"},
      /* ── DDR5 HIGH ── */
      {"id":"ram6","category":"ram","name":"G.Skill Trident Z5 32GB DDR5-6000","brand":"G.Skill","price":179,"socket":null,"ram_type":"DDR5","power_w":8,"speed":"DDR5-6000","capacity":"32GB","cl":"CL30","tier":"high","perf":90,"image":"","desc":"Оптимальна DDR5 для Ryzen 7000/9000 та Intel 13/14/Arrow Lake"},
      {"id":"ram7","category":"ram","name":"Kingston Fury Renegade 32GB DDR5-6400","brand":"Kingston","price":199,"socket":null,"ram_type":"DDR5","power_w":8,"speed":"DDR5-6400","capacity":"32GB","cl":"CL32","tier":"high","perf":92,"image":"","desc":"Renegade — преміум серія з радіатором та RGB"},
      {"id":"ram8","category":"ram","name":"Kingston Fury Beast 32GB DDR5-6000","brand":"Kingston","price":159,"socket":null,"ram_type":"DDR5","power_w":8,"speed":"DDR5-6000","capacity":"32GB","cl":"CL36","tier":"high","perf":86,"image":"","desc":"Beast DDR5-6000 — надійна пам'ять за розумну ціну"},
      {"id":"ram9","category":"ram","name":"Corsair Vengeance 32GB DDR5-5600","brand":"Corsair","price":139,"socket":null,"ram_type":"DDR5","power_w":8,"speed":"DDR5-5600","capacity":"32GB","cl":"CL36","tier":"high","perf":84,"image":"","desc":"Vengeance — перевірена 32GB DDR5 від Corsair"},
      /* ── DDR5 MID ── */
      {"id":"ram10","category":"ram","name":"Crucial Pro 32GB DDR5-5600","brand":"Crucial","price":119,"socket":null,"ram_type":"DDR5","power_w":7,"speed":"DDR5-5600","capacity":"32GB","cl":"CL40","tier":"mid","perf":78,"image":"","desc":"Доступна 32GB DDR5-5600 без зайвих деталей"},
      {"id":"ram11","category":"ram","name":"Kingston Fury Beast 16GB DDR5-5200","brand":"Kingston","price":69,"socket":null,"ram_type":"DDR5","power_w":6,"speed":"DDR5-5200","capacity":"16GB","cl":"CL40","tier":"mid","perf":70,"image":"","desc":"16GB DDR5 — мінімум для сучасних збірок"},
      {"id":"ram12","category":"ram","name":"Corsair Vengeance 16GB DDR5-4800","brand":"Corsair","price":59,"socket":null,"ram_type":"DDR5","power_w":5,"speed":"DDR5-4800","capacity":"16GB","cl":"CL40","tier":"mid","perf":65,"image":"","desc":"16GB DDR5 за базовою ціною від Corsair"},
      /* ── DDR5 BUDGET ── */
      {"id":"ram13","category":"ram","name":"Crucial Pro 16GB DDR5-4800","brand":"Crucial","price":49,"socket":null,"ram_type":"DDR5","power_w":5,"speed":"DDR5-4800","capacity":"16GB","cl":"CL40","tier":"budget","perf":60,"image":"","desc":"Найдешевший варіант DDR5 — базова частота"},
      /* ── DDR4 HIGH ── */
      {"id":"ram14","category":"ram","name":"G.Skill Ripjaws V 32GB DDR4-4000","brand":"G.Skill","price":99,"socket":null,"ram_type":"DDR4","power_w":7,"speed":"DDR4-4000","capacity":"32GB","cl":"CL18","tier":"high","perf":80,"image":"","desc":"Топова DDR4 — 4000 МГц CL18 для оверклокерів"},
      {"id":"ram15","category":"ram","name":"G.Skill Trident Z Neo 32GB DDR4-3600","brand":"G.Skill","price":89,"socket":null,"ram_type":"DDR4","power_w":7,"speed":"DDR4-3600","capacity":"32GB","cl":"CL14","tier":"high","perf":82,"image":"","desc":"Оптимізована для Ryzen DDR4-3600 CL14 з EXPO профілем"},
      /* ── DDR4 MID ── */
      {"id":"ram16","category":"ram","name":"Corsair Vengeance Pro 32GB DDR4-3600","brand":"Corsair","price":79,"socket":null,"ram_type":"DDR4","power_w":6,"speed":"DDR4-3600","capacity":"32GB","cl":"CL18","tier":"mid","perf":74,"image":"","desc":"Класичний вибір DDR4-3600 CL18 з радіаторами"},
      {"id":"ram17","category":"ram","name":"Kingston Fury Beast 32GB DDR4-3600","brand":"Kingston","price":69,"socket":null,"ram_type":"DDR4","power_w":6,"speed":"DDR4-3600","capacity":"32GB","cl":"CL18","tier":"mid","perf":72,"image":"","desc":"Beast DDR4-3600 — перевірена пам'ять за доступну ціну"},
      {"id":"ram18","category":"ram","name":"G.Skill Ripjaws V 16GB DDR4-3600","brand":"G.Skill","price":45,"socket":null,"ram_type":"DDR4","power_w":5,"speed":"DDR4-3600","capacity":"16GB","cl":"CL16","tier":"mid","perf":70,"image":"","desc":"DDR4-3600 CL16 для i5/i7 12/13 покоління"},
      /* ── DDR4 BUDGET ── */
      {"id":"ram19","category":"ram","name":"Corsair Vengeance LPX 16GB DDR4-3200","brand":"Corsair","price":35,"socket":null,"ram_type":"DDR4","power_w":4,"speed":"DDR4-3200","capacity":"16GB","cl":"CL16","tier":"budget","perf":60,"image":"","desc":"Найпопулярніша DDR4 у світі — перевірена роками"},
      {"id":"ram20","category":"ram","name":"Kingston ValueRAM 16GB DDR4-3200","brand":"Kingston","price":29,"socket":null,"ram_type":"DDR4","power_w":4,"speed":"DDR4-3200","capacity":"16GB","cl":"CL22","tier":"budget","perf":52,"image":"","desc":"Базовий бюджетний варіант DDR4"},
      {"id":"ram21","category":"ram","name":"Kingston Fury Beast 8GB DDR4-2666","brand":"Kingston","price":19,"socket":null,"ram_type":"DDR4","power_w":3,"speed":"DDR4-2666","capacity":"8GB","cl":"CL16","tier":"budget","perf":38,"image":"","desc":"Мінімальний обсяг — для офісних ПК та поновлення старих систем"}
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     MOTHERBOARD — Материнські плати
  ══════════════════════════════════════════════════════════════ */
  "motherboard": {
    "label": "Материнська плата (MB)", "short": "MB", "icon": "🔧", "accent": "#22c55e",
    "items": [
      /* ── ULTRA: AM5 ── */
      {"id":"mb1","category":"motherboard","name":"ASUS ROG Crosshair X870E Hero","brand":"ASUS","price":649,"socket":"AM5","ram_type":"DDR5","power_w":30,"chipset":"X870E","tier":"ultra","perf":99,"image":"","desc":"Топова плата для Ryzen 9000 — PCIe 5.0 x16 + x4"},
      {"id":"mb2","category":"motherboard","name":"MSI MEG X670E ACE","brand":"MSI","price":499,"socket":"AM5","ram_type":"DDR5","power_w":25,"chipset":"X670E","tier":"ultra","perf":95,"image":"","desc":"MEG ACE — потужна платформа для Ryzen 7000/9000"},
      {"id":"mb3","category":"motherboard","name":"ASUS ROG Strix X670E-F WiFi","brand":"ASUS","price":449,"socket":"AM5","ram_type":"DDR5","power_w":25,"chipset":"X670E","tier":"ultra","perf":93,"image":"","desc":"PCIe 5.0 x16 + x4 — для найвимогливіших збірок"},
      {"id":"mb4","category":"motherboard","name":"Gigabyte X670E AORUS Master","brand":"Gigabyte","price":419,"socket":"AM5","ram_type":"DDR5","power_w":25,"chipset":"X670E","tier":"ultra","perf":92,"image":"","desc":"AORUS Master — преміум VRM та PCIe 5.0 x4 NVMe"},
      /* ── ULTRA: LGA1700 ── */
      {"id":"mb5","category":"motherboard","name":"ASUS ROG Maximus Z790 Hero","brand":"ASUS","price":599,"socket":"LGA1700","ram_type":"DDR5","power_w":30,"chipset":"Z790","tier":"ultra","perf":98,"image":"","desc":"Флагманська Z790 для екстремального OC Intel"},
      {"id":"mb6","category":"motherboard","name":"Gigabyte Z790 AORUS Master","brand":"Gigabyte","price":399,"socket":"LGA1700","ram_type":"DDR5","power_w":25,"chipset":"Z790","tier":"high","perf":88,"image":"","desc":"AORUS Master — преміум функції для Core i7/i9"},
      /* ── ULTRA: LGA1851 ── */
      {"id":"mb7","category":"motherboard","name":"ASUS ROG Maximus Z890 Apex","brand":"ASUS","price":699,"socket":"LGA1851","ram_type":"DDR5","power_w":35,"chipset":"Z890","tier":"ultra","perf":100,"image":"","desc":"Флагман Z890 для Intel Core Ultra 200S — OC монстр"},
      {"id":"mb8","category":"motherboard","name":"MSI MEG Z890 ACE","brand":"MSI","price":549,"socket":"LGA1851","ram_type":"DDR5","power_w":28,"chipset":"Z890","tier":"ultra","perf":96,"image":"","desc":"MEG ACE Z890 — PCIe 5.0 x16 та WiFi 7 для Arrow Lake"},
      /* ── HIGH ── */
      {"id":"mb9","category":"motherboard","name":"ASUS ROG Strix B650E-F WiFi","brand":"ASUS","price":299,"socket":"AM5","ram_type":"DDR5","power_w":20,"chipset":"B650E","tier":"high","perf":82,"image":"","desc":"PCIe 5.0 для NVMe нового покоління — AM5"},
      {"id":"mb10","category":"motherboard","name":"Gigabyte B650E AORUS Pro X","brand":"Gigabyte","price":279,"socket":"AM5","ram_type":"DDR5","power_w":20,"chipset":"B650E","tier":"high","perf":80,"image":"","desc":"AORUS Pro з PCIe 5.0 NVMe та WiFi 6E"},
      /* ── MID ── */
      {"id":"mb11","category":"motherboard","name":"MSI MAG B650 TOMAHAWK WiFi","brand":"MSI","price":229,"socket":"AM5","ram_type":"DDR5","power_w":20,"chipset":"B650","tier":"mid","perf":75,"image":"","desc":"Найпопулярніша середнього класу плата для Ryzen на AM5"},
      {"id":"mb12","category":"motherboard","name":"ASUS TUF Gaming B650-Plus WiFi","brand":"ASUS","price":199,"socket":"AM5","ram_type":"DDR5","power_w":18,"chipset":"B650","tier":"mid","perf":73,"image":"","desc":"TUF Gaming — міцна B650 плата для Ryzen 7000/9000"},
      {"id":"mb13","category":"motherboard","name":"MSI PRO Z790-A WiFi","brand":"MSI","price":199,"socket":"LGA1700","ram_type":"DDR5","power_w":20,"chipset":"Z790","tier":"mid","perf":72,"image":"","desc":"WiFi 6E та 2.5G Ethernet для Intel 12/13/14 gen"},
      {"id":"mb14","category":"motherboard","name":"Gigabyte B760 AORUS Elite AX","brand":"Gigabyte","price":179,"socket":"LGA1700","ram_type":"DDR5","power_w":18,"chipset":"B760","tier":"mid","perf":70,"image":"","desc":"Доступна B760 з WiFi для Core i5/i7"},
      /* ── BUDGET ── */
      {"id":"mb15","category":"motherboard","name":"ASRock B650M Pro RS WiFi","brand":"ASRock","price":149,"socket":"AM5","ram_type":"DDR5","power_w":15,"chipset":"B650","tier":"budget","perf":58,"image":"","desc":"Бюджетна плата для AM5 — доступний старт на Ryzen"},
      {"id":"mb16","category":"motherboard","name":"MSI PRO B760M-A WiFi DDR4","brand":"MSI","price":109,"socket":"LGA1700","ram_type":"DDR4","power_w":14,"chipset":"B760","tier":"budget","perf":52,"image":"","desc":"B760 mATX під DDR4 з WiFi — для бюджетних Intel збірок"},
      {"id":"mb17","category":"motherboard","name":"MSI PRO H610M-G DDR4","brand":"MSI","price":89,"socket":"LGA1700","ram_type":"DDR4","power_w":12,"chipset":"H610","tier":"budget","perf":46,"image":"","desc":"H610 mATX — мінімалістична плата під i3/i5 та DDR4"},
      {"id":"mb18","category":"motherboard","name":"Gigabyte H610M S2H DDR4","brand":"Gigabyte","price":75,"socket":"LGA1700","ram_type":"DDR4","power_w":12,"chipset":"H610","tier":"budget","perf":44,"image":"","desc":"Найдешевша плата під 12/13/14 покоління Intel"}
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     STORAGE — Накопичувачі
  ══════════════════════════════════════════════════════════════ */
  "storage": {
    "label": "Накопичувач (SSD)", "short": "SSD", "icon": "💿", "accent": "#f59e0b",
    "items": [
      /* ── ULTRA NVMe Gen5 ── */
      {"id":"st1","category":"storage","name":"Samsung 9100 Pro 4TB NVMe Gen5","brand":"Samsung","price":449,"socket":null,"ram_type":null,"power_w":9,"type":"NVMe M.2 Gen5","capacity":"4TB","read":"14800 MB/s","tier":"ultra","perf":100,"image":"","desc":"PCIe 5.0 — найшвидший споживчий NVMe 4TB"},
      {"id":"st2","category":"storage","name":"Samsung 9100 Pro 2TB NVMe Gen5","brand":"Samsung","price":249,"socket":null,"ram_type":null,"power_w":8,"type":"NVMe M.2 Gen5","capacity":"2TB","read":"14800 MB/s","tier":"ultra","perf":100,"image":"","desc":"Флагман PCIe 5.0 від Samsung — 14800 МБ/с"},
      {"id":"st3","category":"storage","name":"WD Black SN850X 4TB NVMe","brand":"WD","price":319,"socket":null,"ram_type":null,"power_w":9,"type":"NVMe M.2","capacity":"4TB","read":"7300 MB/s","tier":"ultra","perf":95,"image":"","desc":"4TB PCIe 4.0 — максимум простору для ігор"},
      {"id":"st4","category":"storage","name":"Seagate FireCuda 540 2TB Gen5","brand":"Seagate","price":239,"socket":null,"ram_type":null,"power_w":9,"type":"NVMe M.2 Gen5","capacity":"2TB","read":"10000 MB/s","tier":"ultra","perf":98,"image":"","desc":"PCIe 5.0 без throttling — 10000 МБ/с без радіатора"},
      /* ── HIGH NVMe Gen4 ── */
      {"id":"st5","category":"storage","name":"Samsung 990 Pro 2TB NVMe","brand":"Samsung","price":169,"socket":null,"ram_type":null,"power_w":7,"type":"NVMe M.2","capacity":"2TB","read":"7450 MB/s","tier":"high","perf":96,"image":"","desc":"Найкращий PCIe 4.0 Gen4 NVMe від Samsung"},
      {"id":"st6","category":"storage","name":"WD Black SN850X 2TB NVMe","brand":"WD","price":159,"socket":null,"ram_type":null,"power_w":7,"type":"NVMe M.2","capacity":"2TB","read":"7300 MB/s","tier":"high","perf":94,"image":"","desc":"Оптимізований для DirectStorage та Xbox Series X"},
      {"id":"st7","category":"storage","name":"Seagate FireCuda 530 2TB","brand":"Seagate","price":189,"socket":null,"ram_type":null,"power_w":8,"type":"NVMe M.2","capacity":"2TB","read":"7300 MB/s","tier":"high","perf":92,"image":"","desc":"PCIe 4.0 без throttling під навантаженням"},
      {"id":"st8","category":"storage","name":"Samsung 990 Pro 1TB NVMe","brand":"Samsung","price":89,"socket":null,"ram_type":null,"power_w":6,"type":"NVMe M.2","capacity":"1TB","read":"7450 MB/s","tier":"high","perf":90,"image":"","desc":"Флагман Samsung в 1TB варіанті — найшвидший 1TB"},
      {"id":"st9","category":"storage","name":"WD Black SN850X 1TB","brand":"WD","price":79,"socket":null,"ram_type":null,"power_w":6,"type":"NVMe M.2","capacity":"1TB","read":"7300 MB/s","tier":"high","perf":88,"image":"","desc":"PCIe 4.0 x4 з DirectStorage підтримкою"},
      {"id":"st10","category":"storage","name":"Kingston Fury Renegade 2TB NVMe","brand":"Kingston","price":149,"socket":null,"ram_type":null,"power_w":7,"type":"NVMe M.2","capacity":"2TB","read":"7300 MB/s","tier":"high","perf":91,"image":"","desc":"Renegade — топовий NVMe від Kingston з 2TB"},
      /* ── MID NVMe ── */
      {"id":"st11","category":"storage","name":"Crucial P5 Plus 2TB NVMe","brand":"Crucial","price":119,"socket":null,"ram_type":null,"power_w":6,"type":"NVMe M.2","capacity":"2TB","read":"6600 MB/s","tier":"mid","perf":78,"image":"","desc":"2TB PCIe 4.0 за розумну ціну від Crucial"},
      {"id":"st12","category":"storage","name":"Crucial P3 Plus 2TB NVMe","brand":"Crucial","price":75,"socket":null,"ram_type":null,"power_w":5,"type":"NVMe M.2","capacity":"2TB","read":"5000 MB/s","tier":"mid","perf":70,"image":"","desc":"Великий об'єм Gen4 за доступну ціну"},
      {"id":"st13","category":"storage","name":"Samsung 870 EVO 2TB SATA","brand":"Samsung","price":139,"socket":null,"ram_type":null,"power_w":3,"type":"SATA 2.5\"","capacity":"2TB","read":"560 MB/s","tier":"mid","perf":55,"image":"","desc":"Найкращий SATA SSD 2TB для зберігання"},
      {"id":"st14","category":"storage","name":"Samsung 870 EVO 1TB SATA","brand":"Samsung","price":79,"socket":null,"ram_type":null,"power_w":3,"type":"SATA 2.5\"","capacity":"1TB","read":"560 MB/s","tier":"mid","perf":55,"image":"","desc":"Найкращий SATA SSD — стабільний та надійний"},
      /* ── BUDGET ── */
      {"id":"st15","category":"storage","name":"Kingston NV3 2TB NVMe","brand":"Kingston","price":79,"socket":null,"ram_type":null,"power_w":4,"type":"NVMe M.2","capacity":"2TB","read":"6000 MB/s","tier":"budget","perf":66,"image":"","desc":"NV3 2TB — відмінний бюджетний NVMe PCIe 4.0"},
      {"id":"st16","category":"storage","name":"Kingston NV2 1TB NVMe","brand":"Kingston","price":49,"socket":null,"ram_type":null,"power_w":4,"type":"NVMe M.2","capacity":"1TB","read":"3500 MB/s","tier":"budget","perf":62,"image":"","desc":"Бюджетний NVMe PCIe 4.0 для стартових збірок"},
      {"id":"st17","category":"storage","name":"Crucial BX500 2TB SATA","brand":"Crucial","price":79,"socket":null,"ram_type":null,"power_w":3,"type":"SATA 2.5\"","capacity":"2TB","read":"540 MB/s","tier":"budget","perf":45,"image":"","desc":"2TB SATA SSD — бюджетне рішення для зберігання"},
      {"id":"st18","category":"storage","name":"WD Blue SN580 500GB NVMe","brand":"WD","price":39,"socket":null,"ram_type":null,"power_w":3,"type":"NVMe M.2","capacity":"500GB","read":"4150 MB/s","tier":"budget","perf":55,"image":"","desc":"Доступний NVMe для системного диску бюджетних збірок"},
      {"id":"st19","category":"storage","name":"Seagate BarraCuda 4TB HDD","brand":"Seagate","price":79,"socket":null,"ram_type":null,"power_w":6,"type":"HDD 3.5\"","capacity":"4TB","read":"210 MB/s","tier":"budget","perf":28,"image":"","desc":"4TB HDD для зберігання ігор, відео та резервних копій"},
      {"id":"st20","category":"storage","name":"WD Blue 4TB HDD","brand":"WD","price":85,"socket":null,"ram_type":null,"power_w":6,"type":"HDD 3.5\"","capacity":"4TB","read":"210 MB/s","tier":"budget","perf":28,"image":"","desc":"Надійний Blue HDD від WD — 4TB для архіву"}
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     PSU — Блоки живлення
  ══════════════════════════════════════════════════════════════ */
  "psu": {
    "label": "Блок живлення (PSU)", "short": "PSU", "icon": "🔌", "accent": "#ef4444",
    "items": [
      /* ── ULTRA ── */
      {"id":"psu1","category":"psu","name":"Corsair AX1600i 1600W","brand":"Corsair","price":449,"socket":null,"ram_type":null,"power_w":1600,"wattage":1600,"rating":"80+ Titanium","tier":"ultra","perf":99,"image":"","desc":"Digital Titanium — максимум для RTX 5090 SLI систем"},
      {"id":"psu2","category":"psu","name":"Corsair HX1500i 1500W","brand":"Corsair","price":379,"socket":null,"ram_type":null,"power_w":1500,"wattage":1500,"rating":"80+ Platinum","tier":"ultra","perf":98,"image":"","desc":"ATX 3.0 та 600W PCIe конектор для RTX 5090"},
      {"id":"psu3","category":"psu","name":"Seasonic Prime TX-1300","brand":"Seasonic","price":349,"socket":null,"ram_type":null,"power_w":1300,"wattage":1300,"rating":"80+ Titanium","tier":"ultra","perf":97,"image":"","desc":"Titanium ефективність — найкраще у класі"},
      {"id":"psu4","category":"psu","name":"be quiet! Dark Power 13 1300W","brand":"be quiet!","price":319,"socket":null,"ram_type":null,"power_w":1300,"wattage":1300,"rating":"80+ Titanium","tier":"ultra","perf":97,"image":"","desc":"Тихий Titanium БЖ від be quiet! для топових збірок"},
      /* ── HIGH ── */
      {"id":"psu5","category":"psu","name":"ASUS ROG Thor 1000P2","brand":"ASUS","price":299,"socket":null,"ram_type":null,"power_w":1000,"wattage":1000,"rating":"80+ Platinum","tier":"high","perf":92,"image":"","desc":"ROG Thor з OLED дисплеєм — 1000W Platinum"},
      {"id":"psu6","category":"psu","name":"Corsair RM1000x 1000W","brand":"Corsair","price":199,"socket":null,"ram_type":null,"power_w":1000,"wattage":1000,"rating":"80+ Gold","tier":"high","perf":88,"image":"","desc":"Повністю модульний Gold 1000W з тихим режимом"},
      {"id":"psu7","category":"psu","name":"Seasonic Focus GX-1000","brand":"Seasonic","price":179,"socket":null,"ram_type":null,"power_w":1000,"wattage":1000,"rating":"80+ Gold","tier":"high","perf":88,"image":"","desc":"Focus GX 1000W — надійний Gold від Seasonic"},
      {"id":"psu8","category":"psu","name":"be quiet! Straight Power 12 850W","brand":"be quiet!","price":169,"socket":null,"ram_type":null,"power_w":850,"wattage":850,"rating":"80+ Platinum","tier":"high","perf":86,"image":"","desc":"Тихий і ефективний Platinum 850W від be quiet!"},
      {"id":"psu9","category":"psu","name":"Corsair RM850x 850W","brand":"Corsair","price":149,"socket":null,"ram_type":null,"power_w":850,"wattage":850,"rating":"80+ Gold","tier":"high","perf":85,"image":"","desc":"RM850x — Zero RPM mode та ATX 3.0 підтримка"},
      /* ── MID ── */
      {"id":"psu10","category":"psu","name":"Seasonic Focus GX-850","brand":"Seasonic","price":149,"socket":null,"ram_type":null,"power_w":850,"wattage":850,"rating":"80+ Gold","tier":"mid","perf":82,"image":"","desc":"Найнадійніший у середньому класі від Seasonic"},
      {"id":"psu11","category":"psu","name":"Corsair RM750e 750W","brand":"Corsair","price":119,"socket":null,"ram_type":null,"power_w":750,"wattage":750,"rating":"80+ Gold","tier":"mid","perf":78,"image":"","desc":"ATX 3.0 сумісний Gold 750W з 12VHPWR"},
      {"id":"psu12","category":"psu","name":"MSI MAG A750GL PCIE5","brand":"MSI","price":109,"socket":null,"ram_type":null,"power_w":750,"wattage":750,"rating":"80+ Gold","tier":"mid","perf":76,"image":"","desc":"PCIe 5.0 готовий Gold 750W від MSI"},
      {"id":"psu13","category":"psu","name":"be quiet! Pure Power 12 750W","brand":"be quiet!","price":99,"socket":null,"ram_type":null,"power_w":750,"wattage":750,"rating":"80+ Gold","tier":"mid","perf":74,"image":"","desc":"Pure Power 12 — тихий та стабільний Gold 750W"},
      /* ── BUDGET ── */
      {"id":"psu14","category":"psu","name":"Corsair CV750 750W","brand":"Corsair","price":89,"socket":null,"ram_type":null,"power_w":750,"wattage":750,"rating":"80+ Bronze","tier":"budget","perf":65,"image":"","desc":"Базова надійність для бюджетних збірок"},
      {"id":"psu15","category":"psu","name":"be quiet! Pure Power 11 650W","brand":"be quiet!","price":79,"socket":null,"ram_type":null,"power_w":650,"wattage":650,"rating":"80+ Gold","tier":"budget","perf":62,"image":"","desc":"Тихий та стабільний Gold 650W для бюджету"},
      {"id":"psu16","category":"psu","name":"Chieftec Proton 600W","brand":"Chieftec","price":55,"socket":null,"ram_type":null,"power_w":600,"wattage":600,"rating":"80+ Bronze","tier":"budget","perf":50,"image":"","desc":"Бюджетний Bronze БЖ — базовий вибір для слабких збірок"}
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     CASE — Корпуси
  ══════════════════════════════════════════════════════════════ */
  "case": {
    "label": "Корпус", "short": "КОРПУС", "icon": "🖥️", "accent": "#6366f1",
    "items": [
      /* ── ULTRA ── */
      {"id":"case1","category":"case","name":"Lian Li O11 Dynamic EVO XL","brand":"Lian Li","price":229,"socket":null,"ram_type":null,"power_w":0,"formFactor":"Full Tower","tier":"ultra","perf":96,"image":"","desc":"Культовий Full Tower для СВО — скло з 3 сторін"},
      {"id":"case2","category":"case","name":"Fractal Design Torrent RGB","brand":"Fractal","price":219,"socket":null,"ram_type":null,"power_w":0,"formFactor":"Full Tower","tier":"ultra","perf":94,"image":"","desc":"2×180мм вентилятори знизу — відмінна вентиляція"},
      {"id":"case3","category":"case","name":"Corsair 7000D Airflow","brand":"Corsair","price":249,"socket":null,"ram_type":null,"power_w":0,"formFactor":"Full Tower","tier":"ultra","perf":95,"image":"","desc":"Full Tower з трьома 140мм вентиляторами в комплекті"},
      {"id":"case4","category":"case","name":"Lian Li PC-O11 Air EVO","brand":"Lian Li","price":189,"socket":null,"ram_type":null,"power_w":0,"formFactor":"Full Tower","tier":"ultra","perf":93,"image":"","desc":"Air EVO — максимальний airflow + місце для 3 радіаторів"},
      /* ── HIGH ── */
      {"id":"case5","category":"case","name":"Lian Li O11 Air Mini","brand":"Lian Li","price":129,"socket":null,"ram_type":null,"power_w":0,"formFactor":"Mid Tower","tier":"high","perf":84,"image":"","desc":"Компактна O11 з відмінним airflow для Mid Tower"},
      {"id":"case6","category":"case","name":"NZXT H7 Flow RGB","brand":"NZXT","price":149,"socket":null,"ram_type":null,"power_w":0,"formFactor":"Mid Tower","tier":"high","perf":82,"image":"","desc":"Сітчаста передня панель + RGB підсвітка"},
      {"id":"case7","category":"case","name":"be quiet! Pure Base 500DX","brand":"be quiet!","price":129,"socket":null,"ram_type":null,"power_w":0,"formFactor":"Mid Tower","tier":"high","perf":80,"image":"","desc":"Тихий корпус з відмінним airflow та ARGB вентиляторами"},
      {"id":"case8","category":"case","name":"Phanteks Eclipse G360A","brand":"Phanteks","price":119,"socket":null,"ram_type":null,"power_w":0,"formFactor":"Mid Tower","tier":"high","perf":83,"image":"","desc":"Сітчатий фронт + 3 DRGB вентилятори в комплекті"},
      /* ── MID ── */
      {"id":"case9","category":"case","name":"Corsair 4000D Airflow","brand":"Corsair","price":109,"socket":null,"ram_type":null,"power_w":0,"formFactor":"Mid Tower","tier":"mid","perf":76,"image":"","desc":"Preinstalled вентилятори та відмінний airflow"},
      {"id":"case10","category":"case","name":"Fractal Design Pop Air","brand":"Fractal","price":89,"socket":null,"ram_type":null,"power_w":0,"formFactor":"Mid Tower","tier":"mid","perf":74,"image":"","desc":"Скандинавський мінімалізм та хороший airflow"},
      {"id":"case11","category":"case","name":"NZXT H5 Flow","brand":"NZXT","price":99,"socket":null,"ram_type":null,"power_w":0,"formFactor":"Mid Tower","tier":"mid","perf":75,"image":"","desc":"Компактний Mid Tower з сітчатим фронтом від NZXT"},
      /* ── BUDGET ── */
      {"id":"case12","category":"case","name":"DeepCool CC560 V2 ARGB","brand":"DeepCool","price":69,"socket":null,"ram_type":null,"power_w":0,"formFactor":"Mid Tower","tier":"budget","perf":62,"image":"","desc":"4 ARGB вентилятори в комплекті за бюджетну ціну"},
      {"id":"case13","category":"case","name":"Montech X3 Mesh","brand":"Montech","price":59,"socket":null,"ram_type":null,"power_w":0,"formFactor":"Mid Tower","tier":"budget","perf":60,"image":"","desc":"Montech X3 — 3 ARGB вентилятори та сітчатий фронт"},
      {"id":"case14","category":"case","name":"Zalman S5","brand":"Zalman","price":45,"socket":null,"ram_type":null,"power_w":0,"formFactor":"Mid Tower","tier":"budget","perf":52,"image":"","desc":"Базовий корпус із загартованим склом для бюджету"}
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     COOLING — Системи охолодження
  ══════════════════════════════════════════════════════════════ */
  "cooling": {
    "label": "Система охолодження", "short": "COOLING", "icon": "❄️", "accent": "#06b6d4",
    "items": [
      /* ── ULTRA СВО ── */
      {"id":"cool1","category":"cooling","name":"NZXT Kraken Elite 360 RGB","brand":"NZXT","price":279,"socket":null,"ram_type":null,"power_w":18,"type":"СВО 360мм","tier":"ultra","perf":96,"image":"","desc":"LCD-дисплей на помпі та три 120мм ARGB вентилятори"},
      {"id":"cool2","category":"cooling","name":"Corsair iCUE H150i Elite LCD","brand":"Corsair","price":249,"socket":null,"ram_type":null,"power_w":18,"type":"СВО 360мм","tier":"ultra","perf":94,"image":"","desc":"Повноколірний IPS LCD екран на помпі"},
      {"id":"cool3","category":"cooling","name":"ASUS ROG Ryuo III 360 ARGB","brand":"ASUS","price":259,"socket":null,"ram_type":null,"power_w":18,"type":"СВО 360мм","tier":"ultra","perf":95,"image":"","desc":"ROG 360мм AIO з LCD-дисплеєм та трьома ROG вентиляторами"},
      {"id":"cool4","category":"cooling","name":"Lian Li Galahad II Trinity 360","brand":"Lian Li","price":189,"socket":null,"ram_type":null,"power_w":15,"type":"СВО 360мм","tier":"high","perf":90,"image":"","desc":"Три ARGB вентилятори та відмінне охолодження для CPU"},
      {"id":"cool5","category":"cooling","name":"DeepCool LT720 360мм","brand":"DeepCool","price":139,"socket":null,"ram_type":null,"power_w":15,"type":"СВО 360мм","tier":"high","perf":88,"image":"","desc":"Топова продуктивність за розумну ціну — 360мм"},
      /* ── HIGH СВО 280/240 ── */
      {"id":"cool6","category":"cooling","name":"be quiet! Silent Loop 2 280мм","brand":"be quiet!","price":149,"socket":null,"ram_type":null,"power_w":14,"type":"СВО 280мм","tier":"high","perf":86,"image":"","desc":"Тихий 280мм AIO — be quiet! Silent стандарт"},
      {"id":"cool7","category":"cooling","name":"Corsair iCUE H100i RGB Elite","brand":"Corsair","price":129,"socket":null,"ram_type":null,"power_w":14,"type":"СВО 240мм","tier":"high","perf":84,"image":"","desc":"240мм AIO з двома 120мм RGB вентиляторами"},
      {"id":"cool8","category":"cooling","name":"DeepCool LT520 240мм","brand":"DeepCool","price":99,"socket":null,"ram_type":null,"power_w":13,"type":"СВО 240мм","tier":"mid","perf":82,"image":"","desc":"Доступний 240мм AIO з ARGB підсвіткою від DeepCool"},
      {"id":"cool9","category":"cooling","name":"NZXT Kraken 240 RGB","brand":"NZXT","price":119,"socket":null,"ram_type":null,"power_w":13,"type":"СВО 240мм","tier":"mid","perf":80,"image":"","desc":"Kraken 240 — NZXT CAM управління та ARGB вентилятори"},
      /* ── HIGH/MID ПОВІТРЯНЕ ── */
      {"id":"cool10","category":"cooling","name":"Noctua NH-D15 chromax.black","brand":"Noctua","price":109,"socket":null,"ram_type":null,"power_w":10,"type":"Повітряне","tier":"high","perf":88,"image":"","desc":"Легенда повітряного охолодження — тихо та ефективно"},
      {"id":"cool11","category":"cooling","name":"be quiet! Dark Rock Pro 5","brand":"be quiet!","price":99,"socket":null,"ram_type":null,"power_w":9,"type":"Повітряне","tier":"high","perf":86,"image":"","desc":"Надтихий кулер для CPU до 250W TDP"},
      {"id":"cool12","category":"cooling","name":"DeepCool AK620 Digital","brand":"DeepCool","price":79,"socket":null,"ram_type":null,"power_w":9,"type":"Повітряне","tier":"mid","perf":82,"image":"","desc":"Вежевий кулер з LCD-екраном температури"},
      {"id":"cool13","category":"cooling","name":"Thermalright Peerless Assassin 120 SE","brand":"Thermalright","price":39,"socket":null,"ram_type":null,"power_w":7,"type":"Повітряне","tier":"mid","perf":80,"image":"","desc":"Найкраще співвідношення ціна/охолодження на ринку"},
      {"id":"cool14","category":"cooling","name":"DeepCool AK620 ZERO DARK","brand":"DeepCool","price":59,"socket":null,"ram_type":null,"power_w":7,"type":"Повітряне","tier":"mid","perf":74,"image":"","desc":"Twin-tower кулер для CPU до 260W — без RGB"},
      {"id":"cool15","category":"cooling","name":"Noctua NH-U12S redux","brand":"Noctua","price":49,"socket":null,"ram_type":null,"power_w":6,"type":"Повітряне","tier":"mid","perf":70,"image":"","desc":"Компактний одновежевий Noctua — тихий та надійний"},
      /* ── BUDGET ── */
      {"id":"cool16","category":"cooling","name":"Cooler Master Hyper 212 Black","brand":"Cooler Master","price":39,"socket":null,"ram_type":null,"power_w":5,"type":"Повітряне","tier":"budget","perf":56,"image":"","desc":"Класика бюджетного охолодження — перевірений роками"},
      {"id":"cool17","category":"cooling","name":"ID-Cooling SE-224-XT ARGB","brand":"ID-Cooling","price":25,"socket":null,"ram_type":null,"power_w":4,"type":"Повітряне","tier":"budget","perf":48,"image":"","desc":"Найдешевший кулер з ARGB та нормальним охолодженням"},
      {"id":"cool18","category":"cooling","name":"Cooler Master i70C","brand":"Cooler Master","price":15,"socket":null,"ram_type":null,"power_w":3,"type":"Повітряне","tier":"budget","perf":35,"image":"","desc":"Базовий Stock-замінник для ПК початкового рівня"}
    ]
  }
};
