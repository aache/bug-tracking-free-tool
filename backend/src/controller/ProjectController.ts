import { Request, Response } from "express";
import { Project } from "../models/Project";

export const getAllProjects = async (_req: Request, res: Response) => {
  const projects = await Project.find().populate("teamMembers");
  res.json(projects);
};

export const createProject = async (req: Request, res: Response) => {
  const project = new Project(req.body);
  await project.save();
  res.status(201).json(project);
};
