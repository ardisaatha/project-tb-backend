// const httpStatus = require("http-status");
// const ApiError = require("../../utils/ApiError");
const pasienRepository = require("../repositories/pasienRepository");

const getAllPasien = async (id) => {
  return await pasienRepository.getAllPasien();
};

const getPasienById = async (id) => {
  const pas = await pasienRepository.getPasienById(id);
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
      return item.dataValues.jenis_kelamin = "laki-laki"
    } if (item.dataValues.jenis_kelamin == "P"){
      return item.dataValues.jenis_kelamin = "Perempuan"
    } else {
      return item.dataValues.jenis_kelamin = "-"
    }
  });
  if (!pas) {
    throw new ApiError(httpStatus.NOT_FOUND, "Locatin Not Found");
  } else {
    return pas;
  }
};

module.exports = { getAllPasien, getPasienById, getPasienByIdKel };
