const userController = require('../controllers/user/user.js');

module.exports.route = () => {
  router.get('/app/v1/getUsers', userController.getUsers)  
  router.post('/app/v1/addUser', userController.addUsers)  
}
