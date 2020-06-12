const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log("connected"));

console.log(db.tweets.find())

module.exports = db;