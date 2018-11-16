let db = require('../../database/index');

/**
 * Collection table
 * 
 */
let Collection = db.define('collections', {
  id: {
    type: db.Sequelize.INTEGER,
    field: 'id',
    primaryKey: true
  },
  season: {
    type: db.Sequelize.STRING(13),
    field: 'season'
  },
  year: {
    type: db.Sequelize.STRING(9),
    field: 'year'
  },
})

module.exports = Collection;