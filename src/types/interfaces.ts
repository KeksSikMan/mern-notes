/* Routes */
import { Request } from "express";
import { Document } from "mongoose";

export interface IUserRequest extends Request {
  user: any;
}

export enum Align {
  left = 1,
  center,
  right,
}

/* Models */
export interface IUser extends Document {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface IElement {
  text: String;
  isList: Boolean;
  isTask: Boolean;
  indet: Number;
  alignment: Align;
}

export interface INote extends Document {
  title: string;
  color?: string;
  description?: string;
  favorite?: boolean;
  element?: IElement;
  section: Object;
}

export interface ISection extends Document {
  title: string;
  color?: string;
  description?: string;
  favorite?: boolean;
  notes: [INote];
  owner: Object;
}
