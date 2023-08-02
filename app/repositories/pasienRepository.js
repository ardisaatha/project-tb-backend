const {
  pasiens,
  tb_record,
  fasyankes,
  kelurahan,
  pasienb,
} = require("../models");

// mencari data sesuai username
const getAllPasien = async () => {
  const find = pasienb.findAll({
    // include: {
    //   model: pasienb,
    // },
    include: [
      {
        model: kelurahan,
      },
      {
        model: fasyankes,
      },
    ],
  });
  return find;
};

const getPasienById = async (id) => {
  const find = await pasienb.findByPk(id, {
    include: [
      {
        model: fasyankes,
      },
      {
        model: kelurahan,
      },
    ],
  });
  return find;
};

const getPasienByIdKel = async (id_kelurahan) => {
  const find = await pasienb.findAll({
    where: {
      id_kelurahan,
    },

    include: [
      {
        model: fasyankes,
      },
      {
        model: kelurahan,
      },
    ],
  });
  return find;
};

module.exports = { getAllPasien, getPasienById, getPasienByIdKel };
