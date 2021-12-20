const http = require('http')
const express = require('express')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient() 

const app = express()
app.use(express.json()) // for parsing application/json

app.get('/products/categories', async (req, res) => { // 1
  try { // 2
    const readcategories = await prisma.$queryRaw`
      select*from categories;` // 4

    return res.status(201).json({readcategories}) // 5
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