import json

d = json.load(open('.tmp_perfume_build.json', encoding='utf-8'))
detail_html = d['detail_html']
branch_titles = d['branch_titles']
branch_meta = d['branch_meta']
titles = d['titles']
eyebrow = d['eyebrow']
subtitle = d['subtitle']

head = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Coty & Perfume Market Intelligence Mind Map</title>
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Noto+Serif+TC:wght@300;400;500;700;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<style>
*, *::before, *::after { box-sizing: border-box; }
body {
    font-family: 'Nunito', 'Noto Serif TC', -apple-system, sans-serif;
    background-color: #04080f;
    background-image:
        radial-gradient(at 0% 0%, rgba(217,70,239,0.10) 0px, transparent 50%),
        radial-gradient(at 100% 100%, rgba(236,72,153,0.06) 0px, transparent 50%);
    color: #cbd5e1;
    margin: 0;
    min-height: 100vh;
}
.pf-branch-card { transition: all .2s; cursor: pointer; }
.pf-branch-card.active { border-color: rgba(217,70,239,0.6); box-shadow: 0 0 0 1px rgba(217,70,239,0.25), 0 12px 28px rgba(217,70,239,0.12); }
.pf-branch-card:hover:not(.active) { border-color: rgba(217,70,239,0.35); }
.pf-card { background: rgba(15,23,42,0.55); border: 1px solid rgba(51,65,85,0.6); border-radius: 14px; padding: 16px; }
.pf-card-title { font-size: 14px; font-weight: 800; color: #f1f5f9; margin: 0 0 10px 0; }
.pf-row { display:flex; gap:8px; font-size:12px; padding:5px 0; border-bottom:1px solid rgba(51,65,85,0.4); line-height:1.6; }
.pf-row:last-child { border-bottom:none; }
.pf-row-label { color:#e879f9; font-weight:700; white-space:nowrap; flex-shrink:0; }
.pf-row-val { color:#94a3b8; }
.pf-card-grid { display:grid; grid-template-columns: repeat(auto-fill, minmax(260px,1fr)); gap:14px; }
.pf-chip-group { margin-bottom:18px; }
.pf-chip-group-title { font-size:10px; font-weight:700; letter-spacing:.08em; text-transform:uppercase; color:#64748b; margin-bottom:10px; }
.pf-chip-row { display:flex; flex-wrap:wrap; gap:8px; }
.pf-chip { font-size:12px; font-weight:600; color:#f1f5f9; background:rgba(217,70,239,0.08); border:1px solid rgba(217,70,239,0.25); border-radius:999px; padding:6px 14px; }
.pf-group-title { font-size:13px; font-weight:800; color:#e879f9; margin: 18px 0 10px; padding-top:14px; border-top:1px solid rgba(51,65,85,0.5); }
.pf-group-title:first-child { border-top:none; padding-top:0; margin-top:0; }
::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-track { background: #0f172a; }
::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
.pf-lang-btn { padding:5px 14px;font-size:11px;font-weight:700;border-radius:8px;border:none;cursor:pointer;background:transparent;color:#64748b;font-family:inherit;transition:all .15s; }
.pf-lang-btn.active { background:rgba(217,70,239,0.15); color:#e879f9; }
</style>
</head>
<body class="text-slate-200 antialiased">
<div style="position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden;">
  <div style="position:absolute;width:600px;height:600px;top:-200px;left:-150px;background:radial-gradient(circle,rgba(139,92,246,0.18) 0%,transparent 70%);border-radius:50%;filter:blur(100px);"></div>
  <div style="position:absolute;width:500px;height:500px;top:-100px;right:-100px;background:radial-gradient(circle,rgba(236,72,153,0.15) 0%,transparent 70%);border-radius:50%;filter:blur(100px);"></div>
  <div style="position:absolute;width:700px;height:700px;bottom:-200px;left:30%;background:radial-gradient(circle,rgba(56,189,248,0.10) 0%,transparent 70%);border-radius:50%;filter:blur(100px);"></div>
  <div style="position:absolute;width:400px;height:400px;bottom:100px;right:-100px;background:radial-gradient(circle,rgba(217,70,239,0.12) 0%,transparent 70%);border-radius:50%;filter:blur(100px);"></div>
</div>
"""

header = """
<header class="bg-slate-950/80 backdrop-blur-md border-b border-slate-900/80 px-6 py-4 flex flex-wrap items-center justify-between gap-4 z-20 sticky top-0">
  <div class="flex items-center gap-3">
    <div class="relative">
      <div class="absolute -inset-1 bg-gradient-to-r from-fuchsia-500 via-pink-600 to-fuchsia-700 rounded-xl blur opacity-75 animate-pulse"></div>
      <div class="relative bg-slate-950 p-2.5 rounded-xl border border-slate-800">
        <i class="fa-solid fa-spray-can-sparkles text-fuchsia-400 text-xl"></i>
      </div>
    </div>
    <div>
      <div class="flex items-center gap-2">
        <span class="px-2 py-0.5 text-[9px] font-bold tracking-widest text-fuchsia-400 uppercase bg-fuchsia-500/10 rounded-full border border-fuchsia-500/20" id="pf-eyebrow"></span>
        <span class="text-xs text-slate-400 font-light" id="pf-subtitle"></span>
      </div>
      <h1 class="text-xl md:text-2xl font-black bg-gradient-to-r from-white via-fuchsia-100 to-fuchsia-400 bg-clip-text text-transparent tracking-tight" id="pf-title"></h1>
    </div>
  </div>
  <div style="display:flex;gap:6px;padding:4px;background:rgba(15,23,42,0.8);border:1px solid rgba(255,255,255,0.08);border-radius:12px;">
    <button onclick="switchLanguage('zh')" id="hdr-zh" class="pf-lang-btn">繁中</button>
    <button onclick="switchLanguage('en')" id="hdr-en" class="pf-lang-btn">EN</button>
    <button onclick="switchLanguage('fr')" id="hdr-fr" class="pf-lang-btn">FR</button>
  </div>
</header>
"""

main = """
<main class="relative z-10 max-w-7xl mx-auto px-6 py-8">
  <div class="bg-slate-950/40 border border-slate-900 rounded-2xl p-6 mb-6">
    <div class="flex items-center gap-2 mb-5 text-sm text-fuchsia-400 font-bold">
      <i class="fa-solid fa-bezier-curve"></i>
      <span id="pf-section-label"></span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4" id="pf-branch-cards"></div>
  </div>
  <div class="bg-slate-950/40 border border-slate-900 rounded-2xl p-6" id="pf-detail-panel"></div>
</main>
"""

js_data = {
    'detailHTML': detail_html,
    'branchTitles': branch_titles,
    'branchMeta': branch_meta,
    'titles': titles,
    'eyebrow': eyebrow,
    'subtitle': subtitle,
}

script = """
<script>
const PF_DATA = """ + json.dumps(js_data, ensure_ascii=False) + """;
const SECTION_LABEL = { zh: '探索三大核心面向', en: 'Explore the Three Core Pillars', fr: 'Explorez les Trois Piliers Cles' };
let currentLang = 'en';
let activeBranch = PF_DATA.branchMeta[0].id;

function renderHeader() {
  document.getElementById('pf-eyebrow').textContent = PF_DATA.eyebrow[currentLang];
  document.getElementById('pf-subtitle').textContent = PF_DATA.subtitle[currentLang];
  document.getElementById('pf-title').textContent = PF_DATA.titles[currentLang];
  document.getElementById('pf-section-label').textContent = SECTION_LABEL[currentLang];
  document.querySelectorAll('.pf-lang-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('hdr-' + currentLang).classList.add('active');
}

function renderBranchCards() {
  const wrap = document.getElementById('pf-branch-cards');
  wrap.innerHTML = PF_DATA.branchMeta.map(b => {
    const isActive = b.id === activeBranch;
    return `<div class="pf-branch-card bg-slate-900/60 border border-slate-800 rounded-xl p-4 ${isActive ? 'active' : ''}" onclick="selectBranch('${b.id}')">
      <div class="flex items-center justify-between mb-3">
        <div class="w-10 h-10 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center">
          <i class="fa-solid ${b.icon} text-fuchsia-400"></i>
        </div>
        <span class="text-[9px] font-bold uppercase tracking-wider text-slate-500 bg-slate-800/60 px-2 py-1 rounded-full">${b.badge[currentLang]}</span>
      </div>
      <h3 class="text-base font-bold text-white">${PF_DATA.branchTitles[currentLang][b.id]}</h3>
    </div>`;
  }).join('');
}

function renderDetail() {
  document.getElementById('pf-detail-panel').innerHTML = `<h3 class="text-lg font-bold text-white mb-5">${PF_DATA.branchTitles[currentLang][activeBranch]}</h3>` + PF_DATA.detailHTML[currentLang][activeBranch];
}

function selectBranch(id) {
  activeBranch = id;
  renderBranchCards();
  renderDetail();
}

function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('kb_lang', lang);
  renderHeader();
  renderBranchCards();
  renderDetail();
}

const _saved = localStorage.getItem('kb_lang');
switchLanguage(_saved && ['zh','en','fr'].includes(_saved) ? _saved : 'en');
</script>
</body>
</html>
"""

final = head + header + main + script
with open('coty_perfume_market_mindmap.html', 'w', encoding='utf-8') as f:
    f.write(final)
print('WROTE', len(final))
