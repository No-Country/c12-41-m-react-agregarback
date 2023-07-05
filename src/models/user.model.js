import { DataTypes } from "sequelize";
import db from "../db/connection.js";
import bcrypt from "bcryptjs";

const User = db.define(
  "users",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("active", "disable"),
      allowNull: false,
      defaultValue: "active",
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dni: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    hooks: {
      beforeCreate: async (user) => {
        // Generar el hash de la contraseña utilizando Bcrypt.js
        const salt = await bcrypt.genSalt(12);
        const secretPassword = await bcrypt.hash(user.password, salt);
        user.password = secretPassword;
      },
    },
  }
);

export default User;
