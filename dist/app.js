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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const database_1 = require("./database");
const cors_1 = __importDefault(require("cors"));
const Products_routes_1 = __importDefault(require("./routes/Products.routes"));
const Orders_routes_1 = __importDefault(require("./routes/Orders.routes"));
const Login_routes_1 = __importDefault(require("./routes/Login.routes"));
const app = (0, express_1.default)();
const PUERTO = process.env.PUERTO;
const Point_defect = process.env.POINT || 'api/';
//configuraciones 
app.use((0, cors_1.default)({
    origin: '*'
}));
app.use(express_1.default.json());
app.use(`${Point_defect}/Products`, Products_routes_1.default);
app.use(`${Point_defect}/Orders`, Orders_routes_1.default);
app.use(`${Point_defect}/Auth`, Login_routes_1.default);
app.listen(PUERTO, () => __awaiter(void 0, void 0, void 0, function* () {
    // force: true 
    // alter: true
    // para tener cambios , actualizacion de la bd /
    yield database_1.sequelize.sync({ force: true });
    console.log(`http://localhost:${PUERTO}/api`);
}));
