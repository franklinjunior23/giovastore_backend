import {Sequelize} from "sequelize";
import 'dotenv/config'

interface Data {
    dbname : string,
    username:string,
    pasword:string
}

export const sequelize = new Sequelize (process.env.DBNAME || '' , process.env.USER || '', process.env.PASWORD, {
    host: process.env.HOST,
    port: Number(process.env.LOCAL),
    dialect: 'mysql',  /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
   
});

 export const Connection =async()=>{
    try {
        await  sequelize.sync();
        console.log("se conecto")
    } catch (error) {
        console.log(error)
    }
 }