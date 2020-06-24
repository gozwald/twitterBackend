var express = require("express");
var router = express.Router();
const Body = require('../database/models/Body');


router.post('/', (req, res) => {
    const { innerHTML, id } = req.body;
    console.log(innerHTML)
    Body.create({ innerHTML, id });
    res.send("hello")
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Body.find({ id })
        .then(data => res.json(data))
        .catch(err => res.send('err'))
})

module.exports = router;