import mongoose from "mongoose";

const relatorioSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
      unique: true,
    },

    resumo: {
      type: String,
      required: true,
    },
    texto: {
      type: String,
      required: true,
    },
    figuraUrl: {
      type: String,
    },
  },
  { timestamps: true }
); // createdAt, updatedAt

const Relatorio = mongoose.model("Relatorio", relatorioSchema);
export default Relatorio;
