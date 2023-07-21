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

export const getProductOne = async(req:Request,res:Response)=>{
    try {
        const nombreProducto = req.params.nombre;
        const data = await Products.findOne({where:{
            nombre:nombreProducto
        }});
        if(!data){
            return res.status(401).json({msg:'no se encuentra elproducto'})
        }
        res.json(data)
    } catch (error) {
        res.json({msg:error})
    }
}

