import * as express from "express";
import { IUserRequest } from "../interfaces";
import jwt from "jsonwebtoken";

import { config } from "../../config/config";

const jwtSecret: string = config.jwt_secret;

export default (
  req: IUserRequest,
  res: express.Response,
  next: express.NextFunction
) => {
  const token = req.header("x-auth-token");
  if (!token)
    return res.status(401).json({ message: "No token, authorization denied" });
  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ message: "Token is not valid" });
  }
};
