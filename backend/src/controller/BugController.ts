import { Request, Response } from "express";
import { Bug } from "../models/Bug";
import mongoose from "mongoose";

export const getAllBugs = async (_req: Request, res: Response) => {
  const bugs = await Bug.find().populate("project createdBy assignedTo");
  res.json(bugs);
};

export const getBugById = async (req: Request, res: Response) => {
  const bug = await Bug.findById(req.params.id).populate(
    "project createdBy assignedTo"
  );
  if (!bug) return res.status(404).json({ error: "Bug not found" });
  res.json(bug);
};

export const createBug = async (req: Request, res: Response) => {
  try {
    const { title, project, createdBy } = req.body;

    // Basic validation
    if (!title || !project || !createdBy) {
      return res
        .status(400)
        .json({ error: "title, project, and createdBy are required." });
    }

    // Optional: Check for valid ObjectId
    if (
      !mongoose.Types.ObjectId.isValid(project) ||
      !mongoose.Types.ObjectId.isValid(createdBy)
    ) {
      return res
        .status(400)
        .json({ error: "Invalid ObjectId for project or createdBy." });
    }

    const bug = new Bug(req.body);
    await bug.save();
    console.log("Bug created:", bug);
    return res.status(201).json(bug);
  } catch (err: any) {
    console.error("Create Bug Error:", err);
    if (err.name === "ValidationError") {
      return res.status(400).json({ error: err.message });
    }
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateBug = async (req: Request, res: Response) => {
  const bug = await Bug.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!bug) return res.status(404).json({ error: "Bug not found" });
  res.json(bug);
};

export const deleteBug = async (req: Request, res: Response) => {
  const bug = await Bug.findByIdAndDelete(req.params.id);
  if (!bug) return res.status(404).json({ error: "Bug not found" });
  res.json({ message: "Bug deleted" });
};
