const inquirer = require('inquirer');
const db = require('../db/connection');
const { addEmployee, updateEmployeeRole } = require('./questions');
const cTable = require('console.table');

class employee {
	//Add Employee
	addEmployee() {
		inquirer.prompt(addEmployee)
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
		inquirer.prompt(updateEmployeeRole)
			.then(answer => {
				const sql = `UPDATE employee SET first_name = ?, last_name = ? `

				console.log("Updated employee's role")
			})
			// Updated employee's role
	};

	// View All Employee
	async viewAllEmployees() {
		const sql = `
		SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(e2.first_name, ' ', e2.last_name )AS manager
		FROM employee e
		LEFT JOIN role r ON e.role_id = r.id
		LEFT JOIN department d ON r.department_id = d.id
		LEFT JOIN employee e2 ON e.manager_id = e2.id
		`;

		const [rows] = await db.query(sql);
		const table = cTable.getTable(rows);
		console.log(table);
		// return db.end();

		// db.query(sql, (err, results) => {
		// 	if (err) throw err;
		// 	const table = cTable.getTable(results)
		// 	console.log(table);
		// 	return;
		// })
	}
}

module.exports = employee;
