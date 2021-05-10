const Datastore = require("nedb");
const db = new Datastore({
  filename: "db.json",
  autoload: true,
});
const findPromise = (queryParam) => {
  return new Promise((resolve, reject) => {
    db.find(queryParam, {}, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

module.exports = findPromise;
