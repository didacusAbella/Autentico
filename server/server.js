/**
 * Setup Express and Server Configuration
 */
let express = require('express');
let app = express();
let API = require('./config/api');

/* Setup router api*/
let clothingApi   = require('./api/clothing/api');
let colorApi      = require('./api/color/api');
let collectionApi = require('./api/collection/api');
let brandApi      = require('./api/brand/api');

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