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
    .isLength({ min: 6, max: 15 })
    .withMessage(
      "The phone number must be between 6 and 15 characters in length"
    )
    .isNumeric()
    .withMessage("invalid format"),
  body("username").notEmpty().withMessage("username is required"),
  validateFields,
];

export const validLogin = [
  body("username").notEmpty().withMessage("username is required"),
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

const atLeastOneField = (value, { req }) => {
  const { cbu, cvu, alias } = req.body;
  const attirbute = cbu || cvu || alias;
  return !!attirbute;
};

// Middleware de validación
export const validTransferOptional = [
  body("cbu").optional(),
  body("cvu").optional(),
  body("alias").optional(),
  body()
    .custom(atLeastOneField)
    .withMessage("At least one of cbu, cvu, alias field is required"),
  validateFields,
];

export const validTransferRequire = [
  body("senderAccount")
    .notEmpty()
    .withMessage("sender account is require")
    .isLength({ min: 9, max: 9 })
    .withMessage("account number has to have 9 numbers"),
  body("recieverAccount")
    .notEmpty()
    .withMessage("reciever account is require")
    .isLength({ min: 9, max: 9 })
    .withMessage("account number has to have 9 numbers"),
  body("amount")
    .notEmpty()
    .withMessage("amoun is require")
    .isFloat()
    .withMessage("amoun has to be a number"),
  validateFields,
];

export const validCreateContact = [
  body("validation")
    .notEmpty()
    .withMessage("validation is require")
    .isIn(["accountNumber", "cbu", "cvu", "alias"])
    .withMessage(
      "validation has to be one of accountNumber, cbu, cvu or alias"
    ),
  body("validationValue").notEmpty().withMessage("validationValue is require"),
  body("contactId")
    .notEmpty()
    .withMessage("contactId is require")
    .isInt()
    .withMessage("contactId has to be a number"),
  validateFields,
];

export const validCreateCard = [
  body("type")
    .notEmpty()
    .withMessage("type is require")
    .isIn(["visa", "masterCard", "americanExpress"])
    .withMessage(
      "validation has to be one of visa, masterCard, americanExpress"
    ),
  body("category")
    .notEmpty()
    .withMessage("category is require")
    .isIn(["credito", "debito"])
    .withMessage("validation has to be one of credito debito"),
  validateFields,
];
