/* ═══════════ 世界歷史時間軸 · 邏輯 ═══════════ */

function hName(h) { return T(h.name); }
function hSub(h) { return LANG === 'zh' ? h.name.en : h.name.zh; }
function hDesc(h) { return T(h.desc); }
function hOrigin(h) { return T(h.origin); }
function hEvTitle(h) { return T(h.event.title); }
function hEvYear(h) { return T(h.event.year); }
function hEvBg(h) { return T(h.event.background); }
function hEvApp(h) { return T(h.event.appreciation); }
function hEvFeat(h) { return T(h.event.features); }
function hEvStory(h) { return T(h.event.story); }

/* ═══════════ 時間軸比例（分段線性） ═══════════ */
const SEGS = [
  { from:-3500, to:500,  pxPerYr: 0.075 },
  { from:500,   to:1400, pxPerYr: 0.34  },
  { from:1400,  to:2032, pxPerYr: 2.3   },
];
const PAD_L = 26, PAD_R = 40;

function yearToX(y) {
  let x = PAD_L;
  for (const s of SEGS) {
    if (y <= s.from) break;
    const upper = Math.min(y, s.to);
    x += (upper - s.from) * s.pxPerYr;
    if (y <= s.to) break;
  }
  return x;
}
const TOTAL_W = Math.ceil(yearToX(2032)) + PAD_R;

function fmtYear(y) {
  if (LANG === 'en') {
    if (y < 0) return Math.abs(y) + ' BC';
    if (y >= 2024) return 'today';
    return String(y);
  }
  if (LANG === 'fr') {
    if (y < 0) return Math.abs(y) + ' av. J.-C.';
    if (y >= 2024) return "aujourd'hui";
    return String(y);
  }
  if (y < 0) return '前 ' + Math.abs(y) + ' 年';
  if (y >= 2024) return '今日';
  return y + ' 年';
}
function fmtRange(h) { return fmtYear(h.start) + ' — ' + fmtYear(h.end); }

const TICKS = [-3000, -1000, 0, 500, 1000, 1400, 1600, 1800, 1900, 2000];
const LANE_ORDER = ['europe', 'eastasia', 'mideast', 'americas'];
const BAR_H = 40, BAR_GAP = 12, LANE_PAD_TOP = 44, LANE_PAD_BOT = 14;

let selectedId = null;
let regionFilter = 'all';

