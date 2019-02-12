const { check } = require('express-validator/check');

const VALID_ID = check('id').isInt().withMessage('Id non valido');
const VALID_NAME = check('name').matches(/^[^-\s][a-zA-Z0-9_\s-]+$/).isLength({ max: 20 }).withMessage('Nome Brand solo caratteri');

module.exports = {
  'findBrandById': [
    VALID_ID
  ],
  'createBrand': [
    VALID_NAME
  ],
  'updateBrand': [
    VALID_ID,
    VALID_NAME
  ],
  'deleteBrand': [
    VALID_ID
  ]
};

