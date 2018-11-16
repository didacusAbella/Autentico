let Brand = require('./model');
let ResponseFactory = require('../core/responsefactory');

/**
 * Controller for Brand Resources
 */
class BrandController {  
  

  allBrand(req, res){
    Brand.findAll()
    .then(brands => ResponseFactory.createSuccessResponse(res, brands))
    .catch(brandError => ResponseFactory.createInternalServerResponse(res, brandError));
  }

  
  createBrand(req, res){
    Brand.create({
       id: req.params.id, 
       name: req.params.name
    })
    .then(createdBrand => ResponseFactory.createSuccessResponse(res, createdBrand))
    .catch(brandError => ResponseFactory.createInternalServerResponse(res, brandError));
  }

  
  findBrandById(req, res){
    Brand.findById(req.params.id)
    .then(foundBrand => ResponseFactory.createSuccessResponse(res, foundBrand))
    .catch(brandError => ResponseFactory.createInternalServerResponse(res, brandError));
  }

  updateBrand(req, res){
    Brand.update({
      name: req.params.name
    }, { where: { id: req.params.id } })
    .then(updatedBrand => ResponseFactory.createSuccessResponse(res, updatedBrand))
    .catch(brandError => ResponseFactory.createInternalServerResponse(res, brandError));
  }

  deleteBrand(req, res){
    Brand.destroy({
      where: { id: req.params.id }
    })
    .then(deletedBrand => ResponseFactory.createSuccessResponse(res, deletedBrand))
    .catch(brandError => ResponseFactory.createInternalServerResponse(res, brandError))
  }

}

module.exports = BrandController;