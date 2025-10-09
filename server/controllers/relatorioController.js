import Relatorio from "../models/relatorioModel.js";

export const obterRelatorios = async (req, res) => {
  try {
    //todo: verificar utilizador clerk
    const relatorioDocument = await Relatorio.find({});
    if (!relatorioDocument)
      return res.json({ success: false, message: "Relatorio não encontrado" });

    return res.json({
      success: true,
      message: "Relatorio encontrado",
      relatorio: relatorioDocument,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const obterRelatorio = async (req, res) => {
  try {
    const { id } = req.params;
    //todo: verificar utilizador clerk
    const relatorioDocument = await Relatorio.findById(id);
    if (!relatorioDocument)
      return res.json({ success: false, message: "Relatorio nao encontrado" });

    return res.json({
      success: true,
      message: "Relatorio encontrado",
      relatorio: relatorioDocument,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const criarRelatorio = async (req, res) => {
  try {
    const { titulo, resumo, texto } = req.body;
    //todo: verificar utilizador clerk
    //criar relatorio
    const created = await Relatorio.create({
      titulo,
      resumo,
      texto,
    });

    return res.status(201).json({
      success: true,
      message: "Relatorio criado com sucesso!",
      relatorio: created,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const atualizarRelatorio = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, resumo, texto } = req.body;

    //todo: verificar utilizador clerk
    const relatorioDocument = await Relatorio.findById(id);
    if (!relatorioDocument)
      return res.json({ success: false, message: "Relatorio nao encontrado" });

    //atualizar relatorio
    const updated = await Relatorio.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          titulo: titulo,
          resumo: resumo,
          texto: texto,
        },
      }
    );

    if (!updated)
      return res.json({ success: false, message: "Relatorio nao atualizado" });

    return res.status(200).json({
      success: true,
      message: "Relatorio atualizado com sucesso!",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const removerRelatorio = async (req, res) => {
  try {
    //todo: verificar utilizador clerk
    const { id } = req.params;
    const relatorioDocument = await Relatorio.findById(id);

    if (!relatorioDocument)
      return res.json({ success: false, message: "Relatorio não encontrado" });

    await Relatorio.deleteOne({ _id: id });

    return res.json({ success: true, message: "Relatorio removido" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
