const Post = require('../models/Post');

const addPost = (req, res) => {
  const postData = req.body;
  const newPost = new Post(postData)
  newPost.save((err, user) => {
    const obj = {
      message: err ? 'Please check the fields' : 'Post has been successfully created',
      statusCode: err ? 400 : 200,
    }
    configurationSettings.responseUtils.responseHandler(
      res, 
      null, 
      obj.message, 
      err, 
      obj.statusCode
    )   
  });
};

const userPost = (req, res) => {
  const userId = req.body.id;
  Post
    .find({author: userId})
    .populate('author', '-password -authToken')
    .exec((err, response) => {
      configurationSettings.responseUtils.responseHandler(
        res, 
        response, 
        err ? 'Please check the fields' : 'success', 
        err, 
        err ? 400 : 200
      ) 
    });
};

module.exports = {addPost, userPost}
