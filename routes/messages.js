var express = require("express");
var router = express.Router();
const Tweets = require("../database/models/Tweets");

/* GET users listing. */
router.get("/", function (req, res, next) {
  Tweets.find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

router.get("/:id/", (req, res) => {
  const { id } = req.params;
  Tweets.find({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

module.exports = router;
