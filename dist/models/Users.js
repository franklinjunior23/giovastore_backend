"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const database_1 = require("../database");
const sequelize_typescript_1 = require("sequelize-typescript");
const Users = database_1.sequelize.define('Users', {
    id: {
        type: sequelize_typescript_1.DataType.STRING,
        primaryKey: true,
        defaultValue: faker_1.faker.database.mongodbObjectId()
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
exports.default = Users;
