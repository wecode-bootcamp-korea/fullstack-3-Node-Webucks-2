const productsDao = require('../models/productsDao');

const productList = async () => {
  const coffeeList = await productsDao.getProductList();

  // if (!coffeeList) {
  //     const error = new Error('COFFEELIST_NOT_EXIST') //
  //     error.statusCode = 404

  //     throw error
  // }

  return coffeeList;
};

const productDetail = async () => {
  const pDetail = await productsDao.getProductDetail();

  if (!pDetail) {
    const error = new Error('INVALID_PRODUCT');
    error.statusCode = 400;

    throw error;
  }

  return pDetail;
};

const categoryDetail = async () => {
  const cateDetail = await productsDao.getCategory();

  if (!cateDetail) {
    const error = new Error('INVALID_CATEGORY');
    error.statusCode = 400;

    throw error;
  }

  return cateDetail;
};

module.exports = { productList, productDetail, categoryDetail };
