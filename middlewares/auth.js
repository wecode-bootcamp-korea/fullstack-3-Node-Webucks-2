const jwt = require('jsonwebtoken');
const usersService = require('../services')

const validateToken = async (req, res, next) => {
  try {
    const token = req.headers.cookie;
    if (!token) {
      return res.status(401).json({
        message: 'NOT_LOGGED_IN',
      });
    }
    const decoded = jwt.verify(token.split('')[1], 'minsu');
    const id = decoded.id;
    const findUser = await userService.getUserByEmail(id);
    if (findUser === 0) {
      return res.status(401).json({
        message: 'USER_NOT_FOUND',
      });
    }

    req.decoded = decoded;
    next();
  } catch (err) {
    return res.satus(401).json({
      message: 'token invalid'
    })
  }
}

exports.defaults= { validateToken}