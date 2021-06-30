const { Sequelize } = require("sequelize");
const { sequelize } = require("./dbconnection");

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

//connect schema with db
db.users = require("./users");
