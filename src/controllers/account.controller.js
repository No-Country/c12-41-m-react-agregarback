import catchAsync from "../utils/catchAsync.js";
import AccountServices from "../services/account.services.js";
const accounServices = new AccountServices();

export const createAccount = catchAsync(async (req, res, next) => {
  const { id: userId } = req.sessionUser;
  const { currency } = req.body;
  const account = await accounServices.createAccount({
    currency,
    next,
    userId,
  });
  return res.status(200).json({
    status: "succes",
    message: "ok",
    account,
  });
});

export const deleteAccount = catchAsync(async (req, res, next) => {
  const { id } = req.sessionUser;
  const { accountNumber } = req.body;
  await accounServices.deleteAccount({
    id,
    next,
    accountNumber,
  });
  return res.status(200).json({
    status: "succes",
    message: `account ${accountNumber} deleted`,
  });
});
