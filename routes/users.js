var express = require("express");
var router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../database/models/User');
const Tweets = require('../database/models/Tweets');

/* GET users listing. */
router.get("/", function (req, res, next) {
  User.find().then(data => res.json(data)).catch(err => console.log(err))
});

router.post("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/:id/", function (req, res, next) {

  const { id } = req.params;
  User.find({ _id: id }).then(data => res.json(data)).catch(err => console.log(err));
});

router.get("/:id/messages/", function (req, res, next) {
  const { id } = req.params;
  Tweets.find({ user_id: id }).then(data => res.json(data)).catch(err => console.log(err));
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)

  const query = await User.find({ email });
  const user = await query;

  if (user[0].password === password) {
    const payload = { id: user._id };
    const token = jwt.sign(payload, "hellomyfirend123");

    return res.json({ token })
  }

  res.send("fail")

});


module.exports = router;
