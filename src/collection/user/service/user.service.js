import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as authRepository from "../repository/author.repository.js";

export async function register(data) {
  const { name, email, password } = data;

  const existingUser = await authRepository.findUserByEmail(email);

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await authRepository.createUser({
    name,
    email,
    password: hashedPassword
  });

  return {
    id: user._id,
    name: user.name,
    email: user.email
  };
}

export async function login(data) {
  const { email, password } = data;

  const user = await authRepository.findUserByEmail(email);

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isPasswordCorrect = await bcrypt.compare(
    password,
    user.password
  );

  if (!isPasswordCorrect) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    {
      userId: user._id
    },
   "mySuperSecretKey123",
    {
      expiresIn: "1d"
    }
  );

  return {
    token
  };
}