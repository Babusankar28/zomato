const express = require("express");
const main = require("./config");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./router/router");

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

// Connection
main()
  .then(() => console.log("Database is connected"))
  .catch((err) => console.log(err));
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is running on port : ${port}`);
});
