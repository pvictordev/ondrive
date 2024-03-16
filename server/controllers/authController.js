// authController.js
const User = require("../models/userModel");

exports.signin = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const user = new User({ fullName, email, password });
    await user.save();
    res.status(201).json({
      message: "User created successfully",
      success: true,
      redirect: "/login",
    });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    res.status(200).json({
      success: true,
      message: "Login Successful",
      redirect: "/",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
