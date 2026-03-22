import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/authrouter.js";
import messageRouter from "./routes/messagerouter.js";
import connectDB from "./configs/connectdb.js";

dotenv.config();
await connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
