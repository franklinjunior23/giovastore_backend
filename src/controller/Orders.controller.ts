import { Request, Response } from "express";
import Orders from "../models/Orders";
import DetailsOrders from "../models/DetailsOrders";

export const GetOrders = async(req:Request,res:Response)=>{
    try {
        const data = await Orders.findAll();
        res.json(data)
    } catch (error) {
        res.json({msg:error})
    }
}
export const GetDetOrder = async(req:Request,res:Response)=>{
    try {
        const order_id = req.params.order
        /* 
        const data = await DetailsOrders.findOne({
            where:{
                id_order:order_id
            }
        })
        res.json(data);
        */
        res.send(order_id);
    } catch (error) {
        res.json({msg:error})
    }
}