import AccountModel from "../models/account.model.js";
import AppError from "../utils/AppError.js";
import UserServices from "./user.services.js";
import generarNumeroCuenta from "../utils/genertaeAccount.js";

class AccountServices {
  userServices = new UserServices();
  async createAccount({ currency, next, userId }) {
    try {
      //validar si el usuario ya tiene una cuenta en dicha moneda
      const findAccount = await AccountModel.findOne({
        where: {
          currency,
          userId,
        },
      });
      if (findAccount) {
        throw next(new AppError("already have an account in this currency"));
      }
      const accountNumber = generarNumeroCuenta();
      const data = {
        currency,
        amount: 1000,
        userId,
        accountNumber,
      };
      const newAccount = await AccountModel.create(data);
      return newAccount;
    } catch (error) {
      throw new Error(error);
    }
  }
  async deleteAccount({ id, next, accountNumber }) {
    try {
      const account = await AccountModel.findOne({
        where: {
          accountNumber,
        },
      });
      if (id != account.userId) {
        throw next(new AppError("this is not your account", 401));
      }
      account.update({ status: "disable" });
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default AccountServices;
