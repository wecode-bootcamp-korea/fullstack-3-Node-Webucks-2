import express from "express";
import UserController from "../controllers/UserController";

const router = express.Router();

router.get("", UserController.ListUsers);

export default router;
