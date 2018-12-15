let express = require('express');
let CollectionController = require('../controllers/collection');
let validateRequest = require('../helpers/validator');
let CollectionRules = require('../rules/collection');
let router = express.Router();
let collectionController = new CollectionController();


router.get('/', collectionController.allCollections);

router.get('/:id', CollectionRules['findCollectionById'], validateRequest, collectionController.findCollectionById);

router.post('/:id', CollectionRules['createCollection'], validateRequest, collectionController.createCollection);

router.put('/:id', CollectionRules['updateCollection'], validateRequest, collectionController.updateCollection);

router.delete('/:id', CollectionRules['deleteCollection'], validateRequest, collectionController.deleteCollection);

module.exports = router;