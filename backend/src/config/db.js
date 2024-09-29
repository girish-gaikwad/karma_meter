// src/config/db.js
const dotenv = require('dotenv')
const { Sequelize } = require("sequelize");
dotenv.config()

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);
module.exports = { sequelize };
