const { pasiens, kelurahan, sequelize, Sequelize } = require("../models");

// mencari data sesuai username
const mapping = async () => {
  const find = kelurahan.findAll({
    attributes: [
      "id",
      "nama_kelurahan",
      [Sequelize.fn("COUNT", Sequelize.col("pasiens.id")), "jumlah_pasien"],
    ],
    include: [
      {
        model: pasiens,
        attributes: [],
      },
    ],
    group: ["kelurahan.id"],
  });
  return find;
};

const mapId = async (id) => {
  const find = await kelurahan.findByPk(id,{
    include: [
      {
        model: pasiens,
      },
    ],
  });
  return find
};

module.exports = { mapping, mapId };
