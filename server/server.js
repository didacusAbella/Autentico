/**
 * Setup Express and Server Configuration
 */
let express = require('express');
let cors = require("cors");
let app = express();
let API = require('./config/api');
let bodyParser = require("body-parser");

/* Setup router api*/
const clothingApi   = require('./apis/clothing');
const collectionApi = require('./apis/collection');
const brandApi      = require('./apis/brand');
const statisticApi  = require('./apis/statistic');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false, limit: '5mb' }));
app.use(bodyParser.json({ limit: '5mb'}));
app.use(express.static('ext/images'));

app.use('/clothings', clothingApi);
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