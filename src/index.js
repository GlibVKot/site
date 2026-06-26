import { droneImage } from "./image.js";

// Contact + link constants (unwrapped from the Google Doc's redirect URLs).
const LINKS = {
  webApp: "https://flyinghunter-heatmap.netlify.app",
  signal:
    "https://signal.me/#eu/VCpXQePU2K2z520aY43_FQxeH2QKq0cItbnuyEypruk9NnktPeVLZYqj_Nx5FUPr",
  whatsapp: "https://wa.me/380919046732",
  tel: "+380919046732",
};

const html = /* html */ `<!DOCTYPE html>
<html lang="uk">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>RF Hunter — пасивне виявлення та локалізація РЕБ</title>
<meta name="description" content="RF Hunter — модуль для дрона для пасивного виявлення та локалізації засобів РЕБ. Автономний, без GPS та зв'язку. Дальність &gt;7 км, точність пеленгації до 1°.">
<meta name="theme-color" content="#0b1120">
<meta property="og:type" content="website">
<meta property="og:locale" content="uk_UA">
<meta property="og:title" content="RF Hunter — пасивне виявлення та локалізація РЕБ">
<meta property="og:description" content="Модуль для дрона для пасивного виявлення та локалізації засобів РЕБ. Автономний, без GPS та зв'язку.">
<meta property="og:image" content="${droneImage}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%F0%9F%93%A1%3C/text%3E%3C/svg%3E">
<style>
  :root{
    --bg:#0b1120; --bg2:#0f172a; --card:#111c33; --card-brd:#1e2d4d;
    --text:#e6edf7; --muted:#9fb0c9; --accent:#4ade80; --accent-2:#38bdf8;
    --maxw:760px;
  }
  *{box-sizing:border-box}
  html{-webkit-text-size-adjust:100%}
  body{
    margin:0; background:radial-gradient(1200px 600px at 50% -10%,#13233f 0%,var(--bg) 55%);
    color:var(--text); font:16px/1.6 "Inter",system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing:antialiased;
  }
  .wrap{max-width:var(--maxw); margin:0 auto; padding:32px 20px 72px}
  header{text-align:center; padding:16px 0 8px}
  .badge{display:inline-block; font-size:12px; letter-spacing:.18em; text-transform:uppercase;
    color:var(--accent); border:1px solid var(--card-brd); border-radius:999px; padding:5px 14px; margin-bottom:18px}
  h1{font-size:clamp(34px,8vw,56px); line-height:1.05; margin:0 0 12px; letter-spacing:-.02em; font-weight:800}
  h1 .accent{background:linear-gradient(90deg,var(--accent),var(--accent-2)); -webkit-background-clip:text; background-clip:text; color:transparent}
  .subtitle{font-size:clamp(17px,3.6vw,21px); color:var(--muted); max-width:560px; margin:0 auto}
  .hero-img{margin:30px auto 8px; width:100%; height:auto; max-width:100%; border-radius:16px; border:1px solid var(--card-brd);
    box-shadow:0 24px 60px -24px rgba(0,0,0,.7); display:block; background:#fff}
  section{background:var(--card); border:1px solid var(--card-brd); border-radius:16px; padding:22px 22px 8px; margin-top:18px}
  h2{display:flex; align-items:center; gap:10px; font-size:21px; margin:0 0 6px; font-weight:700; letter-spacing:-.01em}
  h2 .emoji{font-size:22px; line-height:1}
  ul{list-style:none; margin:8px 0 16px; padding:0}
  li{position:relative; padding:11px 0 11px 26px; border-top:1px solid rgba(255,255,255,.05)}
  li:first-child{border-top:0}
  li::before{content:""; position:absolute; left:4px; top:19px; width:7px; height:7px; border-radius:50%;
    background:var(--accent); box-shadow:0 0 0 3px rgba(74,222,128,.15)}
  li b{color:#fff; font-weight:650}
  a{color:var(--accent-2); text-decoration:none; border-bottom:1px solid rgba(56,189,248,.35)}
  a:hover{border-bottom-color:var(--accent-2)}
  /* spec grid */
  .specs{display:grid; grid-template-columns:1fr; gap:0; margin:6px 0 16px}
  .spec{display:flex; justify-content:space-between; gap:16px; padding:12px 0; border-top:1px solid rgba(255,255,255,.06)}
  .spec:first-child{border-top:0}
  .spec .k{color:var(--muted)}
  .spec .v{color:#fff; font-weight:650; text-align:right}
  .spec .v.big{color:var(--accent)}
  /* contact */
  .contact-name{font-size:18px; margin:6px 0 16px}
  .btns{display:flex; flex-wrap:wrap; gap:12px; margin:4px 0 18px}
  .btn{display:inline-flex; align-items:center; gap:9px; padding:12px 18px; border-radius:12px; font-weight:650;
    border:1px solid var(--card-brd); color:var(--text); background:#0e1a30; border-bottom:1px solid var(--card-brd)}
  .btn:hover{border-color:var(--accent-2)}
  .btn.signal{background:linear-gradient(180deg,#1b3a8f,#142e72); border-color:#27479e; color:#fff}
  .btn.wa{background:linear-gradient(180deg,#10803f,#0c6633); border-color:#16a34a; color:#fff}
  .btn svg{width:18px; height:18px; fill:currentColor; flex:0 0 auto}
  /* embedded web-app preview */
  .embed{margin:10px 0 18px; border:1px solid var(--card-brd); border-radius:14px; overflow:hidden; background:#0c1730}
  .embed-head{display:flex; align-items:center; gap:7px; padding:10px 14px; background:#0e1a30; border-bottom:1px solid var(--card-brd)}
  .embed-head .dot{width:10px; height:10px; border-radius:50%; background:#27406e; flex:0 0 auto}
  .embed-title{margin-left:8px; font-size:13px; color:var(--muted); flex:1; white-space:nowrap; overflow:hidden; text-overflow:ellipsis}
  .embed-open{font-size:13px; font-weight:650; white-space:nowrap; border-bottom:0}
  .embed-frame{position:relative; aspect-ratio:16/10; background:radial-gradient(circle at 50% 40%,#16335a,#0a1426)}
  .embed-frame iframe{position:absolute; inset:0; width:100%; height:100%; border:0; display:block}
  .embed-activate{position:absolute; inset:0; width:100%; height:100%; display:flex; align-items:center; justify-content:center;
    border:0; cursor:pointer; background:rgba(8,15,28,.35); color:#fff; font:inherit; -webkit-tap-highlight-color:transparent}
  .embed-activate span{background:rgba(8,15,28,.72); border:1px solid var(--card-brd); padding:10px 16px; border-radius:999px; font-size:14px; font-weight:650}
  .embed-frame.activated .embed-activate{display:none}
  footer{text-align:center; color:var(--muted); font-size:13px; margin-top:34px}
  @media (min-width:560px){ .specs{grid-template-columns:1fr 1fr; column-gap:34px}
    .spec{border-top:1px solid rgba(255,255,255,.06)} .spec:nth-child(2){border-top:0} }
</style>
</head>
<body>
<div class="wrap">
  <header>
    <span class="badge">Counter-EW · Passive RF</span>
    <h1>RF&nbsp;<span class="accent">Hunter</span></h1>
    <p class="subtitle">Модуль для дрона для пасивного виявлення та локалізації РЕБ</p>
    <img class="hero-img" src="${droneImage}" width="1000" height="750"
      alt="Дрон RF Hunter з антенною решіткою для пасивного приймання радіосигналів" loading="eager">
  </header>

  <section>
    <h2><span class="emoji">✅</span> Рішення</h2>
    <ul>
      <li><b>Автономне.</b> Працює без GPS та зв'язку</li>
      <li><b>Просте.</b> Не потребує спеціальної підготовки оператора</li>
      <li><b>Економне.</b> Вартість модуля — $500 (повний комплекс з дроном — $1500)</li>
    </ul>
  </section>

  <section>
    <h2><span class="emoji">⚙️</span> Характеристики</h2>
    <div class="specs">
      <div class="spec"><span class="k">Діапазон частот</span><span class="v">137–2500 МГц</span></div>
      <div class="spec"><span class="k">Дальність виявлення</span><span class="v">&gt;7 км <small>(джерело 50 Вт)</small></span></div>
      <div class="spec"><span class="k">Точність пеленгації</span><span class="v big">до 1°</span></div>
      <div class="spec"><span class="k">Вага модуля</span><span class="v">~300 г</span></div>
      <div class="spec"><span class="k">Статус розробки</span><span class="v">TRL 6 <small>(польові випробування)</small></span></div>
    </div>
  </section>

  <section>
    <h2><span class="emoji">📡</span> Технологія</h2>
    <ul>
      <li><b>Політ.</b> Дрон виконує автономний політ за наперед заданим маршрутом</li>
      <li><b>Дані.</b> Записується панорамне відео та радіосигнали з двох приймачів</li>
      <li><b>Орієнтація.</b> Після повернення алгоритм порівнює зображення з дрона із супутниковими картами для розрахунку орієнтації камери</li>
      <li><b>Локалізація.</b> На основі рівнів сигналу та орієнтації камери в різних точках визначається напрям на РЕБ і проводиться триангуляція</li>
      <li><b>Інтерфейс.</b> Результат локалізації відображається на карті у <a href="${LINKS.webApp}" target="_blank" rel="noopener">веб-додатку</a></li>
    </ul>
    <figure class="embed">
      <figcaption class="embed-head">
        <span class="dot"></span><span class="dot"></span><span class="dot"></span>
        <span class="embed-title">Інтерактивна карта — найвірогідніше положення випромінювача</span>
        <a class="embed-open" href="${LINKS.webApp}" target="_blank" rel="noopener">Відкрити ↗</a>
      </figcaption>
      <div class="embed-frame">
        <iframe src="${LINKS.webApp}" title="Вебдодаток RF Hunter — карта локалізації РЕБ"
          loading="lazy" referrerpolicy="no-referrer"></iframe>
        <button class="embed-activate" type="button" aria-label="Активувати інтерактивну карту">
          <span>🗺️ Натисніть, щоб взаємодіяти з картою</span>
        </button>
      </div>
    </figure>
  </section>

  <section>
    <h2><span class="emoji">🤝</span> Потреби</h2>
    <ul>
      <li><b>Тестування.</b> Шукаємо підрозділи для випробувань у реальних умовах</li>
      <li><b>Партнерство.</b> Співпраця з виробниками дронів та постачальниками компонентів</li>
      <li><b>Фінансування.</b> Для масштабування до серійного виробництва</li>
    </ul>
  </section>

  <section>
    <h2><span class="emoji">📩</span> Контакт</h2>
    <p class="contact-name">Гліб · <a href="tel:${LINKS.tel}">+380&nbsp;91&nbsp;904&nbsp;6732</a></p>
    <div class="btns">
      <a class="btn signal" href="${LINKS.signal}" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.94 14.47L2 22l5.66-1.05A10 10 0 1 0 12 2Z"/></svg>
        Signal
      </a>
      <a class="btn wa" href="${LINKS.whatsapp}" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.4A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-3-1-2.5-1.4-4-4-4.2-4.2-.1-.2-1-1.3-1-2.5s.6-1.8.8-2 .5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.5c-.2.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 1.5 1.1 1.8 1.2.2 0 .4 0 .5-.2l.6-.8c.2-.2.4-.2.6-.1l1.9.9c.3.1.4.2.5.3 0 .2 0 .8-.2 1.3Z"/></svg>
        WhatsApp
      </a>
    </div>
  </section>

  <footer>RF Hunter · makohin.lviv.ua</footer>
</div>
<script>
  // Click-to-activate overlay: keeps the interactive map from capturing
  // page scroll/touch until the visitor explicitly engages with it.
  (function(){
    var frame = document.querySelector('.embed-frame');
    if(!frame) return;
    var btn = frame.querySelector('.embed-activate');
    if(btn) btn.addEventListener('click', function(){ frame.classList.add('activated'); });
  })();
</script>
</body>
</html>`;

export default {
  async fetch(request) {
    const { pathname } = new URL(request.url);

    // Lightweight health/robots niceties; everything else renders the page.
    if (pathname === "/robots.txt") {
      return new Response("User-agent: *\nAllow: /\n", {
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    }

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=300",
        "x-content-type-options": "nosniff",
      },
    });
  },
};
