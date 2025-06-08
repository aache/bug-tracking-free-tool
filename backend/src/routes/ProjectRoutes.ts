import express from "express";
import * as ProjectController from "../controller/ProjectController";

const router = express.Router();

router.get("/", ProjectController.getAllProjects);
router.post("/", ProjectController.createProject);

export default router;
