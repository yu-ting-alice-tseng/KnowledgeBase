/* ═══════════════════════════════════════════════════════════
   course-kit.js
   Shared renderer for the trilingual course pages (fitness,
   makeup, dance and the five dance-style pages). A page loads
   Tailwind, the fonts and Font Awesome in its <head>, then calls
   CourseKit.start(COURSE) from the <body>.

   COURSE = {
     icon:'fa-dumbbell', accent:'#fb923c', accent2:'#f43f5e', bg:'#0a0706',
     back:{ href:'dance.html', label:{zh,en,fr} },        // optional
     ui:{ zh:{ 'doc.title','hdr.badge','hdr.title','intro','intro2','footer' }, en:{…}, fr:{…} },
     dia:{ key: () => '<svg…>' },                         // optional diagrams
     sections:[ { id, i, c, nav, eyebrow, h2, blocks:[…] } ]
   }

   Block types: lead, h3, note, warn, dia, cards, steps, table, counts.
   The index page drives the language through window.setLanguage and
   hides the toggle whose id is "lang-zh", like the other volumes.
   ═══════════════════════════════════════════════════════════ */
var LANG = 'zh';
function t(o){ if(o==null) return ''; if(typeof o==='string') return o; return o[LANG]||o.en||o.zh||''; }

