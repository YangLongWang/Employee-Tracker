const mysql = require('mysql2');

require('dotenv').config();

const pool = mysql.createPool(
    {
        host: 'localhost',
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: 'employee_tracker'
    }
);

const db = pool.promise();

module.exports = db;