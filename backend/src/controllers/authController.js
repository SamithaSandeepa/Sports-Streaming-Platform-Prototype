// authController.js
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export async function signup(req, res) {
  const { email, password } = req.body;
  const user = new User({ email, password });
  await user.save();
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.status(201).json({ token });
}

export async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
}
