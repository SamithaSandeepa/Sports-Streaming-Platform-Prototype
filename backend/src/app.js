// src/app.js
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import matchRoutes from "./routes/matchRoutes.js";

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "https://sports-streaming-platform-prototype.vercel.app",
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/matches", matchRoutes);

export default app;
