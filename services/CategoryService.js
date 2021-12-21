import { CategoryDao } from "../models";
// import CategoryDao from "../models/CategoryDao";

const ListCategories = async () => {
  return CategoryDao.ListCategories();
};

const AddCategories = async (name) => {
  const categories = await CategoryDao.AddCategories(name);
};

export default { ListCategories, AddCategories };
