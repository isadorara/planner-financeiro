# Financial Planner 

> **Work in Progress**
> This project is being built step by step and will be refined over time. Features, structure, and documentation are still subject to a lot of changes.

## About the project

**Planner Financeiro** (Financial Planner) is an application built to help with personal financial planning. The idea is to bring together, in one place, expense tracking, past months' history, and a smart analysis of whether a given purchase is worth making.

## Planned pages

### Report (*currently in development*)
The main page, where financial data is entered and visualized:
- Upload a CSV file **or** enter data manually
- Expense table with: **name**, **date**, **value**, and **category**
- Total sum displayed above the table
- Chart showing how much was spent per category

### Past months
Page to view tables and stats from previous months that have already been recorded, allowing users to compare their financial history over time.

### Analyze expense
Based on information provided by the user (cost of living, average monthly expenses, salary, etc.), this page will analyze a purchase chosen by the user and help answer questions like:
- Is this a reasonable purchase right now?
- Would it be better to wait and buy it later?
- Is it better to pay in full or in installments?

## Current status

Currently working on the **Report** page. The other pages are still to be implemented.

## Tech stack

- Node.js
- [csv-parser](https://www.npmjs.com/package/csv-parser) — reading and processing CSV files

## Installation

```bash
git clone https://github.com/isadorara/Planner_Financeiro.git
cd Planner_Financeiro
npm install
```

## Author

Developed by **Isadora Conceição Araújo**.

## License

This project is licensed under ISC.
