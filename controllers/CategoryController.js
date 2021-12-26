import CategoryService from "../services/CategoryService";

const ListCategories = async (req, res) => {
  try {
    const categories = await CategoryService.ListCategories();

    return res.status(201).json({
      message: "SUCCESS",
      data: categories,
    });
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: err.message });
  }
};

const AddCategories = async (req, res) => {
  try {
    const { name } = req.body;

    const categories = await CategoryService.AddCategories(name);

    return res.status(201).json({ message: "CREATED" });
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: err.message });
  }
};

export default { ListCategories, AddCategories };
