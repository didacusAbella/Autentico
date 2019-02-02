let express = require('express');
let StatisticController = require("../controllers/statistic");
let router = express.Router();
let statisticController = new StatisticController();

router.get('/', statisticController.extractStatistics);

module.exports = router;