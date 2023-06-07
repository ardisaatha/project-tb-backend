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

module.exports = { findUser };
