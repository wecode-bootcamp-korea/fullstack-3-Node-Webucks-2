const { PrismaClient } = require('@prisma/client');
// const { ProductServies } = require('../services/ProductServies');

const prisma = new PrismaClient();

const getProduct = async () => {
  const productList = await prisma.$queryRaw`
    SELECT * FROM products
  `;

  return productList;
};

const getCategory = async () => {
  const categoryList = await prisma.$queryRaw`
    SELECT * FROM categories
  `;

  return categoryList;
};

module.exports = { getProduct, getCategory };
