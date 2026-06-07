---
layout: page
title: "記帳"
permalink: /zh-TW/program/accounting/
parent: /zh-TW/program/
lang: zh-TW
---
<div class="accounting-page" markdown="1">
網頁樣本（可實際使用）：[記帳系統](https://accounting-ruby.up.railway.app/)

* 目前已完成第二階段功能，開放大家自由使用網站

# 一、使用工具

## 第一階段

因為我們需要壓低成本，所以決定使用免費的 GitHub Pages 來管理網頁，用 Google Apps Script 與 Google Sheet 來儲存與管理資料。最後，為了保護隱私，所以使用 Google OAuth 2.0 API 來讓用戶使用 Google 帳號登入網頁。

### 前端：GitHub Pages

GitHub Pages 可以幫助我們免費的將網站部署到 GitHub 的伺服器上，並提供一個網址供網站存取。

### 後端：Google Apps Script

Google Apps Script 可以幫助我們在 Google Sheet 中執行程式碼，並且可以透過 HTTP 通訊協定來與網頁傳送與接收資料。

### 資料庫：Google Sheet

Google Sheet 可以幫助我們儲存資料，並且可以透過 Google Apps Script 來自動化更新資料。

### 登入：Google OAuth 2.0 API

Google OAuth 2.0 API 可以幫助我們讓用戶使用 Google 帳號登入網頁並驗證帳號是否開放使用此系統。

## 第二階段

改用 Ruby on Rails 重建，部署至 Railway，並以 PostgreSQL 儲存資料。

### 使用語言：Ruby

### 前端：Phlex、RubyUI（Tailwind CSS）、Hotwire（Turbo + Stimulus）

### 資料庫：PostgreSQL

### 後端：Ruby on Rails 8.1

### 部署：Railway

### 登入：Google OAuth 2.0 API

# 二、專案進度

## 第一階段（2025.07.13-2026.01.16）

### 2025.07.13-2025.07.26：確認用戶需求，建立 GitHub Pages

#### 用戶需求

允許的使用者可以使用本系統，透過帳號登入來保持資料安全性。

能夠記錄自己的預算與支出，並且自動計算剩餘金額。

能夠自訂類別、支付方式、預算金額等設定。

#### 建立 GitHub Pages

開啟 GitHub 後，建立一個新的 Repository，並依照 [GitHub Pages 的指示](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll) 完成頁面建立與基本設定。

### 2025.07.27-2025.08.09：完成登入功能

#### 登入功能

使用 Google OAuth 2.0 API 來讓用戶使用 Google 帳號登入網頁，並透過設定允許登入的使用者來保障資料的安全。

### 2025.08.10-2025.08.23：設計預算表頁面

#### 預算頁面設計

頁面上方為統計區域，將月份的收入、支出列出，並自動計算餘額，同時也可提供月份選擇的功能。

頁面下方為輸入區域，可以選擇收入、支出，並輸入金額、日期、類別、備註等資料，到 Google Apps Script 來新增預算資料。左右滑動可切換不同預算資料。

### 2025.08.24-2025.08.30：學習 HTTP 通訊協定，開始製作預算表頁面 Google Apps Script 程式

#### HTTP 通訊協定

GET：取得資料

POST：傳送資料

PUT：更新資料

DELETE：刪除資料

#### Google Apps Script 預算表程式

UpsertData：新增或更新預算資料

CreateTab：建立新預算工作表

DeleteData：刪除預算資料

DeleteTab：刪除預算工作表

ChangeTabName：更改預算工作表名稱

UpdateDropdown：更新預算工作表下拉式選單

BatchUpdateDropdown：批次更新預算工作表下拉式選單

Show Tab Name：顯示預算工作表名稱

Show Tab Data：顯示預算工作表資料

Show Total：顯示預算工作表總計

### 2025.08.31-2025.09.06：完成 Google Apps Script 程式並發布，修正錯誤與微調頁面

### 2025.09.07-2025.09.27：完成網頁端接收預算表頁面 Google Apps Script 資料功能，完成預算表 CSS 頁面

#### 網頁端接收

HTTP 通訊協定－GET：接收預算表頁面 Google Apps Script 資料（Show Tab Data、Show Total、Show Tab Name）

HTTP 通訊協定－POST：傳送預算表頁面 Google Apps Script 資料（UpsertData、CreateTab、DeleteData、DeleteTab、ChangeTabName、UpdateDropdown、BatchUpdateDropdown）

### 2025.09.28-2025.10.24：細節與功能修正，完成預算表功能

### 2025.10.25-2025.11.28：設計支出頁面

#### 支出頁面設計

頁面上方為統計區域，將對應類別的預算、目前支出列出，並自動計算餘額，並且隨著月份的變化，自動更新統計資料。

頁面下方為輸入區域，可以輸入金額、日期、類別、備註等資料，並連動到 Google Apps Script 來新增支出資料。

### 2025.11.29-2025.12.06：開始設計支出頁面 Google Apps Script 功能程式

#### Google Apps Script 支出表程式

UpsertData：新增或更新支出資料

CreateTab：建立新支出工作表

DeleteData：刪除支出資料

DeleteTab：刪除支出工作表

ChangeTabName：更改支出工作表名稱

UpdateDropdown：更新支出工作表下拉式選單

BatchUpdateDropdown：批次更新支出工作表下拉式選單

ShowTabName：顯示支出工作表名稱

ShowTabData：顯示支出工作表資料

ShowTotal：顯示支出工作表總計

### 2025.12.07-2025.12.13：完成支出頁面 Google Apps Script 程式以及網頁端接收，完成支出頁面 CSS 頁面

#### 網頁端接收

HTTP 通訊協定－GET：接收支出表頁面 Google Apps Script 資料（Show Tab Data、Show Total、Show Tab Name）

HTTP 通訊協定－POST：傳送支出表頁面 Google Apps Script 資料（UpsertData、CreateTab、DeleteData、DeleteTab、ChangeTabName、UpdateDropdown、BatchUpdateDropdown）

### 2025.12.14-2025.12.20：細節與功能修正，完成支出功能

### 2025.12.21-2025.12.25：設計設定頁面

#### 設定頁面設計

主頁面有三個按鈕，分別對應到支付平台、消費類別、支付方式，點擊後會跳轉到對應的設定頁面。

對應頁面可以新增、刪除、修改對應內容，並且可以透過上下箭頭來排序。

修正後的結果會同步更新到預算表與支出表的下拉式選單中。

### 2025.12.26-2026.01.05：完成設定頁面功能

### 2026.01.06-2026.01.16：其他細部功能修正、錯誤修正

## 第二階段（2026.04.25-2026.06.04）

### 2026.04.25-2026.05.02：建立 Rails 專案，設計資料模型

#### 建立 Rails 專案

使用 Rails 8.1 建立專案，設定 CI 與 Railway 部署。

#### 資料模型

建立 User、CalendarMonth 等模型，作為預算與支出的基礎；引入 Phlex、RubyUI、Tailwind CSS、Hotwire（Turbo + Stimulus）。

### 2026.05.03-2026.05.13：完成 UI 框架與部署

#### UI 框架

建立 Phlex 視圖與 Tailwind 編譯流程。

#### 部署

設定 railway.toml，修正 Railway 上 Thruster、PORT 與 CSS 資源等部署問題。

### 2026.05.14-2026.05.16：完成預算頁面

#### 預算頁面

將收入與支出預算整合至 /budgets，以輪播卡片切換月份，支援自動儲存與預算配置圖表。

### 2026.05.17-2026.05.18：完成支出、設定頁面與 Google OAuth 登入

#### 實際支出頁面

首頁可登錄支出，顯示即時預算／餘額摘要與本月支出圖表；支出紀錄頁可瀏覽、編輯、刪除。

#### 設定頁面

管理消費類別、支付方式、支付平台，修改後同步至支出表單的下拉選單。

#### Google OAuth 登入

正式環境以 Google 帳號登入；本機開發自動使用試用帳號。

#### 資料隔離

各使用者只能看到自己的預算與支出；設定項目重新命名時，同步更新歷史支出紀錄。

### 2026.05.24-2026.05.27：月份選擇器與預算行動版優化

預算、支出、支出紀錄頁加入月份選擇器；調整行動版預算表單的儲存方式與輪播導覽。

### 2026.06.02-2026.06.04：支出頁面即時摘要與細節修正

調整桌面與行動版摘要區塊版面；輸入金額時即時更新類別餘額與本月總計。

### 2026.06.04：完成第二階段並開放使用

部署至 Railway，開放大家自由使用網站。


# 三、反思

經過這次的網頁製作，我認為時間的分配很重要，學校和程式兩者要分配好時間，程式的進度要優先，但是要訂一個截止日期，過了截止日期就只能處理學校內容。再來，網頁的排版要先與客戶溝通好，而不是都做完了才全部都被否決，導致要全部重做。最後是不要過度依賴 AI 產生的結果，要自己檢查無誤後，才可以保留內容並繼續做下一步，而不是全部都留下，導致最後很難維護。並且在遇到問題時，先自己檢查，不要一直請 AI 處理，否則容易會愈修問題愈多。

[回首頁]({{ "/zh-TW/" | relative_url }})　　[回上頁：程式]({{ "/zh-TW/program/" | relative_url }})
</div>

