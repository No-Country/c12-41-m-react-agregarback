import express from "express";
import { singUp, login } from "../controllers/userController.js";
import {
  validSingUp,
  validLogin,
  validTransferOptional,
  validTransferRequire,
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

/**
 * @openapi
 * /api/v1/users/signup:
 *   post:
 *     tags:
 *       - Auth
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: El nombre del usuario a registrar
 *         required: true
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *           format: email
 *         description: El correo electrónico del usuario a registrar
 *         required: true
 *       - in: query
 *         name: password
 *         schema:
 *           type: string
 *         description: La contraseña del usuario a registrar
 *         required: true
 *       - in: query
 *         name: date_of_birth
 *         schema:
 *           type: string
 *           format: date
 *         description: La fecha de nacimiento del usuario
 *         required: true
 *       - in: query
 *         name: dni
 *         schema:
 *           type: integer
 *         description: El número de identificación del usuario
 *         required: true
 *       - in: query
 *         name: address
 *         schema:
 *           type: string
 *         description: La dirección del usuario
 *         required: true
 *       - in: query
 *         name: phone_number
 *         schema:
 *           type: string
 *         description: El número de teléfono del usuario
 *         required: true
 *       - in: query
 *         name: username
 *         schema:
 *           type: string
 *         description: El nombre de usuario del usuario
 *         required: true
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/User"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
router.post("/signup", validSingUp, singUp);

router.post("/login", validLogin, login);

router.use(protect);
router.use("/:userId", protectAccountOwner);
//accounnumber cbu || cvu || alias del destinatario amount por req
router.get("/:userId/:currency/", GetTransfers);
router.post(
  "/:userId/:currency/",
  validTransferOptional,
  validTransferRequire,
  CreateTransfer
);



export default router;
