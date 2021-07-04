const { DataTypes } = require('sequelize');
const {sequelize} = require('./dbconnection')

const Posts = sequelize.define('posts', {
  // Model attributes are defined here
  title:DataTypes.STRING,
  content:DataTypes.STRING,
  user_id:DataTypes.INTEGER
},{
   // tableName:"User",
   //engine:"engine name"
    timestamps:true
})

module.exports = {
    Posts
}