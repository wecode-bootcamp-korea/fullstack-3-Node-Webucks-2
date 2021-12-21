import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const generateToken = (id) => {
  return id;
};

//로그인
const login = async (req, res) => {
  const { email, password } = req.body;

  const userInfo = await prisma.users.findUnique({ where: { email } });

  if (!userInfo) {
    res.status(400).json({ message: 'ID INVALID' });

    return;
  }

  const isLogin = await bcrypt.compare(password, userInfo.password);

  if (isLogin) {
    const token = generateToken(userInfo.id);

    res.json({ token });
  } else {
    return res.status(400).json({ message: 'LOGIN FAILED' });
  }
};

export default login;
