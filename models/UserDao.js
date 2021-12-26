import prisma from "../prisma";
import bcrypt from "bcrypt";

const ListUsers = async () => {
  const userList = await prisma.$queryRaw`
    SELECT * FROM users;`;

  return userList;
};

const CreateUser = async (email, username, password, address, phone_number) => {
  try {
    const encryptedPassword = bcrypt.hashSync(password, 10);

    const users = await prisma.$queryRaw`
    INSERT INTO users (email, password, username, address, phone_number) 
    VALUES (${email}, ${encryptedPassword}, ${username}, ${address}, ${phone_number})`;
    return users;
  } catch (err) {
    console.log(err);
  }
};

const SignIn = async (email) => {
  try {
    const users = await prisma.$queryRaw`
    SELECT id, email, password
    FROM users WHERE email = ${email};`;

    // const users = await prisma.users.findUnique({ where: { email } });
    return users;
  } catch (err) {
    console.log(err);
  }
};

export default { ListUsers, CreateUser, SignIn };
