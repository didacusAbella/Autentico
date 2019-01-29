const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

if (!fs.existsSync("./ext/authentic.db")) {
  let dbPath = path.resolve(`${__dirname}/authentic.db`);
  let dumpPath = path.resolve(`${__dirname}/dump.sql`);
  exec(`sqlite3 ${dbPath} < ${dumpPath}`);
  console.log("Database created with success!");
}