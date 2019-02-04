const knex = require('../database/index');

class Collection {

  static findAll() {
    let findCollections = knex("collections").select();
    return findCollections;
  }

  static findByPk(id) {
    let findCollection = knex("collections").select().where("id", id).first();
    return findCollection;
  }

  static create(collection) {
    let createdCollection = knex("collections").insert({
      season: collection.season,
      year: collection.year
    });
    return createdCollection;
  }

  static update(collection) {
    let updatedCollection = knex("collections").update({
      season: collection.season,
      year: collection.year
    }).where("id", collection.id);
    return updatedCollection;
  }

  static destroy(id) {
    let deleteCollection = knex("collections").where("id", id).delete();
    return deleteCollection;
  }

}

module.exports = Collection;