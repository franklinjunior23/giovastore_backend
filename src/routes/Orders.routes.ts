import { Router } from "express";
import { CreateOrder, GetDetOrder, GetOrders ,GetOrder} from "../controller/Orders.controller";
import { AuthLoged } from "../middleware/Auth";

const Route_Orders = Router();

Route_Orders.get('/',GetOrders)
Route_Orders.get('/user',AuthLoged,GetOrder)
Route_Orders.post('/detalle',AuthLoged,GetDetOrder)
Route_Orders.post('/',AuthLoged,CreateOrder)


export default Route_Orders;