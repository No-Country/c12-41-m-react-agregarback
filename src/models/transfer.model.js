import { DataTypes } from "sequelize";
import db from "../db/connection.js";

const TransferModel = db.define("transfers", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  senderAccount: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false,
  },
  receiverAccount: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  accountId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// await AccountModel.sync({ force: true });

export default TransferModel;
