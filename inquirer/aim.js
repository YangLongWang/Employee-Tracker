const inquirer = require('inquirer');

// const prompt = inquirer.createPromptModule();

// prompt(questions)
// 	.then()	

inquirer.prompt([
	{
		message: 'What would you like to do?',
		type: 'list',
		name: 'manage',
		choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role',  'View All Departments', 'Add Department', 'Quit', new inquirer.Separator()]
	}
]);

// 