var express = require("express");
var router = express.Router();
const User = require('../database/models/User');

/* GET users listing. */
router.get("/", function (req, res, next) {
  User.find().then(data => res.json(data)).catch(err => console.log(err))
});

router.post("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/id/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/id/messages/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
