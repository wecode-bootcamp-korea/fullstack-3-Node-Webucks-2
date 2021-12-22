const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const productsDetail = async (req, res) => {
    try {
        const detail =
            await prisma.$queryRaw`select products.id, products.korean_name,
    products.english_name, images.image_url
    from products
    JOIN images ON products.id = images.product_id
    where products.id = 2`;

        const allergiess = await prisma.$queryRaw`select allergies.name
    FROM allergies
    JOIN product_allergies ON allergies.id = product_allergies.allergy_id
    JOIN products ON products.id = product_allergies.product_id
    WHERE products.id = 2`;

        return res.status(200).json({ detail, allergiess });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};


// const productsDetail = (req, res) => {
//     res.json({
//         "data": {
//             "id": 2,
//             "koreanName": "아이스 카페 아메리카노",
//             "englishName": "Iced Caffe Americano",
//             "description": "진한 에스프레소에 시원한 정수물과 얼음을 더햐여 스타벅스의 깔끔하고 강렬한 에스프레소를 가장 부드럽고 시원하게 즐길 수 있는 커피",
//             "imageURL": "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[110563]_20150813222100303.jpg",
//             "allergens": [],
//             "nutritionInfo": {
//                 "calories": "15",
//                 "fat": "0g",
//                 "sodium": "15mg",
//                 "protein": "1g",
//                 "caffeine": "225mg"
//             }
//         }
//     })
// }

module.exports = { productsDetail }