const mongoose = require('mongoose');
mongoose.connect(, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log("connected"));

module.exports = db;
