let db = require('../../database/index');

/**
 * Create Color table
 * TODO need to add validation rules
 */
let Color = db.define('Color', {
  id: {
    type: db.Sequelize.INTEGER,
    field: 'id',
    primaryKey: true
  },
  hex: {
    type: db.Sequelize.STRING(6),
    field: 'hex'
  }
})

module.exports = Color;