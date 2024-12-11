const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "No Token, Authorization Denied" });
    }

    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decode;
      console.log("Decoded User: ", req.user);
      next();
    } catch (err) {
      res.status(400).json({ message: "Invalid Token" });
    }
  } else {
    return res.status(401).json({ message: "No Token, Authorization Denied" });
  }
};

module.exports = verifyToken;
