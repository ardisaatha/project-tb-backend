const { puskesmas } = require("../models");

const getFasyankes = async () => {
  return await puskesmas.findAll()
};

const getFasyankesId = (id) => {
  const find = puskesmas.findOne({
    where: { id },
  });
  return find;
};

module.exports = { getFasyankes, getFasyankesId };
