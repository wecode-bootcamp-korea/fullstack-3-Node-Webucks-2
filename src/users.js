import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const ListUsers = async (req, res) => {
  try {
    const userList = await prisma.$queryRaw`
            select * from users`;

    return res.json({ userList });
  } catch (err) {
    console.log(err);

    return res.status(500).json({ message: err.message });
  }
};

const userUpdate = async (req, res) => {
  const { id } = req.query;
  const { email, password, username } = req.body;

  // prisma 메서드 사용
  // try {
  // const update = await prisma.users.update ({
  //   wehre: {
  //     id,
  //   },
  //   data: {
  //     email,
  //     password
  //   }
  // });
  // return res.json(update)
  // } catch (err) {
  //   console.log(err);

  //   return res.status(500).json({ message: err.message });
  // }

  // raw query 사용
  try {
    const updated = await prisma.$queryRaw`
    UPDATE users SET email=${email}, password=${password}, username=${username} WHERE id=${id}`;

    return res.status(201).json({ message: "UPDATED" });
  } catch (err) {
    console.log(err);

    return res.status(500).json({ message: err.messagse });
  }
};

const userDelete = async (req, res) => {
  const { id } = req.query;
  try {
    const deleted = await prisma.$queryRaw`
      DELETE FROM users WHERE id=${id}`;

    return res.status(201).json({ message: "DELETED" });
  } catch (err) {
    console.log(err);

    return res.status(500).json({ message: err.message });
  }
};

export { ListUsers, userUpdate, userDelete };
