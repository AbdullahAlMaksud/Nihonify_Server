const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

dbConnect();

const app = express();

//Middleware
app.use(express.json());

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

//Start Server
const PORT = process.env.PORT || 7002;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

//Routes
app.get("/", (req, res) => {
  res.send("Running Server of Nihonify!");
});
