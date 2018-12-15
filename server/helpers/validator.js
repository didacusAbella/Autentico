const { validationResult } = require('express-validator/check');

function validateRequest(req, res, next){
  let errors = validationResult(req);
  if(!errors.isEmpty()){
    res.status(400).json({ errors: errors.array() });
    next(new Error('Bad Request'));
  }else {
    next();
  }
}

module.exports = validateRequest;