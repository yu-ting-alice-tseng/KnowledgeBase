# KnowledgeBase：Claude 工作規則

## Git：一律直接在 `main` 工作

- **不開分支、不開 PR**：直接在 `main` 修改、commit、push。`main` 是 GitHub Pages 發布的分支，改動必須立刻到達這裡。
- **推送前一定先** `git pull --rebase origin main`，以免卡住本機的自動同步。
- 本機同步由 `auto-watch.ps1` 負責（監看資料夾，最後一次修改後 60 秒同步，另外每 30 分鐘同步一次），它會呼叫 `auto-sync.bat`。Windows 排程工作名稱為「KnowledgeBase Auto Sync」，用 `install-auto-sync.bat` 安裝。
- **若 session 強制使用 `claude/…` 分支**：工作完成並驗證後，不必等使用者開口，一定要自動 fast-forward 合併回 `main` 並推送：
  ```bash
  git push -u origin <分支>
  git checkout main && git pull --rebase origin main
  git merge --ff-only <分支> && git push origin main
  ```
  少了最後一步，網站就不會更新，因為 GitHub Pages 只發布 `main`。
- **完整發布流程**不需任何手動步驟：本機 → `auto-watch.ps1` → `main` → GitHub Pages（一到兩分鐘上線）。從任何地方推到 `main` 的改動，最晚 30 分鐘內會同步回本機。

## 檔案結構：依分類放進資料夾

- 每本卷冊都放在分類資料夾裡（`humanities/`、`politics-law/`、`business/`、`arts-media/`、`science/`、`body-beauty/`、`career/`），對應 `index.html` 的書架；共用腳本在 `assets/`，淘汰的草稿在 `archive/drafts/`。完整對照表見 `README.md`。
- 新增或搬移頁面時，`index.html` 的 `file` 要填含資料夾的路徑，頁內引用 `course-kit.js` 與其他卷冊一律用相對路徑（`../assets/…`、`../career/…`），搬動後用瀏覽器實際開一次確認沒有 404。
- 根目錄只留 `index.html`、說明檔與自動同步腳本；內容頁不要再直接放在根目錄。
