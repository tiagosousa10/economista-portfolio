import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/mongodb.js";
import connectCloudinary from "./configs/cloudinary.js";
import relatoriosRouter from "./routes/relatoriosRouter.js";
import authRouter from "./routes/authRouter.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 3000;

//Connect to DATABASE
await connectDB();
await connectCloudinary();

const allowed = [
  "https://economista-portfolio-client.vercel.app",
  "http://localhost:5173",
  "http://localhost:3000",
];

//middlewares
app.use(
  cors({
    origin: (origin, cb) => {
      // Permitir requisições sem origin (ex: mobile apps, Postman)
      if (!origin) return cb(null, true);

      // Permitir origens da lista allowed
      if (allowed.includes(origin)) return cb(null, true);

      // Em desenvolvimento, permitir localhost
      if (
        process.env.NODE_ENV !== "production" &&
        origin.includes("localhost")
      ) {
        return cb(null, true);
      }

      cb(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
    exposedHeaders: ["Set-Cookie"],
  })
);
app.use(cookieParser());
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRouter);
app.use("/api/relatorios", relatoriosRouter);

//Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}, http://localhost:${PORT} !`);
  console.log(new Date().toISOString());
});
