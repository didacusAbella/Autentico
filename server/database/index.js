/** Import configuration **/
const DB_CONFIG = require('../config/db');
/** Import Knex */
const KNEX = require('knex')(DB_CONFIG);
KNEX.on('query', console.log);

module.exports = KNEX;