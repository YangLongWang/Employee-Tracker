const db = require('../db/connection');
const cTable = require('console.table');

// Menu
const purpose = [
	{
		message: 'What would you like to do?',
		type: 'list',
		name: 'menu',
		choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role',  'View All Departments', 'Add Department', 'Quit']
	}
];	

// Department
const addDepartment = [
	{
		message: 'What is the name of the department?',
		type: 'input',
		name: 'department'
	}
];

// Role
const addRole = [
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
			// choices: ['Sales', 'Engineering', 'Finance', 'Legal']
			choices: option => {
				let list = [];

				db.query('SELECT * FROM department', (err, results) => {
					if (err) throw err;
					const table = cTable.getTable(results);
					list.push(table);
				})

				return list;
			}
		}
];

// Employee
// Add Employee
const addEmployee = [
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
		choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer']
	},
	{
		message: "Who is the employee's manager?",
		type: 'list',
		name: 'manager',
		choices: ['None', 'Virginia Woolf', 'Charles LeRoi', 'Dora Carrington', 'Edward Bellamy', 'Montague Summers']
	}
];

// Update Employee Role
const updateEmployeeRole = [
	{
		message: "Which employee's role do you want to updata?",
		type: 'list',
		name: 'name',
		choices: ['Ronald Firbank', 'Virginia Woolf', 'Piers Gaveston', 'Charles LeRoi', 'Katherine Mansfield', 'Dora Carrington', 'Edward Bellamy', 'Montague Summers']
	},
	{
		message: 'Which role do you want to assign the selected employee?',
		type: 'list',
		name: 'role',
		choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer']
	}
];

module.exports = { purpose, addDepartment, addRole, addEmployee, updateEmployeeRole };