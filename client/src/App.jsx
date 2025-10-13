// src/App.jsx
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import AdmingPage from "./pages/AdmingPage";
import RelatorioDetails from "./pages/RelatorioDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/secret-dashboard"
          element={
            <ProtectedRoute>
              <AdmingPage />
            </ProtectedRoute>
          }
        />
        <Route path="/relatorio/:id" element={<RelatorioDetails />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
