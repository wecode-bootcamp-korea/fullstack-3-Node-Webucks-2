import { UserDao } from "../models";
import bcrypt from "bcrypt";

const ListUsers = async () => {
  return UserDao.ListUsers();
};

const CreateUser = async (email, username, password, address, phone_number) => {
  console.log("service_email:", email);
  const [isEmail] = await UserDao.SignIn(email);
  console.log("service_isEmail: ", isEmail);

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
  console.log("services_users:", users);

  if (!users) {
    // const error = new Error("INVALID_USER");
    // throw error;
    throw new Error("INVALID_USER");
  }

  const isLogin = bcrypt.compareSync(password, users.password);

  if (!isLogin) {
    const error = new Error("LOGIN_FAILED");

    throw error;
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
};

export default { ListUsers, CreateUser, SignIn };
