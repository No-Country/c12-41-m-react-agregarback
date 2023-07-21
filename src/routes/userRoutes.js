import express from "express";
import {
  singUp,
  login,
  updateUserInfo,
  getUserById
} from "../controllers/userController.js";
import {
  validSingUp,
  validLogin,
  validTransferRequire,
  validUpdateInfoUser,
  validChangePassword,
} from "../middlewares/valid.middleware.js";
import {
  CreateTransfer,
  GetTransfers,
} from "../controllers/transfer.controller.js";
import {
  protect,
  protectAccountOwner,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/signup", validSingUp, singUp);
router.post("/login", validLogin, login);

router.use(protect);
router.use("/:userId", protectAccountOwner);

router.patch("/:userId/updateUser", validUpdateInfoUser, updateUserInfo);
router.patch("/:userId/changePassword", validChangePassword, changePassword);

//accounnumber cbu || cvu || alias del destinatario amount por req
router.get("/:userId/:currency/", GetTransfers);
router.post(
  "/:userId/:currency/",
  // validTransferOptional,
  validTransferRequire,
  CreateTransfer
);

router.get("/:userId", getUserById);
export default router;
