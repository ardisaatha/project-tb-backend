const { pasiens, tb_record, kelurahan } = require("../models");

// mencari data sesuai username
const getAllPasien = async () => {
  const find = tb_record.findAll({
    include: {
      model: pasiens,
    },
    // include: {
    //   model: fasyankes,
    // },
  });
  return find;
};

const getPasienById = async (id) => {
  const find = await pasiens.findByPk(id, {
    include: [
      {
        model: tb_record,
      },
    ],
  });
  return find;
};

const getPasienByIdKel = async (kelurahan_pasien) => {
  const find = await pasiens.findAll({
    where: {
      kelurahan_pasien,
    },

    include: [
      {
        model: tb_record,
      },
      {
        model: kelurahan,
      },
    ],
  });
  return find;
};

module.exports = { getAllPasien, getPasienById, getPasienByIdKel };
