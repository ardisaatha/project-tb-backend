// const httpStatus = require("http-status");
// const ApiError = require("../../utils/ApiError");
const pasienRepository = require("../repositories/pasienRepository");

const getAllPasien = async (id) => {
  return await pasienRepository.getAllPasien();
};

const getPasienById = async (id) => {
  const pas = await pasienRepository.getPasienById(id);
  if (!pas) {
    throw new ApiError(httpStatus.NOT_FOUND, "Locatin Not Found");
  } else {
    return pas;
  }
};

module.exports = { getAllPasien, getPasienById };
