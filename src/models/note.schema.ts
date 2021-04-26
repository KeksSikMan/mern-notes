import { Schema } from "mongoose";

export const NoteSchema: Schema = new Schema(
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
