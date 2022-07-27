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
			name: 'title'
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
			choices: async function() {
				const sql = 'SELECT id AS value, name FROM department';
				const departments = await db.query(sql);
				return departments[0];
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
		choices: async function() {
			const sql = 'SELECT id AS value, title AS name FROM role';
			const roles = await db.query(sql);
			return roles[0];
		}
	},
	{
		message: "Who is the employee's manager?",
		type: 'list',
		name: 'manager',
		choices: async function() {
			const sql = "SELECT id AS value, CONCAT(first_name, ' ', last_name) AS name FROM employee WHERE manager_id IS NULL";
			const managers = await db.query(sql);
			managers[0].push({value: null, name: 'None'});
			return managers[0];		
		}
	}
];

// Update Employee Role
const updateEmployeeRole = [
	{
		message: "Which employee's role do you want to updata?",
		type: 'list',
		name: 'name',
		choices: async function() {
			const sql = "SELECT id AS value, CONCAT(first_name, ' ', last_name) AS name FROM employee";
			const roles = await db.query(sql);
			return roles[0];
		}
	},
	{
		message: 'Which role do you want to assign the selected employee?',
		type: 'list',
		name: 'role',
		choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer']
	}
];

module.exports = { purpose, addDepartment, addRole, addEmployee, updateEmployeeRole };