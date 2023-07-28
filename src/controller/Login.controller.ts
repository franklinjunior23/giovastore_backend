import { Request, Response } from "express";
import Users from "../models/Users";
import { Op } from "sequelize";
import jwt from 'jsonwebtoken';
import 'dotenv/config'

const token = process.env.SECRET_KEY_JWT || '';
// login por defecto
export const LoginDefault = (req:Request,res:Response)=>{
    const { usuario , contraseña } = req.body;


} 
// login con google
export const LoginGoogle = async(req:Request,res:Response)=>{
    interface InterUser {
        id:string,
        correo:string
        nombre:string
    }
    try {
            const { family_name,given_name,email,picture } = req.body;
            const busqueda:any = await Users.findOne({where:{
                correo:{[Op.eq]:email}
            }})  
        if(busqueda){
            const datos :InterUser ={
                id:busqueda.id,
                correo:busqueda.correo,
                nombre:busqueda.nombre,
            }
            const acces =jwt.sign(datos,token,{expiresIn:'2 days'})
            res.json({loged:true,token:acces});
        }
        if(!busqueda){
            const dat:any = await Users.create({
                nombre:given_name,
                apellido:family_name ?? '',
                dni:'',
                correo:email,
                img:picture,
                dirrecion:'',
                celular:'',
            })
            const acces = jwt.sign({correo:dat.correo,nombre:dat.nombre},token,{expiresIn:'2 days'})
            res.json({loged:true,token:acces});
        }
       
   
    } catch (error) {
        res.json(error)
    }
   
 /*    console.log(dat);
    res.json(dat);
    
     {
        sub: '105789591182403945779',
        name: 'FRANKLIN JUNIOR DE LA CRUZ CANO',
        given_name: 'FRANKLIN JUNIOR',
        family_name: 'DE LA CRUZ CANO',
        picture: 'https://lh3.googleusercontent.com/a/AAcHTteoJknuMLYiBcBrFfz0XFFSqD1MqZwjY3vObG3z5lXJ=s96-c',
        email: 'franklin.delacruz@iestpmonfortianos.edu.pe',
        email_verified: true,
        locale: 'es-419',
        hd: 'iestpmonfortianos.edu.pe'
      }
      * */ 
}
// desconectarse
export const LoginLogout = (req:Request,res:Response)=>{
    
}