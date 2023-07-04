const jwt = require("jsonwebtoken");
const { users } = require("../app/models");

module.exports = function (req, res, next) {
  // req is an object

  // client will headers called authorization which contains JWT
  try {
    const bearerToken = req.headers.authorization; // basic atuhentication -> bearer authentication
    const bearer = bearerToken.split(" ");
    const token = bearer[1];
    // check if request header authorization sent or not
    if (!token) {
      return res.status(401).json({
        status: "fail",
        meassage: "required authorization",
      });
    }
    const payload = jwt.verify(token, "rahasia");
    console.log("Payload:", payload);
    users.findByPk(payload.id).then((instance) => {
      req.users = instance;
      next();
    });
  } catch {
    res.status(401).json({
      status: "fail",
      message: "Invalid Token",
    });
  }
};
