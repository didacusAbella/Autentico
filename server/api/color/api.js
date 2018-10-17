let express = require('express');
let ColorController = require('./controller');
let router = express.Router();
let colorController = new ColorController();
/**
 * Get all colors avaibles
 */
router.get('/', function(req, res) {
  colorController.allColors()
  .then((colors) => {
    res.status(200).json(colors);
  })
  .catch(function(error){
    res.status(400).json({error: "Bad Request Try Again"})
  });
});

/**
 * Get color with specified id
 * @param id the id of the Color
 */
router.get('/:id', function(req, res) {
  colorController.findColorById(req.params.id);
});

module.exports = router;