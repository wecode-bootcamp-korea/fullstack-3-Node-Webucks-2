const productService = require("../services/productServices");

const getList = async (req, res) => {
  try {
    const finalList = await productService.productList();

    return res.status(200).json({ data: finalList });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const finalpDetail = await productService.productDetail();

    return res.status(200).json({ data: finalpDetail });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const getCategory = async (req, res) => {
  try {
    const finalcDetail = await productService.categoryDetail();

    return res.status(200).json({ data: finalcDetail });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = { getList, getProduct, getCategory };
