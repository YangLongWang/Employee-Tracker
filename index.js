const Menu = require('./lib/menu');
const Department = require('./lib/department');
const Role = require('./lib/role');
const Employee = require('./lib/employee');
const db = require('./db/connection');

const menu = new Menu();
const department = new Department();
const role = new Role();
const employee = new Employee();

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
			await employee.addEmployee();
	
		} else if (answer.menu === 'Update Employee Role') {
			await employee.updateEmployeeRole();
	
		} else if (answer.menu === 'View All Roles') {
			await role.viewAllRoles();
	
		} else if (answer.menu === 'Add Role') {
			await role.addRole();
	
		} else if (answer.menu === 'View All Departments') {
			await department.viewAllDepartments();
	
		} else if (answer.menu === 'Add Department') {
			await department.addDepartment();
	
		} else {
			isContinue = false;
			console.log('Thank you for using Employee Manager.');
			return db.end();
		}
	}
}

menuOption();
