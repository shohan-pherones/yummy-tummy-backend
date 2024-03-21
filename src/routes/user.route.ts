import express, { Router } from "express";
import { createCurrentUser } from "../controllers/user.controller";

const router: Router = express.Router();

router.post("/", createCurrentUser);

export default router;