function buildChart() {
  const canvas = document.getElementById('canvas');
  canvas.style.width = TOTAL_W + 'px';
  canvas.innerHTML = '';

  const bandLayer = document.createElement('div');
  bandLayer.style.cssText = 'position:absolute;inset:0;pointer-events:none;';
  ERAS_TL.forEach((e, i) => {
    const x1 = yearToX(e.from), x2 = yearToX(e.to);
    const band = document.createElement('div');
    band.className = 'era-band' + (i % 2 ? ' alt' : '');
    band.style.left = x1 + 'px'; band.style.width = (x2 - x1) + 'px';
    bandLayer.appendChild(band);
    const lab = document.createElement('div');
    lab.className = 'era-label';
    lab.style.left = x1 + 'px';
    lab.textContent = T(e.name);
    bandLayer.appendChild(lab);
    if (i > 0) {
      const edge = document.createElement('div');
      edge.className = 'era-edge';
      edge.style.left = x1 + 'px';
      bandLayer.appendChild(edge);
    }
  });

  TICKS.forEach(t => {
    const g = document.createElement('div');
    g.className = 'grid-t';
    g.style.left = yearToX(t) + 'px';
    bandLayer.appendChild(g);
  });

  const laneWrap = document.createElement('div');
  laneWrap.style.cssText = 'position:relative;padding-top:26px;';

  LANE_ORDER.forEach(rk => {
    const reg = REGIONS[rk];
    const items = HISTORY.filter(h => h.region === rk).sort((a,b) => a.start - b.start);

    const rowEnds = [];
    items.forEach(h => {
      let r = rowEnds.findIndex(end => h.start >= end - 1);
      if (r === -1) { r = rowEnds.length; rowEnds.push(0); }
      rowEnds[r] = h.end;
      h._row = r;
    });
    const nRows = Math.max(rowEnds.length, 1);
    const laneH = LANE_PAD_TOP + nRows * (BAR_H + BAR_GAP) + LANE_PAD_BOT;

    const lane = document.createElement('div');
    lane.className = 'lane';
    lane.dataset.region = rk;
    lane.classList.toggle('lane-hidden', regionFilter !== 'all' && regionFilter !== rk);
    lane.style.height = laneH + 'px';
    lane.style.background = 'linear-gradient(90deg, ' + reg.color + '12, transparent 460px)';

    const tag = document.createElement('div');
    tag.className = 'lane-tag';
    tag.innerHTML = '<span class="dot" style="background:' + reg.color + ';box-shadow:0 0 8px ' + reg.color + '"></span>' + regName(rk);
    lane.appendChild(tag);

    items.forEach(h => {
      const x1 = yearToX(h.start), x2 = yearToX(h.end);
      const w = Math.max(x2 - x1, 56);
      const bar = document.createElement('div');
      bar.className = 'bar' + (w < 96 ? ' slim' : '');
      bar.dataset.id = h.id;
      bar.dataset.region = h.region;
      bar.style.left = x1 + 'px';
      bar.style.width = w + 'px';
      bar.style.top = (LANE_PAD_TOP + h._row * (BAR_H + BAR_GAP)) + 'px';
      bar.style.background = 'linear-gradient(180deg, ' + h.color + 'f2, ' + h.color + '8c)';
      bar.style.setProperty('--glow', h.color + '66');
      const thumb = (w >= 96) ? '<span class="bar-thumb">' + h.event.icon + '</span>' : '';
      const years = (w >= 160) ? '<span class="bar-years">' + fmtRange(h) + '</span>' : '';
      bar.innerHTML = thumb + '<span class="bar-txt"><span class="bar-name">' + hName(h) + '</span>' + years + '</span>';
      bar.setAttribute('role', 'button');
      bar.setAttribute('tabindex', '0');
      bar.setAttribute('aria-label', hName(h) + ' · ' + fmtRange(h));
      bar.onclick = () => selectHistory(h.id, true);
      bar.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectHistory(h.id, true); } };
      bar.onmousemove = e => showTip(e, h);
      bar.onmouseleave = hideTip;
      lane.appendChild(bar);
    });

    laneWrap.appendChild(lane);
  });

  const axis = document.createElement('div');
  axis.id = 'axis';
  TICKS.forEach(t => {
    const tick = document.createElement('div');
    tick.className = 'tick';
    tick.style.left = yearToX(t) + 'px';
    const tickTxt = t < 0
      ? (LANG === 'zh' ? '前' + Math.abs(t) : (LANG === 'fr' ? Math.abs(t) + ' av. J.-C.' : Math.abs(t) + ' BC'))
      : t;
    tick.innerHTML = '<div class="tl"></div><div class="ty">' + tickTxt + '</div>';
    axis.appendChild(tick);
  });

  canvas.appendChild(bandLayer);
  canvas.appendChild(laneWrap);
  canvas.appendChild(axis);
}

/* Tooltip */
const tipEl = document.getElementById('tooltip');
function showTip(e, h) {
  tipEl.style.display = 'block';
  tipEl.innerHTML = hName(h) + '<div class="yrs">' + fmtRange(h) + ' · ' + regName(h.region) + '</div>';
  const pad = 14;
  let x = e.clientX + pad, y = e.clientY + pad;
  const r = tipEl.getBoundingClientRect();
  if (x + r.width > window.innerWidth - 10) x = e.clientX - r.width - pad;
  if (y + r.height > window.innerHeight - 10) y = e.clientY - r.height - pad;
  tipEl.style.left = x + 'px'; tipEl.style.top = y + 'px';
}
function hideTip() { tipEl.style.display = 'none'; }

