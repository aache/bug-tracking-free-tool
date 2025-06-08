// app.ts
import express from "express";
import { connectInMemoryDB } from "./db";
import { User } from "./models/User";

const app = express();
app.use(express.json());

// Connect to in-memory DB
connectInMemoryDB();

// Routes
app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/users", async (_req, res) => {
  const users = await User.find();
  res.send(users);
});

// Start server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
