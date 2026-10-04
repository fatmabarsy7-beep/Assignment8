import jwt from "jsonwebtoken";

export function authMiddleware(req, res, next) {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) {
      return res.status(401).json({
        message: "Authorization header is required"
      });
    }

    const token = authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Token is required"
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token"
    });
  }
}