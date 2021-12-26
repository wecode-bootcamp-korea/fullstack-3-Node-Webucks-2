import express from "express";
import { ProductController } from "../controllers";

const router = express.Router();

router.get("", ProductController.ListProducts);
router.post("", ProductController.AddProducts);

router.get("/detail", ProductController.ProductDetail);

export default router;
