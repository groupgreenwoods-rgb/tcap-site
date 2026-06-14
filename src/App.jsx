import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {
  FaBalanceScale,
  FaFileAlt,
  FaSearch,
  FaLeaf,
  FaBars
} from "react-icons/fa";

// Importações necessárias para o app funcionar
import Sidebar from './components/Sidebar/Sidebar.jsx';
import ChatJuridico from "@/components/ChatJuridico/ChatJuridico";
import GerarPeticoes from "@/components/QuickAccess/GerarPeticoes.jsx";
import Jurisprudencia from "./components/QuickAccess/Jurisprudencia.jsx";
import ProagroCar from "./components/QuickAccess/ProagroCar.jsx";
import EstrategiaCaso from "@/components/QuickAccess/EstrategiaCaso.jsx";
import AnalisarDocumento from "@/components/QuickAccess/AnalisarDocumento.jsx";
import DocLongoPDF from "@/components/QuickAccess/DocLongoPDF.jsx";
import Perfil from "./components/QuickAccess/Perfil.jsx";
import Historico from "@/components/QuickAccess/Historico.jsx";


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="app-container">

        {/* BOTÃO HAMBÚRGUER */}
        {!sidebarOpen && (
          <button
            className="mobile-menu-btn"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setSidebarOpen(true);
            }}
          >
            <FaBars />
          </button>
        )}

        <Sidebar
          open={sidebarOpen}
          setOpen={setSidebarOpen}
        />

        <main className="main-content">
          <h1>TCAP IA² — Advogado</h1>

          {/* Menu de Acesso Rápido */}
          <div className="quickAccess-global">
            <p className="quickLabel">Acesso rápido:</p>

            <div className="quickButtons">

              <button
                className="quickBtn"
                onClick={() => window.location.href = "/estrategia-caso"}
              >
                <FaBalanceScale />
                Estratégia de Caso
              </button>

              <button
                className="quickBtn"
                onClick={() => window.location.href = "/peticoes"}
              >
                <FaFileAlt />
                Gerar Petições
              </button>

              <button
                className="quickBtn"
                onClick={() => window.location.href = "/jurisprudencia"}
              >
                <FaSearch />
                Jurisprudência
              </button>

              <button
                className="quickBtn"
                onClick={() => window.location.href = "/proagro-car"}
              >
                <FaLeaf />
                PROAGRO e CAR
              </button>
            </div>
          </div>

          {/* ROTAS */}
          <Routes>
            <Route path="/" element={<ChatJuridico />} />
            <Route path="/peticoes" element={<GerarPeticoes />} />
            <Route path="/jurisprudencia" element={<Jurisprudencia />} />
            <Route path="/proagro-car" element={<ProagroCar />} />
            <Route path="/estrategia-caso" element={<EstrategiaCaso />} />
            <Route path="/analisar-documento" element={<AnalisarDocumento />} />
            <Route path="/doc-longo-pdf" element={<DocLongoPDF />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/historico" element={<Historico />} />
          </Routes>

        </main>
      </div>
    </Router>
  );
}

export default App;
