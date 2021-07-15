const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const { token } = req.body;
  if (!token) return res.status(401).json({ message: "Auth Error" });

  try {
    const decoded = jwt.verify(token, "randomString");
    req.user = decoded.user;
    next();
  } catch (e) {
    res.status(500).send({ message: "Invalid Token" });
  }
};
