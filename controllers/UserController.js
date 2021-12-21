import { UserService } from "../services";
import bcrypt from "bcrypt";

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

const CreateUser = async (req, res) => {
  try {
    const { email, username, password, address, phone_number } = req.body;

    const encryptedPassword = await bcrypt.hashSync(password, 10);

    const uesrs = await UserService.CreateUser(
      email,
      username,
      encryptedPassword,
      address,
      phone_number
    );

    return res.status(201).json({ message: "CREATED" });
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: err.mess });
  }
};

const SignIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = UserService.SignIn(email, password);

    return res.status(201).json({ message: "LOGIN_SUCCESS" });
  } catch (err) {
    console.log(err);

    return res.status(500).json({ message: err.message });
  }
};

export default { ListUsers, CreateUser, SignIn };
