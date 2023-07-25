"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
const sequelize_typescript_1 = require("sequelize-typescript");
const DetailsOrders = database_1.sequelize.define('Det_Order', {
    id: {
        type: sequelize_typescript_1.DataType.STRING,
        primaryKey: true,
    },
    id_order: {
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false
    },
    id_product: {
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false
    },
    Cantidad: {
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false
    },
    total: {
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false
    }
});
exports.default = DetailsOrders;
