---
layout: page
title: "Accounting"
permalink: /en/program/accounting/
parent: /en/program/
lang: en
---
<div class="accounting-page" markdown="1">

Demo site: [Accounting System](https://HaKexva.github.io/accounting_demo/)

*All features are open to use, but all data is for testing only and will not be saved to a real database.

*Because all features are open, there is no login function provided.

# 1. Tools Used

Because we needed to keep costs low, we decided to use free GitHub Pages to host the website, and use Google Apps Script with Google Sheets to store and manage data. Finally, to protect privacy, we used the Google OAuth 2.0 API to allow users to log in with a Google account.

## Frontend: GitHub Pages

GitHub Pages lets us deploy the website to GitHub’s servers for free and provides a URL for accessing the site.

## Backend: Google Apps Script

Google Apps Script lets us run code connected to Google Sheets, and communicate with the web page through HTTP to send and receive data.

## Database: Google Sheets

Google Sheets stores the data, and we can automate data updates through Google Apps Script.

## Login: Google OAuth 2.0 API

Google OAuth 2.0 API allows users to log in with a Google account and verifies whether their account is allowed to use this system.

# 2. Project Timeline

## Phase 1 (2025.07.13–2026.01.16)

### 2025.07.13–2025.07.26: Confirm user requirements, set up GitHub Pages

#### User requirements

Allowed users can use this system, and account-based login ensures data security.

Users can record budgets and expenses, and the system automatically calculates remaining amounts.

Users can customize categories, payment platforms, budget amounts, and other settings.

#### Set up GitHub Pages

After creating a new repository on GitHub, follow the [GitHub Pages instructions](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll) to set up the site and basic configuration.

### 2025.07.27–2025.08.09: Finish login feature

#### Login

Use Google OAuth 2.0 API so users can log in with a Google account, and restrict access by configuring an allowlist of permitted users.

### 2025.08.10–2025.08.23: Design the budget page

#### Budget page design

At the top of the page is a summary area that lists monthly income and expenses and automatically calculates the remaining balance. It also provides a month selector.

At the bottom is an input area where users can choose income/expense and enter amount, date, category, notes, etc. The data is sent to Google Apps Script to create budget records. Users can swipe left/right to switch between different budget records.

### 2025.08.24–2025.08.30: Learn HTTP and start building the Google Apps Script for the budget page

#### HTTP

GET: fetch data

POST: send data

PUT: update data

DELETE: delete data

#### Google Apps Script (Budget)

UpsertData: create or update budget data

CreateTab: create a new budget sheet tab

DeleteData: delete budget data

DeleteTab: delete a budget sheet tab

ChangeTabName: rename a budget sheet tab

UpdateDropdown: update dropdown options in the budget sheet

BatchUpdateDropdown: batch update dropdown options

Show Tab Name: show budget sheet tab name

Show Tab Data: show budget sheet data

Show Total: show budget sheet totals

### 2025.08.31–2025.09.06: Finish Google Apps Script and publish; fix bugs and tweak UI

### 2025.09.07–2025.09.27: Finish web-to-Apps-Script integration and budget page CSS

#### Web integration

HTTP GET: receive data from Google Apps Script (Show Tab Data, Show Total, Show Tab Name)

HTTP POST: send data to Google Apps Script (UpsertData, CreateTab, DeleteData, DeleteTab, ChangeTabName, UpdateDropdown, BatchUpdateDropdown)

### 2025.09.28–2025.10.24: Fix details and features; complete budget functionality

### 2025.10.25–2025.11.28: Design the expense page

#### Expense page design

At the top is a summary area that lists the budget and current spending for the selected category and automatically calculates the remaining balance. The summary updates automatically when the month changes.

At the bottom is an input area where users enter amount, date, category, notes, etc., and the data is sent to Google Apps Script to create expense records.

### 2025.11.29–2025.12.06: Start designing Google Apps Script features for the expense page

#### Google Apps Script (Expense)

UpsertData: create or update expense data

CreateTab: create a new expense sheet tab

DeleteData: delete expense data

DeleteTab: delete an expense sheet tab

ChangeTabName: rename an expense sheet tab

UpdateDropdown: update dropdown options in the expense sheet

BatchUpdateDropdown: batch update dropdown options

ShowTabName: show expense sheet tab name

ShowTabData: show expense sheet data

ShowTotal: show expense sheet totals

### 2025.12.07–2025.12.13: Finish expense Apps Script + web integration; complete expense page CSS

#### Web integration

HTTP GET: receive data from Google Apps Script (Show Tab Data, Show Total, Show Tab Name)

HTTP POST: send data to Google Apps Script (UpsertData, CreateTab, DeleteData, DeleteTab, ChangeTabName, UpdateDropdown, BatchUpdateDropdown)

### 2025.12.14–2025.12.20: Fix details and features; complete expense functionality

### 2025.12.21–2025.12.25: Design the settings pages

#### Settings page design

The main settings page has three buttons for payment platforms, spending categories, and payment methods. Clicking a button navigates to the corresponding settings page.

On each settings page, users can add, delete, and edit items, and re-order them using up/down arrows.

After changes are confirmed, the results are synchronized to the dropdown options used in the budget and expense pages.

### 2025.12.26–2026.01.05: Complete settings page functionality

### 2026.01.06–2026.01.16: Other small fixes and bug fixes

# 3. Reflection

Through this web project, I learned that time allocation is critical. I need to balance school and programming time: programming progress should come first, but there should be a deadline—after that deadline, I should focus only on schoolwork. Next, page layout should be agreed with the client early; otherwise, if everything is built first and then rejected, it leads to a full redo. Finally, I shouldn’t over-rely on AI-generated output. I must verify correctness before keeping content and moving forward; otherwise it becomes difficult to maintain. When issues occur, I should also check myself first instead of repeatedly asking AI to fix things, because that often creates more problems.

[Back to Programming Projects]({{ "/en/program/" | relative_url }})　　[Back to Home]({{ "/en/" | relative_url }})
</div>

