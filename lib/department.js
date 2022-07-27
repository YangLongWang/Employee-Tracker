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
    // Added Service to the database
  };

  // View All Departments
  async viewAllDepartments() {
    const sql = `SELECT * FROM department ORDER BY name`;

    // db.query(sql, (err, results) => {
    //   if (err) throw err;
    //   const table = cTable.getTable(results);
    //   console.log(table);
    // })

		// db.promise().query(sql)
		// 	.then(([rows]) => {
		// 		const table = cTable.getTable(rows)
		// 		console.log(table);
		// 	})
		// 	.then(() => db.end());

    // db.query(sql, (err, results) => {
    //   if (err) throw err;
    //   console.table(results);
    // })

    const [rows] = await db.query(sql);
		const table = cTable.getTable(rows);
		console.log(table);
  }
};



module.exports = department;
