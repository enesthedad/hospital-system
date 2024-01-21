import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import workoutRouter from "./routes/workout.js";
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
app.use(express.json());
app.use("/api/v1", workoutRouter);
app.listen(envFile.PORT, () => {
  console.log(`app is live on ${envFile.PORT}`);
  connectDB();
});
app.get("/", (req, res) => {
  res.status(200).json({
    message: "successfully",
  });
});
