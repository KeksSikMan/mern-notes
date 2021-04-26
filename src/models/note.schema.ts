import mongoose, { Schema } from "mongoose";
import { Align, INote } from "../types/interfaces";

const Element: Schema = new Schema(
  {
    text: { type: String, required: false },
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
    section: [{ type: Schema.Types.ObjectId, ref: "Sections" }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<INote>("Notes", NoteSchema);
