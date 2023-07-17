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

const getAllUser = (req, res, next) => {
  authService
    .findAllUser()
    .then((user) => {
      res.status(200).json({
        status: "OK",
        message: "Success",
        // totalData: cases.length,
        data: user,
      });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = { login, getAllUser };
