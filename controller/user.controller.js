var {Users} = require('../models/users')

exports.addUser = async (req, res) => {
  try {

    const  {
        firstName,
        lastName,
        email,
        gender
    } = req.body

    //create & save new user
    const newUser = await Users.create({
        firstName:firstName,
        lastName:lastName,
        email:email,
        gender:gender
    })

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
    return res.status(200).send({
      statusCode: 200,
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
    return res.status(200).send({
      statusCode: 200,
    });
  } catch (error) {
    return res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};
