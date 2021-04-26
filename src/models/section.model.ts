import mongoose, { Schema } from "mongoose";
import { ISection } from "interfaces";

const SectionSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    favorite: { type: Boolean, default: false },
    color: { type: String, required: false, default: "#FFFFFF" },
    description: { type: String, required: false, default: "" },
    owner: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ISection>("Sections", SectionSchema);