/* Region filter */
function buildFilters() {
  const box = document.getElementById('filters');
  const mk = (key, label, color) => {
    const c = document.createElement('div');
    c.className = 'chip' + (regionFilter === key ? ' active' : '');
    c.setAttribute('role', 'button'); c.setAttribute('tabindex', '0');
    c.innerHTML = (color ? '<span class="dot" style="background:' + color + ';box-shadow:0 0 8px ' + color + '"></span>' : '✦ ') + label;
    c.onclick = () => setFilter(key);
    c.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setFilter(key); } };
    box.appendChild(c);
  };
  box.innerHTML = '';
  mk('all', uiStr('allRegions'), null);
  Object.entries(REGIONS).forEach(([k, r]) => mk(k, regName(k), r.color));
}
function setFilter(key) {
  regionFilter = key;
  buildFilters();
  document.querySelectorAll('.bar').forEach(b => {
    b.classList.toggle('dim', key !== 'all' && b.dataset.region !== key);
  });
  document.querySelectorAll('.lane').forEach(l => {
    l.classList.toggle('lane-hidden', key !== 'all' && l.dataset.region !== key);
  });
}

/* Minimap (shared abstract world silhouette) */
const MINIMAP = '<svg id="minimap" viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg">'
  + '<rect width="320" height="170" rx="10" fill="rgba(255,243,210,0.02)" stroke="rgba(201,168,92,0.14)"/>'
  + '<path class="land" data-r="americas" d="M56 28 Q78 20 92 32 Q98 44 88 54 Q94 62 86 72 L74 96 Q70 116 60 132 Q54 118 58 100 L50 78 Q38 66 42 48 Q46 32 56 28 Z"/>'
  + '<path class="land" data-r="europe" d="M138 34 Q156 24 176 30 Q188 36 184 48 Q176 58 162 60 Q148 64 140 56 Q132 44 138 34 Z"/>'
  + '<path class="land" data-r="mideast" d="M148 66 Q168 60 186 66 Q200 62 210 70 Q214 82 206 88 L196 84 Q192 100 180 116 Q172 130 164 118 Q154 100 150 84 Q144 72 148 66 Z"/>'
  + '<path class="land" data-r="eastasia" d="M216 34 Q244 24 268 36 Q282 46 276 62 Q268 76 252 78 Q238 84 228 74 Q214 62 212 48 Q212 38 216 34 Z"/>'
  + '<circle cx="290" cy="96" r="4" class="land" data-r="eastasia"/>'
  + '</svg>';

