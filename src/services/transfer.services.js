import TransferModel from "../models/transfer.model.js";
import AppError from "../utils/AppError.js";
import AccountServices from "./account.services.js";

class TransferServices {
  accountServices = new AccountServices();

  async newTransfer({ AccountAttributes, recieverAccount, amount, next }) {
    try {
      const senderUserAccount = await this.accountServices.findOneAccount({
        AccountAttributes,
        next,
      });

      const recieverUserAccount = await this.accountServices.findOneAccount({
        AccountAttributes: { accountNumber: recieverAccount },
        next,
      });
      if (senderUserAccount.amount < amount) {
        throw next(new AppError("not enough money", 400));
      }
      await this.accountServices.updateAmountAccount({
        account: senderUserAccount,
        amount: senderUserAccount.amount - amount,
        next,
      });
      await this.accountServices.updateAmountAccount({
        account: recieverUserAccount,
        amount: recieverUserAccount.amount + amount,
        next,
      });

      const data = {
        amount,
        senderAccount: senderUserAccount.accountNumber,
        receiverAccount: recieverUserAccount.accountNumber,
        accountId: senderUserAccount.id,
      };
      const transfer = await TransferModel.create(data);
      return transfer;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default TransferServices;
