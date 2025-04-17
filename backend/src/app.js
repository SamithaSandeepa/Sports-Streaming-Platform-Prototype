// src/app.js
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import matchRoutes from "./routes/matchRoutes.js";

const app = express();

const allowed = [
  "http://localhost:3000",
  "https://sports-streaming-platform-prototype.vercel.app/",
  "https://sports-streaming-platform-prototype.vercel.app",
  
];

app.use(
  cors({
    origin: (origin, cb) => {
      // allow REST clients like Postman with no origin:
      if (!origin) return cb(null, true);
      if (allowed.includes(origin)) return cb(null, true);
      cb(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/matches", matchRoutes);

export default app;
