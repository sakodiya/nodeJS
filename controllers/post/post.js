const postService = require('../../services/post.js');
const jwt = require('jsonwebtoken');

const methodHelper = require('../../application-utilities/method-helper');

const addPost = (req, res) => {
  const tokenInfo = methodHelper.getInfoByToken(req);
  req.body.author = tokenInfo.payload['_id'];
  postService.addPost(req, res);  
}

const userPost = (req, res) => {
  const tokenInfo = methodHelper.getInfoByToken(req);
  req.body.id = tokenInfo.payload['_id'];
  postService.userPost(req, res);  
}

module.exports = {
  addPost,
  userPost
}
