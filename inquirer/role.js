const inquirer = require('inquirer');

// Add Role
inquirer.prompt([
	{
		message: 'What is the name of the role?',
		type: 'input',
		name: 'role'
	},
	{
		message: 'What is the salary of the role?',
		type: 'input',
		name: 'salary'
	},
	{
		message: 'Which department does the role beling to?',
		type: 'list',
		name: 'department',
		choices: ['Sales', 'Engineering', 'Finance', 'Legal', new inquirer.Separator()]
	}
])

// Added Customer Service to the database