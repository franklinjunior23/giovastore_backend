import { sequelize } from "../database";
import { DataType } from "sequelize-typescript";

const DetailsOrders = sequelize.define('Det_Order',{
    id:{
        type:DataType.STRING,
        primaryKey:true,
        
    },
    id_order:{
        type:DataType.STRING,
       
    },
    id_product:{
        type:DataType.INTEGER,
        allowNull:false
    },
    Cantidad:{
        type:DataType.INTEGER,
        allowNull:false
    },
    total:{
        type:DataType.FLOAT,
        allowNull:false
    }
})

export default DetailsOrders;