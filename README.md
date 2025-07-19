# 學習活動反思記錄

一個簡潔美觀的GitHub Pages網站，用於記錄和管理您的學習活動反思。

## 🌟 功能特色

- **📝 記錄反思**：輕鬆記錄每次學習活動的內容和反思
- **🏷️ 分類管理**：支援多種學習類型分類（課程學習、專案實作、讀書心得等）
- **🔍 搜尋篩選**：快速搜尋和篩選反思記錄
- **📱 響應式設計**：完美支援桌面和行動裝置
- **💾 本地儲存**：使用瀏覽器本地儲存，資料安全可靠
- **🎨 現代化UI**：美觀的漸層背景和卡片式設計

## 🚀 快速開始

1. **Fork 或 Clone 此專案**
   ```bash
   git clone https://github.com/your-username/activity_reflections.git
   cd activity_reflections
   ```

2. **設定 GitHub Pages**
   - 前往 GitHub 專案頁面
   - 點擊 Settings → Pages
   - Source 選擇 "Deploy from a branch"
   - Branch 選擇 "main" 或 "master"
   - 點擊 Save

3. **開始使用**
   - 您的網站將在 `https://your-username.github.io/activity_reflections` 上線
   - 開始記錄您的學習反思！

## 📖 使用說明

### 新增反思記錄
1. 填寫活動標題（必填）
2. 選擇活動日期（預設為今天）
3. 選擇活動類型
4. 描述學習內容
5. 分享反思與收穫
6. 添加相關標籤（可選）
7. 點擊「儲存反思」

### 管理反思記錄
- **搜尋**：在搜尋框輸入關鍵字
- **篩選**：使用分類下拉選單篩選記錄
- **編輯**：點擊記錄卡片上的「編輯」按鈕
- **刪除**：點擊「刪除」按鈕並確認

## 🛠️ 技術架構

- **前端**：HTML5, CSS3, JavaScript (ES6+)
- **樣式**：CSS Grid, Flexbox, CSS 動畫
- **圖示**：Font Awesome 6.0
- **字體**：Google Fonts (Noto Sans TC)
- **儲存**：LocalStorage API

## 📁 檔案結構

```
activity_reflections/
├── index.html          # 主頁面
├── styles.css          # 樣式表
├── script.js           # JavaScript 功能
├── README.md           # 專案說明
└── .gitignore          # Git 忽略檔案
```

## 🎨 自訂化

### 修改顏色主題
在 `styles.css` 中修改以下 CSS 變數：
```css
/* 主色調 */
--primary-color: #667eea;
--secondary-color: #764ba2;
```

### 新增活動類型
在 `index.html` 中修改 `<select>` 選項：
```html
<option value="新類型">新類型</option>
```

### 修改標題和描述
在 `index.html` 中修改：
```html
<h1>您的標題</h1>
<p class="subtitle">您的描述</p>
```

## 🔧 本地開發

1. **安裝本地伺服器**（可選）
   ```bash
   # 使用 Python
   python -m http.server 8000
   
   # 或使用 Node.js
   npx serve .
   ```

2. **開啟瀏覽器**
   - 前往 `http://localhost:8000`
   - 開始開發和測試

## 📱 瀏覽器支援

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request！

1. Fork 此專案
2. 建立功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交變更 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 📄 授權

此專案採用 MIT 授權 - 詳見 [LICENSE](LICENSE) 檔案

## 🙏 致謝

- [Font Awesome](https://fontawesome.com/) - 圖示庫
- [Google Fonts](https://fonts.google.com/) - 字體
- [GitHub Pages](https://pages.github.com/) - 免費託管服務

---

⭐ 如果這個專案對您有幫助，請給個星標！ 