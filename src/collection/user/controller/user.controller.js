import * as authService from "../service/auth.service.js";

export async function register(req, res, next) {
  try {
    const user = await authService.register(req.body);

    res.status(201).json({
      message: "User registered successfully",
      user
    });
  } catch (error) {
    next(error);
  }
}

export async function login(req, res, next) {
  try {
    const result = await authService.login(req.body);

    res.status(200).json({
      message: "Login successfully",
      ...result
    });
  } catch (error) {
    next(error);
  }
}