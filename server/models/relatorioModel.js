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
    figuraPublicId: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // nome do model User
      required: true,
    },
  },
  { timestamps: true }
); // createdAt, updatedAt

const Relatorio = mongoose.model("Relatorio", relatorioSchema);
export default Relatorio;
