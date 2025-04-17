// src/app.js
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import matchRoutes from "./routes/matchRoutes.js";

const app = express();

app.use(
  cors({
    origin: "*", // allow requests from any domain
    // methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    // allowedHeaders: [
    //   "Content-Type",
    //   "Authorization",
    //   "Accept",
    //   "Origin",
    //   "X-Requested-With",
    // ],
    // credentials: true, // if you ever send cookies/auth headers
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/matches", matchRoutes);

export default app;
