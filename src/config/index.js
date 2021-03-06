import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 4000;
export const DB_ENV = {
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_PORT: process.env.DB_PORT,
  DB_HOST: process.env.DB_HOST,
};
export const SECRET_KEY = process.env.JWT_SECRET_KEY;
export const AWS_KEY = process.env.AWS_KEY;
export const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;
export const SALT = process.env.SALT;
export const BURKET = process.env.BURKET;
