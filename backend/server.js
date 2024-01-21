import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const envFile = process.env;

app.listen(envFile.PORT, () => {
  console.log(`app is live on ${envFile.PORT}`);
});
app.get("/", () => {
  console.log(`GET`);
});
