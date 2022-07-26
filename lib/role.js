const inquirer = require('inquirer');
const db = require('../db/connection');
const { addRole } = require('./questions');
const cTable = require('console.table');

class role {
	// Add Role
	addRole() {
		inquirer.prompt(addRole)
			.then(answer => {
				const sql = `INSERT INTO role (title, department_id, salary) VALUES (?,?,?)`;
				const param = [answer.role, answer.department, answer.salary];

				db.promise().query(sql, param);
        console.log(`Added ${answer.role} to the database`);
			});
			// Added Customer Service to the database

			// after adding a new department, can't gain the new departemnt on inquirer question
			// console: Incorrect integer value: 'Sales' for column 'department_id' at row 1
	}

	// View All Role
	async viewAllRole() {
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