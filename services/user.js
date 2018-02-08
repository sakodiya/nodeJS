const User = require('../models/User');
const async = require('async');
const authConfigHelper = require('./authentication');

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

const addUser = (req, res) => {
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

const deleteUser = (req, res) => {
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

const authenticateUser = (email, password, res) => {
  User.findOne({email}, (err, userData) => {
    if (err || !userData) {
      // send message
      configurationSettings.responseUtils.responseHandler(
        res, 
        null, 
        'Email is invalid', 
        err, 
        401
      )
    } else {
      async.waterfall([
        function(cb) {
          userData.comparePassword(password, cb)
        },
        function(userData, cb) {
          authConfigHelper.getToken(userData, cb)  
        }, 
        function(userData, token, cb) {
          // console.log('userData____', userData)
          authConfigHelper.updateUser(userData, token, cb)  
        }
      ], (error, response) => {
        configurationSettings.responseUtils.responseHandler(
          res, 
          error ? {} : response, 
          error, 
          error, 
          error ? 404 : 200
        ) 
      })
    } 
  })
}

const logoutUser = (authToken, res) => {
  User.findOneAndUpdate({authToken}, {'$set': {'authToken': null}}, (err, response) => {
    const error = err || !response;
    configurationSettings.responseUtils.responseHandler(
      res, 
      {}, 
      error ? 'Error while logout the current user' : 'User successfully logout', 
      error, 
      error ? 400 : 200
    ) 
  })
}

module.exports = {
  getAllUsers,
  addUser,
  deleteUser,
  authenticateUser,
  logoutUser  
}


