import CardModel from "../models/card.model.js";
import AppError from "../utils/AppError.js";
import AccountServices from "./account.services.js";
class CardServices {
  accountServices = new AccountServices();

  async getAllCardsByAccount({ userId, accountId, next }) {
    try {
      const account = this.accountServices.findOneAccount({
        AccountAttributes: { id: accountId, userId },
        next,
      });
      const allCards = CardModel.findAll({ where: { accountId } });

      const cardPromises = [account, allCards];
      const cardPromisesResolved = await Promise.all(cardPromises);
      return cardPromisesResolved[1];
    } catch (error) {
      throw new Error(error);
    }
  }

  async createOneCard({ type, category, userId, accountId }) {
    try {
        
    } catch (error) {
        throw new Error(error)
    }
  }
}

export default CardServices;
