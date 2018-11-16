const { check } = require('express-validator/check');

const VALID_ID = check('id').isInt().withMessage('Id non valido');
const VALID_YEAR = check('year').matches(new RegExp(/^[1-9]{4}\/[1-9]{4}$/, 'i')).withMessage('Formato stagione non corretto');
const VALID_SEASON = check('season').trim().isLength({ max: 13 }).isAlpha().withMessage('Stagione non corretta');

module.exports = {
  'findCollectionById': [
    VALID_ID
  ],
  'createCollection': [
    VALID_ID,
    VALID_SEASON,
    VALID_YEAR
  ],
  'updateCollection': [
    VALID_ID,
    VALID_SEASON,
    VALID_YEAR
  ],
  'deleteCollection': [
    VALID_ID
  ]
};