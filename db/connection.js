const mysql = require('mysql2');

// const db = mysql.createConnection(
//     {
//         host: 'localhost',
//         user: 'root',
//         password: 'yangbao94Wly',
//         database: 'employee_tracker'
//     }
// );

const pool = mysql.createPool(
    {
        host: 'localhost',
        user: 'root',
        password: 'yangbao94Wly',
        database: 'employee_tracker'
    }
);

const db = pool.promise();

module.exports = db;