import { ProductDao } from "../models";

const ListProducts = async () => {
  console.log(ProductDao);
  return ProductDao.ListProducts();
};

const AddProducts = async () => {
  return ProductDao.AddProducts();
};

export default { ListProducts, AddProducts };
