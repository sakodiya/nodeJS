const postController = require('../controllers/post/post.js');

module.exports.route = () => {
  router.post('/app/v1/addPost', postController.addPost) 
  router.post('/app/v1/userPost', postController.userPost)  
}
