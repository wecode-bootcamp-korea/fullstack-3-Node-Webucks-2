import { UserDao } from "../models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const ListUsers = async () => {
  return UserDao.ListUsers();
};

const CreateUser = async (email, username, password, address, phone_number) => {
  const [isEmail] = await UserDao.SignIn(email);

  if (isEmail) {
    throw new Error("EAMIL_ALREADY_EXIST");
  }

  const users = await UserDao.CreateUser(
    email,
    username,
    password,
    address,
    phone_number
  );
  return users;
};

const SignIn = async (email, password) => {
  const [users] = await UserDao.SignIn(email);

  if (!users) {
    const error = new Error("INVALID_USER");
    error.statusCode = 404;
    throw error;
    // throw new Error("INVALID_USER");
  }

  const isLogin = bcrypt.compareSync(password, users.password);

  if (!isLogin) {
    const error = new Error("LOGIN_FAILED");

    throw error;
  }

  const accessToken = jwt.sign({ id: users.id }, "secretkey", {
    expiresIn: "1h",
  });

  return accessToken;

  // const generateToken = (id) => {
  //   return users.id;
  // };

  // if (isLogin) {
  //   const token = generateToken();
  //   res.json({ token });
  // } else {
  //   return res.status(400).json({ message: "LOGIN_FAILED" });
  // }
};

export default { ListUsers, CreateUser, SignIn };
