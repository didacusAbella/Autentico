let db = require('../../database/index');

/**
 * Create Clothing table
 * TODO need to add validation rules
 */
let Clothing = db.define('clothing', {
  id: {
    type: db.Sequelize.STRING(4),
    field: 'id',
    primaryKey: true
  },
  name: {
    type: db.Sequelize.STRING(30),
    field: 'name'
  }
})

module.exports = Clothing;