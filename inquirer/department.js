const inquirer = require('inquirer');

//Add Department
inquirer.prompt([
  {
    message: 'What is the name of the department?',
    type: 'input',
    name: 'department'
  }
])

// Added Service to the database


