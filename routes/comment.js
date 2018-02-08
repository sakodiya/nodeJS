const commentController = require('../controllers/comment/comment.js');

module.exports.route = () => {
  router.post('/app/v1/addComment', configurationSettings.security.authenticateUser, commentController.addComment) 
}
