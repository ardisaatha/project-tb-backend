const faskesService = require("../service/faskesService");

const getFasyankes = (req, res, next) => {
  faskesService
    .getFasyankes()
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

const getFasyankesId = (req, res, next) => {
  faskesService
    .getFasyankesId(req.params.id)
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

module.exports = { getFasyankes, getFasyankesId };
