// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Cors
app.use(cors());

// Mock user data
const admin = {
  email: "admin@mail",
  password: "123",
};

// Login endpoint
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Check if credentials match
  if (email === admin.email && password === admin.password) {
    // Successful authentication
    res.json({
      success: true,
      message: "Authentication successful",
      redirect: "/",
    });
  } else {
    // Authentication failed
    res.status(401).json({ success: false, message: "Authentication failed" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
