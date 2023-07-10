import { sequelize } from "../database";
import { DataType } from "sequelize-typescript";

const Users = sequelize.define('Users',{
    id:{
        primaryKey:true,
        type:DataType.STRING 
    },
    nombre:{
        type:DataType.STRING,
        allowNull:false
    },
    apellido:{
        type:DataType.STRING,
        allowNull:false
    },
    dni:{
        type:DataType.INTEGER,
        allowNull:false
    },
    correo:{
        type:DataType.STRING,
        allowNull:false
    },
    dirrecion :{
        type:DataType.STRING,
        allowNull:false
    },
    celular:{
        type:DataType.NUMBER,
        allowNull:false
    }
})