# KnowledgeBase

個人知識庫網站，由 `main` 分支透過 GitHub Pages 發布：推到 `main` 的內容就會上線。

## 資料夾結構

每本「卷冊」都放在它所屬分類的資料夾裡，`index.html` 的書架分類與資料夾一一對應：

| 資料夾 | 書架分類 | 內容 |
|---|---|---|
| `humanities/` | 人文與歷史 | 世界藝術史、世界歷史（含 `world-history-*.js`）、希臘羅馬神話 |
| `politics-law/` | 政治與法律 | 國際關係理論、國際法 |
| `business/` | 商業與產業 | 商業與金融、投資理財、生活風格與精品、電影產業、香水市場情報 |
| `arts-media/` | 藝術與創作 | 古箏、鉤針編織、攝影、修圖、影片剪輯 |
| `science/` | 科學與自然 | 觀星、啤酒大師課 |
| `body-beauty/` | 身體與美感 | 健身、化妝、保養活性成分，以及 `dance/`（舞蹈總覽與七個舞種） |
| `career/` | 職涯與規劃 | 職業技能心智圖、法國職涯檔案、履歷提示詞產生器 |
| `assets/` | 共用程式 | `course-kit.js`（三語課程頁的渲染器）、`edit-mode.js`（全站編輯模式） |
| `archive/drafts/` | 不上架 | 已被正式版取代的草稿（啤酒、保養心智圖 v1／v2） |

**新增卷冊時**：把 HTML 放進對應的分類資料夾，共用腳本一律用相對路徑引用（一層深用 `../assets/…`，`body-beauty/dance/` 這種兩層深用 `../../assets/…`），再到 `index.html` 的 `DEFAULT_MODULES` 加一筆，`file` 填含資料夾的相對路徑、`cat` 填對應的分類 id（`humanities`、`politics`、`business`、`arts`、`science`、`body`、`career`）。

## 自動同步到 GitHub（Windows）

**安裝（只做一次）**：雙擊 `install-auto-sync.bat`。之後不用再開任何東西，每次登入 Windows 時，排程工作「KnowledgeBase Auto Sync」會在背景啟動監看，不會出現任何視窗。

**運作方式**

- `auto-watch.ps1` 監看整個資料夾（含子資料夾）。最後一次修改後 **60 秒**才同步，期間有新修改就重新計時。
- 每 **30 分鐘**強制同步一次，把別處推到 GitHub 的更新拉回來。
- 每次同步由 `auto-sync.bat` 執行：清掉 `.git` 裡的 `desktop.ini`，切到 `main`，commit（`Auto-update: 日期 時間`），`pull --rebase`，最後 push。
- 忽略：`.git`、`node_modules`、`auto-sync.log`、`desktop.ini` 與暫存檔（`~$…`、`.tmp`、`.swp`、`.crdownload`）。

**Log**：資料夾裡的 `auto-sync.log`（只存在本機，不會上傳）。

**移除**：雙擊 `uninstall-auto-sync.bat`，會刪除排程工作並停止正在執行的監看。

**發生衝突時**：不會覆蓋任何東西。`pull` 失敗時會取消 rebase、在 log 寫下 `Pull FAILED`，而且不推送，等妳手動處理。

**出現 `fatal: bad object refs/desktop.ini`**：這是 OneDrive 在 `.git` 裡放了 `desktop.ini`。雙擊 `fix-git-desktop-ini.bat` 即可修復（每次同步也會自動清理）。

**調整時間**：在 `auto-watch.ps1` 開頭修改 `$debounceSeconds`（預設 60）與 `$fullSyncMinutes`（預設 30）。
