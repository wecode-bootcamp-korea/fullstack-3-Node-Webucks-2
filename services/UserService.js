import UserDao from "../models/UserDao";

const ListUsers = async () => {
  return UserDao.ListUsers();
};

export default { ListUsers };
