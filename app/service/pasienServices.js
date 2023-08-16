const httpStatus = require("http-status");
const ApiError = require("../../utils/ApiError");
const pasienRepository = require("../repositories/pasienRepository");

const getAllPasien = async () => {
  return await pasienRepository.getAllPasien();
};

const getPasienById = async (id) => {
  const pas = await pasienRepository.getPasienById(id);
  if (pas.dataValues.jenis_kelamin == "L") {
    pas.dataValues.jenis_kelamin = "laki-laki";
    return pas;
  }
  if (pas.dataValues.jenis_kelamin == "P") {
    pas.dataValues.jenis_kelamin = "Perempuan";
    return pas;
  }
  if (!pas) {
    throw new ApiError(httpStatus.NOT_FOUND, "Pasien Not Found");
  } else {
    return pas;
  }
};

const getPasienByIdKel = async (id) => {
  const pas = await pasienRepository.getPasienByIdKel(id);
  pas.forEach((item) => {
    if (item.dataValues.jenis_kelamin == "L") {
      return (item.dataValues.jenis_kelamin = "laki-laki");
    }
    if (item.dataValues.jenis_kelamin == "P") {
      return (item.dataValues.jenis_kelamin = "Perempuan");
    } else {
      return (item.dataValues.jenis_kelamin = "-");
    }
  });
  if (!pas) {
    throw new ApiError(httpStatus.NOT_FOUND, "Locatin Not Found");
  } else {
    return pas;
  }
};

const filterPasien = async (filter) => {
  const { tahun, jenis_kelamin, id_kelurahan, id_fasyankes } = filter;
  if (!tahun && !id_kelurahan && !id_fasyankes) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Please enter your filter");
  } else {
    // if(id_kelurahan) {
    //   console.log("ini kelurahan")
    //   return await pasienRepository.filterPasien(id_kelurahan)
    // }
    // // if(id_fasyankes) {
    // //   return await pasienRepository.filterPasien(id_fasyankes)
    // // }
    return await pasienRepository.filterPasien(
      tahun,
      jenis_kelamin,
      id_kelurahan,
      id_fasyankes
    );
  }
};

module.exports = {
  getAllPasien,
  getPasienById,
  getPasienByIdKel,
  filterPasien,
};
