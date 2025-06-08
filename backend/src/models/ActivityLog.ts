// models/ActivityLog.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IActivityLog extends Document {
  action: string;
  bug?: mongoose.Types.ObjectId;
  project?: mongoose.Types.ObjectId;
  performedBy: mongoose.Types.ObjectId;
  metadata?: Record<string, any>;
}

const activityLogSchema = new Schema<IActivityLog>(
  {
    action: { type: String, required: true },
    bug: { type: Schema.Types.ObjectId, ref: "Bug" },
    project: { type: Schema.Types.ObjectId, ref: "Project" },
    performedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    metadata: { type: Schema.Types.Mixed },
  },
  { timestamps: true }
);

export const ActivityLog = mongoose.model<IActivityLog>(
  "ActivityLog",
  activityLogSchema
);
