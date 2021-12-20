const productDao = require('../models/productDao')

const getCategory = async () => {
return await productDao.getCategory()
}
const getCoffeeList = async () => {
return await productDao.getCoffeeList()
}

const getCoffeeDetail = async () => {
  return await productDao.getCoffeeDetail()
  }

  module.exports={getCategory, getCoffeeList, getCoffeeDetail}