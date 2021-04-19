/* Routes */
import { Request } from "express";

export interface IUserRequest extends Request {
  user: any;
}

/* Models */
export interface IUser extends Document {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface ISection extends Document {
  name: string;
  color: string;
  timestamp: Date;
  description: string;
  favorite: boolean;
  //owner: Object;
}
