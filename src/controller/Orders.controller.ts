import { Request, Response } from "express";
import Orders from "../models/Orders";
import DetailsOrders from "../models/DetailsOrders";
import {  obtenerFechaHora } from "../resource/date";


const { fechaActualLima, horaActualLima } = obtenerFechaHora();
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
        
        const data = await DetailsOrders.findOne({
            where:{
                id_order:order_id
            }
        })
        if(data){
           return res.json(data);
        }
        
        res.send(order_id);
    } catch (error) {
        res.json({msg:error})
    }
}
export const CreateOrder =async (req:Request,res:Response) => {
    try {
        const DetaOrden = req.body.DetaOrden;
        console.log(fechaActualLima,horaActualLima);
        const {id} = req.user
        console.log(id)

        /* para saber el total 
        
        let total = 0

        for(const datadetalle of DetaOrden){
            total+=datadetalle.precio*datadetalle.cantidad;
        }
        
        
        **/ 
        const dat = await Orders.create({
            id_usuario:id,
            fecha:fechaActualLima,
            hora:horaActualLima,
            status:'En Proceso',
            dirrecion:'dirrecion',
            total:22.2
        })
        
        if(!dat){
           
            for(const Detalle of DetaOrden){
                await DetailsOrders.create({ 

                });
            }
            return res.status(404).json({create:false,msg:'Usuario no logeado'})
        }
        res.json({create:true,dat})
    } catch (error) {
        res.json({create:false,error})
    }
    
}