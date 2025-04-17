// src/config/db.js
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export async function connectDB() {
  await mongoose.connect(process.env.MONGODB_URI, {
    // no longer needed in MongoDB Node.js driver v4+
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  });
  console.log("✅ MongoDB connected");
}
