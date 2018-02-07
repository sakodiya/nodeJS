const User = require('../models/User');

const getAllUsers = (res) => {
  User.find((err, response) => {
    const obj = {
      message: err ? 'Something went wrong' : 'All users has been Fetched!!',
      statusCode: err ? 400 : 200,
      responseObj: response
    }
    configurationSettings.responseUtils.responseHandler(
      res, 
      obj.responseObj, 
      obj.message, 
      err, 
      obj.statusCode
    );
  });
};

const addUsers = (req, res) => {
  const userData = req.body;
  var newUser = new User(userData)
  newUser.save((err, user) => {
    const obj = {
      message: err ? 'Please check the fields' : 'User has been successfully added',
      statusCode: err ? 400 : 200,
    }
    configurationSettings.responseUtils.responseHandler(
      res, 
      null, 
      obj.message, 
      err, 
      obj.statusCode
    )   
  });
};

const deleteUsers = (req, res) => {
  const userData = req.body.id;
  var newUser = new User(userData)
  newUser.findOneAndDelete((err, user) => {
    const obj = {
      message: err ? 'Please check the fields' : 'User has been successfully added',
      statusCode: err ? 400 : 200,
    }
    configurationSettings.responseUtils.responseHandler(
      res, 
      null, 
      obj.message, 
      err, 
      obj.statusCode
    )   
  });
};

module.exports = {
  getAllUsers,
  addUsers  
}

