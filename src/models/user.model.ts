import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "interfaces";

const UserSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  register_date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IUser & Document>("User", UserSchema);
