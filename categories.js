const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const categories = async (req, res) => {
    try {
        const categories = await prisma.$queryRaw`select * from categories`;

        return res.status(200).json({ categories });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }
};

module.exports = { categories }