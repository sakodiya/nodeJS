const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt');
const User = require('../models/User');

const getToken = function(user, cb) {
  const {_id, firstName, lastName} = user;
  const token = jwt.sign({_id, firstName, lastName},
    jwtConfig.jwtSecret, 
    {expiresIn: '1h'}
  );
  cb(null, user, token);
};

const updateUser = (user, token, cb) => {
  User.update({_id: user['_id']}, {'$set': {authToken: token}}, (err, res) => {
    if (err) return cb(err)
    cb(null, 'JWT ' + token)
  });
}

module.exports = {
  getToken,
  updateUser
}
