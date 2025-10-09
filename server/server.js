import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/mongodb.js";
import connectCloudinary from "./configs/cloudinary.js";
import relatoriosRouter from "./routes/relatoriosRouter.js";
import authRouter from "./routes/authRouter.js";

const app = express();
const PORT = process.env.PORT || 3000;

//Connect to DATABASE
await connectDB();
await connectCloudinary();

//middlewares
app.use(cors());
// app.use(clerkMiddleware());
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
