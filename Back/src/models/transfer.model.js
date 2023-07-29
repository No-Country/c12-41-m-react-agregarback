import { DataTypes } from "sequelize";
import db from "../db/connection.js";

const TransferModel = db.define("transfers", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  accountId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  senderAccount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  validation: {
    allowNull: false,
    type: DataTypes.ENUM("accountNumber", "cbu", "cvu", "alias"),
  },
  validationValue: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  contactId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// await TransferModel.sync({ force: true });

export default TransferModel;
