const locService = require("../service/locServices");

const getAllLocation = (req, res, next) => {
  locService
    .getAllLocation()
    .then((cases) => {
      res.status(200).json({
        status: "OK",
        message: "Success",
        totalData: cases.length,
        data: cases,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const getLocationById = (req, res, next) => {
  locService
    .getLocationById(req.params.id)
    .then((cases) => {
      res.status(200).json({
        status: "OK",
        message: "Success",
        totalData: cases.length,
        data: cases,
      });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  getAllLocation,
  getLocationById,
};
