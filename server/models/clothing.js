const db = require('../database/index');

const Clothing = db.define('clothing', {
  id: {
    type: db.Sequelize.STRING(4),
    field: 'id',
    primaryKey: true
  },
  name: {
    type: db.Sequelize.STRING(30),
    field: 'name'
  },
  collection_fk: {
    type: db.Sequelize.INTEGER,
    field: 'collection_fk'
  },
  brand_fk: {
    type: db.Sequelize.INTEGER,
    field: 'brand_fk'
  },
  description: {
    type: db.Sequelize.STRING(100),
    field: 'description'
  },
  defect: {
    type: db.Sequelize.BOOLEAN,
    field: 'defect'
  },
  img: {
    type: db.Sequelize.STRING(255),
    field: 'img'
  }
}, { timestamps: false } );

module.exports = Clothing;