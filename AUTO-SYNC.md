# 自動同步說明

讓這個資料夾裡的任何修改自動上傳到 GitHub，網站也就跟著更新。
不需要記得開任何東西，也不會有視窗跳出來。

---

## 第一次設定（只做一次）

1. **先關掉**目前開著的 `auto-push.bat` 黑色視窗（如果有的話）。
   > 這一步不能跳過。更新檔案時如果那支程式正在跑自己，Windows 會讀到一半的檔案而出錯。

2. 雙擊 **`install-auto-sync.bat`**，看到 `[OK] Installed.` 就完成了。

從這一刻起：

- 開機登入 Windows 後，同步會自己開始
- **完全沒有視窗**，工作列也看不到
- 本機的修改大約 **10 秒**內上傳
- 別台電腦或我這邊推上去的更新，大約 **1 分鐘**內下載回來

---

## 它怎麼運作

| 檔案 | 做什麼 |
|---|---|
| `auto-push.bat` | 真正的同步引擎（原本就有，妳手動開的那支） |
| `auto-sync-run.bat` | 在背景呼叫上面那支，並把訊息寫進 `auto-sync.log` |
| `install-auto-sync.bat` | 在「啟動」資料夾放一個小啟動器，讓它開機自動跑 |
| `uninstall-auto-sync.bat` | 取消自動啟動，並讓正在跑的那份停下來 |

啟動器放在這裡（可以自己去看）：

```
%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\KnowledgeBase Auto-Sync.vbs
```

不需要系統管理員權限，也沒有安裝任何東西到帳號以外的地方。刪掉那個檔案就等於取消。

---

## 怎麼知道它有在跑

打開資料夾裡的 **`auto-sync.log`**，最下面幾行就是最近的動作：

- `[OK] pushed to GitHub` — 上傳成功
- `[PULL] got new updates from GitHub` — 抓到別處的更新
- `[OFFLINE] no connection` — 只是暫時沒網路，東西沒掉，接上網就會自己補傳

**萬一真的失敗**（例如 GitHub 密碼過期、檔案衝突），螢幕右下角會跳出一個警告通知，
提醒妳打開 `auto-sync.log` 看發生什麼事。因為視窗是隱藏的，這是唯一會主動叫妳的方式。

---

## 停用

雙擊 **`uninstall-auto-sync.bat`**。它會：

1. 移除開機啟動器
2. 產生一個 `stop-sync.flag`，正在背景跑的那份會在 10 秒內自己停下來

想再打開，重新雙擊 `install-auto-sync.bat` 即可（它會自動清掉那個 flag）。

---

## 幾個提醒

- 裝好之後**不要再手動雙擊 `auto-push.bat`**。兩份同時跑會搶同一個 git 資料夾。
  要看狀況就看 `auto-sync.log`。
- 同步只在**電腦開著而且已登入**時進行。關機期間的修改會在下次開機時補上。
- `auto-sync.log` 與 `stop-sync.flag` 已經加進 `.gitignore`，不會被上傳。
