import { Router } from "express";
import { createAuthor } from "./controller/author.controller.js";

const router = Router();

router.post("/authors", createAuthor);

export default router;