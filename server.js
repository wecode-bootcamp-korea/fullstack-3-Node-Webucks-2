// const http = require("http");
import http from "http";
// const express = require("express");
import express from "express";
// const { PrismaClient } = require("@prisma/client");
import { PrismaClient } from "@prisma/client";
// const { signup } = require("./src/signup");
import signup from "./src/signup";
// const { ListUsers } = require("./src/users");
import ListUsers from "./src/users";
// const { ListCategories, AddCategories } = require("./src/categories");
import { ListCategories, AddCategories } from "./src/categories";
// const { ListProducts, AddProducts } = require("./src/products");
import { ListProducts, AddProducts } from "./src/products";
// const { Detail } = require("./src/detail");
import Detail from "./src/detail";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.post("/users/signup", signup);
app.post("/categories", AddCategories);
app.post("/products", AddProducts);

app.get("/users", ListUsers);
app.get("/categories", ListCategories);
app.get("/products", ListProducts);
app.get("/detail", Detail);

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
