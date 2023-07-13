import { DataTypes } from "sequelize";
import db from "../db/connection.js";

const ContacsModel = db.define("contacs", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
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
  contactName: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// await ContacsModel.sync({ force: true });

export default ContacsModel;
