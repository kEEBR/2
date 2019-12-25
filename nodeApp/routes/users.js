var express = require("express");
var router = express.Router();
var MongoClient = require("mongodb").MongoClient,
  format = require("util").format;
MongoClient.connect("mongodb://127.0.0.1:27017/", function(err, client) {
  if (err) throw err;
  var db = client.db("test");
  router.get("/", function(req, res, next) {
    db.collection("favourites")
      .find()
      .toArray(function(err, result) {
        console.dir(result);
        res.json(result);
      });
  });
  MongoClient.connect("mongodb://127.0.0.1:27017/", function(err, client) {
  router.post("/", function(req, res, next) {
    db.collection("favourites")
      .insert()
      .toArray(function(err, result) {
        console.dir(result);
        res.end(result);
      });
    });
    MongoClient.connect("mongodb://127.0.0.1:27017/", function(err, client) {
    router.delete("/", function(req, res, next) {
      res.end();
    });
  });
});
});
module.exports = router;
