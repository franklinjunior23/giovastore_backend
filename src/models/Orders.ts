import { sequelize } from "../database";
import { DataType } from "sequelize-typescript";
import DetailsOrders from "./DetailsOrders";
import { v4 as uuidv4 } from 'uuid'; // Importa la función uuidv4 para generar IDs únicos


const Orders = sequelize.define('Orders',{
    id:{
        type:DataType.STRING,
        primaryKey:true,
        defaultValue:() => uuidv4()
    },

    id_usuario:{
        type:DataType.STRING,
        allowNull:false
    },
    fecha:{
        type:DataType.STRING,
        allowNull:false
    },
    hora:{
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

Orders.hasMany(DetailsOrders,{
    foreignKey:'id_order',
    sourceKey:'id'
})
DetailsOrders.belongsTo(Orders,{
    foreignKey:'id_order',
    targetKey:'id'
})

export default Orders;