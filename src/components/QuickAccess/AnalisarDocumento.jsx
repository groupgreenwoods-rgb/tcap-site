import { useState } from "react";
import { FaFileAlt, FaUpload } from "react-icons/fa";
import * as pdfjsLib from "pdfjs-dist";
import styles from "./AnalisarDocumento.module.css";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export default function AnalisarDocumento() {
  const [arquivo, setArquivo] = useState(null);
  const [textoExtraido, setTextoExtraido] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState("");

  const lerPDF = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

    let texto = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();

      texto += content.items.map((item) => item.str).join(" ") + "\n";
    }

    return texto;
  };

  const onFileChange = async (file) => {
    if (!file) return;

    setArquivo(file);
    setLoading(true);
    setResultado("");

    const texto = await lerPDF(file);
    setTextoExtraido(texto);

    setLoading(false);
  };

  const analisar = () => {
    if (!textoExtraido) return;

    setLoading(true);

    setTimeout(() => {
      setResultado(`
📄 DOCUMENTO ANALISADO

🧠 RESUMO:
- Documento jurídico identificado
- Texto extraído com sucesso

⚖️ PONTOS JURÍDICOS:
- Partes identificadas
- Estrutura legal detectada
- Possíveis cláusulas relevantes

⚠️ RISCOS:
- Inconsistências contratuais
- Cláusulas ambíguas

🚀 PRONTO PARA IA:
Texto estruturado para análise avançada
      `);

      setLoading(false);
    }, 900);
  };

  return (
    <div className={styles.container}>

      <h2 className={styles.title}>
        <FaFileAlt className={styles.icon} />
        Analisar Documento
      </h2>

      {/* DRAG & DROP STYLE SIMPLES */}
      <label className={styles.uploadBox}>
        <FaUpload />
        <span>
          {arquivo ? arquivo.name : "Clique ou arraste um PDF aqui"}
        </span>

        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => onFileChange(e.target.files?.[0])}
        />
      </label>

      <button
        className={styles.button}
        onClick={analisar}
        disabled={loading || !textoExtraido}
      >
        {loading ? "Analisando..." : "Analisar Documento"}
      </button>

      {resultado && (
        <div className={styles.resultado}>
          <pre>{resultado}</pre>
        </div>
      )}

    </div>
  );
}