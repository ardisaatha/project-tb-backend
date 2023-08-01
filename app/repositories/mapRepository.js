const {
  pasiens,
  pasienb,
  kelurahan,
  sequelize,
  Sequelize,
} = require("../models");

// mencari data sesuai username
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
        model: pasienb,
      },
    ],
  });
  return find;
};

module.exports = { mapping, mapId };
