const { locations } = require("../models");

const getLocation = () => {
  return locations.findAll();
};

const getLocationId = (id) => {
  const find = locations.findOne({
    where: { id },
  });
  return find
};

module.exports = { 
  getLocation,
  getLocationId 
};
