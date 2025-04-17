// matchRoutes.js
import { Router } from "express";
import {
  listMatches,
  getMatch,
  createMatch,
} from "../controllers/matchController.js";
import auth from "../middleware/auth.js";

const router = Router();
router.get("/", listMatches);
router.get("/:id", getMatch);
router.post("/", auth, createMatch);
export default router;
