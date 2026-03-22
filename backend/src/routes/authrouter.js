import express from "express";
import { signin } from "../controllers/authcontroller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/signin",  (req, res) => {
  return res.send("signin endpoint");
});

router.get("/logout", (req, res) => {
  return res.send("logout endpoint");
});

export default router;
