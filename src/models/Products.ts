import { faker } from "@faker-js/faker";
import { sequelize } from "../database";
import { DataType } from "sequelize-typescript";
import { v4 as uuidv4 } from 'uuid'; // Importa la función uuidv4 para generar IDs únicos

const Products = sequelize.define(
  "Products",
  {
    id: {
      type: DataType.STRING,
      primaryKey: true,
      defaultValue:() => uuidv4()
    },
    nombre: {
      type: DataType.STRING,
      allowNull: false,
    },
    img:{
      type:DataType.STRING,
      allowNull:false
    },
    precio: {
      type: DataType.STRING,
      allowNull: false,
    },
    descripcion:{
        type:DataType.STRING,
        allowNull:false,
    },
    stock:{
      type:DataType.INTEGER,
      allowNull:false,
    },
  },
);
const up = async()=>{
  try {
      await Products.sync();
      await Products.create({
        nombre:faker.commerce.productName(),
        img:faker.image.food(450, 400, true),
        precio:faker.commerce.price({min:100,max:1000}),
        descripcion:faker.commerce.productDescription(),
        stock:faker.commerce.price({ min: 10, max: 30, dec: 0 })
      })
  } catch (error) {
    console.log(error)
  }
}







export default Products