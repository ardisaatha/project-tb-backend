const { Op } = require("sequelize");
const { users } = require("../models");

// mengambil semua user
const findAllUser = () => {
  const find = users.findAll({
    where: {
      [Op.not]: [
        {role: "admin"}
      ]
    }
  })
  return find
};

// membuat akun baru
const createUser = (newUser) => {
  return users.create(newUser);
};

//   memngambil akun berdasarkan id
const findUserById = (id) => {
  const find = users.findOne({
    where: {
      id,
    },
  });
  return find;
};

//   edit akun
const updateUser = async (reqBody, id) => {
  return await users.update(reqBody, { where: { id } });
};

//   hapus akun
const deleteUser = async (id) => {
  return await users.destroy({ where: { id } });
};

module.exports = { findAllUser, createUser, updateUser, deleteUser, findUserById };
