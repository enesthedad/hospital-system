import bcrypt from "bcrypt";

export const hashPass = async (pass) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(pass, salt);
  return hash;
};
