const  { check } = require('express-validator/check');

const VALID_ID = check('id').isInt().withMessage("Id non valido");
const VALID_HEX = check('hex').matches(new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, 'i'))
  .withMessage('Codice Colore non valido');

module.exports = {
  'findColorById': [
    VALID_ID
  ],
  'createColor': [
    VALID_ID,
    VALID_HEX
  ],
  'updateColor': [
    VALID_ID,
    VALID_HEX
  ],
  'deleteColor': [
    VALID_ID
  ]
};
