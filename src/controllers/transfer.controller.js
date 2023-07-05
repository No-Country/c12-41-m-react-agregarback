import catchAsync from "../utils/catchAsync.js";
import TransferServices from "../services/transfer.services.js";
import AccountServices from "../services/account.services.js";
import AccountModel from "../models/account.model.js";
const transferServices = new TransferServices();
import TransferModel from "../models/transfer.model.js";


export const CreateTransfer = catchAsync(async (req, res, next) => {
  const { userId, currency } = req.params;
  const { senderAccount, recieverAccount, amount } = req.body;

  let AccountAttributes = { userId, currency, accountNumber: senderAccount };
  const trasnfer = await transferServices.newTransfer({
    AccountAttributes,
    recieverAccount,
    amount,
    next,
  });



  return res.status(200).json({
    message: "transfer completed",
    status: "succes",
  });
});

export const GetTransfers = catchAsync(async (req, res, next) => {
  const { userid, currency } = req.params;
  const account = await new AccountServices().getAccountTransfersByUserIdAndCurrency({ userId: userid, currency })

  return res.status(200).json(account.transfers);
});