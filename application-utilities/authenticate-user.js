const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt');
const errorMessage = require('../config/error-messages').errorMessage;
const User = require('../models/User');

const authenticateUser = function(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    const err = new Error('you are not a authorized user');
    err.status = 401;
    next(err);
    return;
  }
  const token = authHeader.split(' ')[1];
  User.findOne({authToken: token}, (err, user) => {
    if (err || !user) return next('No user found with this token.')
    else {
      jwt.verify(token, jwtConfig.jwtSecret, (err, res) => {
        if (err) {
          const errorKeys = Object.keys(err);
          next(errorMessage[err[errorKeys[0]]]);
        } else {
          next();  
        }
      })      
    }  
  })
}

module.exports = {
  authenticateUser
};
