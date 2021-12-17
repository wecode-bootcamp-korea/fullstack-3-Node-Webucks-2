const { PrismaClient } = require("@prisma/client");

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

module.exports = { ListUsers };
