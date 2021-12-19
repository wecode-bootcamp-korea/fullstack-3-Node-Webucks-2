import http from "http";
import express from "express";
import { PrismaClient } from "@prisma/client";
import signup from "./src/signup";
import { ListUsers, userDelete, userUpdate } from "./src/users";
import { ListCategories, AddCategories } from "./src/categories";
import { ListProducts, AddProducts } from "./src/products";
import Detail from "./src/detail";
import login from "./src/login";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.post("/users/signup", signup);
app.post("/categories", AddCategories);
app.post("/products", AddProducts);
app.post("/login", login);

app.get("/users", ListUsers);
app.get("/categories", ListCategories);
app.get("/products", ListProducts);
app.get("/detail", Detail);

app.put("/users", userUpdate);
app.delete("/users", userDelete);

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
