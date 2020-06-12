const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
    user_id: mongoose.ObjectId,
    text: { type: String, min: 3, max: 100, required: true, unique: true },
    date: { type: Date, default: Date.now }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;