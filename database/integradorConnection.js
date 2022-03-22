import {Sequelize}  from 'sequelize'


var projects = new Sequelize(
  'sohochallenge',
  'root',
  '1337',
  {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql',
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