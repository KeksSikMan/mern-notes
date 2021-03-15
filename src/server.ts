import express from "express";
import connect from "./connect";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

import { configuration } from "../config/config";

// configuration
const app: express.Application = express();
const port = configuration.port || 8080;

// CORS Middleware
app.use(cors());

// Bodyparser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Logger Middleware
app.use(morgan("dev"));

//
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

// api routes
app.use("/api/auth", require("./routes/auth.routes"));

// DB configuration
const db: string = configuration.db_url.toString();
connect({ db });
