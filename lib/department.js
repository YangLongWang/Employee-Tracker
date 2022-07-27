const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('../db/connection');
const { addDepartment } = require('./questions');

class department {
  // Add Department
  async addDepartment() {
    return inquirer.prompt(addDepartment)
      .then(answer => {
        const sql = `INSERT INTO department (name) VALUES (?)`;
        const param = [answer.department];

        db.query(sql, param);
        console.log(`Added ${answer.department} to the database`);
      });
  };

  // View All Departments
  async viewAllDepartments() {
    const sql = `SELECT * FROM department ORDER BY name`;

    const [rows] = await db.query(sql);
		const table = cTable.getTable(rows);
		console.log(table);
  }
};



module.exports = department;
