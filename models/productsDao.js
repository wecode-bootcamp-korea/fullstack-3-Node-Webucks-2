const prisma = require("./index");

const getProductList = async () => {
  const products = await prisma.$queryRaw`
    SELECT 
      id,korean_name,english_name
    FROM 
      products;
  `;
  console.log(products);
  return products;
};

const getProductDetail = async () => {
  const detail = await prisma.$queryRaw`
    SELECT
      products.id, 
      products.korean_name,
      products.english_name, 
      images.image_url
      from products
    JOIN 
      images ON products.id = images.product_id
    WHERE 
      products.id = 2;
    `;

  const allergies = await prisma.$queryRaw`
    SELECT 
      allergies.name
    FROM 
      allergies
    JOIN 
      product_allergies ON allergies.id = product_allergies.allergy_id
    JOIN 
      products ON products.id = product_allergies.product_id
    WHERE 
      products.id = 2;
    `;

  return { detail, allergies };
};

const getCategory = async () => {
  const categories = await prisma.$queryRaw`
    SELECT 
      id, name 
    FROM 
      categories
    `;
  return categories;
};

module.exports = { getProductList, getProductDetail, getCategory };
