import express from "express";
import {
  obterRelatorios,
  obterRelatorio,
  criarRelatorio,
  atualizarRelatorio,
  removerRelatorio,
} from "../controllers/relatorioController.js";
const relatoriosRouter = express.Router();
// #todo: middleware de autenticaçao

relatoriosRouter.get("/", obterRelatorios);
relatoriosRouter.get("/:id", obterRelatorio);
relatoriosRouter.post("/", criarRelatorio);
relatoriosRouter.put("/:id", atualizarRelatorio);
relatoriosRouter.delete("/:id", removerRelatorio);

export default relatoriosRouter;
