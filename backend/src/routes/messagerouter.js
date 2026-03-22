import express from "express";

const router = express.Router();

router.get("/send", (req, res) => {
  return res.send("send message endpoint");
});

router.get("/receive", (req, res) => {
  return res.send("receive message endpoint");
});

export default router;
