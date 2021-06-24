import { Document } from "mongoose";
import { IElement } from ".";

export interface INote extends Document {
  title: string;
  color?: string;
  description?: string;
  favorite?: boolean;
  element?: IElement;
  category: Object;
}
