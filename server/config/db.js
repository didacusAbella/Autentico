let path = require('path');

/* Setup Database configuration */
const DB_CONFIG = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, "../ext/authentic.db"),
  },
  useNullAsDefault: true
};

/* Export Database's config object*/
module.exports = DB_CONFIG;