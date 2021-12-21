import { ProductDao } from "../models";

const ListProducts = async () => {
  return ProductDao.ListProducts();
};

const AddProducts = async (korean_name, english_name, category_id) => {
  const products = await ProductDao.AddProducts(
    korean_name,
    english_name,
    category_id
  );
};

const ProductDetail = async () => {
  return ProductDao.ProductDetail();
};

export default { ListProducts, AddProducts, ProductDetail };
