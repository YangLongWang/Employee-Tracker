const inquirer = require('inquirer');
const { purpose } = require('./questions');

class menu {
  menu() {
    return inquirer.prompt(purpose);
  }
}

module.exports = menu;