import mongoose from "mongoose";
import { config } from "../config/config";

const db = config.mongo.db_url;
const options = config.mongo.options;

export default () => {
  const connect = () => {
    mongoose
      .connect(db, options)
      .then(() => {
        return console.info(`Successfully connected to ${db}`);
      })
      .catch((error) => {
        console.error("Error connecting to database: ", error);
        return process.exit(1);
      });
  };
  connect();
  mongoose.connection.on("disconnected", connect);
};
