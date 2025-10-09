import express from "express";
// import { login, logout,  signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

//check if user is logged in
// router.get("/me", protectRoute, (req, res) => {
//   res.status(200).json({ success: true, user: req.user }); // user is attached to req by auth middleware
// });

export default router;
