// src/app.js
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import matchRoutes from "./routes/matchRoutes.js";

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "https://sports-streaming-platform-prototype.vercel.app",
  "sports-streaming-platform-protot-git-fd2346-samitha99s-projects.vercel.app",
  "*",
];
app.use(cors({ origin: allowedOrigins }));

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/matches", matchRoutes);

export default app;
