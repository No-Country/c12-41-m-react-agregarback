import AccountModel from "../models/account.model.js";
import TransferModel from "../models/transfer.model.js";
import CardModel from "../models/card.model.js"
import AppError from "../utils/AppError.js";
import {
  generateAlias,
  generateCBUAndCVU,
} from "../utils/generateParamsAccount.js";
import generarNumeroCuenta from "../utils/genertaeAccount.js";
import UserServices from "./user.services.js";

class AccountServices {
  userServices = new UserServices();
  async createAccount({ currency, next, userId, name }) {
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
      const cbu = generateCBUAndCVU();
      const cvu = generateCBUAndCVU();
      const alias = generateAlias(name);
      const data = {
        currency,
        amount: 1000,
        userId,
        accountNumber,
        cbu,
        cvu,
        alias,
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
      await account.update({ status: "disable" });
    } catch (error) {
      throw new Error(error);
    }
  }
  async findOneAccount({ AccountAttributes, next }) {
    try {
      const account = await AccountModel.findOne({
        where: AccountAttributes,
      });
      if (!account) {
        throw next(new AppError("account not exist"), 404);
      }
      return account;
    } catch (error) {
      throw new Error(error);
    }
  }
  async getAccountTransfersByUserIdAndCurrency({ AccountAttributes, next }) {
    try {
      const account = await AccountModel.findOne({
        where: AccountAttributes,
        include: TransferModel,
      });

      if (!account) {
        throw next(new AppError("account not exist"), 404);
      }
      return account;
    } catch (error) {
      throw new Error(error);
    }
  }
  async updateAmountAccount({ account, amount, next }) {
    try {
      account.update({ amount });
    } catch (error) {
      throw new Error(error);
    }
  }
  async getAllAcountsById({ userId, next }) {
    try {
      await this.userServices.findUserById({ id: userId, next });
      const accounts = await AccountModel.findAll({
        where: { userId },
        include: [
          {
            model: CardModel
          },
          {
            model:TransferModel
          }
        ]
      });
      return accounts;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default AccountServices;
