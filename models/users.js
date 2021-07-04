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
      allowNull:false,
      unique:true
  },
  gender:{
      type:DataTypes.STRING,
      validate:{
        //equals:"MALE"
        isIn:{
          args:[["MALE","FEMALE"]],
          msg:"please enter only MALE or FEMALE"
        }
      }
  }
},{
   // tableName:"User",
   //engine:"engine name"
    timestamps:true,
    hooks:{
      beforeValidate:(user,options) =>{
        console.log("Hooks called")
      }
    }
})

module.exports = {
    Users
}