const express = require('express');
const { route } = require('express/lib/router');
const router = express.Router();

const userRouter = require('./userRouter');
const ProductRouter = require('./ProductRouter');

route.user('/users', userRouter);
route.use('/products', ProductRouter);

module.exports = router;
