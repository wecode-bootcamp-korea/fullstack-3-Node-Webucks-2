import express from "express";
import { UserController } from "../controllers";

const router = express.Router();

router.post("/signup", UserController.CreateUser);
router.post("/signin", UserController.SignIn);
router.get("", UserController.ListUsers);

export default router;
