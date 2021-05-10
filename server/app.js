const express = require("express");
const app = express();

const findPromise = require("./db");
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

const handler = async (req, res) => {
  const templateData = await fsPromises.readFile("everyone.hbs", "utf8");
  const template = handlebars.compile(templateData);
  const queryParam = generateQueryParam(req.path);
  const docs = await findPromise(queryParam);
  const rendered = template({
    people: docs,
  });
  res.contentType("text/html");
  res.status(200).send(rendered);
};

const validPaths = [
  "/everyone",
  "/",
  "/male",
  "/female",
  "/under30",
  "/over30",
];
app.get(validPaths, handler);

module.exports = app;
