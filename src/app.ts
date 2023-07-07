import express from "express";
import 'dotenv/config'
import {sequelize} from "./database";
import Products from "./models/Products";


const app = express();
const PUERTO= process.env.PUERTO ;
app.get('/',async(req,res)=>{
    const data = await Products.findAll()
    res.json({data : data})
})

app.listen(PUERTO,async()=>{
    await sequelize.sync({ alter: true });
    console.log(`funcionando en el puerto ${PUERTO}`)
})

