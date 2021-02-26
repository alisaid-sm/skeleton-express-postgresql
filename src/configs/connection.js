// This is connection Databases

const { Client } = require('pg')

const { DB_HOST, DB_NAME, DB_PASS, DB_USER, DB_PORT } = require('../helpers/env')

const db = new Client({
    user: DB_USER,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASS,
    port: DB_PORT,
  })
db.connect()

module.exports = db


