import express from "express";
import 'dotenv/config';
import {sequelize} from "./database";
import cors from 'cors';
import Route_Products from "./routes/Products.routes";
import Route_Orders from "./routes/Orders.routes";
import Login from "./routes/Login.routes";


const app = express();
const PUERTO= process.env.PORT ;
const Point_defect = process.env.POINT ||'api/';

//configuraciones 
app.use(cors({
    origin:'*'
}));
app.use(express.json());

app.use(`${Point_defect}/Products`,Route_Products)
app.use(`${Point_defect}/Orders`, Route_Orders)
app.use(`${Point_defect}/Auth`,Login)

app.listen(PUERTO,async()=>{
    // force: true 
    // alter: true
   // para tener cambios , actualizacion de la bd /
    await sequelize.sync({alter: true});
    console.log(`http://localhost:${PUERTO}/api`)
})

