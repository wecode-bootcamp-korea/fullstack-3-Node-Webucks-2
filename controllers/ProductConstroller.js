const { ProductService } = require('../services');

const getAllProducts = async (req, res, next) => {
	try {
		const products = await ProductService.getAllProducts();
	} catch (err) {
		next(err);
	}
};
