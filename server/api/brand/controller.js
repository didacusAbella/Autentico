let Brand = require('./model');

/**
 * Controller for Brand model
 */
class BrandController {  
  /**
   * Find all Brand avaibles
   */
  allBrand(){
    return Brand.findAll();
  }

  /**
   * Create a new Brand    
   * @param {Number} id the id of the Brand 
   * @param {String} name the name of the Brand
   */
  createBrand(id, name){
    Brand.create({ id: id, name: name}).then(function(created_brand){
      console.log(created_brand);
    })
  }

  /**
   * Find a brand with a specific id
   * @param {Number} id the id of the brand to find
   */
  findBrandById(id){
    return Brand.findById(id);
  }

}

module.exports = BrandController;