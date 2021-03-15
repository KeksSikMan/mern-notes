// config.ts
import dotenv from "dotenv";
dotenv.config();

export const configuration = {
  port: process.env.SERVER_PORT,
  db_url: process.env.CONNECTION_URL,
  jwt_secret: process.env.JWT_SECRET,
};
