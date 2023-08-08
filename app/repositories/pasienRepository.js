const { Op } = require("sequelize");
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

const filterPasien = async (jenis_kelamin, id_kelurahan, id_fasyankes) => {
  // const filter = await pasienb.findAll({
  //   where: {
  //     [Op.or]: [
  //       {
  //         jenis_kelamin: {
  //           [Op.like]: `%${jenis_kelamin}%`,
  //         },
  //       },
  //       {
  //         id_kelurahan: {
  //           [Op.like]: `${id_kelurahan}`,
  //         },
  //       },
  //     ],
  //   },
  // });
  const whereClause = {};

  if (jenis_kelamin) {
    whereClause.jenis_kelamin = {
      [Op.like]: `%${jenis_kelamin}%`,
    };
  }

  if (id_kelurahan) {
    whereClause.id_kelurahan = {
      [Op.like]: `${id_kelurahan}`,
    };
  }

  if (id_fasyankes) {
    whereClause.id_fasyankes = {
      [Op.like]: `${id_fasyankes}`,
    };
  }

  const filter = await pasienb.findAll({
    where: whereClause,
    include: [
      {
        model: fasyankes,
      },
      {
        model: kelurahan,
      },
    ],
  });
  // console.log(filter)
  return filter;
};

module.exports = {
  getAllPasien,
  getPasienById,
  getPasienByIdKel,
  filterPasien,
};
