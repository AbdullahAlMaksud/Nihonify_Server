const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const authorizedRoles = require("../middlewares/roleMiddleware");
const router = express.Router();

//Only admin can access this route
router.get("/admin", verifyToken, authorizedRoles("admin"), (req, res) => {
  res.json({ message: "Welcome to the admin" });
});

//Only user can access this route
router.get(
  "/user",
  verifyToken,
  authorizedRoles("admin", "user"),
  (req, res) => {
    res.json({ message: "Welcome to the Manager" });
    console.log(req.body);
    res.send("Request received");
  }
);

//All can access this route
router.get("/all", verifyToken, (req, res) => {
  res.json({ message: "Welcome to the User" });
});

module.exports = router;
