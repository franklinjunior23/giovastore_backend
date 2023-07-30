import { Request, Response } from "express";
import Orders from "../models/Orders";
import DetailsOrders from "../models/DetailsOrders";
import { obtenerFechaYHoraDeLima } from "../resource/date";
import { Model, Op } from "sequelize";
import Products from "../models/Products";

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

export const CreateOrder =async (req:Request,res:Response) => {
    try {
       const Hora_data= await obtenerFechaYHoraDeLima()
       const {user,products,total} = req.body;
       const UserInfo = req.user;
      if(products){
       if(total!==0){
           const data_ordern:any = await Orders.create({
               id_usuario:UserInfo.id,
               fecha:Hora_data?.fecha,
               hora:Hora_data?.hora,
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
       }else{
           return res.json({pedido:false,msg:''})
       }
       
      
      }
    } catch (error) {
        res.json({create:false,error})
    }
    
}

export const GetDetOrder = async(req:Request,res:Response)=>{
    try {
        const {id} = req.user
        const {id_orden}= req.body
        console.log(id_orden)
       const data = await DetailsOrders.findAll({
        where:{
            id_order:id_orden
        },
        include:[
           { 
            model:Products,
           }
        ]
       })
       res.json(data)  
    } catch (error) {
        res.json({msg:error})
    }
}

/***
 *  const { fechaActualLima, horaActualLima } = obtenerFechaHora();

       
 * 
 * 
 * 
 * 
 */