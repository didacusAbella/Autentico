let Clothing = require('../models/clothing');
let ResponseFactory = require('../helpers/responsefactory');
let Upload = require("../helpers/upload");
/**
 * Controller for Clothing model
 */
class ClothingController {  
  
  allClothings(req, res) {
    Clothing.findAll()
    .then(clothings => ResponseFactory.createSuccessResponse(res, clothings))
    .catch(clothingError => ResponseFactory.createInternalServerResponse(res, clothingError));
  }

  createClothing(req, res) {
    Upload.saveImage(req.body);
    Clothing.create(req.body)
    .then(createdClothing => ResponseFactory.createSuccessResponse(res, createdClothing))
    .catch(clothingError => ResponseFactory.createInternalServerResponse(res, clothingError));
  }
  
  findClothingById(req, res) {
    Clothing.findByPk(req.params.id)
    .then(foundClothing => ResponseFactory.createSuccessResponse(res, foundClothing))
    .catch(clothingError => ResponseFactory.createInternalServerResponse(res, clothingError));
  }

  updateClothing(req, res) {
    Clothing.update(req.body)
    .then(updatedClothing => ResponseFactory.createSuccessResponse(res, updatedClothing))
    .catch(clothingError => ResponseFactory.createInternalServerResponse(res, clothingError));
  }

  deleteClothing(req, res){
    Upload.removeImage(req.params.id);
    Clothing.destroy(req.params.id)
    .then(deletedClothing => ResponseFactory.createSuccessResponse(res, deletedClothing))
    .catch(clothingError => ResponseFactory.createInternalServerResponse(res, clothingError));
  }
}

module.exports = ClothingController;