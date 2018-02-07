var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: ObjectId,
    ref: 'User',
    required: true
  }
});

var Post = mongoose.model('Post', PostSchema);
module.exports = Post;
