const express = require("express");
const dotenv = require("dotenv").config({ path: ".env" });
const dbConnect = require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

dbConnect();

const app = express();
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// Root Route
app.get("/", (req, res) => {
  res.send("Nihonify Server is running...");
});

const PORT = process.env.PORT || 7002;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
