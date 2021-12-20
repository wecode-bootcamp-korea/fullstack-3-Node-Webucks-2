import prisma from "../prisma";

const ListUsers = async () => {
  const userList = await prisma.$queryRaw`
    SELECT * FROM users;`;

  return userList;
};

export default { ListUsers };
