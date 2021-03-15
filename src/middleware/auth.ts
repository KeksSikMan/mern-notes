import * as express from "express";
import jwt from "jsonwebtoken";

import { configuration } from "../../config/config";

const jwtSecret: string = configuration.jwt_secret;

interface IUserRequest extends express.Request {
  user: any;
}

export default (
  req: IUserRequest,
  res: express.Response,
  next: express.NextFunction
) => {
  const token = req.header("x-auth-token");

  // Check for token
  if (!token)
    return res.status(401).json({ message: "No token, authorization denied" });

  try {
    // Verify token
    const decoded = jwt.verify(token, jwtSecret);
    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ message: "Token is not valid" });
  }
};
