let Color = require('./model');
let ResponseFactory = require('../core/responsefactory');

/**
 * Controller for Color model
 */
class ColorController {  
 
  allColors(req, res){
    Color.findAll()
    .then(colors => ResponseFactory.createSuccessResponse(res, colors))
    .catch(colorError => ResponseFactory.createInternalServerResponse(res, colorError));
  }

  
  createColor(req, res){
    Color.create({
       id: req.params.id,
       hex: req.params.hex
      })
      .then(createdColor => ResponseFactory.createSuccessResponse(res, createdColor))
      .catch(colorError => ResponseFactory.createInternalServerResponse(res, colorError));
  }

  
  findColorById(req, res){
    Color.findById(req.params.id)
    .then(foundColor => ResponseFactory.createSuccessResponse(res, foundColor))
    .catch(colorError => ResponseFactory.createInternalServerResponse(res, colorError));
  }

  updateColor(req, res){
    Color.update({
      hex: req.params.hex
    }, { where: { id: req.params.id } })
    .then(updatedColor => ResponseFactory.createSuccessResponse(res, updatedColor))
    .catch(colorError => ResponseFactory.createInternalServerResponse(res, colorError));
  }

  deleteColor(req, res){
    Color.destroy({
      where: { id: req.params.id }
    })
    .then(deletedColor => ResponseFactory.createSuccessResponse(res, deletedColor))
    .catch(colorError => ResponseFactory.createInternalServerResponse(res, colorError));
  }

}

module.exports = ColorController;