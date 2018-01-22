const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
global.router = express.Router();

require('./config/dependency-include.js');
require('./routes');

const db = require('./config/configure-db.js');
db();

router.use((req, res, next) => {
  console.log(req.method, req.url);
  next(); 
});

app.use('/', router);
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended : true})); 

const server = app.listen(8081, () => {
  const host = server.address().address
  const port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})
