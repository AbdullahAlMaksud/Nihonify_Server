const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const router = express.Router();

//Only admin can access this route
router.get("/admin", verifyToken, (req, res) => {
  res.json({ message: "Welcome to the admin" });
});
//Only user can access this route
router.get("/manager", verifyToken, (req, res) => {
  res.json({ message: "Welcome to the Manager" });
});

//All can access this route
router.get("/user", verifyToken, (req, res) => {
  res.json({ message: "Welcome to the User" });
});

module.exports = router;
