// app.ts
import express from "express";
import { connectInMemoryDB } from "./db";
import bugRoutes from "./routes/BugRoutes";
import projectRoutes from "./routes/ProjectRoutes";
import userRoutes from "./routes/UserRoutes";

const app = express();
app.use(express.json());

// Connect to in-memory DB
connectInMemoryDB();

app.use("/api/bugs", bugRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/users", userRoutes);

// Start server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
