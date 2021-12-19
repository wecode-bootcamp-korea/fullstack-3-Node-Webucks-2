import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const signup = async (req, res) => {
  try {
    const { email, username, password, address, phone_number } = req.body;

    const encryptedPassword = await bcrypt.hashSync(password, 10);

    console.log("email: ", email, "username: ", username);

    const createdUser = await prisma.$queryRaw`
    insert into users(email, password, username, address, phone_number) values (${email}, ${encryptedPassword},${username},${address},${phone_number});`;

    return res.status(201).json({ message: "CREATED" });
  } catch (err) {
    console.log(err);

    return res.status(500).json({ message: err.message });
  }
};

// module.exports = { signup };
export default signup;
