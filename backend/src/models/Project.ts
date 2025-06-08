// models/Project.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IProject extends Document {
  name: string;
  description?: string;
  createdBy: mongoose.Types.ObjectId;
  teamMembers: mongoose.Types.ObjectId[];
}

const projectSchema = new Schema<IProject>(
  {
    name: { type: String, required: true },
    description: { type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    teamMembers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export const Project = mongoose.model<IProject>("Project", projectSchema);
