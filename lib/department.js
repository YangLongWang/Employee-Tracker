const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('../db/connection');
const { addDepartment } = require('./questions');

class department {
  // Add Department
  addDepartment() {
    inquirer.prompt(addDepartment)
      .then(answer => {
        const sql = `INSERT INTO department (name) VALUES (?)`;
        const param = [answer.department];

        db.promise().query(sql, param);
        console.log(`Added ${answer.department} to the database`);
      });
    // Added Service to the database
  };

  // View All Departments
  viewAllDepartment() {
    const sql = `SELECT * FROM department ORDER BY name`;

    db.query(sql, (err, results) => {
      if (err) throw err;
      const table = cTable.getTable(results);
      console.log(table);
    })

    // db.query(sql, (err, results) => {
    //   if (err) throw err;
    //   console.table(results);
    // })
  }
};



module.exports = department;
