import {Sequelize}  from 'sequelize'
import dotenv from 'dotenv'
dotenv.config();




var projects = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_CONNECTION,
    define: {
      timestamps: false
  }
  }
);


projects
  .authenticate()
  .then(() => {
    console.log("Connected to database with sequelize");
  })
  .catch((err) => {
    console.log("err: ", err);
  });

export {projects};