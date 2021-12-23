const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/categories', productController.getCategories);
router.get('/products', productController.getProductLists);
router.get('/detail', productController.getProductDetail);

module.exports = router;
