const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const Post = require("./post");

const mongoDB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/twitter?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("connected to DB!");
});

// MONGO_DB = mongodb+srv://m001-student:m001-mongodb-basics@sandbox-szora.mongodb.net/test?retryWrites=true&w=majority
