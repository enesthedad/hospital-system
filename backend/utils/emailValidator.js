import mongoose from "mongoose";
import { User } from "../models/UserSchema.js";
import validator from "validator";
export const signupValidator = async (email, password) => {
  const exists = await User.findOne({ email });
  if (exists) {
    return {
      success: false,
      error: `email already exits`,
    };
  }
  if (!email || !password) {
    return {
      success: false,
      error: `All fields must be filled!`,
    };
  }
  if (!validator.isStrongPassword(password)) {
    return {
      success: false,
      error: `Please choose a stronger password!`,
    };
  }
  if (!validator.isEmail(email)) {
    return {
      success: false,
      error: `Email is not valid!`,
    };
  }
  return {
    success: true,
  };
};
