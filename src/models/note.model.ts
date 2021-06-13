import mongoose, { Schema } from "mongoose";
import { Align } from "../interfaces";
import { INote } from "../interfaces/INote";

const Element: Schema = new Schema(
  {
    text: { type: String, required: false, default: "" },
    isList: { type: Boolean, default: false },
    isTask: { type: Boolean, default: false },
    indet: { type: Number, default: 0 },
    alignment: { type: Align, default: 1 },
  },
  {
    timestamps: true,
  }
);

export const NoteSchema: Schema = new Schema(
  {
    title: { type: String, required: true, min: 1, max: 16 },
    favorite: { type: Boolean, default: false },
    color: { type: String, required: false, default: "#FFFFFF" },
    description: { type: String, required: false, default: "", max: 256 },
    content: [Element],
    category: [{ type: Schema.Types.ObjectId, ref: "Categories" }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<INote>("Notes", NoteSchema);
