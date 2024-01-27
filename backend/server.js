import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import workoutRouter from "./routes/workout.js";
import userRouter from "./routes/user.js";
import { tokenCreator } from "./utils/tokenCreator.js";
const app = express();

dotenv.config();

const envFile = process.env;
const connectDB = () => {
  mongoose
    .connect(envFile.MONGO_URL)
    .then(() => {
      console.log("Connected to db");
    })
    .catch((err) => console.log(err));
};
app.use(cors());
app.use(express.json());
app.use("/api/v1", workoutRouter);
app.use("/user", userRouter);

app.listen(envFile.PORT, () => {
  console.log(`app is live on ${envFile.PORT}`);
  connectDB();
});
app.get("/", (req, res) => {
  res.status(200).json({
    message: "successfully",
  });
});
