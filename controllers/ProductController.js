import { ProductService } from "../services";

const ListProducts = async (req, res) => {
  try {
    const products = await ProductService.ListProducts();

    res.status(201).json({
      message: "SUCCESS",
      data: products,
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({ message: err.message });
  }
};

const AddProducts = async (req, res) => {
  try {
    const { korean_name, english_name, category_id } = req.body;

    const products = await ProductService.AddProducts(
      korean_name,
      english_name,
      category_id
    );

    return res.status(201).json({ message: "CREATED" });
  } catch (err) {
    console.log(err);

    return res.status(500).json({ message: err.message });
  }
};

export default { ListProducts, AddProducts };
