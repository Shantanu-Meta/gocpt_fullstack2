const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();

app.use(express.json()); // Middleware to parse JSON

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({ message: "incorrect headers" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(403).json({ error: error });
  }
};

module.exports = {
  authMiddleware,
};
