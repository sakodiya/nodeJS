const Post = require('../models/Post');

const addPost = (req, res) => {
  console.log('add post method called');
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
  const postID = req.body.id;
  Post
    .find({author: postID})
    .populate('author', 'firstName')
    .exec((err, response) => {
      configurationSettings.responseUtils.responseHandler(
        res, 
        response, 
        err ? 'Please check the fields' : 'Post has been successfully created', 
        err, 
        err ? 400 : 200
      ) 
    });
};

module.exports = {addPost, userPost}
