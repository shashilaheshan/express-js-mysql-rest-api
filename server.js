require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
const mysql = require("mysql");
const connection = require("./db/db");
const route = require("./routes/router");

// parse application/json

app.use("/api", route);

app.listen(3000, () => {
  console.log("server started");
});
