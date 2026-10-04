import { Router } from "express";
import { createAuthor } from "./controller/author.controller.js";
import { authMiddleware } from "../middleware/middleware.js";

const router = Router();

router.post("/authors",authMiddleware, createAuthor);

export default router;