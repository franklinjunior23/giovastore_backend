import { Request, Response } from "express";
import Users from "../models/Users";

// login por defecto
export const LoginDefault = (req:Request,res:Response)=>{
    const {} = req.body;


} 
// login con google
export const LoginGoogle = async(req:Request,res:Response)=>{
    try {
        console.log(req.body);
        const { family_name,given_name,email,picture } = req.body;
        const busqueda = await Users.findOne({where:{
            correo:email
        }})
        console.log(busqueda)
        res.json({msg:'usuario encontrado'})
    if(!busqueda){
        const dat = await Users.create({
            nombre:given_name,
            apellido:family_name,
            dni:'',
            correo:email,
            img:picture,
            dirrecion:'',
            celular:'',
        })
        res.json(dat);
       
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