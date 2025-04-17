// Match.js
import mongoose from "mongoose";

const MatchSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: String,
  teams: {
    home: String,
    away: String,
  },
  sport: String,
  time: String,
  date: String,
  isLive: Boolean,
  thumbnail: String,
  viewCount: Number,
});

export default mongoose.models.Match || mongoose.model("Match", MatchSchema);
