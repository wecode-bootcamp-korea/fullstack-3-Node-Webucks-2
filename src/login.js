import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const comparePassword = (userPassword, dbPassword) => {
  // TODO: 나중에 수정

  return userPassword === dbPassword;
};

const generateToken = (id) => {
  return id;
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const userInfo = await prisma.users.findUnique({ where: { email } });

  if (!userInfo) {
    res.status(400).json({ message: "LOGIN FAILED" });
    return;
  }

  const isLogin = comparePassword(password, userInfo.password);

  if (isLogin) {
    const token = generateToken(userInfo.id);

    res.json({ token });

    //   return res.status(201).json({ message: "LOGIN SUCCESSED" });
  } else {
    res.status(400).json({ message: "LOGIN FAILED" });
  }
};

export default login;
