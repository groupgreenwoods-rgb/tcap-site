import { useState } from "react";
import {
  FaHistory,
  FaSearch,
  FaFilter,
  FaFileAlt,
  FaBalanceScale,
  FaBrain
} from "react-icons/fa";
import styles from "./Historico.module.css";

export default function Historico() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("todos");
  const [selecionado, setSelecionado] = useState(null);

  const [dados] = useState([
    { id: 1, titulo: "Petição Inicial Cível", tipo: "peticao", data: "12/06/2026" },
    { id: 2, titulo: "Análise de Contrato Bancário", tipo: "documento", data: "11/06/2026" },
    { id: 3, titulo: "Estratégia de Caso Trabalhista", tipo: "estrategia", data: "10/06/2026" },
    { id: 4, titulo: "Pesquisa Jurisprudencial", tipo: "jurisprudencia", data: "09/06/2026" },
  ]);

  const filtrados = dados
    .filter((item) => filtro === "todos" || item.tipo === filtro)
    .filter((item) =>
      item.titulo.toLowerCase().includes(busca.toLowerCase())
    );

  const iconeTipo = (tipo) => {
    switch (tipo) {
      case "peticao":
        return <FaFileAlt />;
      case "documento":
        return <FaBalanceScale />;
      case "estrategia":
        return <FaBrain />;
      default:
        return <FaHistory />;
    }
  };

  return (
    <div className={styles.container}>

      {/* HEADER */}
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>
            <FaHistory /> Histórico Inteligente
          </h2>
          <p className={styles.subtitle}>
            Todas suas ações jurídicas em um só lugar
          </p>
        </div>

        {/* FILTRO */}
        <div className={styles.filters}>
          <button onClick={() => setFiltro("todos")} className={filtro === "todos" ? styles.active : ""}>Todos</button>
          <button onClick={() => setFiltro("peticao")} className={filtro === "peticao" ? styles.active : ""}>Petições</button>
          <button onClick={() => setFiltro("documento")} className={filtro === "documento" ? styles.active : ""}>Documentos</button>
          <button onClick={() => setFiltro("estrategia")} className={filtro === "estrategia" ? styles.active : ""}>Estratégia</button>
        </div>
      </div>

      {/* SEARCH */}
      <div className={styles.searchBox}>
        <FaSearch />
        <input
          placeholder="Buscar histórico jurídico..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <FaFilter />
      </div>

      {/* GRID CARDS */}
      <div className={styles.grid}>
        {filtrados.map((item) => (
          <div
            key={item.id}
            className={styles.card}
            onClick={() => setSelecionado(item)}
          >

            <div className={styles.iconBox}>
              {iconeTipo(item.tipo)}
            </div>

            <div className={styles.content}>
              <strong>{item.titulo}</strong>
              <span>{item.data}</span>
            </div>

            <div className={styles.badge}>
              {item.tipo}
            </div>

          </div>
        ))}
      </div>

      {/* DETALHE (FUTURO BACKEND/IA) */}
      {selecionado && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelecionado(null)}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{selecionado.titulo}</h3>
            <p><strong>Tipo:</strong> {selecionado.tipo}</p>
            <p><strong>Data:</strong> {selecionado.data}</p>

            <div className={styles.contentBox}>
              📌 Aqui vai entrar o conteúdo vindo do backend/IA depois
            </div>

            <button onClick={() => setSelecionado(null)}>
              Fechar
            </button>
          </div>
        </div>
      )}

    </div>
  );
}