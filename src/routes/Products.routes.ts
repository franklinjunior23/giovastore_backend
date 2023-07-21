import { Router } from "express";
import { GetProducts, getProductOne } from "../controller/Products.controller";

const Route_Products = Router();

Route_Products.get('/',GetProducts);
Route_Products.get('/:nombre',getProductOne);

export default Route_Products