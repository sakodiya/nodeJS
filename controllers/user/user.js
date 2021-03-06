const userService = require('../../services/user.js');

const getUsers = (req, res) => {
  userService.getAllUsers(res);
}

const addUser = (req, res) => {
  userService.addUser(req, res);  
}

const authenticateUser = (req, res) => {
  const userName = req.body.username && req.body.username.trim();
  const password = req.body.password && req.body.password.trim();
  userService.authenticateUser(userName, password, res);  
}

const logoutUser = (req, res) => {
  const token = req.headers['authorization'].split(' ')[1];
  userService.logoutUser(token, res);  
}

module.exports = {
  getUsers,
  addUser,
  authenticateUser,
  logoutUser
}
