---
layout: page
title: "記帳"
permalink: /program/accounting/
parent: /program/
---
網頁樣本：[記帳系統](https://HaKexva.github.io/accounting_demo/)
*所有功能皆開放使用，但資料皆為測試用，不會儲存到實際資料庫。
*由於功能全部開放，故不提供登入功能。

# 一、使用工具

因為我們需要壓低成本，所以決定使用免費的GitHub Pages來管理網頁，用Google Apps Script與Google Sheet來儲存與管理資料。最後，為了保護隱私，所以使用Google OAuth 2.0 API來讓用戶使用 Google 帳號登入網頁。

## 前端：GitHub Pages

GitHub Pages 可以幫助我們免費的將網站部署到 GitHub 的伺服器上，並提供一個網址供網站存取。

## 後端：Google Apps Script

Google Apps Script 可以幫助我們在Google Sheet中執行程式碼，並且可以透過HTTP通訊協定來與網頁傳送與接收資料。

## 資料庫：Google Sheet

Google Sheet 可以幫助我們儲存資料，並且可以透過Google Apps Script來與自動化更新資料。

## 登入：Google OAuth 2.0 API

Google OAuth 2.0 API 可以幫助我們讓用戶使用 Google 帳號登入網頁並驗證帳號是否開放使用此系統。

# 二、專案進度

## 第一階段（2025.07.13-2026.01.16）

### 2025.07.13-2025.07.26：確認用戶需求，建立GitHub Pages

#### 用戶需求

允許的使用者可以使用本系統，透過帳號登入來保持資料安全性。

能夠記錄自己的預算與支出，並且自動計算剩餘金額。

能夠自訂類別、支付方式、預算金額等設定。

#### 建立GitHub Pages

開啟GitHub後，建立一個新的 Repository，並依照[ GitHub Pages 的指示](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)完成頁面建立與基本設定。

### 2025.07.27-2025.08.09：完成登入功能

#### 登入功能

使用Google OAuth 2.0 API來讓用戶使用 Google 帳號登入網頁，並透過設定允許登入的使用者來保障資料的安全。

### 2025.08.10-2025.08.23：設計預算表頁面

#### 預算頁面設計

頁面上方為統計區域，將月份的收入、支出列出，並自動計算餘額，同時也可提供月份選擇的功能。

頁面下方為輸入區域，可以選擇收入、支出，並輸入金額、日期、類別、備註等資料，到Google Apps Script來新增預算資料。左右滑動可切換不同預算資料。

### 2025.08.24-2025.08.30：學習HTTP通訊協定，開始製作預算表頁面Google Apps Script程式

#### HTTP通訊協定

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

### 2025.08.31-2025.09.06：完成Google Apps Script程式並發布，修正錯誤與微調頁面

### 2025.09.07-2025.09.27：完成網頁端接收預算表頁面Google Apps Script資料功能，完成預算表CSS頁面

#### 網頁端接收

HTTP通訊協定－GET：接收預算表頁面Google Apps Script資料（Show Tab Data、Show Total、Show Tab Name）

HTTP通訊協定－POST：傳送預算表頁面Google Apps Script資料（UpsertData、CreateTab、DeleteData、DeleteTab、ChangeTabName、UpdateDropdown、BatchUpdateDropdown）

### 2025.09.28-2025.10.24：細節與功能修正，完成預算表功能

### 2025.10.25-2025.11.28：設計支出頁面

#### 支出頁面設計

頁面上方為統計區域，將對應類別的預算、目前支出列出，並自動計算餘額，並且隨著月份的變化，自動更新統計資料。

頁面下方為輸入區域，可以輸入金額、日期、類別、備註等資料，並連動到Google Apps Script來新增支出資料。

### 2025.11.29-2025.12.06：開始設計支出頁面Google Apps Script功能程式

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

### 2025.12.07-2025.12.13：完成支出頁面Google Apps Script程式以及網頁端接收，完成支出頁面CSS頁面

#### 網頁端接收

HTTP通訊協定－GET：接收支出表頁面Google Apps Script資料（Show Tab Data、Show Total、Show Tab Name）

HTTP通訊協定－POST：傳送支出表頁面Google Apps Script資料（UpsertData、CreateTab、DeleteData、DeleteTab、ChangeTabName、UpdateDropdown、BatchUpdateDropdown）

### 2025.12.14-2025.12.20：細節與功能修正，完成支出功能

### 2025.12.21-2025.12.25：設計設定頁面

#### 設定頁面設計

主頁面有三個按鈕，分別對應到支付平台、消費類別、支付方式，點擊後會跳轉到對應的設定頁面。

對應頁面可以新增、刪除、修改對應內容，並且可以透過上下箭頭來排序。

修正後的結果會同步更新到預算表與支出表的下拉式選單中。

### 2025.12.26-2026.01.05：完成設定頁面功能

### 2026.01.06-2026.01.16：其他細部功能修正、錯誤修正


# 三、反思

經過這次的網頁製作，我認為時間的分配很重要，學校和程式兩者要分配好時間，程式的進度要優先，但是要訂一個截止日期，過了截止日期就只能處理學校內容。再來，網頁的排版要先與客戶溝通好，而不是都做完了才全部都被否決，導致要全部重做。最後是不要過度依賴AI產生的結果，要自己檢查無誤後，才可以保留內容並繼續做下一步，而不是全部都留下，導致最後很難維護。並且在遇到問題時，先自己檢查，不要一直請AI處理，否則容易會愈修問題愈多。

[回首頁](/activity_reflections/)　　[回上頁：程式](/activity_reflections/program/)