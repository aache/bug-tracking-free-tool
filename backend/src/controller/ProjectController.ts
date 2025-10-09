import { Request, Response } from "express";
import { Project } from "../models/Project";

export const getAllProjects = async (_req: Request, res: Response) => {
  const projects = await Project.find().populate("teamMembers");
  res.json(projects);
};

export const createProject = async (req: Request, res: Response) => {
  const project = new Project(req.body);
  const { name, description, createdBy } = req.body;
  if (!name || !description || !createdBy) {
    return res.status(400).json({ error: "Name, description, and createdBy are required" });
  }
  await project.save();
  res.status(201).json(project);
};
