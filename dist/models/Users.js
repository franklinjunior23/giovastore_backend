"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const database_1 = require("../database");
const sequelize_typescript_1 = require("sequelize-typescript");
const Orders_1 = __importDefault(require("./Orders"));
const Users = database_1.sequelize.define('Users', {
    id: {
        type: sequelize_typescript_1.DataType.STRING,
        primaryKey: true,
        defaultValue: () => (0, uuid_1.v4)()
    },
    nombre: {
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false
    },
    apellido: {
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false
    },
    dni: {
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false
    },
    correo: {
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false
    },
    img: {
        type: sequelize_typescript_1.DataType.STRING,
    },
    dirrecion: {
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false
    },
    celular: {
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false
    }
});
Users.hasMany(Orders_1.default, {
    foreignKey: 'id_usuario',
    sourceKey: 'id'
});
Orders_1.default.belongsTo(Orders_1.default, {
    foreignKey: 'id_usuario',
    targetKey: 'id'
});
exports.default = Users;
