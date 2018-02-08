const jwt = require('jsonwebtoken');

const getInfoByToken = (req) => {
  const token = req.headers['authorization'].split(' ')[1];
  const tokenInfo = jwt.decode(token, {complete: true});
  // req.body.author = tokenInfo.payload['_id'];  
  return jwt.decode(token, {complete: true});
};

module.exports = {
  getInfoByToken
}

 
