const knex = require('../database/index');

class Clothing {

  static findAll() {
    let findAllQuery = knex.select("clothings.*", { brand: "brands.name" }, { season: "collections.season" }, { year: "collections.year"})
    .from("clothings")
    .innerJoin("brands", "clothings.brand_fk", "brands.id")
    .innerJoin("collections", "clothings.collection_fk", "collections.id");
    return findAllQuery;
  }

  static findByPk(id){
    let findByQuery = knex.select("clothings.*", { brand: "brands.name"}, { season: "collections.season"}, { year: "collections.year"})
    .from("clothings")
    .innerJoin("brands", "clothings.brand_fk", "brands.id")
    .innerJoin("collections", "clothings.collection_fk", "collections.id")
    .where('clothings.id', id).first();
    return findByQuery;
  }

  static create(clothing) {
    let createClothing = knex("clothings").insert({
      name: clothing.name,
      img: clothing.img,
      defect: clothing.defect,
      description: clothing.description,
      id: clothing.id,
      collection_fk: knex("collections").select("id").where({
        season: clothing.season,
        year: clothing.year
      }).first(),
      brand_fk: knex("brands").select("id").where({
        name: clothing.brand
      }).first()
    });
    return createClothing;
  }

  static update(clothing) {
    let updateClothing = knex("clothings").update({
      name: clothing.name,
      img: clothing.img,
      defect: clothing.defect,
      description: clothing.description,
      collection_fk: knex("collections").select("id").where({
        season: clothing.season,
        year: clothing.year
      }).first(),
      brand_fk: knex("brands").select("id").where({
        name: clothing.brand
      }).first()
    })
    .where("id", clothing.id);
    return updateClothing;
  }

  static destroy(id) {
    let deleteClothing = knex("clothings")
    .where("id", id).delete();
    return deleteClothing;
  }
}
module.exports = Clothing;