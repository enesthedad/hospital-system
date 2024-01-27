import { User } from "../models/UserSchema.js";
import bcrypt from "bcrypt";
import { signupValidator } from "../utils/emailValidator.js";
import { tokenCreator } from "../utils/tokenCreator.js";
import { hashPass } from "../utils/hashPassword.js";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400).json({
      success: false,
      error: `${email} is not signed up.Please signup to our site!`,
    });
    console.log(user);
    if (user) {
      const validate = await bcrypt.compare(password, user.password);
      if (validate) {
        res.status(200).json({
          success: true,
          message: `Loged in ${user._id}=>${user.email}`,
        });
      }
    }
  }
};

export const signupUser = async (req, res) => {
  const { email, password } = req.body;
  const response = await signupValidator(email, password);

  if (!response.success) {
    res.status(400).json({
      success: false,
      message: response.error,
    });
  }
  if (response.success) {
    try {
      const user = await User.create({
        email,
        password: await hashPass(password),
      });
      const token = tokenCreator(user._id);
      res.status(200).json({
        email,
        token,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};
