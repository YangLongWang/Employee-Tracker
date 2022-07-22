const inquirer = require('inquirer');
const db = require('../db/connection');
const { addEmployee, updateEmployeeRole } = require('./questions');

class employee {
	//Add Employee
	addEmployee() {
		return inquirer.prompt(addEmployee)
			.then(answer => {
				const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
				const param = [answer.firstName, answer.lastName, answer.role, answer.manager];

				db.promise().query(sql, param);
				console.log(`Added ${answer.firstName} ${answer.lastName} to the database`);
			})
		// Added Sam Kash to the database
	};
	
	// Update Employee Role
	updateEmployeeRole() {
		return inquirer.prompt(updateEmployeeRole)
			.then(answer => {
				const sql = `UPDATE employee SET first_name = ?, last_name = ? `

			})
	
		// Updated employee's role
	};

}

module.exports = employee;
