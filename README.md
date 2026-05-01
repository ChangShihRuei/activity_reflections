# Ray Chang — 個人網站 · Personal Website

[中文](#中文) · [English](#english)

<a id="中文"></a>

這是我的個人網站，記錄從小到大的經歷、做過的事情，以及現在與未來的發展。

## 內容

- **機器人**：VIQRC、FIRA 等競賽與活動
- **帆船**：澎湖盃、個人學習歷程展
- **腳踏車**：國小壯遊、拼圖環島
- **學習進度規劃**
- **公車**
- **程式專案**：記帳、書籍管理系統等

## 技術

- [Jekyll](https://jekyllrb.com/) + [Minima](https://github.com/jekyll/minima) 主題
- 透過 GitHub Actions 部署到 GitHub Pages

## 本地開發

```bash
bundle install
bundle exec jekyll serve
```

若遇到 Bundler 在 macOS 上出現「missing extensions」或找不到某些 gem 的錯誤，可嘗試強制重新下載/編譯：

```bash
bundle install --redownload --force
```

在瀏覽器開啟 <http://localhost:4000>。

## 部署

網站由 GitHub Actions 在推送到 `main` 時自動建置並部署至 GitHub Pages。

⭐ 若此專案對你有幫助，歡迎給個星標。

---

<a id="english"></a>

# Ray Chang — Personal Website

This is my personal website. It records my experiences from childhood to the present, what I’ve worked on, and my current and future development.

## Contents

- **Robotics**: competitions and activities such as VIQRC, FIRA, etc.
- **Sailing**: Penghu Cup, personal learning portfolio exhibition
- **Cycling**: elementary-school long-distance trip, “puzzle” island loop ride
- **Study progress planning**
- **Bus**
- **Programming projects**: expense tracker, book management system, etc.

## Tech

- [Jekyll](https://jekyllrb.com/) + [Minima](https://github.com/jekyll/minima) theme
- Deployed to GitHub Pages via GitHub Actions

## Local development

```bash
bundle install
bundle exec jekyll serve
```

If Bundler fails on macOS with “missing extensions” or missing gem errors, try forcing a redownload/rebuild:

```bash
bundle install --redownload --force
```

Open `http://localhost:4000` in your browser.

## Deployment

The site is automatically built and deployed to GitHub Pages by GitHub Actions when changes are pushed to `main`.

⭐ If this project helps you, feel free to give it a star.
