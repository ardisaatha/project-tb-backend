const {
  pasiens,
  tb_record,
} = require("../models");

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
  const find = await tb_record.findByPk(id, {
    include: [
      {
        model: pasiens,
      },
    ],
  });
  return find;
};

module.exports = { getAllPasien, getPasienById };
