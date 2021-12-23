const productsDao = require("../models/productsDao");

const productList = async () => {
  const coffeeList = await productsDao.getProduct();

  // if (!coffeeList) {
  //     const error = new Error('COFFEELIST_NOT_EXIST') //
  //     error.statusCode = 404

  //     throw error
  // } // 커피리스트가 업으면 빈 배열을 담기 때문이다.
  return coffeeList;
};

const getDetail = async () => {
  const pDetail = await productsDao.getDetail();

  if (!pDetail) {
    const error = new Error("INVALID_PRODUCT");
    error.statusCode = 400;

    throw error;
  }

  return pDetail;
};

const getCategory = async () => {
  const cateDetail = await productsDao.getCategory();

  if (!cateDetail) {
    const error = new Error("INVALID_CATEGORY");
    error.statusCode = 400;

    throw error;
  }

  return cateDetail;
};

module.exports = { productList, getDetail, getCategory };
