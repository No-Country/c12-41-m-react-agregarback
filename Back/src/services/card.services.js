import CardModel from "../models/card.model.js";
import AppError from "../utils/AppError.js";
import {
  generateCVV,
  generateCardNumber,
} from "../utils/generateParamsCard.js";
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

  async createOneCard({ type, category, userId, accountId, next }) {
    try {
      const account = await this.accountServices.findOneAccount({
        AccountAttributes: {
          id: accountId,
        },
        next,
      });
      if (!account) {
        throw next(new AppError("account not exist", 404));
      }
      const creditLine = category == "credito" ? 1000 : null;
      const CardData = {
        cardNumber: generateCardNumber(),
        cvv: generateCVV(),
        creditLine,
        type,
        category,
        accountId,
        userId,
      };
      console.log(CardData);
      const newCard = await CardModel.create(CardData);
      return newCard;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAllCards({ userId, next }) {
    try {
      const cards = await CardModel.findAll({
        where: { userId },
      });
      return cards;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default CardServices;
