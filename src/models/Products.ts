import { sequelize } from "../database";
import { DataType } from "sequelize-typescript";
import { faker } from '@faker-js/faker';
const Products = sequelize.define(
  "Products",
  {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
        img:faker.image.food(1000, 1600, true),
        precio:faker.commerce.price({min:100,max:1000}),
        descripcion:faker.commerce.productDescription(),
        stock:faker.commerce.price({ min: 10, max: 30, dec: 0 })
      })
  } catch (error) {
    console.log(error)
  }
}
up()



export default Products