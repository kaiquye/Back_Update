require('dotenv').config()
var database = process.env.database
var username = process.env.username
var password = process.env.password
var dialect = process.env.dialect
var host = process.env.hosts
console.log(process.env)
module.exports =
{
  "development": {
    "username": "postgres",
    "password": "1234",
    "database": "backend",
    "host": host,
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
