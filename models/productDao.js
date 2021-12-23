const prisma = require("./index")

const getCategory = async () => { // 1// 2
  const readcategories = await prisma.$queryRaw`
    SELECT*FROM categories;`
    return readcategories
}

const getCoffeeList = async() => {
  const readcoffeelist =  await prisma.$queryRaw`
    SELECT products.id, korean_name, english_name, category_id , name, image_url 
    FROM products left join categories on products.category_id = categories.id join images on products.id =images.product_id;`
  return readcoffeelist
}

const getCoffeeDetail = async () => { // 1
    // const nutrition = await prisma.$queryRaw`select amount from nutritions;`
    const readdetail = await prisma.$queryRaw`
    SELECT products.id, description ,korean_name, english_name, images.image_url, allergies.name 
    amount, calories, fat, sodium, protein, caffeine FROM products 
    JOIN images ON products.id = images.product_id 
    JOIN product_allergies ON products.id = product_allergies.product_id 
    JOIN allergies ON allergies.id = product_allergies.allergy_id
    JOIN nutritions on products.id = nutritions.product_id;`
    return readdetail
}

module.exports = { getCategory, getCoffeeList, getCoffeeDetail}
