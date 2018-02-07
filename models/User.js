const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
    trim: true,
    validate: [validateEmail, "enter correct email"]
  },
  password: { 
    type: String, 
    required: true 
  },
  authToken: {
    type: String 
  },
  createdAt: {
    type: Date
  }
});

function validateEmail(email) {
  return /^[_a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/.test(email);
}

UserSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      user.createdAt = new Date();
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(userPassword, cb) {
  bcrypt.compare(userPassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    const errMsg = !isMatch ? "password is invalid" : null;
    cb(errMsg, this);
  });    
};

const User = mongoose.model('User', UserSchema);
module.exports = User;
