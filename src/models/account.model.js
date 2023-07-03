import { DataTypes } from "sequelize";
import db from "../db/connection.js";

const AccountModel = db.define("account", {
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
  accountNumber: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("active", "disable"),
    allowNull: false,
    defaultValue: "active",
  },
  currency: {
    type: DataTypes.ENUM("usd", "soles", "pesos"),
    allowNull: false,
    defaultValue: "usd",
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default AccountModel;
