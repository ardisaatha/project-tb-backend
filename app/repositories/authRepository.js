const { users } = require("../models");

// mencari data sesuai username
const findUser = (username) => {
  const find = users.findOne({
    where: {
      username,
    },
  });
  return find;
};

const findAllUser = () => {
  return users.findAll();
};

module.exports = { findUser, findAllUser };
