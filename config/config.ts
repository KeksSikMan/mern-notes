// config.ts
import dotenv from "dotenv";
dotenv.config();

// Server
const SERVER = {
  hostname: process.env.SERVER_HOSTNAME,
  port: process.env.SERVER_PORT,
};

// Mongo DB
const MONGO_OPTIONS = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO = {
  db_url: process.env.CONNECTION_URL,
  options: MONGO_OPTIONS,
};

export const config = {
  server: SERVER,
  mongo: MONGO,
  jwt_secret: process.env.JWT_SECRET,
};
