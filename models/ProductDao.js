const prisma = require('./index');

const getCategories = async () => {
	const categories = await prisma.$queryRaw`
    SELECT name FROM categories
  `;

	return categories;
};

const getProductLists = async () => {
	const productLists = await prisma.$queryRaw`
    SELECT korean_name, english_name, images, category_id FROM products
  `;

	return productLists;
};

const getProductDetail = async () => {
	const productDetail = await prisma.$queryRaw`
    SELECT korean_name, english_name, description,  images, product_allergies, nutritions FROM products
  `;

	return productDetail;
};

module.exports = { getCategories, getProductLists, getProductDetail };
