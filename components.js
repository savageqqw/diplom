window.COMPONENTS_DATA = {
  "cpu": {
    "label": "Процесор (CPU)", "short": "CPU", "icon": "⚡", "accent": "#ff6b35",
    "items": [
      {"id":"cpu1","category":"cpu","name":"AMD Ryzen 9 7950X","brand":"AMD","price":699,"socket":"AM5","ram_type":"DDR5","power_w":170,"cores":16,"threads":32,"boost":"5.7 GHz","tdp":170,"tier":"ultra","perf":98,"image":"","desc":"Флагман для стримінгу та рендерингу"},
      {"id":"cpu2","category":"cpu","name":"Intel Core i9-14900K","brand":"Intel","price":589,"socket":"LGA1700","ram_type":"DDR5","power_w":253,"cores":24,"threads":32,"boost":"6.0 GHz","tdp":253,"tier":"ultra","perf":96,"image":"","desc":"Найшвидший ігровий процесор Intel"},
      {"id":"cpu3","category":"cpu","name":"AMD Ryzen 9 7900X","brand":"AMD","price":449,"socket":"AM5","ram_type":"DDR5","power_w":170,"cores":12,"threads":24,"boost":"5.6 GHz","tdp":170,"tier":"ultra","perf":92,"image":"","desc":"12 ядер для важких творчих задач"},
      {"id":"cpu4","category":"cpu","name":"Intel Core i9-13900K","brand":"Intel","price":499,"socket":"LGA1700","ram_type":"DDR5","power_w":253,"cores":24,"threads":32,"boost":"5.8 GHz","tdp":253,"tier":"ultra","perf":94,"image":"","desc":"Попередник i9-14900K — ще актуальний"},
      {"id":"cpu5","category":"cpu","name":"AMD Ryzen 9 7900X3D","brand":"AMD","price":399,"socket":"AM5","ram_type":"DDR5","power_w":120,"cores":12,"threads":24,"boost":"5.6 GHz","tdp":120,"tier":"ultra","perf":93,"image":"","desc":"3D V-Cache для стримінгу та рендерингу"},
      {"id":"cpu6","category":"cpu","name":"AMD Ryzen 7 7800X3D","brand":"AMD","price":349,"socket":"AM5","ram_type":"DDR5","power_w":120,"cores":8,"threads":16,"boost":"5.0 GHz","tdp":120,"tier":"high","perf":90,"image":"","desc":"Найкращий геймерський CPU завдяки 3D V-Cache"},
      {"id":"cpu7","category":"cpu","name":"AMD Ryzen 7 7700X","brand":"AMD","price":299,"socket":"AM5","ram_type":"DDR5","power_w":105,"cores":8,"threads":16,"boost":"5.4 GHz","tdp":105,"tier":"high","perf":82,"image":"","desc":"Оптимальний вибір для гравців"},
      {"id":"cpu8","category":"cpu","name":"Intel Core i7-14700K","brand":"Intel","price":409,"socket":"LGA1700","ram_type":"DDR5","power_w":253,"cores":20,"threads":28,"boost":"5.6 GHz","tdp":253,"tier":"high","perf":88,"image":"","desc":"Потужне рішення для ентузіастів"},
      {"id":"cpu9","category":"cpu","name":"Intel Core i7-13700K","brand":"Intel","price":349,"socket":"LGA1700","ram_type":"DDR5","power_w":253,"cores":16,"threads":24,"boost":"5.4 GHz","tdp":253,"tier":"high","perf":84,"image":"","desc":"Попереднє покоління — все ще відмінний вибір"},
      {"id":"cpu10","category":"cpu","name":"AMD Ryzen 5 7600X","brand":"AMD","price":199,"socket":"AM5","ram_type":"DDR5","power_w":105,"cores":6,"threads":12,"boost":"5.3 GHz","tdp":105,"tier":"mid","perf":72,"image":"","desc":"Найкращий у своєму ціновому діапазоні"},
      {"id":"cpu11","category":"cpu","name":"Intel Core i5-14600K","brand":"Intel","price":319,"socket":"LGA1700","ram_type":"DDR5","power_w":181,"cores":14,"threads":20,"boost":"5.3 GHz","tdp":181,"tier":"mid","perf":76,"image":"","desc":"Збалансоване рішення для гравців"},
      {"id":"cpu12","category":"cpu","name":"Intel Core i5-13600K","brand":"Intel","price":279,"socket":"LGA1700","ram_type":"DDR5","power_w":181,"cores":14,"threads":20,"boost":"5.1 GHz","tdp":181,"tier":"mid","perf":74,"image":"","desc":"Відмінний баланс ціна/продуктивність"},
      {"id":"cpu13","category":"cpu","name":"AMD Ryzen 5 7600","brand":"AMD","price":179,"socket":"AM5","ram_type":"DDR5","power_w":65,"cores":6,"threads":12,"boost":"5.1 GHz","tdp":65,"tier":"mid","perf":68,"image":"","desc":"Економна версія 7600X"},
      {"id":"cpu14","category":"cpu","name":"AMD Ryzen 5 7500F","brand":"AMD","price":149,"socket":"AM5","ram_type":"DDR5","power_w":65,"cores":6,"threads":12,"boost":"5.0 GHz","tdp":65,"tier":"budget","perf":62,"image":"","desc":"Бюджетний вибір на платформі AM5"},
      {"id":"cpu15","category":"cpu","name":"Intel Core i5-12400F","brand":"Intel","price":129,"socket":"LGA1700","ram_type":"DDR4","power_w":65,"cores":6,"threads":12,"boost":"4.4 GHz","tdp":65,"tier":"budget","perf":58,"image":"","desc":"Популярний бюджетник під DDR4"},
      {"id":"cpu16","category":"cpu","name":"Intel Core i3-14100F","brand":"Intel","price":99,"socket":"LGA1700","ram_type":"DDR4","power_w":58,"cores":4,"threads":8,"boost":"4.7 GHz","tdp":58,"tier":"budget","perf":48,"image":"","desc":"Для офісу та базового геймінгу"},
      {"id":"cpu17","category":"cpu","name":"AMD Ryzen 3 4100","brand":"AMD","price":79,"socket":"AM4","ram_type":"DDR4","power_w":65,"cores":4,"threads":8,"boost":"4.0 GHz","tdp":65,"tier":"budget","perf":40,"image":"","desc":"Мінімальний бюджет для ігрового ПК"}
    ]
  },
  "gpu": {
    "label": "Відеокарта (GPU)", "short": "GPU", "icon": "🎮", "accent": "#00d4ff",
    "items": [
      {"id":"gpu1","category":"gpu","name":"NVIDIA RTX 4090 24GB","brand":"NVIDIA","price":1599,"socket":null,"ram_type":null,"power_w":450,"vram":"24GB GDDR6X","tdp":450,"tier":"ultra","perf":100,"image":"","desc":"Абсолютний лідер — 4K Ultra 144fps"},
      {"id":"gpu2","category":"gpu","name":"AMD Radeon RX 7900 XTX","brand":"AMD","price":999,"socket":null,"ram_type":null,"power_w":355,"vram":"24GB GDDR6","tdp":355,"tier":"ultra","perf":90,"image":"","desc":"Найкраща від AMD для 4K"},
      {"id":"gpu3","category":"gpu","name":"NVIDIA RTX 4080 Super","brand":"NVIDIA","price":999,"socket":null,"ram_type":null,"power_w":320,"vram":"16GB GDDR6X","tdp":320,"tier":"high","perf":85,"image":"","desc":"4K gaming з трасуванням променів"},
      {"id":"gpu4","category":"gpu","name":"AMD Radeon RX 7900 XT","brand":"AMD","price":799,"socket":null,"ram_type":null,"power_w":315,"vram":"20GB GDDR6","tdp":315,"tier":"high","perf":82,"image":"","desc":"20GB VRAM для вимогливих задач"},
      {"id":"gpu5","category":"gpu","name":"NVIDIA RTX 4070 Ti Super","brand":"NVIDIA","price":799,"socket":null,"ram_type":null,"power_w":285,"vram":"16GB GDDR6X","tdp":285,"tier":"high","perf":78,"image":"","desc":"1440p ultra без компромісів"},
      {"id":"gpu6","category":"gpu","name":"NVIDIA RTX 4070 Super","brand":"NVIDIA","price":599,"socket":null,"ram_type":null,"power_w":220,"vram":"12GB GDDR6X","tdp":220,"tier":"high","perf":74,"image":"","desc":"Чудовий вибір для 1440p геймінгу"},
      {"id":"gpu7","category":"gpu","name":"AMD Radeon RX 7800 XT","brand":"AMD","price":499,"socket":null,"ram_type":null,"power_w":263,"vram":"16GB GDDR6","tdp":263,"tier":"mid","perf":68,"image":"","desc":"16GB VRAM за доступну ціну"},
      {"id":"gpu8","category":"gpu","name":"AMD Radeon RX 7700 XT","brand":"AMD","price":449,"socket":null,"ram_type":null,"power_w":245,"vram":"12GB GDDR6","tdp":245,"tier":"mid","perf":64,"image":"","desc":"12GB VRAM для стабільного 1440p"},
      {"id":"gpu9","category":"gpu","name":"NVIDIA RTX 4060 Ti 16GB","brand":"NVIDIA","price":499,"socket":null,"ram_type":null,"power_w":165,"vram":"16GB GDDR6","tdp":165,"tier":"mid","perf":62,"image":"","desc":"16GB варіант RTX 4060 Ti для майбутнього"},
      {"id":"gpu10","category":"gpu","name":"NVIDIA RTX 4060 Ti","brand":"NVIDIA","price":399,"socket":null,"ram_type":null,"power_w":165,"vram":"8GB GDDR6","tdp":165,"tier":"mid","perf":60,"image":"","desc":"DLSS 3 для 1080p/1440p"},
      {"id":"gpu11","category":"gpu","name":"AMD Radeon RX 6800 XT","brand":"AMD","price":369,"socket":null,"ram_type":null,"power_w":300,"vram":"16GB GDDR6","tdp":300,"tier":"mid","perf":65,"image":"","desc":"Попереднє покоління — 16GB за помірну ціну"},
      {"id":"gpu12","category":"gpu","name":"NVIDIA RTX 4060","brand":"NVIDIA","price":299,"socket":null,"ram_type":null,"power_w":115,"vram":"8GB GDDR6","tdp":115,"tier":"budget","perf":52,"image":"","desc":"Найтихіша з RTX 40-ї серії"},
      {"id":"gpu13","category":"gpu","name":"AMD Radeon RX 7600","brand":"AMD","price":269,"socket":null,"ram_type":null,"power_w":165,"vram":"8GB GDDR6","tdp":165,"tier":"budget","perf":48,"image":"","desc":"Оптимальна для 1080p gaming"},
      {"id":"gpu14","category":"gpu","name":"Intel Arc A770 16GB","brand":"Intel","price":249,"socket":null,"ram_type":null,"power_w":225,"vram":"16GB GDDR6","tdp":225,"tier":"budget","perf":50,"image":"","desc":"16GB VRAM у бюджетному сегменті від Intel"},
      {"id":"gpu15","category":"gpu","name":"NVIDIA RTX 3060 12GB","brand":"NVIDIA","price":229,"socket":null,"ram_type":null,"power_w":170,"vram":"12GB GDDR6","tdp":170,"tier":"budget","perf":46,"image":"","desc":"Перевірена часом GTX-заміна з 12GB"},
      {"id":"gpu16","category":"gpu","name":"AMD Radeon RX 6600","brand":"AMD","price":179,"socket":null,"ram_type":null,"power_w":132,"vram":"8GB GDDR6","tdp":132,"tier":"budget","perf":40,"image":"","desc":"Найдешевший варіант для 1080p"}
    ]
  },
  "ram": {
    "label": "Оперативна пам'ять (RAM)", "short": "RAM", "icon": "💾", "accent": "#a855f7",
    "items": [
      {"id":"ram1","category":"ram","name":"G.Skill Trident Z5 RGB 64GB DDR5-6000","brand":"G.Skill","price":299,"socket":null,"ram_type":"DDR5","power_w":10,"speed":"DDR5-6000","capacity":"64GB","cl":"CL30","tier":"ultra","perf":98,"image":"","desc":"Флагман — 64GB DDR5-6000 CL30 з RGB"},
      {"id":"ram2","category":"ram","name":"G.Skill Trident Z5 RGB 32GB DDR5-7200","brand":"G.Skill","price":249,"socket":null,"ram_type":"DDR5","power_w":9,"speed":"DDR5-7200","capacity":"32GB","cl":"CL34","tier":"ultra","perf":97,"image":"","desc":"Найшвидша DDR5 для оверклокерів — 7200 МГц"},
      {"id":"ram3","category":"ram","name":"Corsair Dominator Platinum 32GB DDR5-6400","brand":"Corsair","price":209,"socket":null,"ram_type":"DDR5","power_w":9,"speed":"DDR5-6400","capacity":"32GB","cl":"CL32","tier":"ultra","perf":95,"image":"","desc":"Культова серія з вбудованим RGB та DHX охолодженням"},
      {"id":"ram4","category":"ram","name":"G.Skill Trident Z5 32GB DDR5-6000","brand":"G.Skill","price":179,"socket":null,"ram_type":"DDR5","power_w":8,"speed":"DDR5-6000","capacity":"32GB","cl":"CL30","tier":"high","perf":90,"image":"","desc":"Оптимальна DDR5 для Ryzen 7000 та Intel 13/14 gen"},
      {"id":"ram5","category":"ram","name":"Kingston Fury Beast 32GB DDR5-6000","brand":"Kingston","price":159,"socket":null,"ram_type":"DDR5","power_w":8,"speed":"DDR5-6000","capacity":"32GB","cl":"CL36","tier":"high","perf":86,"image":"","desc":"Надійна DDR5-6000 за розумну ціну"},
      {"id":"ram6","category":"ram","name":"Corsair Vengeance 32GB DDR5-5600","brand":"Corsair","price":139,"socket":null,"ram_type":"DDR5","power_w":8,"speed":"DDR5-5600","capacity":"32GB","cl":"CL36","tier":"high","perf":84,"image":"","desc":"Надійна 32GB DDR5 для більшості систем"},
      {"id":"ram7","category":"ram","name":"Crucial Pro 32GB DDR5-5600","brand":"Crucial","price":119,"socket":null,"ram_type":"DDR5","power_w":7,"speed":"DDR5-5600","capacity":"32GB","cl":"CL40","tier":"mid","perf":78,"image":"","desc":"Бюджетна DDR5-5600 для повсякденних задач"},
      {"id":"ram8","category":"ram","name":"Kingston Fury Beast 16GB DDR5-5200","brand":"Kingston","price":69,"socket":null,"ram_type":"DDR5","power_w":6,"speed":"DDR5-5200","capacity":"16GB","cl":"CL40","tier":"mid","perf":70,"image":"","desc":"Базова 16GB DDR5 — мінімум для сучасних збірок"},
      {"id":"ram9","category":"ram","name":"Crucial Pro 16GB DDR5-4800","brand":"Crucial","price":55,"socket":null,"ram_type":"DDR5","power_w":5,"speed":"DDR5-4800","capacity":"16GB","cl":"CL40","tier":"budget","perf":60,"image":"","desc":"Найдешевший варіант DDR5 — базова частота"},
      {"id":"ram10","category":"ram","name":"G.Skill Trident Z5 128GB DDR5-5600","brand":"G.Skill","price":499,"socket":null,"ram_type":"DDR5","power_w":14,"speed":"DDR5-5600","capacity":"128GB","cl":"CL36","tier":"ultra","perf":96,"image":"","desc":"128GB DDR5 для відеомонтажу та ML"},
      {"id":"ram11","category":"ram","name":"G.Skill Ripjaws V 32GB DDR4-4000","brand":"G.Skill","price":99,"socket":null,"ram_type":"DDR4","power_w":7,"speed":"DDR4-4000","capacity":"32GB","cl":"CL18","tier":"high","perf":80,"image":"","desc":"Топова DDR4 — 4000 МГц з CL18"},
      {"id":"ram12","category":"ram","name":"Corsair Vengeance Pro 32GB DDR4-3600","brand":"Corsair","price":79,"socket":null,"ram_type":"DDR4","power_w":6,"speed":"DDR4-3600","capacity":"32GB","cl":"CL18","tier":"mid","perf":74,"image":"","desc":"Класичний вибір DDR4-3600 CL18"},
      {"id":"ram13","category":"ram","name":"Kingston Fury Beast 32GB DDR4-3600","brand":"Kingston","price":69,"socket":null,"ram_type":"DDR4","power_w":6,"speed":"DDR4-3600","capacity":"32GB","cl":"CL18","tier":"mid","perf":72,"image":"","desc":"DDR4-3600 за доступну ціну"},
      {"id":"ram14","category":"ram","name":"G.Skill Ripjaws V 16GB DDR4-3600","brand":"G.Skill","price":45,"socket":null,"ram_type":"DDR4","power_w":5,"speed":"DDR4-3600","capacity":"16GB","cl":"CL16","tier":"mid","perf":70,"image":"","desc":"Перевірена DDR4-3600 CL16 для i5/i7 12gen"},
      {"id":"ram15","category":"ram","name":"Corsair Vengeance LPX 16GB DDR4-3200","brand":"Corsair","price":35,"socket":null,"ram_type":"DDR4","power_w":4,"speed":"DDR4-3200","capacity":"16GB","cl":"CL16","tier":"budget","perf":60,"image":"","desc":"Найпопулярніша DDR4 у світі — перевірена роками"},
      {"id":"ram16","category":"ram","name":"Kingston ValueRAM 16GB DDR4-3200","brand":"Kingston","price":29,"socket":null,"ram_type":"DDR4","power_w":4,"speed":"DDR4-3200","capacity":"16GB","cl":"CL22","tier":"budget","perf":52,"image":"","desc":"Базовий бюджетний варіант DDR4"}
    ]
  },
  "motherboard": {
    "label": "Материнська плата (MB)", "short": "MB", "icon": "🔧", "accent": "#22c55e",
    "items": [
      {"id":"mb1","category":"motherboard","name":"ASUS ROG Maximus Z790 Hero","brand":"ASUS","price":599,"socket":"LGA1700","ram_type":"DDR5","power_w":30,"chipset":"Z790","tier":"ultra","perf":98,"image":"","desc":"Флагманська плата для оверклокерів Intel"},
      {"id":"mb2","category":"motherboard","name":"MSI MEG X670E ACE","brand":"MSI","price":499,"socket":"AM5","ram_type":"DDR5","power_w":25,"chipset":"X670E","tier":"ultra","perf":95,"image":"","desc":"Потужна платформа для Ryzen 7000"},
      {"id":"mb3","category":"motherboard","name":"ASUS ROG Strix X670E-F WiFi","brand":"ASUS","price":449,"socket":"AM5","ram_type":"DDR5","power_w":25,"chipset":"X670E","tier":"ultra","perf":93,"image":"","desc":"PCIe 5.0 x16 + x4 для топових збірок"},
      {"id":"mb4","category":"motherboard","name":"Gigabyte Z790 AORUS Master","brand":"Gigabyte","price":399,"socket":"LGA1700","ram_type":"DDR5","power_w":25,"chipset":"Z790","tier":"high","perf":88,"image":"","desc":"Преміум функції за розумну ціну"},
      {"id":"mb5","category":"motherboard","name":"ASUS ROG Strix B650E-F WiFi","brand":"ASUS","price":299,"socket":"AM5","ram_type":"DDR5","power_w":20,"chipset":"B650E","tier":"high","perf":82,"image":"","desc":"PCIe 5.0 для SSD нового покоління"},
      {"id":"mb6","category":"motherboard","name":"MSI MAG B650 TOMAHAWK WiFi","brand":"MSI","price":229,"socket":"AM5","ram_type":"DDR5","power_w":20,"chipset":"B650","tier":"mid","perf":75,"image":"","desc":"Популярна середнього класу для Ryzen"},
      {"id":"mb7","category":"motherboard","name":"MSI PRO Z790-A WiFi","brand":"MSI","price":199,"socket":"LGA1700","ram_type":"DDR5","power_w":20,"chipset":"Z790","tier":"mid","perf":72,"image":"","desc":"WiFi 6E та 2.5G Ethernet"},
      {"id":"mb8","category":"motherboard","name":"Gigabyte B760 AORUS Elite AX","brand":"Gigabyte","price":179,"socket":"LGA1700","ram_type":"DDR5","power_w":18,"chipset":"B760","tier":"mid","perf":70,"image":"","desc":"Доступна плата для i5/i7 з WiFi"},
      {"id":"mb9","category":"motherboard","name":"ASRock B650M Pro RS WiFi","brand":"ASRock","price":149,"socket":"AM5","ram_type":"DDR5","power_w":15,"chipset":"B650","tier":"budget","perf":58,"image":"","desc":"Бюджетна плата для AM5 систем"},
      {"id":"mb10","category":"motherboard","name":"MSI PRO H610M-G DDR4","brand":"MSI","price":89,"socket":"LGA1700","ram_type":"DDR4","power_w":12,"chipset":"H610","tier":"budget","perf":46,"image":"","desc":"Мінімалістична плата під DDR4 та i3/i5"},
      {"id":"mb11","category":"motherboard","name":"Gigabyte H610M S2H DDR4","brand":"Gigabyte","price":79,"socket":"LGA1700","ram_type":"DDR4","power_w":12,"chipset":"H610","tier":"budget","perf":44,"image":"","desc":"Найдешевша плата під 12/13/14 покоління Intel"},
      {"id":"mb12","category":"motherboard","name":"ASUS Prime B760M-A DDR4","brand":"ASUS","price":109,"socket":"LGA1700","ram_type":"DDR4","power_w":14,"chipset":"B760","tier":"budget","perf":50,"image":"","desc":"Стабільна бюджетна плата під DDR4 від ASUS"}
    ]
  },
  "storage": {
    "label": "Накопичувач (SSD)", "short": "SSD", "icon": "💿", "accent": "#f59e0b",
    "items": [
      {"id":"st1","category":"storage","name":"Samsung 990 Pro 2TB NVMe","brand":"Samsung","price":179,"socket":null,"ram_type":null,"power_w":7,"type":"NVMe M.2","capacity":"2TB","read":"7450 MB/s","tier":"ultra","perf":96,"image":"","desc":"Найшвидший споживчий NVMe накопичувач"},
      {"id":"st2","category":"storage","name":"WD Black SN850X 2TB NVMe","brand":"WD","price":169,"socket":null,"ram_type":null,"power_w":7,"type":"NVMe M.2","capacity":"2TB","read":"7300 MB/s","tier":"ultra","perf":94,"image":"","desc":"Оптимізований для DirectStorage та PS5"},
      {"id":"st3","category":"storage","name":"Seagate FireCuda 530 2TB","brand":"Seagate","price":199,"socket":null,"ram_type":null,"power_w":8,"type":"NVMe M.2","capacity":"2TB","read":"7300 MB/s","tier":"ultra","perf":92,"image":"","desc":"PCIe 4.0 без throttling під навантаженням"},
      {"id":"st4","category":"storage","name":"Samsung 990 Pro 1TB NVMe","brand":"Samsung","price":99,"socket":null,"ram_type":null,"power_w":6,"type":"NVMe M.2","capacity":"1TB","read":"7450 MB/s","tier":"high","perf":90,"image":"","desc":"Флагман Samsung в 1TB варіанті"},
      {"id":"st5","category":"storage","name":"WD Black SN850X 1TB","brand":"WD","price":89,"socket":null,"ram_type":null,"power_w":6,"type":"NVMe M.2","capacity":"1TB","read":"7300 MB/s","tier":"high","perf":88,"image":"","desc":"PCIe 4.0 x4 з DirectStorage підтримкою"},
      {"id":"st6","category":"storage","name":"Seagate FireCuda 530 1TB","brand":"Seagate","price":109,"socket":null,"ram_type":null,"power_w":6,"type":"NVMe M.2","capacity":"1TB","read":"7300 MB/s","tier":"high","perf":86,"image":"","desc":"Стабільна швидкість без throttling"},
      {"id":"st7","category":"storage","name":"Crucial P5 Plus 2TB NVMe","brand":"Crucial","price":129,"socket":null,"ram_type":null,"power_w":6,"type":"NVMe M.2","capacity":"2TB","read":"6600 MB/s","tier":"mid","perf":78,"image":"","desc":"2TB PCIe 4.0 за розумну ціну"},
      {"id":"st8","category":"storage","name":"Crucial P3 Plus 2TB NVMe","brand":"Crucial","price":79,"socket":null,"ram_type":null,"power_w":5,"type":"NVMe M.2","capacity":"2TB","read":"5000 MB/s","tier":"mid","perf":70,"image":"","desc":"Великий об'єм за доступну ціну"},
      {"id":"st9","category":"storage","name":"Kingston NV2 1TB NVMe","brand":"Kingston","price":55,"socket":null,"ram_type":null,"power_w":4,"type":"NVMe M.2","capacity":"1TB","read":"3500 MB/s","tier":"budget","perf":62,"image":"","desc":"Бюджетний NVMe PCIe 4.0"},
      {"id":"st10","category":"storage","name":"Samsung 870 EVO 1TB SATA","brand":"Samsung","price":89,"socket":null,"ram_type":null,"power_w":3,"type":"SATA 2.5\"","capacity":"1TB","read":"560 MB/s","tier":"mid","perf":55,"image":"","desc":"Найкращий SATA SSD — стабільний та швидкий"},
      {"id":"st11","category":"storage","name":"Crucial BX500 1TB SATA","brand":"Crucial","price":49,"socket":null,"ram_type":null,"power_w":3,"type":"SATA 2.5\"","capacity":"1TB","read":"540 MB/s","tier":"budget","perf":45,"image":"","desc":"Класичний SATA SSD — надійно та дешево"},
      {"id":"st12","category":"storage","name":"WD Blue SN580 500GB NVMe","brand":"WD","price":45,"socket":null,"ram_type":null,"power_w":3,"type":"NVMe M.2","capacity":"500GB","read":"4150 MB/s","tier":"budget","perf":55,"image":"","desc":"Доступний NVMe для бюджетних збірок"},
      {"id":"st13","category":"storage","name":"Seagate BarraCuda 4TB SATA","brand":"Seagate","price":79,"socket":null,"ram_type":null,"power_w":3,"type":"SATA 2.5\"","capacity":"4TB","read":"540 MB/s","tier":"mid","perf":42,"image":"","desc":"4TB для зберігання ігор та медіафайлів"}
    ]
  },
  "psu": {
    "label": "Блок живлення (PSU)", "short": "PSU", "icon": "🔌", "accent": "#ef4444",
    "items": [
      {"id":"psu1","category":"psu","name":"Corsair HX1500i 1500W","brand":"Corsair","price":379,"socket":null,"ram_type":null,"power_w":1500,"wattage":1500,"rating":"80+ Platinum","tier":"ultra","perf":98,"image":"","desc":"ATX 3.0 з 600W PCIe конектором для RTX 4090"},
      {"id":"psu2","category":"psu","name":"Seasonic Prime TX-1300","brand":"Seasonic","price":349,"socket":null,"ram_type":null,"power_w":1300,"wattage":1300,"rating":"80+ Titanium","tier":"ultra","perf":97,"image":"","desc":"Titanium ефективність — найкраще у класі"},
      {"id":"psu3","category":"psu","name":"ASUS ROG Thor 1000P2","brand":"ASUS","price":299,"socket":null,"ram_type":null,"power_w":1000,"wattage":1000,"rating":"80+ Platinum","tier":"high","perf":92,"image":"","desc":"З вбудованим OLED дисплеєм та RGB"},
      {"id":"psu4","category":"psu","name":"Corsair RM1000x 1000W","brand":"Corsair","price":199,"socket":null,"ram_type":null,"power_w":1000,"wattage":1000,"rating":"80+ Gold","tier":"high","perf":88,"image":"","desc":"Повністю модульний з тихим вентилятором"},
      {"id":"psu5","category":"psu","name":"be quiet! Straight Power 12 850W","brand":"be quiet!","price":169,"socket":null,"ram_type":null,"power_w":850,"wattage":850,"rating":"80+ Platinum","tier":"high","perf":86,"image":"","desc":"Тихий і ефективний Platinum БЖ"},
      {"id":"psu6","category":"psu","name":"Seasonic Focus GX-850","brand":"Seasonic","price":149,"socket":null,"ram_type":null,"power_w":850,"wattage":850,"rating":"80+ Gold","tier":"mid","perf":82,"image":"","desc":"Найнадійніший серед середнього класу"},
      {"id":"psu7","category":"psu","name":"Corsair RM750e 750W","brand":"Corsair","price":119,"socket":null,"ram_type":null,"power_w":750,"wattage":750,"rating":"80+ Gold","tier":"mid","perf":78,"image":"","desc":"ATX 3.0 сумісний Gold блок живлення"},
      {"id":"psu8","category":"psu","name":"EVGA SuperNOVA 750 G6","brand":"EVGA","price":109,"socket":null,"ram_type":null,"power_w":750,"wattage":750,"rating":"80+ Gold","tier":"mid","perf":76,"image":"","desc":"Перевірена золота серія від EVGA"},
      {"id":"psu9","category":"psu","name":"Corsair CV750 750W","brand":"Corsair","price":99,"socket":null,"ram_type":null,"power_w":750,"wattage":750,"rating":"80+ Bronze","tier":"budget","perf":65,"image":"","desc":"Базова надійність для бюджетних збірок"},
      {"id":"psu10","category":"psu","name":"be quiet! Pure Power 11 650W","brand":"be quiet!","price":89,"socket":null,"ram_type":null,"power_w":650,"wattage":650,"rating":"80+ Gold","tier":"budget","perf":62,"image":"","desc":"Тихий та стабільний блок живлення"},
      {"id":"psu11","category":"psu","name":"Chieftec Proton 650W","brand":"Chieftec","price":59,"socket":null,"ram_type":null,"power_w":650,"wattage":650,"rating":"80+ Bronze","tier":"budget","perf":55,"image":"","desc":"Бюджетний бронзовий БЖ — базовий вибір"}
    ]
  },
  "case": {
    "label": "Корпус", "short": "КОРПУС", "icon": "🖥️", "accent": "#6366f1",
    "items": [
      {"id":"case1","category":"case","name":"Lian Li O11 Dynamic EVO XL","brand":"Lian Li","price":229,"socket":null,"ram_type":null,"power_w":0,"formFactor":"Full Tower","tier":"ultra","perf":96,"image":"","desc":"Культовий корпус для водяного охолодження"},
      {"id":"case2","category":"case","name":"Fractal Design Torrent RGB","brand":"Fractal","price":219,"socket":null,"ram_type":null,"power_w":0,"formFactor":"Full Tower","tier":"ultra","perf":94,"image":"","desc":"Відмінна вентиляція з 2 x 180mm вентиляторами"},
      {"id":"case3","category":"case","name":"Corsair 7000D Airflow","brand":"Corsair","price":249,"socket":null,"ram_type":null,"power_w":0,"formFactor":"Full Tower","tier":"ultra","perf":95,"image":"","desc":"Full Tower з трьома 140mm вентиляторами в комплекті"},
      {"id":"case4","category":"case","name":"Lian Li O11 Air Mini","brand":"Lian Li","price":129,"socket":null,"ram_type":null,"power_w":0,"formFactor":"Mid Tower","tier":"high","perf":84,"image":"","desc":"Компактна версія O11 з відмінним airflow"},
      {"id":"case5","category":"case","name":"NZXT H7 Flow RGB","brand":"NZXT","price":149,"socket":null,"ram_type":null,"power_w":0,"formFactor":"Mid Tower","tier":"high","perf":82,"image":"","desc":"Сітчаста передня панель + RGB підсвітка"},
      {"id":"case6","category":"case","name":"be quiet! Pure Base 500DX","brand":"be quiet!","price":129,"socket":null,"ram_type":null,"power_w":0,"formFactor":"Mid Tower","tier":"high","perf":80,"image":"","desc":"Тихий корпус з відмінним airflow та ARGB"},
      {"id":"case7","category":"case","name":"Corsair 4000D Airflow","brand":"Corsair","price":109,"socket":null,"ram_type":null,"power_w":0,"formFactor":"Mid Tower","tier":"mid","perf":76,"image":"","desc":"Preinstalled вентилятори та відмінний airflow"},
      {"id":"case8","category":"case","name":"Fractal Design Pop Air","brand":"Fractal","price":89,"socket":null,"ram_type":null,"power_w":0,"formFactor":"Mid Tower","tier":"mid","perf":74,"image":"","desc":"Скандинавський мінімалізм + хороший airflow"},
      {"id":"case9","category":"case","name":"DeepCool CC560 V2","brand":"DeepCool","price":69,"socket":null,"ram_type":null,"power_w":0,"formFactor":"Mid Tower","tier":"budget","perf":62,"image":"","desc":"4 ARGB вентилятори в комплекті"},
      {"id":"case10","category":"case","name":"Zalman S5","brand":"Zalman","price":49,"socket":null,"ram_type":null,"power_w":0,"formFactor":"Mid Tower","tier":"budget","perf":52,"image":"","desc":"Базовий бюджетний корпус з загартованим склом"}
    ]
  },
  "cooling": {
    "label": "Система охолодження", "short": "COOLING", "icon": "❄️", "accent": "#06b6d4",
    "items": [
      {"id":"cool1","category":"cooling","name":"NZXT Kraken Elite 360 RGB","brand":"NZXT","price":279,"socket":null,"ram_type":null,"power_w":18,"type":"СВО 360мм","tier":"ultra","perf":96,"image":"","desc":"LCD-дисплей та ексклюзивний дизайн"},
      {"id":"cool2","category":"cooling","name":"Corsair iCUE H150i Elite LCD","brand":"Corsair","price":249,"socket":null,"ram_type":null,"power_w":18,"type":"СВО 360мм","tier":"ultra","perf":94,"image":"","desc":"Повноколірний IPS LCD на помпі"},
      {"id":"cool3","category":"cooling","name":"Lian Li Galahad II Trinity 360","brand":"Lian Li","price":189,"socket":null,"ram_type":null,"power_w":15,"type":"СВО 360мм","tier":"high","perf":90,"image":"","desc":"Три ARGB вентилятори + відмінне охолодження"},
      {"id":"cool4","category":"cooling","name":"DeepCool LT720 360mm","brand":"DeepCool","price":139,"socket":null,"ram_type":null,"power_w":15,"type":"СВО 360мм","tier":"high","perf":88,"image":"","desc":"Топова продуктивність за розумну ціну"},
      {"id":"cool5","category":"cooling","name":"be quiet! Silent Loop 2 280mm","brand":"be quiet!","price":149,"socket":null,"ram_type":null,"power_w":14,"type":"СВО 280мм","tier":"high","perf":86,"image":"","desc":"Тихий 280мм AIO від be quiet!"},
      {"id":"cool6","category":"cooling","name":"Corsair iCUE H100i RGB Elite","brand":"Corsair","price":129,"socket":null,"ram_type":null,"power_w":14,"type":"СВО 240мм","tier":"high","perf":84,"image":"","desc":"240мм AIO з двома 120mm вентиляторами"},
      {"id":"cool7","category":"cooling","name":"DeepCool AK620 Digital","brand":"DeepCool","price":79,"socket":null,"ram_type":null,"power_w":9,"type":"Повітряне","tier":"mid","perf":82,"image":"","desc":"Вежевий кулер з LCD-дисплеєм температури"},
      {"id":"cool8","category":"cooling","name":"Noctua NH-D15 chromax.black","brand":"Noctua","price":109,"socket":null,"ram_type":null,"power_w":10,"type":"Повітряне","tier":"high","perf":88,"image":"","desc":"Легенда повітряного охолодження"},
      {"id":"cool9","category":"cooling","name":"be quiet! Dark Rock Pro 5","brand":"be quiet!","price":99,"socket":null,"ram_type":null,"power_w":9,"type":"Повітряне","tier":"high","perf":86,"image":"","desc":"Надтихий кулер для до 250W TDP"},
      {"id":"cool10","category":"cooling","name":"DeepCool AK620 ZERO DARK","brand":"DeepCool","price":59,"socket":null,"ram_type":null,"power_w":7,"type":"Повітряне","tier":"mid","perf":74,"image":"","desc":"Вежевий кулер з 2 вентиляторами"},
      {"id":"cool11","category":"cooling","name":"Cooler Master Hyper 212 Black","brand":"Cooler Master","price":39,"socket":null,"ram_type":null,"power_w":5,"type":"Повітряне","tier":"budget","perf":56,"image":"","desc":"Класика бюджетного охолодження"},
      {"id":"cool12","category":"cooling","name":"ID-Cooling SE-224-XT","brand":"ID-Cooling","price":25,"socket":null,"ram_type":null,"power_w":4,"type":"Повітряне","tier":"budget","perf":48,"image":"","desc":"Найдешевший кулер з нормальним охолодженням"}
    ]
  }
};
