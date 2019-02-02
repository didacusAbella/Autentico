const { exec } = require("child_process");
const path = require("path");
const db = path.resolve(__dirname, '..', 'ext', 'authentic.db');

class StatisticController {

  extractStatistics(req, res) {
    let command = `sqlite3_analyzer ${db}`;
    exec(command, function(err, stdout, stderr){
      res.json({'results': stdout.split('\n')});
    });
  }

}

module.exports = StatisticController;