/**
 * Setup Express and Server Configuration
 */
let express = require('express');
let app = express();
let API = require('./config/api');

/* Setup router api*/
let clothingApi = require('./api/clothing/api');

app.use('/clothings', clothingApi);


/**
 * Start the server
 */
app.listen(API.port, API.host, function(req, res){
  console.log(`Authentic Service version:${API.version} is listening on ${API.host}:${API.port}`);
});

module.exports = app;