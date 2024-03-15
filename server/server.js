// server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

// mongodb config
mongoose
  .connect("mongodb://localhost:27017/ondriveDB")
  .then(() => console.log("database connected"))
  .catch(() => console.log("database not connected"));

// mongodb schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// create a collection
const User = mongoose.model("users", userSchema);

// middleware to parse the data
app.use(express.json());

//cors
app.use(cors());

// Sign in endpoint
app.post("/signin", async (req, res) => {
  try {
    // get the data from the client
    const { fullName, email, password } = req.body;

    // create a new User object
    const user = new User({ fullName, email, password });

    // save the object in the database
    await user.save();

    res.status(201).json({
      message: "User created successfully",
      success: true,
      //redirect: "/login",
    });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Login endpoint
app.post("/login", (req, res) => {
  const { email, password } = req.body;
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
