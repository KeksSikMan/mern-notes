import mongoose, { Schema } from "mongoose";
import { ISection } from "interfaces";

const SectionSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    color: { type: String, required: false, default: "#FFFFFF" },
    description: { type: String, required: false, default: "" },
    //timestamp: { type: Date, default: Date.now },
    favorite: { type: Boolean, required: false, default: false },
    owner: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ISection>("Section", SectionSchema);
