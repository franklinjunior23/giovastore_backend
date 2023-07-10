import { Request, Response } from "express";
import Products from "../models/Products";

export const GetProducts = async(req:Request, res:Response)=>{
    try {
        const data = await Products.findAll();
        res.json(data)
    } catch (error) {
        res.json({msg:error})
    }
}

