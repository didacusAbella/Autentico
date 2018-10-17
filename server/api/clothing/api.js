let express = require('express');
let ClothingController = require('./controller');
let router = express.Router();
let clothingController = new ClothingController();
/**
 * Get all clothings avaibles
 */
router.get('/', function(req, res) {
  clothingController.allClothings()
  .then((clothings) => {
    res.status(200).json(clothings);
  })
  .catch(function(error){
    res.status(400).json({error: "Bad Request Try Again"})
  });
});

/**
 * Get clothings with specified id
 * @param id the id of the clothing
 */
router.get('/:id', function(req, res) {
  clothingController.findClothingById(req.params.id);
});

module.exports = router;