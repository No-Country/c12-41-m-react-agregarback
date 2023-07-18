import { Router } from "express";

//middlewares
import {
  protect,
  protectAccountOwner,
} from "../middlewares/auth.middleware.js";
//controllers
import {
  findAll,
  cardsByAccount,
  CreateNewCard,
} from "../controllers/card.controller.js";
import { validCreateCard } from "../middlewares/valid.middleware.js";

const router = Router();

router.use(protect);
router.use("/:userId", protectAccountOwner);

router.get("/:userId", findAll);
router.get("/:userId/:accountId", cardsByAccount);
router.post("/:userId/:accountId", validCreateCard, CreateNewCard);

export default router;
