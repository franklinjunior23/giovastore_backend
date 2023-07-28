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
exports.LoginLogout = exports.LoginGoogle = exports.LoginDefault = void 0;
const Users_1 = __importDefault(require("../models/Users"));
const sequelize_1 = require("sequelize");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const token = process.env.SECRET_KEY_JWT || '';
// login por defecto
const LoginDefault = (req, res) => {
    const { usuario, contraseña } = req.body;
};
exports.LoginDefault = LoginDefault;
// login con google
const LoginGoogle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { family_name, given_name, email, picture } = req.body;
        const busqueda = yield Users_1.default.findOne({ where: {
                correo: { [sequelize_1.Op.eq]: email }
            } });
        if (busqueda) {
            const datos = {
                id: busqueda.id,
                correo: busqueda.correo,
                nombre: busqueda.nombre,
            };
            const acces = jsonwebtoken_1.default.sign(datos, token, { expiresIn: '2 days' });
            res.json({ loged: true, token: acces });
        }
        if (!busqueda) {
            const dat = yield Users_1.default.create({
                nombre: given_name,
                apellido: family_name !== null && family_name !== void 0 ? family_name : '',
                dni: '',
                correo: email,
                img: picture,
                dirrecion: '',
                celular: '',
            });
            const acces = jsonwebtoken_1.default.sign({ correo: dat.correo, nombre: dat.nombre }, token, { expiresIn: '2 days' });
            res.json({ loged: true, token: acces });
        }
    }
    catch (error) {
        res.json(error);
    }
    /*    console.log(dat);
       res.json(dat);
       
        {
           sub: '105789591182403945779',
           name: 'FRANKLIN JUNIOR DE LA CRUZ CANO',
           given_name: 'FRANKLIN JUNIOR',
           family_name: 'DE LA CRUZ CANO',
           picture: 'https://lh3.googleusercontent.com/a/AAcHTteoJknuMLYiBcBrFfz0XFFSqD1MqZwjY3vObG3z5lXJ=s96-c',
           email: 'franklin.delacruz@iestpmonfortianos.edu.pe',
           email_verified: true,
           locale: 'es-419',
           hd: 'iestpmonfortianos.edu.pe'
         }
         * */
});
exports.LoginGoogle = LoginGoogle;
// desconectarse
const LoginLogout = (req, res) => {
};
exports.LoginLogout = LoginLogout;
