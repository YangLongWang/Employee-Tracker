const inquirer = require('inquirer');
const db = require('../db/connection');
const { addEmployee, updateEmployeeRole } = require('./questions');
const cTable = require('console.table');

class employee {
	//Add Employee
	async addEmployee() {
		return inquirer.prompt(addEmployee)
			.then(answer => {
				const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
				const params = [answer.firstName, answer.lastName, answer.role, answer.manager];

				db.query(sql, params);
				console.log(`Added ${answer.firstName} ${answer.lastName} to the database`);
			})
	};
	
	// Update Employee Role
	async updateEmployeeRole() {
		return inquirer.prompt(updateEmployeeRole)
			.then(answer => {
				const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
				const params = [answer.role, answer.name];

				db.query(sql, params);
				console.log("Updated employee's role");
			})
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
	};

	async viewEmployeesByManager() {
		const sql = `
		
		`
	};
	// question -> which departement do you want view? -> one by one?
	async viewEmployeesByDepartment() {
		const sql = `
		SELECT e.id, d.name AS department, CONCAT(e.first_name, ' ', e.last_name )AS employees, r.title, r.salary
		FROM employee e
		LEFT JOIN role r ON e.role_id = r.id
		LEFT JOIN department d ON r.department_id = d.id
		`;

		const [rows] = await db.query(sql);
		const table = cTable.getTable(rows);
		console.log(table);
		// maybe changed
	};
}

module.exports = employee;
