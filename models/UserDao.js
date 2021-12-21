import prisma from "../prisma";

const ListUsers = async () => {
  const userList = await prisma.$queryRaw`
    SELECT * FROM users;`;

  return userList;
};

const CreateUser = async (
  email,
  username,
  encryptedPassword,
  address,
  phone_number
) => {
  const users = await prisma.$queryRaw`
      INSERT INTO users (email, password, username, address, phone_number) 
      VALUES (${email}, ${encryptedPassword}, ${username}, ${address}, ${phone_number})`;

  return users;
};

const getUserByEmail = async (email) => {
  // const users = await prisma.$queryRaw`
  //   SELECT id, email, password
  //   FROM users WHERE email = ${email};`;

  const users = await prisma.users.findUnique({ where: { email } });
  return users;
};

export default { ListUsers, CreateUser, getUserByEmail };
