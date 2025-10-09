import express from "express";
import {
  obterRelatorios,
  obterRelatorio,
  criarRelatorio,
  atualizarRelatorio,
  removerRelatorio,
} from "../controllers/relatorioController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const relatoriosRouter = express.Router();

relatoriosRouter.get("/", obterRelatorios);
relatoriosRouter.get("/:id", obterRelatorio);
relatoriosRouter.post("/", authMiddleware, criarRelatorio);
relatoriosRouter.put("/:id", authMiddleware, atualizarRelatorio);
relatoriosRouter.delete("/:id", authMiddleware, removerRelatorio);

export default relatoriosRouter;
