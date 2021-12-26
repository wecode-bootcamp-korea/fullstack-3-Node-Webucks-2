import express from "express";
import ProductRouter from "./ProductRouter";
import UserRouter from "./UserRouter";
import CategoryRouter from "./CategoryRouter";

const router = express.Router();

router.use("/products", ProductRouter);
router.use("/users", UserRouter);
router.use("/categories", CategoryRouter);

export default router;
