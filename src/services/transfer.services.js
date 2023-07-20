import TransferModel from "../models/transfer.model.js";
import AppError from "../utils/AppError.js";
import AccountServices from "./account.services.js";

class TransferServices {
  accountServices = new AccountServices();

  async newTransfer({
    AccountAttributes,
    recieverAccountAttributes,
    validation,
    validationValue,
    amount,
    next,
  }) {
    try {
      const senderUserAccount = await this.accountServices.findOneAccount({
        AccountAttributes,
        next,
      });

      const recieverUserAccount = await this.accountServices.findOneAccount({
        AccountAttributes: recieverAccountAttributes,
        next,
      });
      //validar si cvu cbu alias o numero de cuenta es correcto
      if (recieverUserAccount[validation] != validationValue) {
        throw next(
          new AppError("validacion de la cuenta que recibe fallida", 400)
        );
      }
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
        amount: eval(recieverUserAccount.amount + amount),
        next,
      });

      const data = {
        userId: senderUserAccount.userId,
        accountId: senderUserAccount.id,
        senderAccount: senderUserAccount.accountNumber,
        amount,
        validation,
        validationValue,
        contactId: recieverUserAccount.userId,
      };
      const transfer = await TransferModel.create(data);
      return transfer;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default TransferServices;
