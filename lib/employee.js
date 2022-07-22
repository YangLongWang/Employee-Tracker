const inquirer = require('inquirer');
const db = require('../db/connection');
const { addEmployee, updateEmployeeRole } = require('./questions');
const cTable = require('console.table');

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

				console.log("Updated employee's role")
			})
	
		// Updated employee's role
	};

	// View All Employee
	viewAllEmployee() {
		const sql = `
		SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, employee.manager_id AS manager
		FROM employee
		LEFT JOIN role ON employee.role_id = role.id
		LEFT JOIN department ON role.department_id = department.id
		`;
		
		db.query(sql, (err, results) => {
			if (err) throw err;
			const table = cTable.getTable(results);
			return console.log(table);
		})
	}
}

module.exports = employee;
