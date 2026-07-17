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
  ['timeline', 'movements'].forEach(k => {
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
  ['zh','en','fr'].forEach(k => {
    const b = document.getElementById('lang-' + k);
    b.classList.toggle('active', k === LANG);
    b.setAttribute('aria-pressed', k === LANG ? 'true' : 'false');
  });
  document.documentElement.lang = LANG === 'zh' ? 'zh-Hant' : LANG;
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
selectHistory('renaissance_exploration', false);
requestAnimationFrame(() => {
  const sc = document.getElementById('chart-scroll');
  sc.scrollLeft = yearToX(1400) - 160;
});
