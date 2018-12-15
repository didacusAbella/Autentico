const db = require('../database/index');

const Color = db.define('Color', {
  id: {
    type: db.Sequelize.INTEGER,
    field: 'id',
    primaryKey: true
  },
  hex: {
    type: db.Sequelize.STRING(6),
    field: 'hex'
  }
});

module.exports = Color;