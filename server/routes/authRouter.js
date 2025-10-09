import express from "express";
import { login, logout, signup } from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// check if user is logged in
router.get("/me", authMiddleware, (req, res) => {
  res.status(200).json({ success: true, user: req.user }); // user is attached to req by auth middleware
});

export default router;
