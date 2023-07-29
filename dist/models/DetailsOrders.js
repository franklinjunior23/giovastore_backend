"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
const sequelize_typescript_1 = require("sequelize-typescript");
const uuid_1 = require("uuid"); // Importa la función uuidv4 para generar IDs únicos
const Products_1 = __importDefault(require("./Products"));
const DetailsOrders = database_1.sequelize.define('Det_Order', {
    id: {
        type: sequelize_typescript_1.DataType.STRING,
        primaryKey: true,
        defaultValue: () => (0, uuid_1.v4)()
    },
    id_order: {
        type: sequelize_typescript_1.DataType.STRING,
    },
    id_product: {
        type: sequelize_typescript_1.DataType.STRING,
    },
    Cantidad: {
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false
    },
});
Products_1.default.hasMany(DetailsOrders, {
    foreignKey: 'id_product',
    sourceKey: 'id'
});
DetailsOrders.belongsTo(Products_1.default, {
    foreignKey: 'id_product',
    targetKey: 'id'
});
exports.default = DetailsOrders;
