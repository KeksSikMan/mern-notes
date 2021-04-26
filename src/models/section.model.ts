import mongoose, { Schema } from "mongoose";
import { ISection } from "interfaces";

const NoteSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    favorite: { type: Boolean, default: false },
    color: { type: String, required: false, default: "#FFFFFF" },
    description: { type: String, required: false, default: "" },
    text: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const SectionSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    favorite: { type: Boolean, default: false },
    color: { type: String, required: false, default: "#FFFFFF" },
    description: { type: String, required: false, default: "" },
    notes: [NoteSchema],
    owner: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ISection>("Section", SectionSchema);
