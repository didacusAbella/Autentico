let Collection = require('./model');
let ResponseFactory = require('../core/responsefactory');

/**
 * Controller for Collection model
 */
class CollectionController {  
 
  allCollections(req, res){
    Collection.findAll()
    .then(collections => ResponseFactory.createSuccessResponse(res, collections))
    .catch(collectionError => ResponseFactory.createInternalServerResponse(res, collectionError));
  }

  
  createCollection(req, res){
    Collection.create({
      id: req.params.id,
      season: req.params.season,
      year: req.params.year
    })
    .then(createdCollection => ResponseFactory.createSuccessResponse(res,createdCollection))
    .catch(collectionError => ResponseFactory.createInternalServerResponse(res, collectionError));
  }

  findCollectionById(req, res){
    Collection.findById(req.params.id)
    .then(foundCollection => ResponseFactory.createSuccessResponse(res, foundCollection))
    .catch(collectionError => ResponseFactory.createInternalServerResponse(res, collectionError));
  }

  updateCollection(req, res){
    Collection.update({
      season: req.params.season,
      year: req.params.year
    }, { where: { id: req.params.id } })
    .then(updatedCollection => ResponseFactory.createSuccessResponse(res, updatedCollection))
    .catch(collectionError => ResponseFactory.createInternalServerResponse(res, collectionError))
  }

  deleteCollection(req, res) {
    Collection.destroy({
      where: { id: req.params.id }
    })
    .then(deletedCollection => ResponseFactory.createSuccessResponse(res, deletedCollection))
    .catch(collectionError => ResponseFactory.createInternalServerResponse(res, collectionError))
  }
}

module.exports = CollectionController;