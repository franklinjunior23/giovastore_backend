import { sequelize } from "../database";
import { DataType } from "sequelize-typescript";
import { v4 as uuidv4 } from 'uuid'; // Importa la función uuidv4 para generar IDs únicos
import Products from "./Products";
const DetailsOrders = sequelize.define('Det_Order',{
    id:{
        type:DataType.STRING,
        primaryKey:true,
        defaultValue:() => uuidv4()
    },
    id_order:{
        type:DataType.STRING,
       
    },
    id_product:{
        type:DataType.STRING,
    },
    Cantidad:{
        type:DataType.INTEGER,
        allowNull:false
    },
})
Products.hasMany(DetailsOrders,{
    foreignKey:'id_product',
    sourceKey:'id',
    onDelete:'cascade',
    onUpdate:'cascade'
},)
DetailsOrders.belongsTo(Products,{
    foreignKey:'id_product',
    targetKey:'id',
    
})

export default DetailsOrders;