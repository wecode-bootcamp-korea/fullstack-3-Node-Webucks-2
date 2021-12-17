const http = require("http");
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { users } = require("./src/users");
const { signup } = require("./src/signup");

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.post("/users/signup", signup);

app.get("/users", users);

const server = http.createServer(app);

const start = async () => {
  try {
    server.listen(8080, () => console.log("Server is listening on 8080"));
  } catch (err) {
    console.log(err);
    await prisma.$disconnect();
  }
};

start();
