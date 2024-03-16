// server.js
const express = require("express");
const cors = require("cors");
const database = require("./config/database");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// server.js
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const app = express();

// // mongodb config
// mongoose
//   .connect("mongodb://localhost:27017/ondriveDB")
//   .then(() => console.log("database connected"))
//   .catch(() => console.log("database not connected"));

// // mongodb schema
// const Schema = mongoose.Schema;

// // user schema
// const userSchema = new Schema({
//   fullName: { type: String, required: true },
//   email: { type: String, required: true },
//   password: { type: String, required: true },
// });

// // create a unique index
// userSchema.index({ email: 1 }, { unique: true });

// // create a collection
// const User = mongoose.model("users", userSchema);

// // middleware to parse the data
// app.use(express.json());

// //cors
// app.use(cors());

// // Sign in endpoint
// app.post("/signin", async (req, res) => {
//   try {
//     // get the data from the client
//     const { fullName, email, password } = req.body;

//     // create a new User object
//     const user = new User({ fullName, email, password });

//     // save the object in the database
//     await user.save();

//     res.status(201).json({
//       message: "User created successfully",
//       success: true,
//       redirect: "/login",
//     });
//   } catch (error) {
//     console.error("Error", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Login endpoint
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }

//     // compare passwords
//     if (user.password !== password) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }

//     // success
//     //res.status(200).json({ message: "Login successful" });
//     res.status(200).json({
//       success: true,
//       message: "Login Successfull",
//       redirect: "/",
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Start server
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
