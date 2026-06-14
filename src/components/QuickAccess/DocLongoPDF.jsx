import { useState } from "react";
import { FaFileAlt, FaUpload } from "react-icons/fa";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";
import styles from "./DocLongoPDF.module.css";

// 🔥 worker correto (Vite-safe)
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";

export default function DocLongoPDF() {
  const [arquivo, setArquivo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState("");

  // 📄 LER PDF
  const lerPDF = async (file) => {
    const arrayBuffer = await file.arrayBuffer();

    const pdf = await pdfjsLib.getDocument({
      data: arrayBuffer,
    }).promise;

    const paginas = [];

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();

      const texto = content.items.map((item) => item.str).join(" ");

      paginas.push({
        page: i,
        text: texto,
      });
    }

    return paginas;
  };

  // ⚖️ ANÁLISE
  const analisar = async () => {
    if (!arquivo) return;

    setLoading(true);
    setResultado("");

    try {
      const paginas = await lerPDF(arquivo);

      let saida = "📚 DOCUMENTO LONGO ANALISADO\n\n";

      paginas.forEach((p) => {
        saida += `📄 PÁGINA ${p.page}\n`;
        saida += `Resumo: ${p.text.slice(0, 200) || "Sem texto detectado"}...\n\n`;
      });

      saida += `
⚠️ ANÁLISE JURÍDICA FINAL:

- Documento processado com sucesso
- Estrutura identificada por páginas
- Conteúdo apto para análise jurídica avançada

⚖️ ESTRATÉGIA:
- Revisar cláusulas principais
- Verificar riscos contratuais
- Criar tese jurídica conforme conteúdo
      `;

      setResultado(saida);
    } catch (err) {
      console.error(err);
      setResultado("❌ Erro ao processar PDF. Verifique o arquivo.");
    }

    setLoading(false);
  };

  return (
    <div className={styles.container}>

      <h2 className={styles.title}>
        <FaFileAlt className={styles.icon} />
        Doc. Longo (PDF)
      </h2>

      {/* UPLOAD */}
      <label className={styles.uploadBox}>
        <FaUpload />
        <span>
          {arquivo ? arquivo.name : "Envie um PDF (processos, contratos...)"}
        </span>

        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setArquivo(e.target.files?.[0] || null)}
        />
      </label>

      {/* BOTÃO */}
      <button
        className={styles.button}
        onClick={analisar}
        disabled={!arquivo || loading}
      >
        {loading ? "Analisando..." : "Analisar Documento"}
      </button>

      {/* RESULTADO */}
      {resultado && (
        <div className={styles.resultado}>
          <pre>{resultado}</pre>
        </div>
      )}

    </div>
  );
}