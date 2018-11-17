let express = require('express');
let ClothingController = require('./controller');
let validateRequest = require('../core/utils');
let ClothingRules = require('./rules');
let router = express.Router();
let clothingController = new ClothingController();
/**
 * Get all clothings avaibles
 */
router.get('/', clothingController.allClothings);

router.get('/:id', ClothingRules['findClothingById'], validateRequest, clothingController.findClothingById);

router.post('/:id', ClothingRules['createClothing'], validateRequest, clothingController.createClothing);

router.put('/:id', ClothingRules['updateClothing'], validateRequest, clothingController.updateClothing);

router.delete('/:id', ClothingRules['deleteClothing'], validateRequest, clothingController.deleteClothing);

module.exports = router;