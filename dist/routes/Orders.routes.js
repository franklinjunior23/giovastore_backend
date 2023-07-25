"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Orders_controller_1 = require("../controller/Orders.controller");
const Route_Orders = (0, express_1.Router)();
Route_Orders.get('/', Orders_controller_1.GetOrders);
Route_Orders.get('/:order/Details', Orders_controller_1.GetDetOrder);
exports.default = Route_Orders;
