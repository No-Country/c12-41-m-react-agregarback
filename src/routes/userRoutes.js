import express from "express";
import { singUp, login } from "../controllers/userController.js";
import { validSingUp , validLogin } from "../middlewares/valid.middleware.js";

const router = express.Router();

router.post("/signup", validSingUp, singUp);
router.post("/login", validLogin , login )

export default router;
