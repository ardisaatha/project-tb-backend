const { penilaians, puskesmas } = require("../models");

const createNilai = async (data) => {
  return await penilaians.create(data);
};

const puskId = async (id) => {
  const find = await puskesmas.findByPk(id, {
    include: [
      {
        model: survei,
      },
      {
        model: pasienb,
      },
    ],
  });
  return find;
};

module.exports = { createNilai };
