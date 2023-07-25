"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Login_controller_1 = require("../controller/Login.controller");
const Login = (0, express_1.Router)();
Login.post('/LoginDefault', Login_controller_1.LoginDefault);
Login.post('/LoginGoogle', Login_controller_1.LoginGoogle);
exports.default = Login;
