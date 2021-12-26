import prisma from "../prisma";

const ListCategories = async () => {
  const categoryList = await prisma.$queryRaw`
    SELECT * FROM categories;`;

  return categoryList;
};

const AddCategories = async (name) => {
  const createdCategory = await prisma.$queryRaw`
    INSERT INTO categories (name) values (${name});`;

  return createdCategory;
};

export default { ListCategories, AddCategories };
