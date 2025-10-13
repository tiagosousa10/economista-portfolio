import express from "express";
import {
  login,
  logout,
  signup,
  verify,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/verify", verify);

// check if user is logged in

export default router;
