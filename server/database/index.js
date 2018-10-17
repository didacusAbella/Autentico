/* Import sequelize for ORM */
let Sequalize = require('sequelize');
let DB_CONFIG = require('../config/db');

let config = DB_CONFIG.develop;

/* Create and export db object for model's mapping */
const DB = new Sequalize(DB_CONFIG.dbName, config.username, config.password, config.options);

module.exports = DB;