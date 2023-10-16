const mapServices = require("../service/mapServices");

const mapping = (req, res, next) => {
  mapServices
    .mapping()
    .then((pasien) => {
      res.status(200).json({
        status: "OK",
        message: "Success",
        data: pasien,
        // totalData: pasien.length,
      });
      // console.log(pasien)
    })
    .catch((err) => {
      next(err);
    });
};

const mapId = (req, res, next) => {
  mapServices
    .mapId(req.params.id)
    .then((pasien) => {
      res.status(200).json({
        status: "OK",
        message: "Success",
        // totalData: pasien.pasiens.length,
        data: pasien,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const mappingFaskes = (req, res, next) => {
  mapServices
    .mappingFaskes()
    .then((pasien) => {
      res.status(200).json({
        status: "OK",
        message: "Success",
        data: pasien,
        // totalData: pasien.length,
      });
      // console.log(pasien)
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {mapping, mapId, mappingFaskes}
