import jwt from "jsonwebtoken";

export function generateToken(userId) {
  return jwt.sign({ userId }, process.env.JWT_SECRET_KEY, { expiresIn: "7d" });
}

export function setAuthCookie(res, token) {
    res.cookie("jwt", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true, // Prevents client-side JS from reading the cookie
      sameSite: "strict", // Adjust based on your needs
      secure: process.env.NODE_ENV === "production",
    });
}

export function createAuthForUser(res, userId) {
    const token = generateToken(userId)
    setAuthCookie(res,token)
    return token
}