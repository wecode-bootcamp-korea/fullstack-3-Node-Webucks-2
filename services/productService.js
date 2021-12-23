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

  //400대로 하나 더 넣어도 될 것. id 위주로 변수가 들어갈 경우에는 400처리로 해서 일치 여부 에러 함수 생성. 

  module.exports={getCategory, getCoffeeList, getCoffeeDetail}