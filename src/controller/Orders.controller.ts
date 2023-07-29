import { Request, Response } from "express";
import Orders from "../models/Orders";
import DetailsOrders from "../models/DetailsOrders";
import {  obtenerFechaHora } from "../resource/date";



export const GetOrders = async(req:Request,res:Response)=>{
    try {
        const data = await Orders.findAll();
        res.json(data)
    } catch (error) {
        res.json({msg:error})
    }
}
export const GetOrder=async(req:Request,res:Response)=>{

try {
    const {id} = req.user
    const busqueda = await Orders.findAll({
        where:{
            id_usuario:id
        }
    })
    if(busqueda){
        return res.status(201).json({exist:true,busqueda});
    }
    return res.status(201).json({exist:false})
   
} catch (error) {
    console.log(error)
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
        const { fechaActualLima, horaActualLima } = obtenerFechaHora();

        const {user,products,total} = req.body;
        const UserInfo = req.user;
       if(products){
        const data_ordern:any = await Orders.create({
            id_usuario:UserInfo.id,
            fecha:fechaActualLima,
            hora:horaActualLima,
            status:'En proceso',
            dirrecion:`${user.Departamento} / ${user.Distrito} / ${user.Dirrecion}`,
            total:total
        })
        for(const detalleProduct of products){
            await DetailsOrders.create({ 
                id_order:data_ordern.id,
                id_product:detalleProduct.id,
                Cantidad:detalleProduct.cantidad
            });
        }
        res.json({pedido:true})
       }
        



        /* para saber el total 
        
        let total = 0

        for(const datadetalle of DetaOrden){
            total+=datadetalle.precio*datadetalle.cantidad;
        }
        
        
       
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
         **/ 
    } catch (error) {
        res.json({create:false,error})
    }
    
}