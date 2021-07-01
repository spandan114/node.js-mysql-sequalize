var {Users} = require('../models/users')
const { Sequelize,Op } = require("sequelize");

exports.addUser = async (req, res) => {
  try {

    const  {
        firstName,
        lastName,
        email,
        gender
    } = req.body

    //single insert
    //create & save new user
    // const newUser = await Users.create({
    //     firstName:firstName,
    //     lastName:lastName,
    //     email:email,
    //     gender:gender
    // })

    //allow only specific fields to save
    // const newUser = await Users.create({
    //     firstName:firstName,
    //     lastName:lastName,
    //     email:email,
    //     gender:gender
    // },{
    //   fields:["firstName"]
    // })

      //bulk insert
    // const arr = [];

    // for(i=0;i<=100;i++){
    // const data = {
    //         firstName:`user`,
    //         lastName:i+1,
    //         email:`user${i+1}@gmail.com`,
    //         gender:Math.floor(Math.random() * 2) == 1 ? "Male" : "Female"
    // }
    // arr.push(data)
    // }
    // await Users.bulkCreate(arr)

    //update data after saving
    // newUser.firstName = "Dummy";
    // newUser.save()

    //Delete
    //newUser.destroy();

    //relode
    //newUser.firstName = "Dummy";
    //newUser.reload()

    return res.status(200).send({
      statusCode: 200,
      user:newUser
    });
  } catch (error) {
    return res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};

//get all user
exports.getUser = async (req, res) => {
  try {

    //get all users

    //const findAll = await Users.findAll({where:{gender:"Female"}});

    //find all 
   //const findAll = await Users.findAll({attributes:["firstName","gender",["email","emailId"]]});

   //sequalize count
  //  const findAll = await Users.findAll({where:{gender:"Male"},attributes:[
  //    [Sequelize.fn("count",Sequelize.col("gender")),"MailCount"]
  //  ]})

//concat
  //  const findAll = await Users.findAll({attributes:[
  //    [Sequelize.fn("concat",Sequelize.col("firstName"),Sequelize.col("lastName")),"Fullname"]
  //  ]})

//exclude & include

    // const findAll = await Users.findAll({
    //   attributes:{
    //     exclude:["createdAt","updatedAt"],
    //     include:[[Sequelize.fn("concat",Sequelize.col("firstName"),Sequelize.col("lastName")),"Fullname"]]
    //   }
    // })

  //-----------------------condition-----------------------//

  //operator eq
  //https://sequelize.org/master/manual/model-querying-basics.html#operators
    //   const findAll = await Users.findAll({where:{
    //   id:{[Op.eq]:2},
    //   email:{[Op.like]:"%@gmail.com"}
    // }})

    //orderby
  //  const findAll = await Users.findAll({
  //    where:{
  //     id:{[Op.gt]:2},
  //     email:{[Op.like]:"%@gmail.com"}
  //   },
  //   order:[
  //     ["firstName","ASC"], //DESC ,ASC,FIRST,NULLS
  //   ],
  //   group:["email"],
  //   limit:2,
  //   offset:1
  // })

  //-------------------QUERY FINDER ------------------//

    // const findAll = await Users.findByPk(4);
   // const findAll = await Users.findAndCountAll({where:{gender:"Female"}});
    // const findAll = await Users.findOrBuild({
    //   where:{firstName:"spandan"},
    //   defaults:{
    //     firstName:"spandan",
    //     lastName:"joshi",
    //     email:"spandan@gmail.com",
    //     gender:"Male"
    //   }
    // });

  //find one
    // const findOne = await Users.findOne({});

    //get user by id

    return res.status(200).send({
      statusCode: 200,
      findAll,
      // findOne
    });
  } catch (error) {
    return res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};

//update user
exports.updateUser = async (req, res) => {
  try {

    const {firstName,lastName,id} = req.body
    const updateUser = await Users.update({
      firstName,
      lastName,
    },{
      where:{
        id:id
      }
    })

    return res.status(200).send({
      statusCode: 200,
      updateUser
    });
  } catch (error) {
    return res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};

//delete user
exports.deleteUser = async (req, res) => {
  try {
    const {id} = req.body

    //delete
    const deleteduser = await Users.destroy({where:{id:id}})
    //truncate
    //await Users.destroy({truncate:true})

    return res.status(200).send({
      statusCode: 200,
      deleteduser
    });

  } catch (error) {
    return res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
}