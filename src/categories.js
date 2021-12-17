const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const ListCategories = async (req, res) => {
  try {
    const categoryList = await prisma.$queryRaw`
      select * from categories;`;

    return res.json({ categoryList });
  } catch (err) {
    console.log(err);

    return res.status(500).json({ message: err.message });
  }
};

const AddCategories = async (req, res) => {
  try {
    const { name } = req.body;

    console.log("name: ", name);

    const createdCategory = await prisma.$queryRaw`
    insert into categories(name) values (${name});`;

    return res.status(201).json({ message: "CREATED" });
  } catch (err) {
    console.log(err);

    return res.status(500).json({ message: err.message });
  }
};

module.exports = { ListCategories, AddCategories };
