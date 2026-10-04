import { Router } from "express";
import { register, login, createAuthor } from "./controller/author.controller.js";
import { authMiddleware } from "../middleware/middleware.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/authors",authMiddleware, createAuthor);


export default router;