const prisma = require('../prisma');

const getAllProducts = () => {
	return prisma.products.findMany();
};

module.exports = { getAllProducts };
