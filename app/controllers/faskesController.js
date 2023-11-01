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

const getPuskById = (req, res, next) => {
  faskesService
    .getPuskById(req.params.id)
    .then((penilaian) => {
      res.status(200).json({
        status: "OK",
        message: "Success",
        // totalData: pasien.pasiens.length,
        data: penilaian,
      });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = { getFasyankes, getPuskById };
