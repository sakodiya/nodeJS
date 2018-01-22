const mongoose = require('mongoose');

module.exports = () => {
  const dbConnection = mongoose.connect('mongodb://localhost/blog'); 
  mongoose.connection.on('open', (res) => {
    console.log('Connected to mongo server.');
  });
  mongoose.connection.on('error', (err) => {
    console.log('Couldn\'t connect to mongo server')
  });
};
