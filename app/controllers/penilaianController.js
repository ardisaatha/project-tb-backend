const penilaianService = require("../service/penilaianServices");

const createNilai = (req, res, next) => {
  penilaianService
    .createNilai(req.body)
    .then((penilaian) => {
      res.status(201).json({
        status: "Success",
        message: "Success add new scoring",
        data: penilaian,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const NilaiByIdPusk = (req, res, next) => {
  penilaianService
    .getNilaiByIdPusk(req.params.id)
    .then((nilai) => {
      res.status(200).json({
        status: "OK",
        message: "Success",
        // totalData: pasien.pasiens.length,
        data: nilai,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const updateNilaiByIdPusk = (req, res, next) => {
  penilaianService
    .updateNilaiByIdPusk(req.body, req.params.id)
    .then((nilai) => {
      res.status(200).json({
        status: "OK",
        message: "Success",
        // totalData: pasien.pasiens.length,
        data: nilai,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const deleteNilaiPusk = (req, res, next) => {
  penilaianService
    .deletNilaiPusk(req.params.id)
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "Success Delete Score",
      });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  createNilai,
  NilaiByIdPusk,
  deleteNilaiPusk,
  updateNilaiByIdPusk,
};