(function(){
const COLS = { 1:'grid gap-4', 2:'grid md:grid-cols-2 gap-4', 3:'grid md:grid-cols-2 lg:grid-cols-3 gap-4', 4:'grid sm:grid-cols-2 lg:grid-cols-4 gap-4' };
let C = null;

function css(a, bg) {
  return `
  body { background-color:${bg};
    background-image: radial-gradient(at 0% 0%, ${a}14 0px, transparent 42%),
                      radial-gradient(at 100% 0%, ${C.accent2 || a}10 0px, transparent 42%);
    background-attachment: fixed; }
  .gradient-border { position: relative; }
  .gradient-border::before { content:""; position:absolute; inset:0; border-radius:inherit; padding:1px;
    background: linear-gradient(to bottom right, rgba(255,255,255,0.08), rgba(255,255,255,0.01));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor; mask-composite: exclude; pointer-events:none; }
  .table-scroll::-webkit-scrollbar { height:8px; }
  .table-scroll::-webkit-scrollbar-thumb { background: rgba(148,163,184,0.25); border-radius:8px; }
  .dg { display:block; width:100%; height:auto; }
  .dg text { font-family: Nunito, 'Noto Serif TC', sans-serif; }
  .dg .lab { fill:${a}; font-size:15px; font-weight:800; }
  .dg .sub { fill:#94a3b8; font-size:13px; }
  .dg .val { fill:#f1f5f9; font-size:13px; font-weight:800; }
  .dg .grid { stroke: rgba(148,163,184,0.18); stroke-width:1; }
  .dia-box { background:rgba(255,255,255,0.02); border:1px solid rgba(148,163,184,0.14); border-radius:1rem; padding:1rem; }
  .lang-btn { padding:.25rem .625rem; font-size:.75rem; font-weight:700; border-radius:.5rem; color:#94a3b8; border:1px solid transparent; transition:all .2s; }
  .lang-btn:hover { color:#e2e8f0; }
  .lang-btn.on { color:${a}; background:${a}26; border-color:${a}40; }
  a.card-link:hover { border-color:${a}99 !important; }
  .reveal { opacity:0; transform:translateY(12px); }
  .reveal.in { opacity:1; transform:none; transition: opacity .5s ease, transform .5s cubic-bezier(.16,1,.3,1); }
  @media (prefers-reduced-motion: reduce) { .reveal, .reveal.in { opacity:1; transform:none; transition:none; } }
  @media print { .reveal { opacity:1; transform:none; } header { position:static !important; } }`;
}

function chrome() {
  const a = C.accent, b = C.accent2 || a, bg = C.bg || '#08080a';
  const st = document.createElement('style'); st.textContent = css(a, bg); document.head.appendChild(st);
  const root = document.createElement('div');
  root.innerHTML = `
<div style="position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden;">
  <div style="position:absolute;width:620px;height:620px;top:-220px;left:-160px;background:radial-gradient(circle,${a}22 0%,transparent 70%);border-radius:50%;filter:blur(100px);"></div>
  <div style="position:absolute;width:520px;height:520px;top:-120px;right:-110px;background:radial-gradient(circle,${b}1c 0%,transparent 70%);border-radius:50%;filter:blur(100px);"></div>
</div>
<header class="border-b border-slate-900/80 backdrop-blur-md sticky top-0 z-50 px-4 py-4 md:px-8" style="background:${bg}d9">
  <div class="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
    <div class="flex items-center gap-3">
      <div class="relative">
        <div class="absolute -inset-1 rounded-xl blur opacity-70 animate-pulse" style="background:linear-gradient(90deg,${a},${b})"></div>
        <div class="relative p-2.5 rounded-xl border border-slate-800" style="background:${bg}">
          <i class="fa-solid ${C.icon} text-xl" style="color:${a}"></i>
        </div>
      </div>
      <div>
        <span data-i18n="hdr.badge" class="px-2 py-0.5 text-[9px] font-bold tracking-widest uppercase rounded-full border" style="color:${a};background:${a}1a;border-color:${a}33"></span>
        <h1 data-i18n="hdr.title" class="text-xl md:text-2xl font-black bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent tracking-tight"></h1>
      </div>
    </div>
    <div class="flex flex-wrap items-center gap-3">
      <div class="flex p-1 bg-slate-900 border border-slate-800 rounded-xl gap-1 shrink-0">
        <button onclick="setLanguage('zh')" id="lang-zh" class="lang-btn">繁中</button>
        <button onclick="setLanguage('en')" id="lang-en" class="lang-btn">EN</button>
        <button onclick="setLanguage('fr')" id="lang-fr" class="lang-btn">FR</button>
      </div>
      <nav id="nav" class="flex flex-wrap gap-2 text-xs"></nav>
    </div>
  </div>
</header>
<main class="max-w-7xl mx-auto px-4 md:px-8 mt-10 space-y-12 relative z-10">
  <div id="backlink"></div>
  <section class="gradient-border bg-slate-950/40 rounded-3xl p-6 md:p-10 border border-slate-900 shadow-2xl">
    <p data-i18n="intro" class="text-slate-300 leading-relaxed max-w-4xl"></p>
    <p data-i18n="intro2" class="text-slate-400 leading-relaxed max-w-4xl mt-4 text-sm"></p>
  </section>
  <div id="sections" class="space-y-12"></div>
  <footer class="pt-6 border-t border-slate-900">
    <p data-i18n="footer" class="text-xs text-slate-600 leading-relaxed"></p>
  </footer>
</main>`;
  while (root.firstChild) document.body.appendChild(root.firstChild);
  document.body.className = 'text-slate-200 font-sans min-h-screen pb-16 overflow-x-hidden antialiased';
}

function ui(k){ return (C.ui[LANG] && C.ui[LANG][k]) || C.ui.en[k] || ''; }
const list = (l, c) => l ? `<ul class="mt-3 space-y-1.5">${l.map(x => `<li class="text-xs text-slate-300 leading-relaxed flex gap-2"><span style="color:${c}">▸</span><span>${t(x)}</span></li>`).join('')}</ul>` : '';

const BLOCK = {
  lead: (b) => `<p class="text-slate-300 leading-relaxed max-w-4xl">${t(b.p)}</p>`,
  h3:   (b, s) => `<h3 class="text-base font-black text-white pt-2 flex items-center gap-2"><span class="w-1.5 h-4 rounded-full" style="background:${s.c}"></span>${t(b.t)}</h3>`,
  note: (b, s) => `<p class="text-sm text-slate-300 leading-relaxed rounded-2xl p-4 border" style="background:${s.c}0f;border-color:${s.c}40"><i class="fa-solid fa-lightbulb mr-2" style="color:${s.c}"></i>${t(b.p)}</p>`,
  warn: (b) => `<p class="text-sm text-slate-300 leading-relaxed rounded-2xl p-4 border" style="background:#f43f5e0f;border-color:#f43f5e40"><i class="fa-solid fa-triangle-exclamation mr-2" style="color:#fb7185"></i>${t(b.p)}</p>`,
  dia:  (b) => { const h = C.dia[b.k](); return h.startsWith('<svg') ? `<div class="dia-box reveal">${h}</div>` : h; },
  cards:(b, s) => `<div class="${COLS[b.cols || 3]}">` + b.items.map((c, n) => {
    const tag = c.href ? 'a' : 'article';
    const href = c.href ? ` href="${c.href}"` : '';
    return `<${tag}${href} class="reveal ${c.href ? 'card-link block' : ''} bg-slate-900/40 rounded-2xl border border-slate-800 p-5 hover:border-slate-600 transition-colors" data-i="${n % 6}">
      <div class="flex items-start gap-3">
        <div class="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center border" style="color:${s.c};background:${s.c}14;border-color:${s.c}33"><i class="fa-solid ${c.i} text-sm"></i></div>
        <div class="min-w-0">
          <h4 class="font-black text-white text-sm leading-snug">${t(c.t)}</h4>
          ${c.tag ? `<p class="text-[11px] font-bold mt-1" style="color:${s.c}">${t(c.tag)}</p>` : ''}
        </div>
      </div>
      <p class="text-sm text-slate-400 leading-relaxed mt-3">${t(c.p)}</p>
      ${list(c.l, s.c)}
      ${c.href ? `<p class="text-xs font-black mt-4" style="color:${s.c}">${t(C.more || {zh:'閱讀完整介紹與教學', en:'Read the full guide and lessons', fr:'Lire le guide complet et les leçons'})} <i class="fa-solid fa-arrow-right ml-1"></i></p>` : ''}
    </${tag}>`;
  }).join('') + `</div>`,
  steps:(b, s) => `<ol class="grid ${b.one ? '' : 'md:grid-cols-2'} gap-4">` + b.items.map((c, n) => `
    <li class="reveal flex gap-4 bg-slate-900/40 rounded-2xl border border-slate-800 p-5" data-i="${n % 6}">
      <div class="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm border" style="color:${s.c};background:${s.c}14;border-color:${s.c}55">${n + 1}</div>
      <div><h4 class="font-black text-white text-sm">${t(c.t)}</h4><p class="text-sm text-slate-400 leading-relaxed mt-1.5">${t(c.p)}</p>${list(c.l, s.c)}</div>
    </li>`).join('') + `</ol>`,
  table:(b) => `<div class="table-scroll overflow-x-auto"><table class="w-full text-sm min-w-[640px]">
    <thead><tr class="text-left text-slate-400 border-b border-slate-800">${b.head.map(h => `<th class="py-3 px-4 font-bold">${t(h)}</th>`).join('')}</tr></thead>
    <tbody class="divide-y divide-slate-800/60">${b.rows.map(r => `<tr>${r.map((c, i) => `<td class="py-3 px-4 align-top ${i ? 'text-slate-300' : 'text-white font-bold'}">${t(c)}</td>`).join('')}</tr>`).join('')}</tbody>
  </table></div>`,
  /* An eight-count (or any count) phrase: one cell per beat. */
  counts:(b, s) => `<div class="reveal rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
    ${b.t ? `<h4 class="font-black text-white text-sm mb-1">${t(b.t)}</h4>` : ''}
    ${b.p ? `<p class="text-xs text-slate-400 leading-relaxed mb-3">${t(b.p)}</p>` : ''}
    <div class="grid grid-cols-2 sm:grid-cols-4 ${b.items.length > 4 ? 'lg:grid-cols-8' : ''} gap-2">${b.items.map(c => `
      <div class="rounded-xl border p-2.5" style="border-color:${s.c}33;background:${s.c}0a">
        <div class="text-lg font-black leading-none" style="color:${s.c}">${c.n}</div>
        <div class="text-[11px] text-slate-300 leading-snug mt-1.5">${t(c.p)}</div>
      </div>`).join('')}</div></div>`,
};

function renderSections() {
  document.getElementById('nav').innerHTML = C.sections.map(s =>
    `<a href="#${s.id}" class="px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 hover:border-slate-500/60 transition-colors">${t(s.nav)}</a>`).join('');
  document.getElementById('backlink').innerHTML = C.back
    ? `<a href="${C.back.href}" class="inline-flex items-center gap-2 text-xs font-black px-3 py-2 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-slate-500 transition-colors" style="color:${C.accent}"><i class="fa-solid fa-arrow-left"></i>${t(C.back.label)}</a>` : '';
  if (!C.back) document.getElementById('backlink').style.display = 'none';
  document.getElementById('sections').innerHTML = C.sections.map(s => `
  <section id="${s.id}" class="scroll-mt-28">
    <div class="flex items-center gap-3 mb-5">
      <div class="p-3 rounded-2xl border" style="color:${s.c};background:${s.c}1a;border-color:${s.c}40;box-shadow:0 0 20px ${s.c}33"><i class="fa-solid ${s.i} text-xl"></i></div>
      <div>
        <span class="text-xs uppercase tracking-wider font-bold" style="color:${s.c}">${t(s.eyebrow)}</span>
        <h2 class="text-2xl font-black text-white">${t(s.h2)}</h2>
      </div>
    </div>
    <div class="gradient-border bg-slate-950/40 rounded-3xl p-6 md:p-8 border border-slate-900 space-y-6">
      ${s.blocks.map(b => BLOCK[b.type](b, s)).join('')}
    </div>
  </section>`).join('');
}

let revealObserver = null;
function armReveals(root) {
  const els = root.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    els.forEach(e => e.classList.add('in')); return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((es, obs) => {
      es.forEach(e => { if (!e.isIntersecting) return;
        setTimeout(() => e.target.classList.add('in'), (+e.target.dataset.i || 0) * 70);
        obs.unobserve(e.target); });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
  }
  els.forEach(e => revealObserver.observe(e));
}

window.setLanguage = function(lang) {
  if (!C.ui[lang]) return;
  LANG = lang;
  try { localStorage.setItem('kb_lang', lang); } catch (e) {}
  ['zh','en','fr'].forEach(l => { const b = document.getElementById('lang-' + l); if (b) b.classList.toggle('on', l === lang); });
  document.title = ui('doc.title');
  document.documentElement.lang = (lang === 'zh') ? 'zh-Hant' : lang;
  document.querySelectorAll('[data-i18n]').forEach(el => { const v = ui(el.dataset.i18n); if (v) el.innerHTML = v; });
  renderSections();
  armReveals(document.querySelector('main'));
};

window.CourseKit = { start(course) {
  C = course; C.dia = C.dia || {};
  chrome();
  let l = 'zh';
  try { const st = localStorage.getItem('kb_lang'); if (['zh','en','fr'].includes(st)) l = st; } catch (e) {}
  window.setLanguage(l);
  if (location.hash) { const el = document.getElementById(location.hash.slice(1)); if (el) el.scrollIntoView(); }
} };
})();
