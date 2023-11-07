const adminRepository = require("../repositories/adminRepository");
const authRepository = require("../repositories/authRepository");
const ApiError = require("../../utils/ApiError");
const bcrypt = require("bcrypt");
const httpStatus = require("http-status");

const encryptPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

const findAllUser = async () => {
  const user = await adminRepository.findAllUser();
  // const password = bcrypt.user.password
  // console.log(user)
  return {
    user,
  };
};

const createUser = async (reqBody) => {
  const { username, role, password } = reqBody;

  // validasi data yang kosong
  if (!username)
    throw new ApiError(httpStatus.BAD_REQUEST, "username cannot be empty");
  if (!password)
    throw new ApiError(httpStatus.BAD_REQUEST, "password cannot be empty");
  if (!role) throw new ApiError(httpStatus.BAD_REQUEST, "role cannot be empty");

  const user = await authRepository.findUser(username);
  if (user) {
    throw new ApiError(httpStatus.BAD_REQUEST, "username already exists");
  }

  const hash = encryptPassword(password);
  const createUser = {
    username,
    role,
    password: hash,
  };
  // membuat user
  await adminRepository.createUser(createUser);
};

const getUserById = async (id) => {
  const user = await adminRepository.findUserById(id);

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "user not found");
  } else {
    return user;
  }
};

const updateUser = async (reqBody, id) => {
  const { username, password } = reqBody;
  if (!username) {
    const hash = encryptPassword(password);
    const updateUser = {
      password: hash,
    };
    await adminRepository.updateUser(updateUser, id);
    const getNewUser = await adminRepository.findUserById(id);

    return {
      id: getNewUser.id,
      username: getNewUser.username,
      password: getNewUser.password,
      role: getNewUser.role,
      createdAt: getNewUser.createdAt,
      updatedAt: getNewUser.updatedAt,
    };
  } else {
    const user = await authRepository.findUser(username);
    if (user) {
      throw new ApiError(httpStatus.BAD_REQUEST, "username already exists");
    }
    const updateUser = {
      username,
    };
    await adminRepository.updateUser(updateUser, id);
    const getNewUser = await adminRepository.findUserById(id);

    return {
      id: getNewUser.id,
      username: getNewUser.username,
      password: getNewUser.password,
      role: getNewUser.role,
      createdAt: getNewUser.createdAt,
      updatedAt: getNewUser.updatedAt,
    };
  }
};

const deleteUser = async (id) => {
  const user = await adminRepository.findUserById(id);

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "user not found");
  } else {
    return await adminRepository.deleteUser(id);
  }
};

module.exports = {
  findAllUser,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
};
