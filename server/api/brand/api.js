let express = require('express');
let BrandController = require('./controller');
let router = express.Router();
let brandController = new BrandController();
/**
 * Get all brand avaibles
 */
router.get('/', function(req, res) {
  brandController.allBrand()
  .then((brands) => {
    res.status(200).json(brands);
  })
  .catch(function(error){
    res.status(400).json({error: "Bad Request Try Again"})
  });
});

/**
 * Get brand with specified id
 * @param id the id of the Brand
 */
router.get('/:id', function(req, res) {
  brandController.findBrandById(req.params.id)
  .then(brand => {
    res.status(200).json(brand);
  })
  .catch(function(error){
    console.error(error);
    res.status(400).json({ error: "Bad Request"})
  });
});

module.exports = router;