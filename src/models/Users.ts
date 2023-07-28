import { v4 as uuidv4 } from 'uuid'
import { sequelize } from "../database";
import { DataType } from "sequelize-typescript";
import Orders from "./Orders";

const Users = sequelize.define('Users',{
    id:{
        type:DataType.STRING,
        primaryKey:true,
        defaultValue:() => uuidv4()
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
    img:{
        type:DataType.STRING,
    },
    dirrecion :{
        type:DataType.STRING,
        allowNull:false
    },
    celular:{
        type:DataType.INTEGER,
        allowNull:false
    }
})
Users.hasMany(Orders,{
    foreignKey:'id_usuario',
    sourceKey:'id'
})
Orders.belongsTo(Orders,{
    foreignKey:'id_usuario',
    targetKey:'id'
})
export default Users