/* Detail panel */
function selectHistory(id, scroll) {
  const h = HISTORY.find(x => x.id === id);
  if (!h) return;
  selectedId = id;

  document.querySelectorAll('.bar').forEach(b => b.classList.toggle('selected', b.dataset.id === id));

  const reg = REGIONS[h.region];
  const dl = document.getElementById('d-left');
  const dr = document.getElementById('d-right');

  dl.innerHTML =
    '<div class="d-period"><span class="ln"></span>' + fmtRange(h) + '</div>'
    + '<h2 class="d-title">' + hName(h) + '<span class="en">' + hSub(h) + '</span></h2>'
    + '<div class="d-region-chip"><span class="dot" style="background:' + reg.color + ';box-shadow:0 0 8px ' + reg.color + '"></span>' + uiStr('origin') + ' · ' + regName(h.region) + '</div>'
    + '<p class="d-desc">' + hDesc(h) + '</p>'
    + '<div class="d-sec-label">' + uiStr('originLabel') + '</div>'
    + '<p class="d-desc d-origin">' + hOrigin(h) + '</p>'
    + '<div class="d-sec-label">' + uiStr('geo') + '</div>'
    + '<div id="minimap-box">' + MINIMAP + '<div class="map-caption">' + uiStr('mapCaption') + '</div></div>';

  const feats = hEvFeat(h);
  dr.innerHTML =
    '<div id="art-card">'
    + '<div id="art-frame"><span class="ev-icon">' + h.event.icon + '</span></div>'
    + '<div class="art-caption">'
    + '<div class="art-title">' + qtitle(hEvTitle(h)) + '</div>'
    + '<div class="art-meta">' + hEvYear(h) + '</div>'
    + (hEvBg(h) ? '<div class="story-label">' + uiStr('backgroundLabel') + '</div><p class="art-story">' + hEvBg(h) + '</p>' : '')
    + (hEvApp(h) ? '<div class="story-label">' + uiStr('appreciationLabel') + '</div><p class="art-story">' + hEvApp(h) + '</p>' : '')
    + (feats && feats.length ? '<div class="story-label">' + uiStr('featuresLabel') + '</div><div class="art-features">' + feats.map(f => '<span class="art-feature-chip">' + f + '</span>').join('') + '</div>' : '')
    + '<div class="story-label">' + uiStr('story') + '</div>'
    + '<p class="art-story">' + hEvStory(h) + '</p>'
    + '</div></div>';

  const map = document.getElementById('minimap');
  map.style.setProperty('--lit', reg.lit);
  map.querySelectorAll('.land').forEach(p => p.classList.toggle('lit', p.dataset.r === h.region));

  const subCard = it => '<div class="d-sub-card">'
    + '<div class="d-sub-head"><span class="d-sub-name">' + T(it.name) + '</span><span class="d-sub-year">' + T(it.year) + '</span></div>'
    + '<div class="d-sub-desc">' + T(it.desc) + '</div></div>';
  const devents = document.getElementById('d-events');
  let evHtml = '';
  if (h.battles && h.battles.length) {
    evHtml += '<div class="d-sec-label">' + uiStr('battlesLabel') + '</div>'
      + '<div class="d-sub-grid">' + h.battles.map(subCard).join('') + '</div>';
  }
  if (h.aftermath && h.aftermath.length) {
    evHtml += '<div class="d-sec-label">' + uiStr('aftermathLabel') + '</div>'
      + '<div class="d-sub-grid">' + h.aftermath.map(subCard).join('') + '</div>';
  }
  devents.innerHTML = evHtml;

  const panel = document.getElementById('detail');
  panel.style.display = 'block';

  if (scroll) {
    const sc = document.getElementById('chart-scroll');
    const x1 = yearToX(h.start);
    sc.scrollTo({ left: Math.max(x1 - 160, 0), behavior: 'smooth' });
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'start' }), 260);
  }
}

