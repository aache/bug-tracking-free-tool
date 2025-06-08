// models/Bug.ts
import mongoose, { Document, Schema } from "mongoose";
import { BugStatus, BugPriority } from "../types/enums";

export interface IBug extends Document {
  title: string;
  description?: string;
  status: BugStatus;
  priority: BugPriority;
  project: mongoose.Types.ObjectId;
  createdBy: mongoose.Types.ObjectId;
  assignedTo?: mongoose.Types.ObjectId;
  dueDate?: Date;
  tags: string[];
}

const bugSchema = new Schema<IBug>(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: {
      type: String,
      enum: Object.values(BugStatus),
      default: BugStatus.OPEN,
    },
    priority: {
      type: String,
      enum: Object.values(BugPriority),
      default: BugPriority.MEDIUM,
    },
    project: { type: Schema.Types.ObjectId, ref: "Project", required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    assignedTo: { type: Schema.Types.ObjectId, ref: "User" },
    dueDate: { type: Date },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

// Index for performance
bugSchema.index({ project: 1, status: 1 });

export const Bug = mongoose.model<IBug>("Bug", bugSchema);
