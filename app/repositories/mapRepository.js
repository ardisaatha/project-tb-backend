const {
  pasiens,
  pasienb,
  kelurahan,
  puskesmas,
  sequelize,
  survei,
  Sequelize,
} = require("../models");
// const puskesmas = require("../models/puskesmas");

const mapping = async () => {
  const find = kelurahan.findAll({
    attributes: [
      "id",
      "nama_kelurahan",
      [Sequelize.fn("COUNT", Sequelize.col("pasienbs.id")), "jumlah_pasien"],
    ],
    include: [
      {
        model: pasienb,
        attributes: [],
      },
    ],
    group: ["kelurahan.id"],
  });
  return find;
};

const mapId = async (id) => {
  const find = await kelurahan.findByPk(id, {
    include: [
      {
        model:survei
      },
      {
        model: pasienb,
      },
    ],
  });
  return find;
};

const mappingFaskes = async () => {
  return await puskesmas.findAll()
};

module.exports = { mapping, mapId, mappingFaskes };
