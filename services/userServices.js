const userDao = require('../models/UserDao');
const bcrypt = require('bcrypt');

const signUp = async (email, password, username) => {
  const [user] = await userDao.getUserByEmail(email);

  if (user) {
    const error = new Error('ID ALEADY EXISTS');
    error.statusCode = 400;

    throw error;
  } else {
    const createUser = userDao.signUp(email, password, username);

    return createUser;
  }
};

const signIn = async (email, password) => {
  const [user] = await userDao.getUserByEmail(email);
  const same = bcrypt.compareSync(password, user.password);

  if (!user) {
    const error = new Error('INVALID_USER');
    error.statusCode = 400;

    throw error;
  }

  if (!same) {
    console.log(user.password, same);
    const error = new Error('INVALID_USER');
    error.statusCode = 400;

    throw error;
  }

  const token = user.id;

  return token;
};

module.exports = { signUp, signIn };
