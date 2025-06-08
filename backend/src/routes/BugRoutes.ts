import express from "express";
import * as BugController from "../controller/BugController";

const router = express.Router();

router.get("/", BugController.getAllBugs);
router.get("/:id", BugController.getBugById);
router.post("/", BugController.createBug);
router.put("/:id", BugController.updateBug);
router.delete("/:id", BugController.deleteBug);

export default router;
