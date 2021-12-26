import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userUpdate = async (req, res) => {
  const { id } = req.query;
  const { email, password } = req.body;

  const update = await prisma.users.update({
    where: {
      id,
    },
    data: {
      email: email,
      password: password,
    },
  });
  res.json(userUpdate);
};

export default userUpdate;
