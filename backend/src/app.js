// src/app.js
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import matchRoutes from "./routes/matchRoutes.js";

const app = express();

// 1) CORS: allow any origin, all standard methods, common headers
app.use(
  cors({
    origin: "*", // allow requests from any domain
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Accept",
      "Origin",
      "X-Requested-With",
    ],
    credentials: true, // if you ever send cookies/auth headers
  })
);

// 2) Body parser
app.use(express.json());

// 3) Routes
app.use("/api/auth", authRoutes);
app.use("/api/matches", matchRoutes);

export default app;
