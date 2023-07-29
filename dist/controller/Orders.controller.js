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
exports.CreateOrder = exports.GetDetOrder = exports.GetOrder = exports.GetOrders = void 0;
const Orders_1 = __importDefault(require("../models/Orders"));
const DetailsOrders_1 = __importDefault(require("../models/DetailsOrders"));
const date_1 = require("../resource/date");
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
const GetOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.user;
        const busqueda = yield Orders_1.default.findAll({
            where: {
                id_usuario: id
            }
        });
        if (busqueda) {
            return res.status(201).json({ exist: true, busqueda });
        }
        return res.status(201).json({ exist: false });
    }
    catch (error) {
        console.log(error);
    }
});
exports.GetOrder = GetOrder;
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
        const { fechaActualLima, horaActualLima } = (0, date_1.obtenerFechaHora)();
        const { user, products, total } = req.body;
        const UserInfo = req.user;
        if (products) {
            const data_ordern = yield Orders_1.default.create({
                id_usuario: UserInfo.id,
                fecha: fechaActualLima,
                hora: horaActualLima,
                status: 'En proceso',
                dirrecion: `${user.Departamento} / ${user.Distrito} / ${user.Dirrecion}`,
                total: total
            });
            for (const detalleProduct of products) {
                yield DetailsOrders_1.default.create({
                    id_order: data_ordern.id,
                    id_product: detalleProduct.id,
                    Cantidad: detalleProduct.cantidad
                });
            }
            res.json({ pedido: true });
        }
        /* para saber el total
        
        let total = 0

        for(const datadetalle of DetaOrden){
            total+=datadetalle.precio*datadetalle.cantidad;
        }
        
        
       
        const dat = await Orders.create({
            id_usuario:id,
            fecha:fechaActualLima,
            hora:horaActualLima,
            status:'En Proceso',
            dirrecion:'dirrecion',
            total:22.2
        })
        
        if(!dat){
           
            for(const Detalle of DetaOrden){
                await DetailsOrders.create({

                });
            }
            return res.status(404).json({create:false,msg:'Usuario no logeado'})
        }
        res.json({create:true,dat})
         **/
    }
    catch (error) {
        res.json({ create: false, error });
    }
});
exports.CreateOrder = CreateOrder;
