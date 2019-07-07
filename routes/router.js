const express = require("express");
const routers = express.Router();

const connection = require("../db/db");

routers.get("/users", (req, res) => {
  connection.query("select * from users", (err, result) => {
    if (err) {
      res.status(404).send({ message: "error occured" });
    } else {
      res.status(201).send({ users: result });
    }
  });
});

routers.get("/users/:id", (req, res) => {
  let id = req.params.id;

  connection.query(
    "select * from users where users.id =" + id,
    (error, result) => {
      if (error) {
        res.status(404).send({ message: "error occured" });
      } else {
        res.status(201).send({ users: result });
      }
    }
  );
});
routers.post("/add", (req, res) => {
  var name = req.body.name;
  let email = req.body.email;

  if (name == null) {
    res.send({ message: "name required" });
  } else if (email == null) {
    res.send({ message: "email required" });
  } else {
    connection.query(
      "insert into users(name,email) values ('" + name + "','" + email + "')",
      (error, result) => {
        if (error) {
          res.status(404).send({ message: "error occured" });
        } else {
          res.status(201).send({ users: result });
        }
      }
    );
  }
});
routers.post("/update/:id", (req, res) => {
  var name = req.body.name;
  let email = req.body.email;

  if (name == null) {
    res.send({ message: "name required" });
  } else if (email == null) {
    res.send({ message: "email required" });
  } else {
    connection.query(
      "update users set name='" +
        name +
        "',email='" +
        email +
        "' where users.id='" +
        req.params.id +
        "' ",
      (error, result) => {
        if (error) {
          res.status(404).send({ message: "error occured" });
        } else {
          res.status(201).send({ users: result });
        }
      }
    );
  }
});
routers.get("/delete/:id", (req, res) => {
  connection.query(
    "delete from users where users.id='" + req.params.id + "'",
    (error, result) => {
      if (error) {
        res.status(404).send({ message: "error occured" });
      } else {
        res.status(201).send({ users: result });
      }
    }
  );
});

module.exports = routers;
