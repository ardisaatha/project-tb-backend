const authService = require("../service/authServices");

const login = (req, res, next) => {
  authService
    .login(req.body)
    .then((user) => {
      res.status(200).json({
        status: "OK",
        message: "Success Login",
        data: user,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const loginAdmin = (req, res, next) => {
  authService
    .loginAdmin(req.body)
    .then((user) => {
      res.status(200).json({
        status: "OK",
        message: "Success Login Admin",
        data: user,
      });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = { login, loginAdmin };
