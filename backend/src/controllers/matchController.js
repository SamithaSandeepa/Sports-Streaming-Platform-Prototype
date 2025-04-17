// matchController.js
import Match from "../models/Match.js";

export async function listMatches(req, res) {
  const matches = await Match.find();
  res.json(matches);
}

export async function getMatch(req, res) {
  const match = await Match.findOne({ id: req.params.id });
  if (!match) return res.sendStatus(404);
  res.json(match);
}

// (Optional) admin route
export async function createMatch(req, res) {
  const match = new Match(req.body);
  await match.save();
  res.status(201).json(match);
}
