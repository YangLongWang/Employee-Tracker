const inquirer = require('inquirer');
// const mysql = require('mysql2');
const cTable = require('console.table');

const db = require('./db/connection');



db.connect(err => {
	if (err) throw err;
	console.log('Database connected.');

	console.log(`
	================
	Employee Manager
	================
	`);

	return inquirer.prompt([
		{
			message: 'What would you like to do?',
			type: 'list',
			name: 'manage',
			choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role',  'View All Departments', 'Add Department', 'Quit', new inquirer.Separator()]
		}
	]);
});






// const prompt = inquirer.createPromptModule();
// prompt(questions);
	

// db.promise().query("SELECT 1")
//   .then( ([rows,fields]) => {
//     console.log(rows);
//   })
//   .catch(console.log)
//   .then( () => db.end());

