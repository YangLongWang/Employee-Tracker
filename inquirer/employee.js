const inquirer = require('inquirer');

//Add Employee
inquirer.prompt([
	{
		message: "What is the employee's first name?",
		type: 'input',
		name: 'firstName'
	},
	{
		message: "What is the employee's last name?",
		type: 'input',
		name: 'lastName'
	},
	{
		message: "What is the employee's role?",
		type: 'list',
		name: 'role',
		choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer', new inquirer.Separator()]
	},
	{
		message: "Who is the employee's manager?",
		type: 'list',
		name: 'manager',
		choices: ['None', 'Virginia Woolf', 'Charles LeRoi', 'Dora Carrington', 'Edward Bellamy', 'Montague Summers', new inquirer.Separator()]
	}
]);
// Added Sam Kash to the database

// Update Employee Role
inquirer.prompt([
	{
		message: "Which employee's role do you want to updata?",
		type: 'list',
		name: 'name',
		choices: ['Ronald Firbank', 'Virginia Woolf', 'Piers Gaveston', 'Charles LeRoi', 'Katherine Mansfield', 'Dora Carrington', 'Edward Bellamy', 'Montague Summers', new inquirer.Separator()]
	},
	{
		message: 'Which role do you want to assign the selected employee?',
		type: 'list',
		name: 'role',
		choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer', new inquirer.Separator()]
	}
]);
// Updated employee's role


