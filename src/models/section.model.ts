import mongoose, { Document, Schema } from "mongoose";
import { ISection } from "interfaces";

const SectionSchema = new Schema({
  name: { type: String, required: true },
  color: { type: String, required: false },
  description: { type: String, required: false },
  timestamp: { type: Date, default: Date.now },
  favorite: { type: Boolean, default: false },
  owner: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

export default mongoose.model<ISection & Document>("Section", SectionSchema);
