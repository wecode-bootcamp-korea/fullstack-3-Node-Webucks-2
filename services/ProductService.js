const productDao = require('../models/productDao');

const getCategories = () => {
	return productDao.getCategories();
};

const getProductLists = () => {
	return productDao.getProductLists();
};

const getProductDetail = () => {
	return productDao.getProductDetail();
};

module.exports = { getCategories, getProductLists, getProductDetail };
