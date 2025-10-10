// src/App.jsx
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import AdmingPage from "./pages/AdmingPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/secret-dashboard" element={<AdmingPage />} />

      <Route path="*" element={<Home />} />
    </Routes>
  );
}
