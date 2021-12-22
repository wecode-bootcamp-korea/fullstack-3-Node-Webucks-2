const bcrypt = require("bcrypt");

const userDao = require("../models/userDao");

function compare(reqPassword, dbPassword) {
  const isSame = bcrypt.compareSync(reqPassword, dbPassword);

  return isSame;
}

const signIn = async (email, password) => {
  console.log("email in services: ", email);
  const user = await userDao.getUserByEmail(email);
  console.log("user in service: ", user);

  if (!user) {
    const error = new Error("INVALID_USER");
    error.statusCode = 400;

    throw error;
  }

  if (!compare(password, user.password)) {
    const error = new Error("INVALID_USER");
    error.statusCode = 400;

    throw error;
  }

  return user;
};

const signUp = async (email, password, username, address, phone_number) => {
  const userData = await userDao.getUserByEmail(email);

  if (userData) {
    const error = new Error("USER_ALREADY_EXIST");
    error.statusCode = 400;

    throw error;
  } else {
    return userDao.createUser(email, password, username, address, phone_number);
  }
};

module.exports = { signIn, signUp };
