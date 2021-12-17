const http = require("http");
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { users } = require("./users");

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.post("/users/signup", async (req, res) => {
  try {
    const { email, username, password, address, phone_number } = req.body;

    console.log("email: ", email, "username: ", username);

    const createdUser = await prisma.$queryRaw`
        insert into users(email, password, username, address, phone_number) values (${email}, ${password}, ${username}, ${address}, ${phone_number});`;

    return res.status(201).json({ message: "CREATED" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
});

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
