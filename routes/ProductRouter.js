import express from "express";
import { ProductController } from "../controllers";

const router = express.Router();

router.get("", ProductController.ListProducts);

export default router;
