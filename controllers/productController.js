const productService = require('../services/productService');

const getCategories = async (req, res) => {
	try {
		const categories = await productService.getCategories();

		return res.status(201).json({
			message: 'SUCCESS',
			data: categories,
		});
	} catch (err) {
		console.log(err);

		return res.status(400).json({ message: err.message });
	}
};

const getProductLists = async (req, res) => {
	try {
		const productLists = await productService.getProductLists();

		return res.status(201).json({
			message: 'SUCCESS',
			data: productLists,
		});
	} catch (err) {
		console.log(err);

		return res.status(400).json({ message: err.message });
	}
};

const getProductDetail = async (req, res) => {
	try {
		const productDetail = await productService.getProductDetail();

		return res.status(201).json({
			message: 'SUCCESS',
			data: productDetail,
		});
	} catch (err) {
		console.log(err);

		return res.status(400).json({ message: err.message });
	}
};

module.exports = { getCategories, getProductLists, getProductDetail };
