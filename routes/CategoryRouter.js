import express from "express";
import { CategoryController } from "../controllers";

const router = express.Router();

router.get("", CategoryController.ListCategories);
router.post("", CategoryController.AddCategories);

export default router;
