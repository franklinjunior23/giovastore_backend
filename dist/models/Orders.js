"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
const sequelize_typescript_1 = require("sequelize-typescript");
const DetailsOrders_1 = __importDefault(require("./DetailsOrders"));
const uuid_1 = require("uuid"); // Importa la función uuidv4 para generar IDs únicos
const Orders = database_1.sequelize.define('Orders', {
    id: {
        type: sequelize_typescript_1.DataType.STRING,
        primaryKey: true,
        defaultValue: () => (0, uuid_1.v4)()
    },
    id_usuario: {
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false
    },
    fecha: {
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false
    },
    hora: {
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
Orders.hasMany(DetailsOrders_1.default, {
    foreignKey: 'id_order',
    sourceKey: 'id'
});
DetailsOrders_1.default.belongsTo(Orders, {
    foreignKey: 'id_order',
    targetKey: 'id'
});
exports.default = Orders;
