import { Router } from "express";
import { GetProducts } from "../controller/Products.controller";

const Route_Products = Router();

Route_Products.get('/',GetProducts);

export default Route_Products