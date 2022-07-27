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
  - [Screenshot](#screenshot)
  - [Video](#video)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
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

- enter any information about team's members based on the questions.

### Screenshot

![](./assets/images/My%20Team%20-%20127.0.0.1.png)

### Video

- Video link: [https://drive.google.com/file/d/1ieBvY-FPNoh9seR-HPol5hKcHn9PX5KO/view](https://drive.google.com/file/d/1ieBvY-FPNoh9seR-HPol5hKcHn9PX5KO/view)

### Links

- Solution URL: [https://github.com/YangLongWang/Team-Profile-Generator](https://github.com/YangLongWang/Team-Profile-Generator)

## My process

### Built with

- JavaScript

### What I learned

- setting test file

To see how I add code snippets, see below:

```JS
test('creates a employee object', () => {
    const employee = new Employee('Joey', 1, '123@gmail.com');

    expect(employee.name).toBe('Joey');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

```

## Author

- Github - [Longyang Wang](https://github.com/YangLongWang)