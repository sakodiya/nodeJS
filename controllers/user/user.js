const userService = require('../../services/user.js');

const getUsers = function(req, res) {
  userService.getAllUsers(res);
}

module.exports.getUsers = getUsers;
