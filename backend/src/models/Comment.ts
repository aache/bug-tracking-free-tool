// models/Comment.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IComment extends Document {
  content: string;
  bug: mongoose.Types.ObjectId;
  createdBy: mongoose.Types.ObjectId;
}

const commentSchema = new Schema<IComment>(
  {
    content: { type: String, required: true },
    bug: { type: Schema.Types.ObjectId, ref: "Bug", required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export const Comment = mongoose.model<IComment>("Comment", commentSchema);
