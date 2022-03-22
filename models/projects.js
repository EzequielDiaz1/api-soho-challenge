import { Model, DataTypes } from 'sequelize'
import {projects} from '../database/integradorConnection.js'



export class Projects extends Model {}


Projects.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    siteImageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    logoImageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tituloProyecto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    backgroundColor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "projects",
    sequelize: projects,
  }
);
