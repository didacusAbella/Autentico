/**
 * Setup Express and Server Configuration
 */
let express = require('express');
let app = express();
let API = require('./config/api');
require('./models/index');
/* Setup router api*/
let clothingApi   = require('./apis/clothing');
let colorApi      = require('./apis/color');
let collectionApi = require('./apis/collection');
let brandApi      = require('./apis/brand');

app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

app.use('/clothings', clothingApi);
app.use('/colors', colorApi);
app.use('/collections', collectionApi);
app.use('/brands',brandApi);



/**
 * Start the server
 */
app.listen(API.port, API.host, function(req, res){
  console.log(`Authentic Service version:${API.version} is listening on ${API.host}:${API.port}`);
});


module.exports = app;