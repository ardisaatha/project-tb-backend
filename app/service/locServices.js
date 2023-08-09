const locRepository = require("../repositories/locRepositories");
const ApiError = require("../../utils/ApiError");
const httpStatus = require("http-status");

const getAllLocation = async () => {
  return await locRepository.getLocation();
};

const getLocationById = async (id) => {
  const cases = await locRepository.getLocationId(id);
  if (!cases) {
    throw new ApiError(httpStatus.NOT_FOUND, "Kelurahan Not Found");
  } else {
    return cases;
  }
};

module.exports = { 
  getAllLocation,
  getLocationById
};
