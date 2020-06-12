var express = require("express");
var router = express.Router();
const Tweets = require('../database/models/Tweets');

/* GET users listing. */
router.get("/", function (req, res, next) {
  Tweets.find().then(data => res.json(data)).catch(err => console.log(err))
});

// router.get("/:id", function (req, res, next) {
//   res.send("respond with a resource");
// });

router.get("/test2/", (req, res) => {
  console.log("hello!");
  Post.find({}).then((e) => {
    res.json(e);
  });
});

module.exports = router;
