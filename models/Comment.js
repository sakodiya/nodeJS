const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CommentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  postId: {
    type: ObjectId,
    ref: 'Post',
    required: true
  },
  author: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date
  }
});

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;
