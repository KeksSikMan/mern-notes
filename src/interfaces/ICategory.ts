import { Document } from "mongoose";
import { INote } from "./INote";

export interface ICategory extends Document {
  title: string;
  color?: string;
  description?: string;
  favorite?: boolean;
  notes: [INote];
  owner: Object;
}
