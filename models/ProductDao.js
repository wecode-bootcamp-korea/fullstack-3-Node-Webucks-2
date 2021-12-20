import prisma from "../prisma";

const ListProducts = async () => {
  console.log(ListProducts);
  const productList = await prisma.$queryRaw`
          SELECT * FROM products;`;

  return productList;
};

const AddProducts = async (req, res) => {
  const { korean_name, english_name, category_id } = req.body;

  console.log("Korean Name: ", korean_name, "English Name: ", english_name);

  const createdProduct = await prisma.$queryRaw`
      insert into products (korean_name, english_name, category_id) values (${korean_name}, ${english_name}, ${category_id});`;

  return createdProduct;
};

export default { ListProducts, AddProducts };
