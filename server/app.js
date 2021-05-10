const express = require("express");
const app = express();
const Datastore = require("nedb");
const db = new Datastore({
  filename: "db.json",
  autoload: true,
});
const fsPromises = require("fs").promises;

const handlebars = require("handlebars");

const generateQueryParam = (path) => {
  let queryParam;
  switch (path) {
    case "/male":
      queryParam = {
        gender: "male",
      };
      break;
    case "/female":
      queryParam = {
        gender: "female",
      };
      break;
    case "/under30":
      queryParam = {
        age: {
          $lt: 30,
        },
      };
      break;
    case "/over30":
      queryParam = {
        age: {
          $gte: 30,
        },
      };
      break;
    case "/everyone":
    case "/":
      queryParam = {};
      break;
    default:
      throw new Error("Unsupported query");
  }
  return queryParam;
};

app.get(["/everyone", "/"], async (req, res) => {
  await fsPromises.readFile("everyone.hbs", "utf8").then((data) => {
    const template = handlebars.compile(data);
    const queryParam = generateQueryParam(req.path);
    db.find(queryParam, {}, (err, docs) => {
      const rendered = template({
        people: docs,
      });
      res.contentType("text/html");
      res.status(200).send(rendered);
    });
  });
});

app.get("/male", async (req, res) => {
  await fsPromises.readFile("everyone.hbs", "utf8").then((data) => {
    const template = handlebars.compile(data);
    const queryParam = generateQueryParam(req.path);
    db.find(queryParam, {}, (err, docs) => {
      const rendered = template({
        people: docs,
      });
      res.contentType("text/html");
      res.status(200).send(rendered);
    });
  });
});

app.get("/female", async (req, res) => {
  await fsPromises.readFile("everyone.hbs", "utf8").then((data) => {
    const template = handlebars.compile(data);
    const queryParam = generateQueryParam(req.path);
    db.find(queryParam, {}, (err, docs) => {
      const rendered = template({
        people: docs,
      });
      res.contentType("text/html");
      res.status(200).send(rendered);
    });
  });
});

app.get("/under30", async (req, res) => {
  await fsPromises.readFile("everyone.hbs", "utf8").then((data) => {
    const template = handlebars.compile(data);
    const queryParam = generateQueryParam(req.path);
    db.find(queryParam, {}, (err, docs) => {
      const rendered = template({
        people: docs,
      });
      res.contentType("text/html");
      res.status(200).send(rendered);
    });
  });
});

app.get("/over30", async (req, res) => {
  await fsPromises.readFile("everyone.hbs", "utf8").then((data) => {
    const template = handlebars.compile(data);
    const queryParam = generateQueryParam(req.path);
    db.find(queryParam, {}, (err, docs) => {
      const rendered = template({
        people: docs,
      });
      res.contentType("text/html");
      res.status(200).send(rendered);
    });
  });
});

module.exports = app;
