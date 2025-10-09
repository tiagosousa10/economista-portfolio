import { clerkClient } from "@clerk/express";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

//Middleware TODO: adicionar o clerk
export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Não autorizado. Token nao fornecido" });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({ message: "Token nao valido" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({ message: "Utilizador nao encontrado" });
    }

    // Attach the user object to the request
    req.user = user;

    next();
  } catch (error) {
    console.log("Error in protectRoute middleware", error);
    res.status(500).json({ message: error.message });
  }
};
