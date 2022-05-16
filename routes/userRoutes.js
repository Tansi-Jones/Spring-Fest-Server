import express from "express";

import { submit } from "../controllers/userController.js";

// Based on our app.use route in index.js, all routes will begin with  "http://localhost:5000/api/user" to login or sign-up user
const router = express.Router();

// User routes for Registration (handled by Admin) and Login (handled by Users)
router.post("/submit", submit);

export default router;
