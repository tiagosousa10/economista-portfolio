import Relatorio from "../models/relatorioModel.js";

export const obterRelatorios = async (req, res) => {
  try {
    const relatorioDocument = await Relatorio.find({});
    if (!relatorioDocument)
      return res.json({ success: false, message: "Relatorio não encontrado" });

    return res.json({
      success: true,
      message: "Relatorio encontrado",
      relatorio: relatorioDocument,
    });
  } catch (error) {
    console.log("Error in obterRelatorios,", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const obterRelatorio = async (req, res) => {
  try {
    const { id } = req.params;

    const relatorioDocument = await Relatorio.findById(id);
    if (!relatorioDocument)
      return res.json({ success: false, message: "Relatorio nao encontrado" });

    return res.json({
      success: true,
      message: "Relatorio encontrado",
      relatorio: relatorioDocument,
    });
  } catch (error) {
    console.log("Error in obterRelatorio,", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const criarRelatorio = async (req, res) => {
  try {
    //todo: verificar utilizador
    const currentUserId = req.user._id;

    if (!currentUserId)
      return res.json({ success: false, message: "Utilizador nao encontrado" });

    const { titulo, resumo, texto } = req.body;

    if (!titulo || !resumo || !texto)
      return res.json({
        success: false,
        message: "Todos os campos obrigatorios",
      });

    //criar relatorio
    const created = await Relatorio.create({
      titulo,
      resumo,
      texto,
      user: currentUserId,
    });

    return res.status(201).json({
      success: true,
      message: "Relatorio criado com sucesso!",
      relatorio: created,
    });
  } catch (error) {
    console.log("Error in criarRelatorio,", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const atualizarRelatorio = async (req, res) => {
  try {
    //  verificar utilizador
    const currentUserId = req.user._id;

    if (!currentUserId)
      return res.json({ success: false, message: "Utilizador nao encontrado" });

    const { id } = req.params;

    if (!id) return res.json({ success: false, message: "Id nao fornecido" });
    const { titulo, resumo, texto } = req.body;

    if (!titulo || !resumo || !texto)
      return res.json({
        success: false,
        message: "Todos os campos obrigatorios",
      });

    const relatorioDocument = await Relatorio.findById(id);
    if (!relatorioDocument)
      return res.json({ success: false, message: "Relatorio nao encontrado" });

    if (relatorioDocument.user.toString() !== currentUserId.toString()) {
      return res.status(403).json({ success: false, message: "Sem permissão" });
    }

    //atualizar relatorio
    const updated = await Relatorio.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          titulo: titulo,
          resumo: resumo,
          texto: texto,
          user: currentUserId,
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
    console.log("Error in atualizarRelatorio,", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const removerRelatorio = async (req, res) => {
  try {
    // verificar utilizador
    const currentUserId = req.user._id;
    if (!currentUserId)
      return res.json({ success: false, message: "Utilizador nao encontrado" });

    const { id } = req.params;
    if (!id) return res.json({ success: false, message: "Id nao fornecido" });

    const relatorioDocument = await Relatorio.findById(id);
    if (!relatorioDocument)
      return res.json({ success: false, message: "Relatorio não encontrado" });

    if (relatorioDocument.user.toString() !== currentUserId.toString()) {
      return res.status(403).json({ success: false, message: "Sem permissão" });
    }

    await Relatorio.deleteOne({ _id: id });

    return res.json({ success: true, message: "Relatorio removido" });
  } catch (error) {
    console.log("Error in removerRelatorio,", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};
