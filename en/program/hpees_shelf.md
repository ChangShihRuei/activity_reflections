---
layout: page
title: "Book Management System"
permalink: /en/program/hpees_shelf/
parent: /en/program/
lang: en
---

Demo site: [Book Management System](https://hpees-shelf.up.railway.app/demo)

*All features are open to use, but all data is for testing only and will not be saved to a real database.

*Because all features are open, there is no login function provided.

# 1. Tools Used

## Language: Ruby

## Frontend: Stimulus

## Database: PostgreSQL

## Backend: Ruby on Rails

# 2. Project Timeline

## Phase 1 (2026.01.16–2026.05.15)

### 2026.01.16–2026.01.23: Confirm user requirements, create Rails project

#### User requirements (final)

##### 1. Books

- **Quantity**: about 200 books per cohort
- **Tags**
  - **External**: library books, donated books, teachers’ books
  - **Internal**: classroom books
- **Volume 1 / Volume 2 (same ISBN)**: after scanning an ISBN, if it matches more than one book, the user must be able to select the correct one
- **Yearly changes**
  - books can be added/removed and moved between grades
  - **Storage grade**: 0–6
- **Scan ISBN**
  - **Mobile**: camera scan
  - **Computer**: manual input
- **Inventory sheet**
  - can choose which tag to group by
  - columns include: title, current status, ISBN, etc.
- **History**: every book has its own borrowing history

##### 2. People (store grade)

- **Admins**
  - can add/delete books and people
  - manage book tags
  - can borrow/return books (no limit)
  - set book status and return books for others
  - print inventory sheets
- **Students (users)**
  - borrow/return books
  - **ID**: class + seat number
  - **Borrowing limit**: one book at a time
  - each person has their own borrowing history

##### 3. Cohorts (school year)

- **Changed regularly each academic year**
  - **Students**: automatically move up one grade
  - **Teachers**: choose which grade to move to
- **Books**
  - **Teachers’ books**: moved with the admin/teacher (history should still show in previous cohorts)
  - **Library books**: returned to the library (data deleted)
    - should have a button to delete all library books
  - **Classroom books**: automatically move to the next cohort
  - **Donated books**: ask the user how to handle them
- **History**: not deleted during yearly changes
- **Storage**: separated by cohort
- **Most important action after entering the app**: select the cohort first so the correct data is shown

### 2026.01.24–2026.03.02: Complete core features — four main pages

- Book list (home)
  - edit book
  - view book
  - import books
- People list (home)
  - edit person
  - view person
  - import people
- Cohort list (home)
  - edit cohort
  - view cohort
- Borrow/Return (home)
  - borrowing history

### 2026.03.02–2026.03.19: First revision

#### Overall

1. Fix 406 error (browser version restriction): remove the restriction from the backend

#### Borrow/Return

Borrowing history page

1. Change borrowing history display from a table to cards
2. Fix failure when borrowing duplicate books
3. Adjust duplicate-book display: remove status; show cohort, source (including teacher name), and accession number (library)

#### Book management

1. Add accession number field for library books

Table/Card page

1. Add edit and delete buttons to the top-right of each card
2. Remove “view book” and go directly to edit
3. Split filters into two rows (two per row)
4. Change import button to white

Edit page

1. Show delete button

Import page

1. Make total count / volumes / notes optional
2. On mobile, show import results as cards
3. If “keep duplicates” is checked: increase total count by 1 instead of creating a new record
4. Default total count to 1 (was 0)
5. If only one row is invalid: other rows can still be imported

#### People management

Table/Card page

1. Add edit and delete buttons to the top-right of each card
2. Remove “view person” and go directly to edit
3. Fix import button disappearing

Edit page

1. Fix: if you select cohort first then check admin, the dropdown gets cleared

#### Cohort management

1. Change “create all cohorts” button to white

#### To do

1. Return library books
2. Cohort switching
3. Login
   1. Students: login with student ID
   2. Teachers: login with school Google account (if not possible, switch to personal)
4. Inventory sheet

### 2026.03.20–2026.04.09: Second revision

#### Cohort management

1. Return library books
2. Cohort switching

#### Login

1. Students: borrow books by student ID; borrowing history by searching student ID (later can be linked to Google Account)
2. Teachers: log in with Google Account (handled in a branch; reference `https://github.com/zquestz/omniauth-google-oauth2`)

#### Book management

1. Inventory sheet
2. Export data
3. For books with total count > 1, allow > 1 borrower at the same time
4. On iPad, if content overflows the page, switch directly to card view
5. Fix left column being too wide
6. Show status using background color
7. Show ISBN on hover over the title

#### People management

1. Sorting options (by student ID/seat number, name, etc.)
2. Fix: duplicate data disappearing during people import

#### Import page

1. Fix file parsing error: `invalid byte sequence in UTF-8`
2. Highlight invalid cells in red during import and allow exporting a `.csv` (invalid cells show “please fill in”)

### 2026.04.10–2026.04.23: Third revision

#### Import page

1. Support importing `.xlsx`
2. Import format = export format (including admin flag and cohort)

#### Borrow/Return

1. Clear borrowing confirmation message after 3 seconds
2. Borrower name must not carry into teachers’ books; teachers’ books must always have teacher name; import should be invalid if missing

#### Overall

1. Don’t clear applied sorting arbitrarily

#### Book management

1. Split classroom books into: “stay (repeat grade)” and “move with class”

#### Cohort management

1. Add buttons: cohort switching, return library books

# 3. Reflection

Through this web project, I learned that time allocation is critical. I need to balance school and programming time: programming progress should come first, but there should be a deadline—after that deadline, I should focus only on schoolwork. Next, page layout should be agreed with the client early; otherwise, if everything is built first and then rejected, it leads to a full redo. Finally, I shouldn’t over-rely on AI-generated output. I must verify correctness before keeping content and moving forward; otherwise it becomes difficult to maintain. When issues occur, I should also check myself first instead of repeatedly asking AI to fix things, because that often creates more problems.

[Back to Programming Projects]({{ "/en/program/" | relative_url }})　　[Back to Home]({{ "/en/" | relative_url }})

