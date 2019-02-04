/**
 * Setup Express and Server Configuration
 */
let express = require('express');
let app = express();
let API = require('./config/api');
let bodyParser = require("body-parser");
/* Setup router api*/
const clothingApi   = require('./apis/clothing');
const colorApi      = require('./apis/color');
const collectionApi = require('./apis/collection');
const brandApi      = require('./apis/brand');
const statisticApi  = require('./apis/statistic');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', "Origin,X-Requested-With,Content-Type,Accept,x-client-key,x-client-token,x-client-secret, Authorization");
  next();
});

app.use('/clothings', clothingApi);
app.use('/colors', colorApi);
app.use('/collections', collectionApi);
app.use('/brands', brandApi);
app.use('/statistics', statisticApi);



/**
 * Start the server
 */
app.listen(API.port, API.host, function(req, res){
  console.log(`Authentic Service version:${API.version} is listening on ${API.host}:${API.port}`);
});


module.exports = app;