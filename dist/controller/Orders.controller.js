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
exports.CreateOrder = exports.GetDetOrder = exports.GetOrders = void 0;
const Orders_1 = __importDefault(require("../models/Orders"));
const DetailsOrders_1 = __importDefault(require("../models/DetailsOrders"));
const date_1 = require("../resource/date");
const { fechaActualLima, horaActualLima } = (0, date_1.obtenerFechaHora)();
const GetOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Orders_1.default.findAll();
        res.json(data);
    }
    catch (error) {
        res.json({ msg: error });
    }
});
exports.GetOrders = GetOrders;
const GetDetOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order_id = req.params.order;
        const data = yield DetailsOrders_1.default.findOne({
            where: {
                id_order: order_id
            }
        });
        if (data) {
            return res.json(data);
        }
        res.send(order_id);
    }
    catch (error) {
        res.json({ msg: error });
    }
});
exports.GetDetOrder = GetDetOrder;
const CreateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const DetaOrden = req.body.DetaOrden;
        console.log(fechaActualLima, horaActualLima);
        const { id } = req.user;
        console.log(id);
        /* para saber el total
        
        let total = 0

        for(const datadetalle of DetaOrden){
            total+=datadetalle.precio*datadetalle.cantidad;
        }
        
        
        **/
        const dat = yield Orders_1.default.create({
            id_usuario: id,
            fecha: fechaActualLima,
            hora: horaActualLima,
            status: 'En Proceso',
            dirrecion: 'dirrecion',
            total: 22.2
        });
        if (!dat) {
            for (const Detalle of DetaOrden) {
                yield DetailsOrders_1.default.create({});
            }
            return res.status(404).json({ create: false, msg: 'Usuario no logeado' });
        }
        res.json({ create: true, dat });
    }
    catch (error) {
        res.json({ create: false, error });
    }
});
exports.CreateOrder = CreateOrder;
