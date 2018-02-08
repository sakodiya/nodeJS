const Comment = require('../models/Comment');
const Post = require('../models/Post');

const addComment = (req, res) => {
  const {postId, content, userId} = req.body;
  Post.findOne({_id: postId}, (err, postRes) => {
    if (err || !postRes) {
      configurationSettings.responseUtils.responseHandler(
        res, 
        null, 
        'Invalid post', 
        err, 
        400
      ) 
    } else {
      const comment = new Comment({
        content, 
        postId, 
        author: userId, 
        createdAt: new Date()
      });
      comment.save((err, commentRes) => {
        configurationSettings.responseUtils.responseHandler(
          res, 
          {}, 
          err ? 'Error occuring while submitting the comment' : 'Comment added!!', 
          err, 
          err ? 400 : 200
        )
      })
    }
  })
}

module.exports = {addComment}
