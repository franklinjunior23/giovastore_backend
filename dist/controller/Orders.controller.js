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
exports.GetDetOrder = exports.GetOrders = void 0;
const Orders_1 = __importDefault(require("../models/Orders"));
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
        /*
        const data = await DetailsOrders.findOne({
            where:{
                id_order:order_id
            }
        })
        res.json(data);
        */
        res.send(order_id);
    }
    catch (error) {
        res.json({ msg: error });
    }
});
exports.GetDetOrder = GetDetOrder;
