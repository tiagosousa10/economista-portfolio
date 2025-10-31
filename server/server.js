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

// Configuração de CORS
const allowedOrigins = [
  "http://localhost:5173", // Seu Vite local
  "http://localhost:3000", // Caso acesse direto
  "https://economista-portfolio-client.vercel.app", // Frontend no Vercel
];

const corsOptions = {
  origin: function (origin, callback) {
    // Permitir requisições sem origin (ex: mobile apps, Postman)
    if (!origin) return callback(null, true);

    // Verificar se está na lista de origens permitidas
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      // Em produção, também aceitar qualquer subdomínio do vercel.app
      if (
        process.env.NODE_ENV === "production" &&
        origin.endsWith(".vercel.app")
      ) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
};

//middlewares
app.use(cors(corsOptions));
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
