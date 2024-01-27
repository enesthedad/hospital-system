import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();
const secretKey = process.env.JWT_SECRET;
export const tokenCreator = (id) => {
  return jwt.sign({ id }, secretKey, { expiresIn: "15d" });
};
