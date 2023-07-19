const adminServices = require("../service/adminServices");

const getAllUser = (req, res, next) => {
  adminServices
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

const createUser = (req, res, next) => {
  adminServices
    .createUser(req.body)
    .then((user) => {
      res.status(201).json({
        status: "OK",
        message: "Success Register New User",
        data: user,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const updateUser = (req, res, next) => {
  adminServices
    .updateUser(req.body, req.params.id)
    .then((user) => {
      res.status(200).json({
        status: "Success",
        message: "Success Update Profile",
        data: user,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const deleteUser = (req, res, next) => {
  adminServices
    .deleteUser(req.params.id)
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "User Deleted",
      });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = { getAllUser, createUser, updateUser, deleteUser };
