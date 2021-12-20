import UserService from "../services/UserService";

const ListUsers = async (req, res) => {
  try {
    const users = await UserService.ListUsers();

    res.status(201).json({
      massage: "SUCCESS",
      data: users,
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({ message: err.message });
  }
};

export default { ListUsers };
