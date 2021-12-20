import express from "express";
import ProductRouter from "./ProductRouter";

const router = express.Router();

router.use("/products", ProductRouter);

export default router;
