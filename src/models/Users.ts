import { faker } from "@faker-js/faker";
import { sequelize } from "../database";
import { DataType } from "sequelize-typescript";

const Users = sequelize.define('Users',{
    id:{
        type:DataType.STRING,
        primaryKey:true,
        defaultValue:faker.database.mongodbObjectId()
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
export default Users