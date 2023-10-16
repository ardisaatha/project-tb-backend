const {
  pasiens,
  pasienb,
  kelurahan,
  fasyankes,
  sequelize,
  survei,
  Sequelize,
} = require("../models");

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
  const find = fasyankes.findAll({
    attributes: [
      "id",
      "nama_fasyankes",
      [Sequelize.fn("COUNT", Sequelize.col("pasienbs.id")), "jumlah_pasien"],
    ],
    include: [
      {
        model: pasienb,
        attributes: [],
      },
    ],
    group: ["fasyankes.id"],
  });
  return find;
};

module.exports = { mapping, mapId, mappingFaskes };
