// database.js
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/ondriveDB")
  .then(() => console.log("Database connected"))
  .catch(() => console.log("Database connection failed"));
