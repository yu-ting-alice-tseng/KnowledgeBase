# KnowledgeBase

個人知識庫網站，由 `main` 分支透過 GitHub Pages 發布：推到 `main` 的內容就會上線。

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
