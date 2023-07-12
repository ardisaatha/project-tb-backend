const pasienServices = require("../service/pasienServices");

const getAllPasien = (req, res, next) => {
  pasienServices
    .getAllPasien()
    .then((pasien) => {
      res.status(200).json({
        status: "OK",
        message: "Success",
        totalData: pasien.length,
        data: pasien,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const getPasienById = (req, res, next) => {
  pasienServices
    .getPasienById(req.params.id)
    .then((pasien) => {
      res.status(200).json({
        status: "OK",
        message: "Success",
        data: pasien,
        // totalData: pasien.length,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const getPasienByIdKel = (req, res, next) => {
  pasienServices
    .getPasienByIdKel(req.params.id)
    .then((pasien) => {
      res.status(200).json({
        status: "OK",
        message: "Success",
        totalData: pasien.length,
        data: pasien,
      });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = { getAllPasien, getPasienById,getPasienByIdKel };
