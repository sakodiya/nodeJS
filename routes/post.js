const postController = require('../controllers/post/post.js');

module.exports.route = () => {
  router.post('/app/v1/addPost', configurationSettings.security.authenticateUser, postController.addPost) 
  router.post('/app/v1/userPost', configurationSettings.security.authenticateUser, postController.userPost)  
}
