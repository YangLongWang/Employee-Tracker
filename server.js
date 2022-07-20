const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const db = require('./db/connection');

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');

})





// get the client
// const mysql = require('mysql2');
// // create the connection
// const con = mysql.createConnection(
//   {host:'localhost', user: 'root', database: 'test'}
// );
// con.promise().query("SELECT 1")
//   .then( ([rows,fields]) => {
//     console.log(rows);
//   })
//   .catch(console.log)
//   .then( () => con.end());