import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import { config } from "../config/config";
// Connect to Mongo DB
import connect from "./connect";

// initialize server configuration
const app: express.Application = express();
const port = config.server.port;
const hostname = config.server.hostname;

// CORS Middleware
app.use(cors());

// Bodyparser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Logger Middleware
app.use(morgan("dev"));

// api routes
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/section", require("./routes/section.routes"));
app.use("/api/section", require("./routes/notes.routes"));

// Listener
app.listen(port, () => {
  console.log(`Server started at http://${hostname}:${port}`);
});

// DB connect
connect();
