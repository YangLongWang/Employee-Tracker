const inquirer = require('inquirer');
const db = require('../db/connection');
const { addRole } = require('./questions');

class role {
	// Add Role
	addRole() {
		return inquirer.prompt(addRole)
			.then(answer => {
				const sql = `INSERT INTO role (title, department_id, salary) VALUES (?,?,?)`;
				const param = [answer.role, answer.department, answer.salary];

				db.promise().query(sql, param);
        console.log(`Added ${answer.role} to the database`);
			});
			// Added Customer Service to the database
	}
};


module.exports = role;