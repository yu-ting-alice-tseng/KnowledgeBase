/* ═══════════════════════════════════════════════════════════
   Edit Mode — a lightweight, site-wide WYSIWYG editor overlay.
   Include with: <script src="edit-mode.js" defer></script>
   No server, no dependencies. Persistence = download the edited
   HTML file and replace the original with it.
   ═══════════════════════════════════════════════════════════ */
(function () {
  let editing = false;
  let hoverBlock = null;

  const BLOCK_SELECTOR = [
    'p','li','h1','h2','h3','h4','h5','h6','blockquote','figcaption','td','th',
    '[class*="desc"]','[class*="teaser"]','[class*="story"]','[class*="blurb"]',
    '[class*="subtitle"]','[class*="caption"]','[class*="title"]','[class*="note"]'
  ].join(',');

  /* ─── styles ─── */
  const style = document.createElement('style');
  style.id = 'edit-mode-style';
  style.textContent = `
    #em-toggle {
      position: fixed; bottom: 22px; right: 22px; z-index: 99999;
      display: flex; align-items: center; gap: 8px;
      padding: 11px 18px; border-radius: 30px; cursor: pointer;
      font: 700 13px/1 'Nunito', system-ui, sans-serif;
      background: #1a1512; color: #f0e6cf;
      border: 1px solid rgba(201,168,92,0.5);
      box-shadow: 0 10px 30px rgba(0,0,0,0.45);
      transition: transform .15s, background .2s;
      user-select: none;
    }
    #em-toggle:hover { transform: translateY(-2px); background: #241d18; }
    #em-toggle.on { background: #6b3a2e; border-color: #e08a5c; }
    #em-toolbar {
      position: fixed; left: 50%; bottom: 22px; transform: translateX(-50%);
      z-index: 99999; display: none; align-items: center; gap: 6px;
      padding: 9px 14px; border-radius: 16px;
      background: rgba(20,16,13,0.97); backdrop-filter: blur(14px);
      border: 1px solid rgba(201,168,92,0.35);
      box-shadow: 0 16px 40px rgba(0,0,0,0.5);
      font-family: 'Nunito', system-ui, sans-serif;
      max-width: calc(100vw - 220px); flex-wrap: wrap;
    }
    #em-toolbar.show { display: flex; }
    #em-toolbar button, #em-toolbar select, #em-toolbar input[type=color] {
      font: 700 12px/1 'Nunito', system-ui, sans-serif;
      background: rgba(255,255,255,0.06); color: #f0e6cf;
      border: 1px solid rgba(201,168,92,0.28); border-radius: 8px;
      padding: 7px 10px; cursor: pointer;
    }
    #em-toolbar button:hover { background: rgba(201,168,92,0.22); }
    #em-toolbar input[type=color] { padding: 3px; width: 34px; height: 30px; }
    #em-toolbar .em-sep { width: 1px; height: 20px; background: rgba(255,255,255,0.15); margin: 0 4px; }
    #em-warn {
      font-size: 10.5px; color: #e0a862; max-width: 190px; line-height: 1.4;
      padding-right: 6px; border-right: 1px solid rgba(255,255,255,0.15); margin-right: 4px;
    }
    #em-save { background: rgba(96,200,140,0.18) !important; border-color: rgba(96,200,140,0.5) !important; }
    #em-save:hover { background: rgba(96,200,140,0.32) !important; }
    #em-block-ctrl {
      position: absolute; z-index: 99998; display: none;
      gap: 3px; padding: 4px; border-radius: 8px;
      background: rgba(20,16,13,0.95); border: 1px solid rgba(201,168,92,0.4);
      box-shadow: 0 6px 16px rgba(0,0,0,0.4);
    }
    #em-block-ctrl button {
      width: 24px; height: 24px; border: none; border-radius: 5px;
      background: rgba(255,255,255,0.08); color: #f0e6cf; cursor: pointer; font-size: 11px;
      display: flex; align-items: center; justify-content: center;
    }
    #em-block-ctrl button:hover { background: rgba(201,168,92,0.35); }
    body[data-edit-mode="on"] .em-hover-outline { outline: 1.5px dashed rgba(201,168,92,0.65) !important; outline-offset: 2px; }
    body[data-edit-mode="on"] [contenteditable]:focus { outline: 1.5px solid #e08a5c !important; outline-offset: 2px; }
  `;
  document.head.appendChild(style);

  /* ─── toggle button ─── */
  const toggle = document.createElement('div');
  toggle.id = 'em-toggle';
  toggle.innerHTML = '<span id="em-toggle-ic">✎</span><span id="em-toggle-txt">編輯頁面</span>';
  document.body.appendChild(toggle);

  /* ─── toolbar ─── */
  const toolbar = document.createElement('div');
  toolbar.id = 'em-toolbar';
  toolbar.innerHTML = `
    <span id="em-warn">⚠ 若此頁面會依語言/項目切換重新產生內容，切換將清除尚未儲存的編輯。</span>
    <button data-cmd="bold" title="粗體"><b>B</b></button>
    <button data-cmd="italic" title="斜體"><i>I</i></button>
    <button data-cmd="underline" title="底線"><u>U</u></button>
    <span class="em-sep"></span>
    <select id="em-fontsize" title="字級">
      <option value="2">小</option><option value="3" selected>中</option>
      <option value="5">大</option><option value="7">特大</option>
    </select>
    <input type="color" id="em-color" title="文字顏色" value="#e8cc84">
    <span class="em-sep"></span>
    <button data-cmd="justifyLeft" title="靠左">⯇</button>
    <button data-cmd="justifyCenter" title="置中">☰</button>
    <button data-cmd="justifyRight" title="靠右">⯈</button>
    <span class="em-sep"></span>
    <button id="em-undo" title="復原">↶</button>
    <button id="em-save">⬇ 儲存為 HTML</button>
  `;
  document.body.appendChild(toolbar);

  /* ─── block hover controls ─── */
  const blockCtrl = document.createElement('div');
  blockCtrl.id = 'em-block-ctrl';
  blockCtrl.innerHTML = `
    <button data-act="up" title="上移">↑</button>
    <button data-act="down" title="下移">↓</button>
    <button data-act="dup" title="複製">⧉</button>
    <button data-act="del" title="刪除">✕</button>
  `;
  document.body.appendChild(blockCtrl);

  function isUiEl(el) {
    return !!el.closest('#em-toggle, #em-toolbar, #em-block-ctrl');
  }

  function positionBlockCtrl(el) {
    const r = el.getBoundingClientRect();
    blockCtrl.style.display = 'flex';
    blockCtrl.style.top = (window.scrollY + r.top - 30) + 'px';
    blockCtrl.style.left = (window.scrollX + Math.max(r.left, 4)) + 'px';
  }

  document.addEventListener('mouseover', e => {
    if (!editing) return;
    if (isUiEl(e.target)) return;
    const block = e.target.closest(BLOCK_SELECTOR);
    if (!block || isUiEl(block)) { return; }
    if (hoverBlock && hoverBlock !== block) hoverBlock.classList.remove('em-hover-outline');
    hoverBlock = block;
    block.classList.add('em-hover-outline');
    positionBlockCtrl(block);
  }, true);

  document.addEventListener('mouseout', e => {
    if (!editing) return;
    if (e.relatedTarget && (e.relatedTarget.closest && e.relatedTarget.closest('#em-block-ctrl'))) return;
  }, true);

  blockCtrl.addEventListener('click', e => {
    const btn = e.target.closest('button[data-act]');
    if (!btn || !hoverBlock) return;
    const act = btn.dataset.act;
    if (act === 'up' && hoverBlock.previousElementSibling) {
      hoverBlock.parentNode.insertBefore(hoverBlock, hoverBlock.previousElementSibling);
      positionBlockCtrl(hoverBlock);
    } else if (act === 'down' && hoverBlock.nextElementSibling) {
      hoverBlock.parentNode.insertBefore(hoverBlock.nextElementSibling, hoverBlock);
      positionBlockCtrl(hoverBlock);
    } else if (act === 'dup') {
      const clone = hoverBlock.cloneNode(true);
      hoverBlock.parentNode.insertBefore(clone, hoverBlock.nextElementSibling);
    } else if (act === 'del') {
      if (confirm('刪除這個區塊？Delete this block?')) {
        hoverBlock.classList.remove('em-hover-outline');
        hoverBlock.remove();
        blockCtrl.style.display = 'none';
        hoverBlock = null;
      }
    }
  });

  /* ─── block-away click blocker: while editing, swallow clicks on interactive
         elements so the page's own JS doesn't re-render and wipe edits ─── */
  document.addEventListener('click', e => {
    if (!editing) return;
    if (isUiEl(e.target)) return;
    let el = e.target;
    while (el && el !== document.body) {
      if (el.onclick || el.getAttribute('onclick') || el.tagName === 'A' || el.tagName === 'BUTTON') {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      el = el.parentElement;
    }
  }, true);

  /* ─── toolbar commands ─── */
  toolbar.addEventListener('click', e => {
    const btn = e.target.closest('button[data-cmd]');
    if (btn) { document.execCommand(btn.dataset.cmd, false, null); return; }
    if (e.target.id === 'em-undo') { document.execCommand('undo', false, null); return; }
    if (e.target.id === 'em-save') { saveHTML(); return; }
  });
  document.getElementById('em-fontsize') || null;
  toolbar.querySelector('#em-fontsize').addEventListener('change', e => {
    document.execCommand('fontSize', false, e.target.value);
  });
  toolbar.querySelector('#em-color').addEventListener('input', e => {
    document.execCommand('foreColor', false, e.target.value);
  });

  /* ─── save / export ─── */
  function saveHTML() {
    document.body.removeAttribute('data-edit-mode');
    if (hoverBlock) hoverBlock.classList.remove('em-hover-outline');
    toggle.style.display = 'none';
    toolbar.style.display = 'none';
    blockCtrl.style.display = 'none';
    const wasEditing = document.designMode === 'on';
    document.designMode = 'off';

    const clone = document.documentElement.cloneNode(true);
    clone.querySelectorAll('#em-toggle, #em-toolbar, #em-block-ctrl, #edit-mode-style').forEach(n => n.remove());
    clone.querySelectorAll('[contenteditable]').forEach(n => n.removeAttribute('contenteditable'));
    const html = '<!DOCTYPE html>\n' + clone.outerHTML;

    const blob = new Blob([html], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = (location.pathname.split('/').pop() || 'page') || 'page.html';
    document.body.appendChild(a);
    a.click();
    a.remove();

    toggle.style.display = '';
    if (wasEditing) { document.designMode = 'on'; toolbar.style.display = ''; }
  }

  /* ─── toggle edit mode ─── */
  function setEditing(on) {
    editing = on;
    document.body.dataset.editMode = on ? 'on' : 'off';
    document.designMode = on ? 'on' : 'off';
    toggle.classList.toggle('on', on);
    document.getElementById('em-toggle-ic').textContent = on ? '✓' : '✎';
    document.getElementById('em-toggle-txt').textContent = on ? '完成編輯' : '編輯頁面';
    toolbar.classList.toggle('show', on);
    if (!on) {
      blockCtrl.style.display = 'none';
      if (hoverBlock) hoverBlock.classList.remove('em-hover-outline');
      hoverBlock = null;
    }
  }

  toggle.addEventListener('click', () => setEditing(!editing));

  document.addEventListener('keydown', e => {
    if (editing && (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
      e.preventDefault();
      saveHTML();
    }
  });
})();
