const express = require("express");
const app = express();
const Datastore = require("nedb");
const db = new Datastore({
  filename: "db.json",
  autoload: true,
});
const fs = require("fs");
const handlebars = require("handlebars");

app.get(["/everyone", "/"], function (req, res) {
  fs.readFile("everyone.hbs", "utf8", (err, data) => {
    const template = handlebars.compile(data);
    db.find({}, {}, (err, docs) => {
      const rendered = template({
        people: docs,
      });
      res.contentType("text/html");
      res.status(200).send(rendered);
    });
  });
});

app.get("/male", function (req, res) {
  fs.readFile("everyone.hbs", "utf8", (err, data) => {
    const template = handlebars.compile(data);
    db.find(
      {
        gender: "male",
      },
      {},
      (err, docs) => {
        const rendered = template({
          people: docs,
        });
        res.contentType("text/html");
        res.status(200).send(rendered);
      }
    );
  });
});

app.get("/female", function (req, res) {
  fs.readFile("everyone.hbs", "utf8", (err, data) => {
    const template = handlebars.compile(data);
    db.find(
      {
        gender: "female",
      },
      {},
      (err, docs) => {
        const rendered = template({
          people: docs,
        });
        res.contentType("text/html");
        res.status(200).send(rendered);
      }
    );
  });
});

app.get("/under30", function (req, res) {
  fs.readFile("everyone.hbs", "utf8", (err, data) => {
    const template = handlebars.compile(data);
    db.find(
      {
        age: {
          $lt: 30,
        },
      },
      {},
      (err, docs) => {
        const rendered = template({
          people: docs,
        });
        res.contentType("text/html");
        res.status(200).send(rendered);
      }
    );
  });
});

app.get("/over30", function (req, res) {
  fs.readFile("everyone.hbs", "utf8", (err, data) => {
    const template = handlebars.compile(data);
    db.find(
      {
        age: {
          $gte: 30,
        },
      },
      {},
      (err, docs) => {
        const rendered = template({
          people: docs,
        });
        res.contentType("text/html");
        res.status(200).send(rendered);
      }
    );
  });
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
