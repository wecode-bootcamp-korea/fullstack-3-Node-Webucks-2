import express from "express";
import ProductRouter from "./ProductRouter";
import UserRouter from "./UserRouter";

const router = express.Router();

router.use("/products", ProductRouter);
router.use("/users", UserRouter);

export default router;
