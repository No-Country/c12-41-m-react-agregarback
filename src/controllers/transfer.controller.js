import AccountServices from "../services/account.services.js";
import TransferServices from "../services/transfer.services.js";
import catchAsync from "../utils/catchAsync.js";
const transferServices = new TransferServices();

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
    trasnfer,
  });
});

export const GetTransfers = catchAsync(async (req, res, next) => {
  const { userId, currency } = req.params;

  const account =
    await new AccountServices().getAccountTransfersByUserIdAndCurrency({
      AccountAttributes: { userId, currency },
      next,
    });

  return res.status(200).json(account.transfers);
});