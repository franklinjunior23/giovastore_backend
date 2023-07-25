"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
const sequelize_typescript_1 = require("sequelize-typescript");
const Orders = database_1.sequelize.define('Orders', {
    id: {
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario: {
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false
    },
    fecha: {
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false
    },
    status: {
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false
    },
    dirrecion: {
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false
    },
    total: {
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false
    }
});
exports.default = Orders;
