const db = require('../database/index');

/**
 * Create Brand table
 * TODO need to add validation rules
 */
const Brand = db.define('brands', {
  id: {
    type: db.Sequelize.INTEGER,
    field: 'id',
    primaryKey: true,
  },
  name: {
    type: db.Sequelize.STRING(20),
    field: 'name'
  }
});

module.exports = Brand;