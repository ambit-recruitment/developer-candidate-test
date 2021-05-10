const fsPromises = require("fs").promises;
const handlebars = require("handlebars");

const TEMPLATE_FILE = "everyone.hbs";

const loadTemplate = async (templateFile = TEMPLATE_FILE) => {
  const templateData = await fsPromises.readFile(templateFile, "utf8");
  return handlebars.compile(templateData);
};

module.exports = loadTemplate;
