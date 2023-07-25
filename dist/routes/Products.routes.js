"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Products_controller_1 = require("../controller/Products.controller");
const Route_Products = (0, express_1.Router)();
Route_Products.get('/', Products_controller_1.GetProducts);
Route_Products.get('/:nombre', Products_controller_1.getProductOne);
exports.default = Route_Products;
