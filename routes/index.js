const express = require('express')
const router = express.Router() 

const usersRouter = require('./usersRoute')
const productRouter = require('./productRoute')

router.use('/products', productRouter)
router.use('/users', usersRouter) 

module.exports = router 