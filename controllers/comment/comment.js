const commentService = require('../../services/comment.js');
const jwt = require('jsonwebtoken');

const methodHelper = require('../../application-utilities/method-helper');

const addComment = (req, res) => {
  const tokenInfo = methodHelper.getInfoByToken(req);
  req.body.userId = tokenInfo.payload['_id'];
  commentService.addComment(req, res);  
}

module.exports = {
  addComment,
}
