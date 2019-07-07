require("dotenv").config();

const db = require("mysql");

var connection = db.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  user: process.env.DB_USER
});

connection.connect(function(error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Connected!:)");
  }
});
module.exports = connection;
