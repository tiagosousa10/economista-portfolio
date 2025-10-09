import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

export async function signup(req, res) {
  const { email, password, nome } = req.body;

  try {
    if (!email || !password || !nome) {
      return res.status(400).json({ message: "Preenche todos os campos." });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password tem que ter mais do que 6 caracteres." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Email inválido" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email já cadastrado. Tente outro." });
    }

    //create new user
    const newUser = await User.create({
      email,
      nome,
      password,
    });

    const token = jwt.sign(
      { userId: newUser._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "7d" }
    );

    res.cookie("jwt", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true, //prevent xss attacks
      sameSite: "strict", //prevent csrf attacks
      secure: process.env.NODE_ENV === "production", //only send cookie over https in production
    });

    res
      .status(201)
      .json({
        success: true,
        message: "Utilizador criado com sucesso!",
        user: newUser,
      });
  } catch (error) {
    console.log("Erro ao fazer signup", error);
    res.status(500).json({ message: error.message });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Todos os campos sao obrigatorios." });
    }

    const user = await User.findOne({ email });

    if (!user)
      return res.status(401).json({ message: "Email nao encontrado." });

    const isPasswordCorrect = await user.matchPassword(password);

    if (!isPasswordCorrect)
      return res.status(401).json({ message: "Password incorreta." });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });

    res.cookie("jwt", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true, //prevent xss attacks
      sameSite: "strict", //prevent csrf attacks
      secure: process.env.NODE_ENV === "production", //only send cookie over https in production
    });

    res
      .status(200)
      .json({ success: true, message: "Login efetuado com sucesso.", user });
  } catch (error) {
    console.log("Erro ao realizar login.", error);
    res.status(500).json({ message: error.message });
  }
}
