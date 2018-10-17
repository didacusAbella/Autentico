let Color = require('./model');

/**
 * Controller for Color model
 */
class ColorController {  
  /**
   * Find all Colors avaibles
   */
  allColors(){
    return Color.findAll();
  }

  /**
   * Create a new Color    
   * @param {Number} id the id of the Color 
   * @param {String} hex the hex of the Color
   */
  createColor(id, hex){
    Color.create({ id: id, hex: hex}).then(function(created_color){
      console.log(created_color);
    })
  }

  /**
   * Find a Color with a specific id
   * @param {Number} id the id of the color to find
   */
  findColorById(id){
    Color.findById(id).then(function(color){
      console.log(color);
    });
  }

}

module.exports = ColorController;