const { exec } = require("child_process");
const path = require("path");
const db = path.resolve(__dirname, '..', 'ext', 'authentic.db');

class StatisticController {

  extractStatistics(req, res) {
    let command = `sqlite3_analyzer ${db}`;
    exec(command, function(err, stdout, stderr){
      let parse = stdout.split("\n");
      parse.splice(395, parse.length - 395);
      res.json(parse);
    });
  }

 
}

module.exports = StatisticController;