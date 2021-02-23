// This is connection Databases

const mysql = require('mysql2')

const { DB_HOST, DB_NAME, DB_PASS, DB_USER } = require('../helpers/env')

const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    dateStrings: 'date'
});

module.exports = db


