import { sequelize } from "../database";
import { DataType } from "sequelize-typescript";

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

export default Products