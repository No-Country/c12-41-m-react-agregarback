import { body, validationResult } from "express-validator";

const validateFields = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: "error",
      errors: errors.mapped(),
    });
  }
  next();
};

export const validSingUp = [
  body("name").notEmpty().withMessage("name is require"),
  body("email")
    .notEmpty()
    .withMessage("email is require")
    .isEmail()
    .withMessage("invalid email"),
  body("password").notEmpty().withMessage("password is require"),
  body("date_of_birth")
    .notEmpty()
    .withMessage("date_of_birth is require")
    .isDate()
    .withMessage("invalid format"),
  body("dni")
    .notEmpty()
    .withMessage("dni is require")
    .isInt()
    .withMessage("must be a integer"),
  body("address").notEmpty().withMessage("address is require"),
  body("phone_number")
    .notEmpty()
    .withMessage("phone_number is require")
    .isInt()
    .withMessage("must be a integer"),
  body("username")
    .notEmpty()
    .withMessage("username is required"),
  validateFields,
];

export const validLogin = [
  body("username")
    .notEmpty()
    .withMessage("username is required"),
  body("password").notEmpty().withMessage("password is require"),
  body("dni").notEmpty().withMessage("dni is require"),
  validateFields,
];

export const validTypeOfAccount = [
  body("currency")
    .notEmpty()
    .withMessage("type of account is require")
    .isIn(["soles", "usd", "pesos"])
    .withMessage("Currency must be either soles, usd, or pesos."),
  validateFields,
];

export const validDeleteAccount = [
  body("accountNumber")
    .notEmpty()
    .withMessage("accountNumber is require")
    .isInt()
    .withMessage("account number has to ve a integer")
    .isLength({ min: 9, max: 9 })
    .withMessage("account number has to have 9 numbers"),
  validateFields,
];
