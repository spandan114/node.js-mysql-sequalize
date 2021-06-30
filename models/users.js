const { DataTypes } = require('sequelize');
const {sequelize} = require('./dbconnection')

const Users = sequelize.define('users', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email:{
      type:DataTypes.STRING,
      allowNull:false
  },
  gender:{
      type:DataTypes.STRING
  }
},{
   // tableName:"User",
   //engine:"engine name"
    timestamps:true
})

module.exports = {
    Users
}