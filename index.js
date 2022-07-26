require('events').EventEmitter.defaultMaxListeners = 15;

const db = require('./db/connection');

const Menu = require('./lib/menu');
const Department = require('./lib/department');
const Role = require('./lib/role');
const Employee = require('./lib/employee');

const menu = new Menu();
const department = new Department();
const role = new Role();
const employee = new Employee();

// function init() {
// 	db.connect(err => {
// 		if (err) throw err;
// 		console.log('Database connnected.');
		
// 		console.log(`
// 		================
// 		Employee Manager
// 		================
// 		`);

// 		// menuOption();
// 	})
// };

async function menuOption() {
	console.log(`
		================
		Employee Manager
		================
		`);

	let isContinue = true;
	while (isContinue) {
		const answer = await menu.menu();
	
		if (answer.menu === 'View All Employees') {
			await employee.viewAllEmployees();
	
		} else if (answer.menu === 'Add Employee') {
			console.log('Add Employee');
			employee.addEmployee(); //
			// init();
	
		} else if (answer.menu === 'Update Employee Role') {
			console.log('Update Employee Role'); // ?
	
		} else if (answer.menu === 'View All Roles') {
			await role.viewAllRole();
	
		} else if (answer.menu === 'Add Role') {
			console.log('Add Role'); 
			role.addRole(); // INSERT INTO role (title, department_id, salary)
	
		} else if (answer.menu === 'View All Departments') {
			await department.viewAllDepartment();
	
		} else if (answer.menu === 'Add Department') {
			department.addDepartment();
	
		} else {
			isContinue = false;
			return;
		}
	}
}

menuOption();

// init()
// 	.then(() => menuOption());
	// .then(() => {
	// 	return "bye-bye";
	// })


