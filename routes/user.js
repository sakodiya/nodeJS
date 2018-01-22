const userController = require('../controllers/user/user.js');

module.exports.route = () => {
  router.get('/app/v1/getUser', userController.getUsers)  
}
