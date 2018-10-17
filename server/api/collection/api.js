let express = require('express');
let CollectionController = require('./controller');
let router = express.Router();
let collectionController = new CollectionController();
/**
 * Get all Collections avaibles
 */
router.get('/', function(req, res) {
  collectionController.allCollections()
  .then((collections) => {
    res.status(200).json(collections);
  })
  .catch(function(error){
    res.status(400).json({error: "Bad Request Try Again"})
  });
});

/**
 * Get collection with specified id
 * @param id the id of the collection
 */
router.get('/:id', function(req, res) {
  collectionController.findCollectionById(req.params.id);
});

module.exports = router;