const inquirer = require('inquirer');
// const mysql = require('mysql2');
const cTable = require('console.table');

const db = require('./db/connection');

const Menu = require('./lib/menu');
const Department = require('./lib/department');
const Role = require('./lib/role');
const Employee = require('./lib/employee');

const menu = new Menu();
const department = new Department();
const role = new Role();
const employee = new Employee();

async function run() {
	db.connect(err => {
		if (err) throw err;
		console.log('Database connected.');

		console.log(`
		================
		Employee Manager
		================
		`);
		
		// let isContinue = true;
		// while(isContinue) {
			menu.menu()
				.then(answer => {
					if (answer.menu === 'View All Employees') {
						console.log('View All Employees');

					} else if (answer.menu === 'Add Employee') {
						console.log('Add Employee');
						employee.addEmployee();
					} else if (answer.menu === 'Update Employee Role') {
						console.log('Update Employee Role');

					} else if (answer.menu === 'View All Roles') {
						console.log('View All Rolese');
						
					} else if (answer.menu === 'Add Role') {
						console.log('Add Role');
						role.addRole();
					} else if (answer.menu === 'View All Departments') {
						console.log('View All Departments');
						department.viewAllDepartment();
					} else if (answer.menu === 'Add Department') {
						console.log('Add Department');
						department.addDepartment();
					} else {
						console.log('Quit');
						// isContinue = false;
					}
				});
		// } 
	})
};

run();

// ? Add Role 
// ? View All Department
// ? Add Employee


// const prompt = inquirer.createPromptModule();
// prompt(questions);
	

// db.promise().query("SELECT 1")
//   .then( ([rows,fields]) => {
//     console.log(rows);
//   })
//   .catch(console.log)
//   .then( () => db.end());

