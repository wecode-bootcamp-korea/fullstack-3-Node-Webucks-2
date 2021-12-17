const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const Detail = async (req, res) => {
  try {
    const detail = await prisma.$queryRaw`
        SELECT korean_name, english_name, images.image_url, allergies.name FROM products JOIN images ON products.id = images.product_id JOIN products_allergies ON products.id = products_allergies.product_id JOIN allergies ON allergies.id = products_allergies.allergy_id;`;

    return res.json({ detail });
  } catch (err) {
    console.log(err);

    return res.status(500).json({ message: err.message });
  }
};

module.exports = { Detail };
