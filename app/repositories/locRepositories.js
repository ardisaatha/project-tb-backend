const { kelurahan } = require("../models");

const getLocation = () => {
  return kelurahan.findAll();
};

const getLocationId = (id) => {
  const find = kelurahan.findOne({
    where: { id },
  });
  return find
};

module.exports = { 
  getLocation,
  getLocationId 
};
