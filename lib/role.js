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

				db.query(sql, params, (err, results) => {
					if (err) throw err;
				});
        console.log(`Added ${answer.title} to the database`);
			});
			// Added Customer Service to the database
	}

	// View All Role
	async viewAllRoles() {
		const sql = `
		SELECT role.id, role.title, department.name AS department, role.salary
		FROM role
		LEFT JOIN department
		ON role.department_id = department.id;
		`;

		// db.query(sql, (err, results) => {
		// 	if (err) throw err;
		// 	const table = cTable.getTable(results);
		// 	console.log(table);
		// })

		// db.promise().query(sql)
		// .then(([rows]) => {
		// 	const table = cTable.getTable(rows)
		// 	console.log(table);
		// })
		// .then(() => db.end());

		const [rows] = await db.query(sql);
		const table = cTable.getTable(rows);
		console.log(table);
	}
};


module.exports = role;