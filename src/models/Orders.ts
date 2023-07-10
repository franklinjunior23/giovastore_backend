import { sequelize } from "../database";
import { DataType } from "sequelize-typescript";

const Orders = sequelize.define('Orders',{
    id:{
        type:DataType.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    id_usuario:{
        type:DataType.STRING,
        allowNull:false
    },
    fecha:{
        type:DataType.STRING,
        allowNull:false
    },
    status:{
        type:DataType.STRING,
        allowNull:false
    },
    dirrecion:{
        type:DataType.STRING,
        allowNull:false
    },
    total:{
        type:DataType.FLOAT,
        allowNull:false
    }
})
export default Orders;