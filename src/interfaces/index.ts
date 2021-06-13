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

//* Models
export interface IElement {
  text: String;
  isList: Boolean;
  isTask: Boolean;
  indet: Number;
  alignment: Align;
}
