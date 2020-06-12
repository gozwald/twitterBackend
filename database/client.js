const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox-szora.mongodb.net/twitter?retryWrites=true&w=majority', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log("connected"));

module.exports = db;
