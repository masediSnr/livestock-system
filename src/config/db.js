const { Sequelize } = require('sequelize');
const database = process.env.DB_NAME || "livestock"
const user = process.env.DB_USER || "postgres"
const pass = process.env.DB_PASS

const sequelize = new Sequelize(
  database,
  user,
  pass,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
  }
);


module.exports = sequelize;