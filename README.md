# Employee-Tracker

## Table of Contents 

<details>
<summary>Table of Contents</summary>

- [Overview](#overview)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [The challenge](#the-challenge)
  - [Video](#video)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [What is next](#what-is-next)
- [Author](#author)

</details>

## Overview

### Description

A command line application to manage a company's employee database, such as viewing and managing the company's departments, roles, and employees, so that the company's business can be organized and planned.


### Installation

Because this is a Node.js application that runs from a machine and not a browser, it can't be deployed to GitHub pages. If anyone ever wants to look at the application, you have to clone it to your own local machine and run it from there.


### Usage

The application will be invoked by using the following command: node index.js

### Tests

Clone it to your own local machine and enter node index.js in command line.

### The challenge

Users should be able to:

- choose what you want based on app menu.
- view info of employees, roles, and departments.
- can enter new employee, role, department following question.
- can update employee's role.

### Video

- Video link: []()

### Links

- Solution URL: [https://github.com/YangLongWang/Employee-Tracker](https://github.com/YangLongWang/Employee-Tracker)

## My process

### Built with

- JavaScript

### What I learned

- load choice's list form database in inquirer question.
- based on mysql2 and console.table document to learn skill and application.

To see how I add code snippets, see below:

```JS
{
  message: 'Which role do you want to assign the selected employee?',
  type: 'list',
  name: 'role',
  choices: async function() {
    const sql = 'SELECT id AS value, title AS name FROM role';
    const roles = await db.query(sql);
    return roles[0];
  }
}

const pool = mysql.createPool(
  {
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'employee_tracker'
  }
);
const db = pool.promise();

const table = cTable.getTable(rows);
console.log(table);
```

### What is next

- continue to do the bonus part
- improve user experience

## Author

- Github - [Longyang Wang](https://github.com/YangLongWang)