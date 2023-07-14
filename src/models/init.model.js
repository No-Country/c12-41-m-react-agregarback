import AccountModel from "./account.model.js";
import CardModel from "./card.model.js";
import TransferModel from "./transfer.model.js";
import UserModel from "./user.model.js";
import CardModel from "./card.model.js";

const initModel = () => {
  UserModel.hasMany(AccountModel, { foreignKey: "userId" });
  AccountModel.belongsTo(UserModel, { foreignKey: "userId" });

  AccountModel.hasMany(TransferModel, { foreignKey: "accountId" });
  TransferModel.belongsTo(AccountModel, { foreignKey: "accountId" });

  AccountModel.hasMany(CardModel, { foreignKey: "accountId" });
  CardModel.belongsTo(AccountModel, { foreignKey: "accountId" });
};

export default initModel
