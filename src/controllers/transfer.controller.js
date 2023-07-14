import AccountServices from "../services/account.services.js";
import TransferServices from "../services/transfer.services.js";
import catchAsync from "../utils/catchAsync.js";
const transferServices = new TransferServices();

export const CreateTransfer = catchAsync(async (req, res, next) => {
  const { userId, currency } = req.params;
  const {
    accountId,
    senderAccount,
    amount,
    validation,
    validationValue,
    contactId,
  } = req.body;

  let AccountAttributes = {
    userId,
    currency,
    accountNumber: senderAccount,
    id: accountId,
  };
  const recieverAccountAttributes = { userId: contactId, currency };

  const trasnfer = await transferServices.newTransfer({
    AccountAttributes,
    recieverAccountAttributes,
    validationValue,
    validation,
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
