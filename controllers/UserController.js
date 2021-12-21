import { UserService } from "../services";

const ListUsers = async (req, res) => {
  try {
    const users = await UserService.ListUsers();

    return res.status(201).json({
      massage: "SUCCESS",
      data: users,
    });
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: err.message });
  }
};

export default { ListUsers };
