const Sequelize = require('sequelize')
require('dotenv').config()
var database = process.env.database
var username = process.env.username
var password = process.env.password
var dialect = process.env.dialect
var host = process.env.hosts
class DataBase {
    //OBSERVAR SE O .ENV ESTA CORRETO.
    constructor(){
        this.connection = new Sequelize('backend', 'postgres', '1234', {
            host : 'localhost', 
            dialect : 'postgres'
        })
    }
}
module.exports = new DataBase().connection