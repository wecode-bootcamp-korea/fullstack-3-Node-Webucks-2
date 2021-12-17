// const { PrismaClient } = require("@prisma/client");
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const ListProducts = async (req, res) => {
  try {
    const productList = await prisma.$queryRaw`
        select * from products;`;

    return res.json({ productList });
  } catch (err) {
    console.log(err);

    return res.status(500).json({ message: err.message });
  }
};

const AddProducts = async (req, res) => {
  try {
    const { korean_name, english_name, category_id } = req.body;

    console.log("Korean Name: ", korean_name, "English Name: ", english_name);

    const createdProduct = await prisma.$queryRaw`
    insert into products (korean_name, english_name, category_id) values (${korean_name}, ${english_name}, ${category_id});`;

    return res.status(201).json({ message: "CREATED" });
  } catch (err) {
    console.log(err);

    return res.status(500).json({ message: err.message });
  }
};

// module.exports = { ListProducts, AddProducts };
export { ListProducts, AddProducts };
