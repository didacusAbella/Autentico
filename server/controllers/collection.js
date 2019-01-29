let Collection = require('../models/collection');
let ResponseFactory = require('../helpers/responsefactory');

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
      season: req.body.season,
      year: req.body.year
    })
    .then(createdCollection => ResponseFactory.createSuccessResponse(res,createdCollection))
    .catch(collectionError => ResponseFactory.createInternalServerResponse(res, collectionError));
  }

  findCollectionById(req, res){
    Collection.findByPk(req.params.id)
    .then(foundCollection => ResponseFactory.createSuccessResponse(res, foundCollection))
    .catch(collectionError => ResponseFactory.createInternalServerResponse(res, collectionError));
  }

  updateCollection(req, res){
    Collection.update({
      season: req.body.season,
      year: req.body.year
    }, { where: { id: req.body.id } })
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