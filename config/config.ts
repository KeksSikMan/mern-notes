// config.ts
import config from "config";

export const configuration = {
  port: config.get("port"),
  db_url: config.get("dbConfig.connectionUrl"),
};
