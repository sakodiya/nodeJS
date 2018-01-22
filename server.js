const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true})); 
global.router = express.Router();

app.use('/', router);

require('./config/dependency-include.js');
require('./routes');
require('./models');

const db = require('./config/configure-db.js');
db();

router.use((req, res, next) => {
  console.log(req.method, req.url);
  next(); 
});

const server = app.listen(8081, () => {
  const host = server.address().address
  const port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})
