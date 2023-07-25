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
exports.getProductOne = exports.GetProducts = void 0;
const Products_1 = __importDefault(require("../models/Products"));
const GetProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Products_1.default.findAll();
        res.json(data);
    }
    catch (error) {
        res.json({ msg: error });
    }
});
exports.GetProducts = GetProducts;
const getProductOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nombreProducto = req.params.nombre;
        const data = yield Products_1.default.findOne({ where: {
                nombre: nombreProducto
            } });
        if (!data) {
            return res.status(401).json({ msg: 'no se encuentra elproducto' });
        }
        res.json(data);
    }
    catch (error) {
        res.json({ msg: error });
    }
});
exports.getProductOne = getProductOne;
