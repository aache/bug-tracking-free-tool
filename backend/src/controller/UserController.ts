import { Request, Response } from "express";
import { User } from "../models/User";

export const getAllUsers = async (_req: Request, res: Response) => {
  const users = await User.find();
  res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const user = new User(req.body);
  const { name , email , passwordHash } = req.body;
  if (!name|| !email || !passwordHash) {
    return res.status(400).json({ error: "Name , email and password are required" });
  }
  await user.save();
  res.status(201).json(user);
};
