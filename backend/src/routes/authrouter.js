import express from "express";
import { login, logout, signup, updateUserprofile } from "../controllers/authcontroller.js";
import { authMiddleware } from "../middleware/authmiddleware.js";
import { loginLimiter, signupLimiter, updateProfileLimiter } from "../middleware/rateLimiter.js";
const router = express.Router();

router.post("/signup", signupLimiter, signup);

router.post("/signin", loginLimiter, login);

router.get("/logout", logout);

router.put("/update-profile", updateProfileLimiter, authMiddleware, updateUserprofile);

router.get("/isAuth", authMiddleware, async (req, res) => res.status(200).json({ isAuth: true, user: req.user }));

export default router;
