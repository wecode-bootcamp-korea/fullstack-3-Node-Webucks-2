import prisma from "../prisma";

const ListProducts = async () => {
  const productList = await prisma.$queryRaw`
      SELECT * FROM products;`;

  return productList;
};

const AddProducts = async (korean_name, english_name, category_id) => {
  const createdProduct = await prisma.$queryRaw`
    INSERT INTO products (korean_name, english_name, category_id) 
    VALUES (${korean_name}, ${english_name}, ${category_id});`;

  return createdProduct;
};

const ProductDetail = async () => {
  const detail = await prisma.$queryRaw`
    SELECT 
      korean_name,
      english_name,
      images.image_url,
      allergies.name 
    FROM products 
    JOIN images ON products.id = images.product_id 
    JOIN products_allergies ON products.id = products_allergies.product_id 
    JOIN allergies ON allergies.id = products_allergies.allergy_id;`;

  return detail;
};

export default { ListProducts, AddProducts, ProductDetail };
