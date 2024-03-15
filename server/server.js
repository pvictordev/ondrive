// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

app.use(cors());

let users = [];

// Sign in endpoint
app.post("/signin", (req, res) => {
  const { fullName, email, password } = req.body;
  users.push({ fullName, email, password });
  res.json({
    users: users,
    success: true,
    message: "user created successful",
    redirect: "/login",
  });
});

// Login endpoint
app.get("/login", (req, res) => {
  const { email, password } = req.body;

  // Check if credentials match
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
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

console.log(users);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
