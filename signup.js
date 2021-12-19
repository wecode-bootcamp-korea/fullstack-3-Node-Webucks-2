// const http = require('http')

// const server = http.createServer((req, res) => {
//   console.log('request received')

//   res.setHeader('Content-Type', 'application/json')
//   res.end(JSON.stringify({ message: "Welcome to >wecode server! Http server without express"}))
// });

// server.listen(8080, ()=> {
//   console.log('server is running on PORT 8000')
// })

// const {PrismaClient} = require('@prisma/client')

// const prisma = new PrismaClient()


// const http = require('http') // 1
// const express = require('express')
// const app = express()
// const server = http.createServer(app)
// app.use(express.json())
// app.post('/users/signup', async(req,res) => {
// try{
//   const {email, password} = req.body
// 	const hashedPassword = bcrypt.hash(password, 10)
//     	const createdUser = await prisma.users.create({
//       	data : {
// 	        email,
// 	        password: hashedPassword,
// 	      }
// 	    })

//         res.status(201).json({createdUser})
// })







//   const createdUser = await prisma.$queryRaw
//   `INSERT INTO users(email, password)
//     VALUES(${email}, ${password} )`;

//       return res.status(201).json({message:"회원가입 성공^^"})
//     } catch (err){
//       console.log(err)
//       return res.status(500).json ({message:"가입 거절ㅜㅜ"})
//     }

// })


// const start = async () => {
//   try {
//     server.listen(3000, () => console.log(`Server is listening on 3000`))
//   } catch (err) {
//     console.error(err)
//     await prisma.$disconnect() 
//   }
// }

// start()

// const http = require('http')
import http from "http";
import express from "express";
import pkg from "@prisma/client";
// const express = require('express')
// const { PrismaClient } = require('@prisma/client')

// import pkg from '@prisma/client';
const {PrismaClient} = pkg;

export const prisma = new PrismaClient() 

const app = express()
app.use(express.json()) // for parsing application/json

app.post('/users/signup', async (req, res) => { // 1
  try { // 2
    const { email, username, password, address, phone_number, policy_agreed} = req.body // 3


    const createdUser = await prisma.$queryRaw`
      INSERT INTO users(email, username, password, address, phone_number, policy_agreed) VALUES (${email},${username},${password},
      ${address},${phone_number}, ${policy_agreed});
    ` // 4

    return res.status(201).json({ message: "CREATED" }) // 5
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