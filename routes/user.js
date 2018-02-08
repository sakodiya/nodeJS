const userController = require('../controllers/user/user.js');

module.exports.route = () => {
  router.get('/app/v1/getUsers', configurationSettings.security.authenticateUser, userController.getUsers);  
  router.post('/app/v1/addUser', userController.addUser);

  router.post('/login', userController.authenticateUser);
  router.post('/logout', configurationSettings.security.authenticateUser, userController.logoutUser);    
}
