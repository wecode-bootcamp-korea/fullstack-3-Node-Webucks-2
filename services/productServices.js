const ProductDao = require('../models/ProductDao');

const productList = async () => {
  const productList = await ProductDao.getProduct();

  return productList;
};

const categoryList = async () => {
  const categoryList = await ProductDao.getCategory();

  return categoryList;
};

module.exports = { productList, categoryList };
