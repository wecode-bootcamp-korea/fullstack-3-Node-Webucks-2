import prisma from "../prisma";

const ListProducts = async () => {
  const productList = await prisma.$queryRaw`
      SELECT * FROM products;`;

  return productList;
};

const AddProducts = async (korean_name, english_name, category_id) => {
  const createdProduct = await prisma.$queryRaw`
      INSERT INTO products (korean_name, english_name, category_id) VALUES (${korean_name}, ${english_name}, ${category_id});`;

  return createdProduct;
};

export default { ListProducts, AddProducts };
