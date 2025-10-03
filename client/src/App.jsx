// src/App.jsx
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import DXY2025 from "./pages/DXY2025";
import Portfolios2025 from "./pages/Portfolios2025";
import PublicDebt2025 from "./pages/PublicDebt2025";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/analises/dxy-2025" element={<DXY2025 />} />
      <Route path="/analises/portfolios-2025" element={<Portfolios2025 />} />
      <Route path="/analises/public-debt-2025" element={<PublicDebt2025 />} />
      {/* fallback opcional */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
