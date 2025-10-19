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

// Rota de debug para testar cookies
router.get("/debug-cookies", (req, res) => {
  console.log("=== DEBUG COOKIES ===");
  console.log("Cookies recebidos:", req.cookies);
  console.log("Headers:", req.headers);
  console.log("User-Agent:", req.headers["user-agent"]);
  console.log("Origin:", req.headers.origin);
  console.log("Referer:", req.headers.referer);

  res.json({
    success: true,
    cookies: req.cookies,
    headers: {
      "user-agent": req.headers["user-agent"],
      origin: req.headers.origin,
      referer: req.headers.referer,
      cookie: req.headers.cookie,
    },
  });
});

// check if user is logged in

export default router;
