"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const database_1 = require("../database");
const sequelize_typescript_1 = require("sequelize-typescript");
const uuid_1 = require("uuid"); // Importa la función uuidv4 para generar IDs únicos
const Products = database_1.sequelize.define("Products", {
    id: {
        type: sequelize_typescript_1.DataType.STRING,
        primaryKey: true,
        defaultValue: () => (0, uuid_1.v4)()
    },
    nombre: {
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    },
    img: {
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false
    },
    precio: {
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    },
    descripcion: {
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    },
    stock: {
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    },
});
const up = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Products.sync();
        yield Products.create({
            nombre: faker_1.faker.commerce.productName(),
            img: faker_1.faker.image.food(1000, 1600, true),
            precio: faker_1.faker.commerce.price({ min: 100, max: 1000 }),
            descripcion: faker_1.faker.commerce.productDescription(),
            stock: faker_1.faker.commerce.price({ min: 10, max: 30, dec: 0 })
        });
    }
    catch (error) {
        console.log(error);
    }
});
up();
exports.default = Products;
