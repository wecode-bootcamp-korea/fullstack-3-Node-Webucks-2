import { UserDao } from "../models";

const ListUsers = async () => {
  return UserDao.ListUsers();
};

export default { ListUsers };
