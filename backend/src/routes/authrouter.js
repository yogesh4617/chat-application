import express from "express";
import { login, logout, signup, updateUserprofile } from "../controllers/authcontroller.js";
import { authMiddleware } from "../middleware/authmiddleware.js";
const router = express.Router();

router.post("/signup", signup);

router.post("/signin", login );

router.get("/logout", logout);

router.put("/update-profile", authMiddleware, updateUserprofile);

router.get("/isAuth", authMiddleware, async (req, res) => res.status(200).json({ isAuth: true, user: req.user }));

export default router;
