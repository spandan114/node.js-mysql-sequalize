const { Sequelize } = require("sequelize");
const { sequelize } = require("./dbconnection");
const { Posts } = require("./post");
const { Tags } = require("./tags");
const { Users } = require("./users");

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

//create sequelize db instance
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//sync all tables/models
//create table if not exist
// db.sequelize.sync({force:true,match:/test$/}) : drop table & recreate if db name is test
db.sequelize.sync().then(() => {
  console.log("Successfully sync");
});

db.users = require('./users')
db.posts = require('./post')
db.tags = require('./tags')
db.post_tag = require('./post_tag')
//relation
//one to one - one user can add one post
// Users.hasOne(Posts,{foreignKey:'user_id'})
// Posts.belongsTo(Users,{foreignKey:'user_id'})

//one to many - one user can add many post

Users.hasMany(Posts,{foreignKey:'user_id'})
Posts.belongsTo(Users,{foreignKey:'user_id'})

//many to many - multiple tags can available in multiple post
Posts.belongsToMany(Tags,{through:"post_tag"})
Tags.belongsToMany(Posts,{through:"post_tag"})
