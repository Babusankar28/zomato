const mongoose = require("mongoose");
require("dotenv").config();
const database = process.env.DATABASE;

const main = async () => {
  await mongoose.connect(database);
};

module.exports = main;
