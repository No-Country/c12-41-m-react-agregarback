import { Router } from "express";

//middlewares
import {
  protect,
  protectAccountOwner,
} from "../middlewares/auth.middleware.js";
import { findAll, newContact } from "../controllers/contact.controller.js";
import { validCreateContact } from "../middlewares/valid.middleware.js";

//controllers

const router = Router();

router.use(protect);
router.use("/:userId", protectAccountOwner);

router.get("/:userId", findAll);
router.post("/:userId/:validador",validCreateContact,  newContact);

export default router;
