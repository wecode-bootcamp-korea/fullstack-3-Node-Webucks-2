import res from "express/lib/response";
import { UserDao } from "../models";
import bcrypt from "bcrypt";

const ListUsers = async () => {
  return UserDao.ListUsers();
};

const CreateUser = async (
  email,
  username,
  encryptedPassword,
  address,
  phone_number
) => {
  try {
    const users = await UserDao.CreateUser(
      email,
      username,
      encryptedPassword,
      address,
      phone_number
    );
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: err.message });
  }
};

const SignIn = async (email, password) => {
  try {
    const users = await UserDao.getUserByEmail(email);

    if (!users) {
      res.status(400).json({ message: "ID_INVALID" });

      return;
    }

    const isLogin = await bcrypt.compare(password, users.password);

    if (!isLogin) {
      res.status(400).json({ message: "LOGIN FAILED" });

      return;
    }

    // const generateToken = (id) => {
    //   return users.id;
    // };

    // if (isLogin) {
    //   const token = generateToken();
    //   res.json({ token });
    // } else {
    //   return res.status(400).json({ message: "LOGIN_FAILED" });
    // }
  } catch (err) {
    console.log(err);

    return res.status(500).json({ message: err.message });
  }
};

export default { ListUsers, CreateUser, SignIn };
