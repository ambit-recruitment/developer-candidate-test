const express = require("express");
const app = express();

const cors = require("cors");

const loadDocs = require("./loadDocs");
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

const TEMPLATE_FILE = "everyone.hbs";

const loadTemplate = async (templateFile = TEMPLATE_FILE) => {
  const templateData = await fsPromises.readFile(templateFile, "utf8");
  return handlebars.compile(templateData);
};

const handler = async (req, res) => {
  const queryParam = generateQueryParam(req.path);
  const docs = await loadDocs(queryParam);
  const template = await loadTemplate();
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

app.get("/api", cors(), async (req, res) => {
  const docs = await loadDocs({});
  res.json({ people: docs });
});

module.exports = app;
