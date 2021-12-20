const http = require('http')
const express = require('express')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient() 

const app = express()
app.use(express.json()) // for parsing application/json

app.get('/products/coffeedetail', async (req, res) => { // 1
  try { // 2
    const nutrition = await prisma.$queryRaw`select amount from nutritions;`
    const readdetail = await prisma.$queryRaw`
    SELECT products.id, description ,korean_name, english_name, images.image_url, allergies.name 
    amount, calories, fat, sodium, protein, caffeine FROM products 
JOIN images ON products.id = images.product_id 
JOIN product_allergies ON products.id = product_allergies.product_id 
JOIN allergies ON allergies.id = product_allergies.allergy_id
join nutritions on products.id = nutritions.product_id;` // 4


    return res.status(201).json({readdetail}) // 5
  } catch (err) { // 2
    console.log(err)
    return res.status(500).json({ message: err.message }) // 6
  }
})

const server = http.createServer(app) // express app 으로 서버를 만듭니다.

const start = async () => { // 서버를 시작하는 함수입니다.
  try {
    server.listen(8000, () => console.log(`Server is listening on 8000`))
  } catch (err) { 
    console.error(err)
    await prisma.$disconnect() // 에러가 발생했을 시에 database 연결을 종료합니다.
  }
}

start()