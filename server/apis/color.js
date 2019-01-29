let express = require('express');
let ColorController = require('../controllers/color');
let validateRequest = require('../helpers/validator');
let ColorRules = require('../rules/color');
let router = express.Router();
let colorController = new ColorController();


router.get('/', colorController.allColors);

router.get('/:id', ColorRules['findColorById'], validateRequest, colorController.findColorById);

router.post('/', ColorRules['createColor'], validateRequest, colorController.createColor);

router.put('/:id', ColorRules['updateColor'], validateRequest, colorController.updateColor);

router.delete('/:id', ColorRules['deleteColor'], validateRequest, colorController.deleteColor);

module.exports = router;