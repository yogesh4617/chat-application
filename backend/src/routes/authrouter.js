import express from "express";
import { signup } from "../controllers/authcontroller.js";
const router = express.Router();

router.post("/signup", signup);

router.get("/signin",  (req, res) => {
  return res.send("signin endpoint");
});

router.get("/logout", (req, res) => {
  return res.send("logout endpoint");
});

export default router;
