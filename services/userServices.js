const bcrypt = require("bcrypt");

const userDao = require("../models/userDao");

// bcrypt hashed 코드와 비교
function compare(reqPassword, dbPassword) {
  const isSame = bcrypt.compareSync(reqPassword, dbPassword);
  return isSame;
}

const signIn = async (email, password) => {
  const user = await userDao.getUserByEmail(email);
  console.log("user in service: ", user);

  // user 정보가 존재하지 않는 경우
  if (!user) {
    const error = new Error("INVALID_USER");
    error.statusCode = 400;

    throw error;
  }

  // 비밀번호가 다를 경우
  if (!compare(password, user.password)) {
    const error = new Error("INVALID_USER");
    error.statusCode = 400;

    throw error;
  }

  return user;
};

// 회원 가입
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
