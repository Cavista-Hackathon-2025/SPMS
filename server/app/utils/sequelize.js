import Sequelize from 'sequelize';
import { config } from 'dotenv';

config({ path: '.env' })
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_USER_PASSWORD,
  {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
  }
);

export default sequelize;