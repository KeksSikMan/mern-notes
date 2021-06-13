import mongoose, { Schema } from "mongoose";
import { ICategory } from "../interfaces/ICategory";

const CategorySchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false, default: "" },
    favorite: { type: Boolean, default: false },
    color: { type: String, required: false, default: "#FFFFFF" },
    owner: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ICategory>("Categories", CategorySchema);
