const { DataTypes } = require('sequelize');
const {sequelize} = require('./dbconnection')

const PostTag = sequelize.define('post_tag', {
  // Model attributes are defined here
  postId:DataTypes.INTEGER,
  tagId:DataTypes.INTEGER,
},{
   // tableName:"User",
   //engine:"engine name"
    timestamps:true
})

module.exports = {
    PostTag
}