const http = require('http')
const express = require('express')
const { productList, createProduct, updatePost, deletePost } = require('./products')
// const { productsDetail } = require('./productsDetail')
// const { categories } = require('./categories')
const { PrismaClient } = require("@prisma/client")
const routes = require('./routes')

const app = express()
app.use(express.json())
app.use(routes)

const prisma = new PrismaClient();

// app.post("/users/signup", async (req, res) => {
//     try {
//         const { email, password, username, address, phone_number } = req.body;

//         const createUser =
//             await prisma.$queryRaw`INSERT INTO users (email, password, username, address, phone_number) VALUES (${email}, ${password}, ${username}, ${address}, ${phone_number} )`;

//         return res.status(201).json({ message: "CREATED" });
//     } catch (err) {
//         console.log(err);
//         return res.status(500).json({ message: err.message });
//     }
// });

// app.get('/products/List', productList)
// app.get('/products/Detail', productsDetail)
// app.get('/products/Categories', categories)

app.get('/', (req, res) => {
    res.json({ message: '/ 초기 페이지입니다.' })
})

// app.post('/products', createProduct)
// app.put('/products', updatePost)
// app.delete('/products', deletePost)

const server = http.createServer(app)

const start = async () => { // 서버를 시작하는 함수입니다.
    try {
        server.listen(8000, () => console.log(`Server is listening on 8000`))
    } catch (err) {
        console.error(err)
        await prisma.$disconnect() // 에러가 발생했을 시에 database 연결을 종료합니다.
    }
}

start()

