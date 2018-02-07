const postService = require('../../services/post.js');

const addPost = (req, res) => {
  postService.addPost(req, res);  
}

const userPost = (req, res) => {
  postService.userPost(req, res);  
}

module.exports = {
  addPost,
  userPost
}
