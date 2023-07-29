import Express from "express";
import {
  createAccount,
  deleteAccount,
  getAllAccountsByUser,
} from "../controllers/account.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import {
  validTypeOfAccount,
  validDeleteAccount,
} from "../middlewares/valid.middleware.js";

const router = Express.Router();

router.use(protect);
router.post("/create_account", validTypeOfAccount, createAccount);
router.delete("/delete_account", validDeleteAccount, deleteAccount);
router.get("/:userId", getAllAccountsByUser);

export default router;
