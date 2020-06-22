const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bodySchema = new Schema({
    innerHTML: String,
    id: Number
});

const Body = mongoose.model('Body', bodySchema);

module.exports = Body;