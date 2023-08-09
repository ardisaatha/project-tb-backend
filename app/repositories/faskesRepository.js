const { fasyankes } = require("../models");

const getFasyankes = () => {
  return fasyankes.findAll();
};

const getFasyankesId = (id) => {
  const find = fasyankes.findOne({
    where: { id },
  });
  return find;
};

module.exports = { getFasyankes, getFasyankesId };
