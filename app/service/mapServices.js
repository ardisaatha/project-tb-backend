// const httpStatus = require("http-status");
// const ApiError = require("../../utils/ApiError");
const mapRepository = require("../repositories/mapRepository");

const mapping = async () => {
  return await mapRepository.mapping();
};

const mapId = async (id) => {
  const loc = await mapRepository.mapId(id);
  if (!loc) {
    throw new ApiError(httpStatus.NOT_FOUND, "Locatin Not Found");
  } else {
    return loc;
  }
};

const mappingFaskes = async () => {
  return await mapRepository.mappingFaskes();
};

module.exports = { mapping, mapId, mappingFaskes };
