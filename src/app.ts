import express from "express";
import 'dotenv/config';
import {sequelize} from "./database";
import cors from 'cors';
import Products from "./models/Products";
import Route_Products from "./routes/Products.routes";
import Route_Orders from "./routes/Orders.routes";

const app = express();
const PUERTO= process.env.PUERTO ;
const Point_defect = process.env.POINT ||'api/';

//confiuraciones 
app.use(cors({
    origin:'*'
}));
app.use(express.json());



app.use(`${Point_defect}/Products`,Route_Products)
app.use(`${Point_defect}/Orders`,Route_Orders)


app.get('/',async(req,res)=>{
    const data = await Products.findAll()
    res.json({data : data})
})

app.listen(PUERTO,async()=>{
    await sequelize.sync({ force: true });
    console.log(`funcionando en el puerto ${PUERTO}`)
})

