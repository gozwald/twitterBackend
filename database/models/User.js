const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, min: 2, max: 50, required: true },
    email: { type: String, min: 8, max: 100, required: true, unique: true },
    password: { type: String, required: true },
    tweets: [{ type: Schema.Types.ObjectId, ref: 'Tweets' }],
})

const User = mongoose.model('User', userSchema);

module.exports = User;