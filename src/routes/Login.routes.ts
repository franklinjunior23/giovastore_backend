import { Router, RouterOptions } from "express";
import { LoginDefault, LoginGoogle } from "../controller/Login.controller";
const Login:Router  = Router();

Login.post('/LoginDefault',LoginDefault)
Login.post('/LoginGoogle',LoginGoogle)

export default Login