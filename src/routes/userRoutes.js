import { Router } from "express";
import { postUser } from "../controllers/userController.js";

const userRoutes = Router();


userRoutes.post('/signup', postUser);

export default userRoutes;