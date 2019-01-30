const { check } = require('express-validator/check');

const VALID_ID = check('id').isAlphanumeric().isLength( { max: 4, min: 4}).withMessage('Id non valido');
const VALID_NAME = check('name').isAlpha().not().isEmpty().withMessage('Formato nome non corretto');
const VALID_DESCRIPTION = check('description').isLength({ max: 100}).withMessage("Descrizione massimo di 100 caratteri");
const VALID_DEFECT = check('defect').isBoolean().withMessage('Formato Difetti non valido');
const VALID_BRAND = check('brand_fk').isInt('Id brand non valido');
const VALID_COLLECTION = check('collection_fk').isInt().withMessage('Id Collezione non valido');

module.exports = {
  'findClothingById': [
    VALID_ID
  ],
  'createClothing': [
    VALID_NAME,
    VALID_DESCRIPTION,
    VALID_DEFECT
  ],
  'updateClothing': [
    VALID_ID,
    VALID_NAME,
    VALID_DESCRIPTION,
    VALID_DEFECT,
    VALID_BRAND,
    VALID_COLLECTION
  ],
  'deleteClothing': [
    VALID_ID
  ]
};