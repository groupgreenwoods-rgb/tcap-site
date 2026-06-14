import { useState } from "react";
import styles from "./EstrategiaCaso.module.css";

export default function EstrategiaCaso() {
  const [caso, setCaso] = useState("");
  const [loading, setLoading] = useState(false);
  const [resposta, setResposta] = useState("");

  const gerarEstrategia = async () => {
    if (!caso.trim()) return;

    setLoading(true);
    setResposta("");

    try {
      // 🔥 AQUI depois você conecta sua IA real
      const mock = `
📊 ANÁLISE DO CASO

🧠 Tese Jurídica:
- Possível violação de direito material identificado
- Fundamento em jurisprudência consolidada

⚖️ Estratégia:
- Ingresso com ação principal adequada
- Pedido liminar se aplicável
- Reforço probatório documental

📌 Riscos:
- Necessidade de prova robusta
- Possível contestação forte da parte contrária

📂 Próximas peças:
- Petição inicial
- Requerimento de provas
- Eventual tutela de urgência
      `;

      setTimeout(() => {
        setResposta(mock);
        setLoading(false);
      }, 800);

    } catch (err) {
      setLoading(false);
      setResposta("Erro ao gerar estratégia.");
    }
  };

  return (
    <div className={styles.container}>

      <h2 className={styles.title}>🧠 Estratégia de Caso</h2>

      <textarea
        className={styles.textarea}
        placeholder="Descreva o caso com detalhes..."
        value={caso}
        onChange={(e) => setCaso(e.target.value)}
      />

      <button
        className={styles.button}
        onClick={gerarEstrategia}
        disabled={loading}
      >
        {loading ? "Analisando..." : "Gerar Estratégia"}
      </button>

      {resposta && (
        <div className={styles.resultado}>
          <pre>{resposta}</pre>
        </div>
      )}

    </div>
  );
}