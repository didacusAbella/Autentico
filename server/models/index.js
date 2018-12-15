const Clothing = require('./clothing');
const Brand = require('./brand');
const Collection = require('./collection');
const Color = require('./color');

/* Define 1:N Relationship with Clothing and Brand*/
Brand.hasMany(Clothing, { as: 'clothings', foreignKey: 'brand_fk', sourceKey: 'id'});
Clothing.belongsTo(Brand, { foreignKey: 'brand_fk', targetKey: 'id'});

/* Define 1:N Relationship with Clothing and Collection*/
Collection.hasMany(Clothing, { as: 'clothings', foreignKey: 'collection_fk', sourceKey: 'id'});
Clothing.belongsTo(Collection, { foreignKey: 'collection_fk', targetKey: 'id'});

/*Define N:N Relationship with Color and Clothing */
Clothing.belongsToMany(Color, { through: 'clothings_colors', foreignKey: 'clothing_fk'});
Color.belongsToMany(Clothing, { through: 'clothings_colors', foreignKey: 'color_fk'});