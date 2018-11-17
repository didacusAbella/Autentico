let Clothing = require('./model');
let ResponseFactory = require('../core/responsefactory');

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
    Clothing.create({
      id: req.params.id,
      brand_fk: req.params.brand_fk,
      collection_fk: req.params.collection_fk,
      name: req.params.name,
      defect: req.params.defect,
      description: req.params.description,
      img: req.params.img
    })
    .then(createdClothing => ResponseFactory.createSuccessResponse(res, createdClothing))
    .catch(clothingError => ResponseFactory.createInternalServerResponse(res, clothingError));
  }
  
  findClothingById(req, res) {
    Clothing.findById(req.params.id)
    .then(foundClothing => ResponseFactory.createSuccessResponse(res, foundClothing))
    .catch(clothingError => ResponseFactory.createInternalServerResponse(res, clothingError));
  }

  updateClothing(req, res) {
    Clothing.update({
      name: req.params.name,
      collection_fk: req.params.collection_fk,
      brand_fk: req.params.brand_fk,
      defect: req.params.defect,
      description: req.params.description,
      img: req.params.id
    }, { where: { id: req.params.id }})
    .then(updatedClothing => ResponseFactory.createSuccessResponse(res, updatedClothing))
    .catch(clothingError => ResponseFactory.createInternalServerResponse(res, clothingError));
  }

  deleteClothing(req, res){
    Clothing.destroy({
      where: { id: req.params.id }
    })
    .then(deletedClothing => ResponseFactory.createSuccessResponse(res, deletedClothing))
    .catch(clothingError => ResponseFactory.createInternalServerResponse(res, clothingError));
  }

}

module.exports = ClothingController;