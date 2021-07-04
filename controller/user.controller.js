var {Users} = require('../models/users')
var {Posts} = require('../models/post')
const { Sequelize,QueryTypes,Op } = require("sequelize");
const {sequelize} = require('../models/dbconnection')

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

exports.addPost = async (req, res) => {
  try {

      //bulk insert
     const arr = [];

    for(i=0;i<=4;i++){
    const data = {
            title:`post ${i}`,
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            user_id:Math.floor(Math.random() * 2) == 1 ? 1 : 2
    }
    arr.push(data)
    }
    await Posts.bulkCreate(arr)

    return res.status(200).send({
      statusCode: 200,
      arr
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

//Raw query
exports.rawQuery = async (req, res) => {
  try {

    const users = await sequelize.query("SELECT * FROM `users`", { type: QueryTypes.SELECT });

    return res.status(200).send({
      statusCode: 200,
      users
    });
 
  } catch (error) {
    return res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
}

//One - to One query
exports.OnetoOne = async (req, res) => {
  try {

    const userData = await Users.findAll({
      attributes:['firstName','email'],
      include:{
        model:Posts,
        attributes:['title']
      },
      where:{id:1}
    })

    return res.status(200).send({
      statusCode: 200,
      userData
    });
 
  } catch (error) {
    return res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
}

//Belong-to query
exports.BelongTo = async (req, res) => {
  try {

    const userData = await Posts.findAll({
      //attributes:['firstName','email'],
      include:{
        model:Users,
      //  attributes:['title']
      },
      //where:{id:1}
    })

    return res.status(200).send({
      statusCode: 200,
      userData
    });
 
  } catch (error) {
    return res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
}

//One - to Many query
exports.OnetoMany = async (req, res) => {
  try {

    return res.status(200).send({
      statusCode: 200,
    });
 
  } catch (error) {
    return res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
}

//Many - to Many query
exports.ManytoMany = async (req, res) => {
  try {

    return res.status(200).send({
      statusCode: 200,
    });
 
  } catch (error) {
    return res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
}