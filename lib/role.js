const inquirer = require('inquirer');
const db = require('../db/connection');
const { addRole } = require('./questions');
const cTable = require('console.table');

class role {
	// Add Role
	async addRole() {
		return inquirer.prompt(addRole)
			.then(answer => {
				const sql = `INSERT INTO role (title, department_id, salary) VALUES (?,?,?)`;
				const params = [answer.title, answer.department, answer.salary];

				db.query(sql, params);
        console.log(`Added ${answer.title} to the database`);
			});
	}

	// View All Role
	async viewAllRoles() {
		const sql = `
		SELECT role.id, role.title, department.name AS department, role.salary
		FROM role
		LEFT JOIN department
		ON role.department_id = department.id;
		`;

		const [rows] = await db.query(sql);
		const table = cTable.getTable(rows);
		console.log(table);
	}
};


module.exports = role;