import { DataTypes } from "sequelize";
import db from "../db/connection.js";

const User = db.define('User', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.STRING
    },
    date_of_birth: {
        type: DataTypes.STRING
    },
    dni: {
        type: DataTypes.INTEGER
    },
    address: {
        type: DataTypes.STRING
    },
    phone_number: {
        type: DataTypes.STRING
    },
}, {
    freezeTableName: true,
    timestamps: false
})

export default User;