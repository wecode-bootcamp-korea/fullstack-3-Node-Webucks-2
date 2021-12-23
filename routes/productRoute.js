const express = require('express')
const router = express.Router()

const productController = require('../controllers/productController') 


router.get('/categories', productController.getCategory)
router.get('', productController.getCoffeeList) 
router.get('/detail', productController.getCoffeeDetail)

module.exports = router 