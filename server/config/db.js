let path = require('path');

/* Setup Database configuration */
const DB_CONFIG = {
  dbName: 'authentic',
  develop: {
    username: '',
    password: '',
    options: {
      dialect: 'sqlite',
      storage: path.resolve(__dirname, "../ext/authentic.db"),
      operatorsAliases: false
    }
  },
  production: {
    host: 'localhost',
    username: 'root',
    password: 'root',
    options: {
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
      dialect: 'mysql',
      operatorsAliases: false
    }
  }
};

/* Export Database's config object*/
module.exports = DB_CONFIG;