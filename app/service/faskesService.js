const faskesRepository = require("../repositories/faskesRepository");
const ApiError = require("../../utils/ApiError");
const httpStatus = require("http-status");

const getFasyankes = async () => {
  return await faskesRepository.getFasyankes();
};

const getFasyankesId = async (id) => {
  const cases = await faskesRepository.getFasyankesId(id);
  if (!cases) {
    throw new ApiError(httpStatus.NOT_FOUND, "Fasyankes Not Found");
  } else {
    return cases;
  }
};

module.exports = { getFasyankes, getFasyankesId };
