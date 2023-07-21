const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const httpStatus = require("http-status");
const ApiError = require("../../utils/ApiError");
const authRepository = require("../repositories/authRepository");
const { JWT_SIGNATURE_KEY } = require("../../config/application");

const createToken = (users) => {
  return jwt.sign(
    {
      id: users.id,
      username: users.username,
      password: users.password,
      role: users.role,
    },
    JWT_SIGNATURE_KEY
  );
};

const verifyPassword = (password, encryptedPassword) => {
  return bcrypt.compareSync(password, encryptedPassword);
};

const login = async (reqBody) => {
  const { username, password } = reqBody;
  const user = await authRepository.findUser(username);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "username not found");
  }
  const isPassword = verifyPassword(password, user.password);
  if (user && isPassword) {
    const accessToken = createToken(user);
    return {
      username: user.username,
      role: user.role,
      accessToken,
    };
  } else {
    throw new ApiError(httpStatus.BAD_REQUEST, "incorect password");
  }
};

const loginAdmin = async (reqBody) => {
  const { username, password } = reqBody;
  const user = await authRepository.findUser(username);

  // check user
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "user not found");
  }

  const isPasswordCorrect = verifyPassword(password, user.password);
  if (user && isPasswordCorrect) {
    if (user.role === "admin") {
      const accessToken = createToken(user);
      return {
        id: user.id,
        username: user.username,
        role: user.role,
        accessToken,
      };
    } else {
      throw new ApiError(
        httpStatus.BAD_REQUEST, "Only admin can access this page"
      )
    }
  } else {
    throw new ApiError(
      httpStatus.BAD_REQUEST, "Incorrect Password"
    )
  }
};

module.exports = { login, loginAdmin };
