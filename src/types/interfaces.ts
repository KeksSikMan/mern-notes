/* Routes */
import { Request } from "express";
import { Document } from "mongoose";

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

export interface INote extends Document {
  title: string;
  color?: string;
  description?: string;
  favorite?: boolean;
  text?: string;
}

export interface ISection extends Document {
  title: string;
  color?: string;
  description?: string;
  favorite?: boolean;
  notes: [INote];
  owner: Object;
}
