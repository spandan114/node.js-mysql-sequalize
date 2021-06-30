const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("node-sql", "root", "", {
  host: "localhost",
  dialect: "mysql" /* 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
  Pool: { max: 5, min: 0, idle: 10000 }, //no of connection & switching between two connection
  logging:false //stop logging unwanted messages
});

module.exports = {
    sequelize
}