// src/app.js
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import matchRoutes from "./routes/matchRoutes.js";

const app = express();

// Allow only your frontend domain (or use "*" if you want everyone)
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://sports-streaming-platform-prototype.vercel.app",
    ],
  })
);

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/matches", matchRoutes);

export default app;
