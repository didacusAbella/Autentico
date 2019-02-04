const knex = require('../database/index');

class Brand {

  static findAll() {
    let brandsQuery = knex("brands").select();
    return brandsQuery;
  }

  static findByPk(id) {
    let findBrand = knex("brands").select().where("id", id).first();
    return findBrand;
  }

  static create(brand) {
    let createBrand = knex("brands").insert({
      name: brand.name
    });
    return createBrand;
  }

  static update(brand) {
    let updateBrand = knex("brands").update({
      name: brand.name
    }).where("id", brand.id);
    return updateBrand;
  }

  static destroy(id) {
    let removeBrand = knex("brands").where("id", id).delete();
    return removeBrand;
  }
}

module.exports = Brand;