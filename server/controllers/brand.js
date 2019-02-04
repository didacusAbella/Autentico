let Brand = require('../models/brand');
let ResponseFactory = require('../helpers/responsefactory');

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
    Brand.create(req.body)
    .then(createdBrand => ResponseFactory.createSuccessResponse(res, createdBrand))
    .catch(brandError => ResponseFactory.createInternalServerResponse(res, brandError));
  }

  
  findBrandById(req, res){
    Brand.findByPk(req.params.id)
    .then(foundBrand => ResponseFactory.createSuccessResponse(res, foundBrand))
    .catch(brandError => ResponseFactory.createInternalServerResponse(res, brandError));
  }

  updateBrand(req, res){
    Brand.update(req.body)
    .then(updatedBrand => ResponseFactory.createSuccessResponse(res, updatedBrand))
    .catch(brandError => ResponseFactory.createInternalServerResponse(res, brandError));
  }

  deleteBrand(req, res){
    Brand.destroy(req.params.id)
    .then(deletedBrand => ResponseFactory.createSuccessResponse(res, deletedBrand))
    .catch(brandError => ResponseFactory.createInternalServerResponse(res, brandError))
  }

}

module.exports = BrandController;