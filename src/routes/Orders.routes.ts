import { Router } from "express";
import { GetDetOrder, GetOrders } from "../controller/Orders.controller";

const Route_Orders = Router();

Route_Orders.get('/',GetOrders)
Route_Orders.get('/:order/Details',GetDetOrder)

export default Route_Orders;