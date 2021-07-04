const { DataTypes } = require('sequelize');
const {sequelize} = require('./dbconnection')

const Tags = sequelize.define('tags', {
  // Model attributes are defined here
  name:DataTypes.STRING,
},{
   // tableName:"User",
   //engine:"engine name"
    timestamps:true
})

module.exports = {
    Tags
}