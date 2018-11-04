let Clothing = require('./model');

/**
 * Controller for Clothing model
 */
class ClothingController {  
  /**
   * Find all clothings avaibles
   */
  allClothings(){
    return Clothing.findAll();
  }

  /**
   * Create a new clothing    
   * @param {Number} id the id of the clothing 
   * @param {String} name the name of the clothing
   */
  createClothing(id, name){
    Clothing.create({ id: id, name: name}).then(function(created_clothing){
      console.log(created_clothing);
    })
  }

  /**
   * Find a clothing with a specific id
   * @param {Number} id the id of the clothing to find
   */
  findClothingById(id){
    return Clothing.findById(id);
  }

}

module.exports = ClothingController;