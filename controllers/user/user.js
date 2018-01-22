const userService = require('../../services/user.js');

const getUsers = (req, res) => {
  userService.getAllUsers(res);
}

const addUsers = (req, res) => {
  userService.addUsers(req, res);  
}

module.exports = {
  getUsers,
  addUsers
}
