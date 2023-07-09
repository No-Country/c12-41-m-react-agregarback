import AccountModel from "./account.model.js";
import TransferModel from "./transfer.model.js";
import UserModel from "./user.model.js";

const initModel = () => {
  UserModel.hasMany(AccountModel, { foreignKey: "userId" });
  AccountModel.belongsTo(UserModel, { foreignKey: "userId" });

  AccountModel.hasMany(TransferModel, { foreignKey: "accountId" });
  TransferModel.belongsTo(AccountModel, { foreignKey: "accountId" });
};

export default initModel