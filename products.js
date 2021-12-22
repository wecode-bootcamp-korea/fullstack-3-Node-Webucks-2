const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const productList = async (req, res) => {
  try {
    const products = await prisma.$queryRaw`select * from products`;

    return res.status(200).json({ products });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

let coffeeList = {
  data: [
    {
      id: 1,
      koreanName: "나이트로 바닐라크림",
      englishName: "Nitro Vanilla Cream",
      category: "콜드 브루 커피",
      categoryId: 1,
      imageUrl:
        "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg",
    },
    {
      id: 2,
      koreanName: "아이스 카페 아메리카노",
      englishName: "Ice Cafe Americano",
      category: "에스프레소",
      categoryId: 3,
      imageUrl:
        "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[110563]_20210426095937808.jpg",
    },
    {
      id: 3,
      koreanName: "돌체 콜드 브루",
      englishName: "Dolce Cold Brew",
      category: "콜드 브루 커피",
      categoryId: 1,
      imageUrl:
        "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg",
    },
    {
      id: 4,
      koreanName: "콜드 브루 몰트",
      englishName: "Cold Brew Malt",
      category: "콜드 브루 커피",
      categoryId: 1,
      imageUrl:
        "https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001636]_20210225093600536.jpg",
    },
    {
      id: 5,
      koreanName: "에스프레소 콘 파나",
      englishName: "Espresso Con Panna",
      category: "에스프레소",
      categoryId: 3,
      imageUrl:
        "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[30]_20210415144252244.jpg",
    },
  ],
};

// const productList = (req, res) => {
//     res.json(coffeeList)
// }

const createProduct = (req, res) => {
  const { koreanName, englishName, imageUrl, categoryId } = req.body; // client로 부터 전달받은 정보를 활용합니다
  const product = {
    id: 6, // uuid가 설치 했는데도 안됩니다..
    koreanName: koreanName,
    englishName: englishName,
    imageUrl: imageUrl,
    categoryId: categoryId,
  }; // 전달 받은 키를 이용해 객체를 만듭니다.
  coffeeList.data.push(product); // 새로만든 객체를 상품 정보 배열에 추가해줍니다.
  // coffeeList.push(coffee);
  // res.json({ data: products });
  res.status(201).json(coffeeList); // 새로 생성된 배열을 client에게로 반환해줍니다.
};

const updatePost = (req, res) => {
  const { id } = req.body;
  const coffee = coffeeList.data.filter((coffee) => coffee.id === id);
  coffee[0].englishName = "newCoffee";
  res.json(coffeeList);
};

const deletePost = (req, res) => {
  const { id } = req.body;

  for (let i in coffeeList.data) {
    const coffee = coffeeList.data[i];
    if (coffee.id === id) {
      delete coffeeList.data[i];
    }
  }
  res.status(204).json(coffeeList);
};

module.exports = { productList, createProduct, updatePost, deletePost };
