let express = require('express');
let BrandController = require('../controllers/brand');
let validateRequest = require('../helpers/validator');
let BrandRules = require('../rules/brand');
let router = express.Router();
let brandController = new BrandController();


router.get('/', brandController.allBrand);

router.get('/:id', BrandRules['findBrandById'], validateRequest, brandController.findBrandById);

router.post('/:id', BrandRules['createBrand'], validateRequest, brandController.createBrand);

router.put('/:id', BrandRules['updateBrand'], validateRequest, brandController.updateBrand);

router.delete('/:id', BrandRules['deleteBrand'], validateRequest, brandController.deleteBrand);

module.exports = router;