var express = require("express");
var router = express.Router();
const Post = require("./post");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
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