function navMove(dir) {
  const ordered = [...HISTORY].sort((a, b) => a.start - b.start);
  let i = ordered.findIndex(h => h.id === selectedId);
  i = (i + dir + ordered.length) % ordered.length;
  selectHistory(ordered[i].id, false);
  const bar = document.querySelector('.bar[data-id="' + ordered[i].id + '"]');
  if (bar) bar.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

/* Eras grid view */
function renderHistoryIndex() {
  const box = document.getElementById('view-movements');
  const ordered = [...HISTORY].sort((a, b) => a.start - b.start);
  const eraOf = h => {
    let idx = 0;
    ERAS_TL.forEach((e, i) => { if (e.from <= h.start) idx = i; });
    return idx;
  };
  let html =
    '<div id="mvx-head">'
    + '<div class="orn"><div class="l"></div><span class="g">✦</span><div class="r"></div></div>'
    + '<h2>' + uiStr('tabMovements') + '</h2>'
    + '<p>' + uiStr('mvxSub') + '</p>'
    + '</div>';
  ERAS_TL.forEach((e, i) => {
    const items = ordered.filter(h => eraOf(h) === i);
    if (!items.length) return;
    html += '<div class="mvx-era"><span class="t">' + T(e.name) + '</span>'
      + '<span class="yrs">' + fmtYear(e.from) + ' — ' + fmtYear(Math.min(e.to, 2026)) + '</span>'
      + '<span class="ln"></span></div>'
      + '<div class="mvx-grid">'
      + items.map(h => {
          const reg = REGIONS[h.region];
          return '<div class="mvx-card" style="--glow:' + h.color + '44;--ring:' + h.color + 'aa"'
          + ' role="button" tabindex="0" onclick="goHist(\'' + h.id + '\')"'
          + ' onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();goHist(\'' + h.id + '\')}">'
          + '<div class="mvx-icon" style="background:' + h.color + '33;">' + h.event.icon + '</div>'
          + '<div class="mvx-body">'
          + '<div class="mvx-name">' + hName(h) + '</div>'
          + '<div class="mvx-meta"><span class="yrs">' + fmtRange(h) + '</span>'
          + '<span class="reg"><span class="dot" style="background:' + reg.color + '"></span>' + regName(h.region) + '</span></div>'
          + '<div class="mvx-teaser">' + hOrigin(h) + '</div>'
          + '</div></div>';
        }).join('')
      + '</div>';
  });
  box.innerHTML = html;
}

function goHist(id) {
  showView('timeline');
  selectHistory(id, true);
  const bar = document.querySelector('.bar[data-id="' + id + '"]');
  if (bar) bar.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

/* View switching */
let currentView = 'timeline';
function showView(v) {
  if (!document.getElementById('view-' + v)) return;
  currentView = v;
  ['timeline', 'movements', 'study'].forEach(k => {
    document.getElementById('view-' + k).classList.toggle('view-hidden', k !== v);
    const t = document.getElementById('vtab-' + k);
    t.classList.toggle('active', k === v);
    t.setAttribute('aria-selected', k === v ? 'true' : 'false');
  });
}

/* Language switching */
function applyStatic() {
  document.getElementById('eyebrow-txt').textContent = uiStr('eyebrow');
  document.getElementById('subtitle-txt').innerHTML  = uiStr('subtitle');
  document.getElementById('hint').innerHTML          = uiStr('hint');
  document.getElementById('footer-txt').innerHTML    = uiStr('footer');
  document.querySelector('#vtab-timeline .vt-txt').textContent  = uiStr('tabTimeline');
  document.querySelector('#vtab-movements .vt-txt').textContent = uiStr('tabMovements');
  document.querySelector('#vtab-study .vt-txt').textContent     = uiStr('tabStudy');
  ['zh','en','fr'].forEach(k => {
    const b = document.getElementById('lang-' + k);
    b.classList.toggle('active', k === LANG);
    b.setAttribute('aria-pressed', k === LANG ? 'true' : 'false');
  });
  document.documentElement.lang = LANG === 'zh' ? 'zh-Hant' : LANG;
}


/* ═══════════ 學習路徑：把歷史知識變成可用的判斷 ═══════════ */
const HISTORY_STUDY = {
  zh: {
    h: '學習路徑',
    sub: '記得住年代不等於懂歷史。以下是六個月，從時間軸走到能自己論證的路線。',
    stages: [
      { h: '第 1–2 個月 · 先有骨架', items: [
        '用這條時間軸把二十個時期的先後與地理記牢——沒有骨架，之後讀到的一切都會散掉。',
        '每個時期只問三件事：誰掌權、靠什麼吃飯、和誰打交道。政治、經濟、對外關係就是歷史的三根軸。',
        '刻意練習「同時性」：中國在唐代時，歐洲、伊斯蘭世界、美洲各在做什麼？橫向對照會打掉很多直覺誤解。' ] },
      { h: '第 3–4 個月 · 讀出立場', items: [
        '對同一事件找兩份立場不同的敘述，比對它們選了什麼、略過了什麼。歷史寫作的省略比陳述更能透露立場。',
        '學會分辨一手史料與後世詮釋，並習慣追問：這份材料是誰、為誰、在什麼情況下寫的。',
        '讀一本方法論（Carr《What Is History?》或 Bloch《史家的技藝》），理解史學本身也有歷史。' ] },
      { h: '第 5–6 個月 · 自己論證', items: [
        '寫一篇一千字的因果分析：一個事件、兩種解釋、妳的判斷，以及什麼證據會推翻妳。',
        '做一份跨區域比較：同一個世紀裡兩個地區的制度差異與後果。',
        '把它講一次給不熟這段歷史的人聽——講得清楚才算真的懂。' ] }
    ],
    resTitle: '實操資源',
    res: [
      'E.H. Carr《What Is History?》— 一百多頁，講清楚歷史為什麼不是客觀事實的堆疊',
      'Marc Bloch《史家的技藝》— 史料批判的入門經典',
      'Gallica（法國國家圖書館）與 Internet Archive — 免費的一手史料',
      'Our World in Data / Maddison Project — 長時段的經濟與人口數據',
      '在地博物館與檔案館 — 真正的一手材料在那裡，且多數免費'
    ],
    projTitle: '可展示的成果',
    proj: '一篇一千字的因果分析與一份跨區域比較。歷史訓練真正賣得掉的能力是三項：處理龐雜資料、辨識敘事立場、在證據不足時仍能給出有理由的判斷——這三項在政策、風險分析與顧問業都直接適用。',
    note: '職涯出口：檔案與博物館、出版與媒體、政策與智庫研究、企業的國家風險與地緣政治分析。若想把這條線接到職場，可參考知識庫裡的國際關係、國際法與職涯檔案三卷。'
  },
  en: {
    h: 'Study Path',
    sub: 'Remembering dates is not understanding history. Six months from this timeline to arguing for yourself.',
    stages: [
      { h: 'Months 1-2 · Build the skeleton', items: [
        'Use this timeline to fix twenty periods in order and place. Without a skeleton, everything you read later falls apart.',
        'Ask each period the same three things: who held power, what the economy ran on, and who they dealt with. Politics, economy and external relations are the three axes.',
        'Practise simultaneity deliberately: while Tang China was at its height, what was happening in Europe, the Islamic world, the Americas? Reading across kills a lot of intuitive error.' ] },
      { h: 'Months 3-4 · Read the position', items: [
        'Find two accounts of the same event from opposing standpoints and compare what each selects and omits. In historical writing the omissions reveal more than the claims.',
        'Learn to separate primary sources from later interpretation, and always ask who wrote this, for whom, under what circumstances.',
        'Read one book on method (Carr, What Is History?, or Bloch, The Historian’s Craft) and see that history writing has a history of its own.' ] },
      { h: 'Months 5-6 · Argue', items: [
        'Write a thousand-word causal analysis: one event, two explanations, your judgement, and what evidence would overturn it.',
        'Build a cross-regional comparison: two regions in the same century, their institutional differences and the consequences.',
        'Explain it once to someone who does not know the period. Only then do you know it.' ] }
    ],
    resTitle: 'Hands-on resources',
    res: [
      'E.H. Carr, What Is History? — a hundred-odd pages on why history is not a stack of objective facts',
      'Marc Bloch, The Historian’s Craft — the classic introduction to source criticism',
      'Gallica (BnF) and the Internet Archive — free primary material',
      'Our World in Data / the Maddison Project — long-run economic and demographic series',
      'Local museums and archives — the real primary material, and mostly free'
    ],
    projTitle: 'What to have at the end',
    proj: 'One thousand-word causal analysis and one cross-regional comparison. What historical training actually sells is three things: handling unruly evidence, spotting the position inside a narrative, and reaching a defensible judgement when the evidence is incomplete — all three transfer directly to policy, risk analysis and consulting.',
    note: 'Where it leads: archives and museums, publishing and media, policy and think-tank research, and country-risk or geopolitical analysis in companies. For the working end of that, see the international relations, international law and career volumes in this library.'
  },
  fr: {
    h: 'Parcours',
    sub: 'Retenir des dates n’est pas comprendre l’histoire. Six mois pour passer de la frise à l’argumentation.',
    stages: [
      { h: 'Mois 1-2 · Bâtir le squelette', items: [
        'Se servir de cette frise pour fixer vingt périodes dans l’ordre et l’espace : sans squelette, tout le reste se disperse.',
        'Poser à chaque période les mêmes trois questions : qui détient le pouvoir, de quoi vit l’économie, avec qui traite-t-on.',
        'Travailler la simultanéité : pendant l’apogée des Tang, que se passait-il en Europe, en terre d’islam, dans les Amériques ?' ] },
      { h: 'Mois 3-4 · Lire les positions', items: [
        'Confronter deux récits opposés d’un même événement et comparer ce que chacun retient et omet : les omissions en disent plus que les affirmations.',
        'Distinguer sources primaires et interprétations postérieures, et toujours demander : qui écrit, pour qui, dans quelles circonstances ?',
        'Lire un ouvrage de méthode (Carr ou Bloch) et découvrir que l’écriture de l’histoire a elle-même une histoire.' ] },
      { h: 'Mois 5-6 · Argumenter', items: [
        'Rédiger une analyse causale de mille mots : un événement, deux explications, votre jugement, et ce qui le renverserait.',
        'Construire une comparaison inter-régionale : deux régions au même siècle, différences institutionnelles et conséquences.',
        'L’expliquer à quelqu’un qui ignore la période : c’est alors seulement qu’on sait.' ] }
    ],
    resTitle: 'Ressources pratiques',
    res: [
      'E.H. Carr, <i>What Is History?</i> — cent pages sur pourquoi l’histoire n’est pas un empilement de faits',
      'Marc Bloch, <i>Apologie pour l’histoire</i> — le classique de la critique des sources',
      'Gallica (BnF) et Internet Archive — sources primaires gratuites',
      'Our World in Data / projet Maddison — séries longues, économie et démographie',
      'Musées et archives locales — la vraie matière première, souvent gratuite'
    ],
    projTitle: 'Ce qu’il faut avoir à la fin',
    proj: 'Une analyse causale de mille mots et une comparaison inter-régionale. Ce que la formation historique vend réellement tient en trois compétences : traiter une masse de sources, repérer la position dans un récit, et juger malgré l’incomplétude — toutes trois transférables à la politique publique, au risque et au conseil.',
    note: 'Débouchés : archives et musées, édition et médias, recherche en think tank, analyse du risque pays en entreprise. Voir les volumes relations internationales, droit international et carrière de cette bibliothèque.'
  }
};

function renderStudy() {
  const d = HISTORY_STUDY[LANG] || HISTORY_STUDY.zh;
  let html =
    '<div id="mvx-head">'
    + '<div class="orn"><div class="l"></div><span class="g">✦</span><div class="r"></div></div>'
    + '<h2>' + d.h + '</h2>'
    + '<p>' + d.sub + '</p>'
    + '</div>'
    + '<div class="study-wrap">';
  d.stages.forEach(function (st) {
    html += '<section class="study-stage"><h3>' + st.h + '</h3><ul>'
         + st.items.map(function (i) { return '<li>' + i + '</li>'; }).join('')
         + '</ul></section>';
  });
  html += '<section class="study-stage"><h3>' + d.resTitle + '</h3><ul>'
       + d.res.map(function (r) { return '<li>' + r + '</li>'; }).join('')
       + '</ul></section>';
  html += '<section class="study-stage study-proj"><h3>' + d.projTitle + '</h3><p>' + d.proj + '</p></section>';
  html += '<p class="study-note">' + d.note + '</p>';
  html += '</div>';
  document.getElementById('view-study').innerHTML = html;
}

function switchLang(l) {
  if (!['zh','en','fr'].includes(l) || l === LANG) return;
  LANG = l;
  localStorage.setItem('kb_lang', l);
  const sc = document.getElementById('chart-scroll');
  const keepScroll = sc.scrollLeft;
  applyStatic();
  buildChart();
  setFilter(regionFilter);
  renderHistoryIndex();
  renderStudy();
  if (selectedId) selectHistory(selectedId, false);
  sc.scrollLeft = keepScroll;
}

/* Boot */
if (window.self !== window.top) {
  document.getElementById('lang-switch').style.display = 'none';
}
const savedLang = localStorage.getItem('kb_lang');
if (['zh','en','fr'].includes(savedLang)) LANG = savedLang;
applyStatic();
buildFilters();
buildChart();
renderHistoryIndex();
renderStudy();
selectHistory('renaissance_exploration', false);
requestAnimationFrame(() => {
  const sc = document.getElementById('chart-scroll');
  sc.scrollLeft = yearToX(1400) - 160;
});
