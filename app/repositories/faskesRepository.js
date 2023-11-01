const { puskesmas, penilaian } = require("../models");

const getFasyankes = async () => {
  return await puskesmas.findAll()
};

const getPuskById = async (id) => {
  const find = puskesmas.findByPk(id, {
    include: [
      {
        model: penilaian,
      },
    ],
  });
  return find;
};

module.exports = { getFasyankes, getPuskById };
