import express from "express";
import multer from "multer";
import {
  obterRelatorios,
  obterRelatorio,
  criarRelatorio,
  atualizarRelatorio,
  removerRelatorio,
} from "../controllers/relatorioController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const relatoriosRouter = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

relatoriosRouter.get("/", obterRelatorios);
relatoriosRouter.get("/:id", obterRelatorio);
relatoriosRouter.post(
  "/",
  authMiddleware,
  upload.single("figura"),
  criarRelatorio
);
relatoriosRouter.put(
  "/:id",
  authMiddleware,
  upload.single("figura"),
  atualizarRelatorio
);
relatoriosRouter.delete("/:id", authMiddleware, removerRelatorio);

export default relatoriosRouter;
