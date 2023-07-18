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
    allowNull: false,
  },
  receiverAccount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  accountId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// await TransferModel.sync({ force: true });

export default TransferModel;
