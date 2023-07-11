import { DataTypes } from "sequelize";
import db from "../db/connection.js";

const CardModel = db.define("cards", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  cardNumber: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  cvv: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  creditLine: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  type: {
    type: DataTypes.ENUM("visa", "masterCard", "americanExpress"),
    allowNull: false,
  },
  category: {
    type: DataTypes.ENUM("debito", "credito"),
    allowNull: false,
    defaultValue: "debito",
  },
  status: {
    type: DataTypes.ENUM("active", "disable"),
    allowNull: false,
    defaultValue: "active",
  },
  accountId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// await CardModel.sync({ force: true });

export default CardModel;
