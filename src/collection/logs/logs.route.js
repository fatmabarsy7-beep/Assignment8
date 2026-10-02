import { Router } from "express";
import { createLog } from "./controller/logs.controller.js";

const router = Router();

router.post("/logs", createLog);

export default router;


