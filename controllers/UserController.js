import { UserService } from "../services";
// import bcrypt from "bcrypt";

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

    const requiredKey = {
      email,
      password,
      username,
      address,
      phone_number,
    };

    for (let key in requiredKey) {
      if (!requiredKey[key]) res.status(400).send("양식이 올바르지 않습니다.");
    }

    const users = await UserService.CreateUser(
      email,
      username,
      password,
      address,
      phone_number
    );

    return res.status(201).json({ message: "CREATED", email: `${email}` });
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: err.message });
  }
};

const SignIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const users = await UserService.SignIn(email, password);

    res.status(201).json({ message: "LOGIN_SUCCESS" });
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: err.message });
  }
};

export default { ListUsers, CreateUser, SignIn };
