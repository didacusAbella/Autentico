const knex = require('../database/index');

class Color {

  static findAll() {
    let colors = knex("colors").select();
    return colors;
  }

  static findByPk(id) {
    let findColor = knex("colors").where("id", id).first();
    return findColor;
  }

  static create(color) {
    let createColor = knex("colors").insert({
      hex: color.hex
    });
    return createColor;
  }

  static update(color) {
    let updateColor = knex("colors").update({
      hex: color.hex
    }).where("id", color.id);
    return updateColor;
  }

  static destroy(id) {
    let deleteColor = knex("colors").where("id", id).delete();
    return deleteColor;
  }
}

module.exports = Color;