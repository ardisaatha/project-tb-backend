const faskesRepository = require("../repositories/faskesRepository");
const ApiError = require("../../utils/ApiError");
const httpStatus = require("http-status");

const getFasyankes = async () => {
  return await faskesRepository.getFasyankes();
};

const getPuskById = async (id) => {
  const loc = await faskesRepository.getPuskById(id);
  if (!loc) {
    throw new ApiError(httpStatus.NOT_FOUND, "puskesmas Not Found");
  }
  if (!loc.penilaians || loc.penilaians.length === 0) {
    throw new ApiError(httpStatus.BAD_REQUEST, `Puskesmas ${loc.nama_pusk} Belum Di Nilai`);
  } else {
    return loc;
  }
};

module.exports = { getFasyankes, getPuskById };
