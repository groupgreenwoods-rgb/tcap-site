import { useState } from "react";
import { FaFolder } from "react-icons/fa";
import styles from "./GerarPeticoes.module.css";

const configuracaoPecas = {
  "Ambiental": {
    "Impugnação de Multa Ambiental": ["Autuado", "Orgao", "Numero Auto", "Data Autuacao", "Valor Multa", "Fatos Defesa (textarea)"]
  },
  "Cível": {
    "Contestação Cível": ["Processo", "Nome Reu", "Nome Autor", "Fatos Defesa (textarea)", "Preliminares"],
    "Petição Inicial Cível": ["Nome Autor", "Nome Reu", "Fatos (textarea)", "Pedidos (textarea)", "Valor Causa"]
  },
  "Cível/Consumidor": {
    "Petição Inicial — Direito do Consumidor": ["Nome Autor", "Cpf Autor", "Nome Reu", "Fatos (textarea)", "Pedidos (textarea)", "Valor Causa"]
  },
  "Consultivo": {
    "Parecer Jurídico": ["Consulente", "Assunto", "Fatos (textarea)", "Duvida Juridica (textarea)"]
  },
  "Empresarial": {
    "Ação de Cobrança Empresarial": ["Nome Credor", "Nome Devedor", "Valor Devido", "Origem Divida", "Data Vencimento", "Fatos (textarea)"]
  },
  "Extrajudicial": {
    "Notificação Extrajudicial": ["Nome Notificante", "Nome Notificado", "Fatos (textarea)", "Pedido (textarea)", "Prazo"]
  },
  "Família": {
    "Ação de Guarda Compartilhada e Regulamentação de Visitas": ["Nome Autor", "Nome Reu", "Nome Criancas", "Idades", "Fatos (textarea)", "Pedidos (textarea)"],
    "Ação de Alimentos": ["Nome Alimentando", "Nome Alimentante", "Valor Solicitado", "Fatos (textarea)"],
    "Petição de Divórcio Consensual": ["Nome Conjuge 1", "Nome Conjuge 2", "Bens (textarea)", "Partilha (textarea)"]
  },
  "Penal": {
    "Habeas Corpus": ["Nome Paciente", "Cpf", "Autoridade Coatora", "Crime", "Fatos (textarea)", "Fundamento"]
  },
  "Previdenciário": {
    "Ação Previdenciária contra o INSS": ["Nome Autor", "Cpf", "Beneficio Solicitado", "Data Requerimento", "Motivo Indeferimento", "Fatos (textarea)"],
    "Recurso Administrativo INSS — CRPS": ["Processo Administrativo", "Recorrente", "Razões Recurso (textarea)"],
    "Ação de Auxílio por Incapacidade (Auxílio-Doença/BPC)": ["Nome Autor", "Data Laudo", "Doença", "Fatos (textarea)"]
  },
  "Recursal": {
    "Apelação Cível": ["Processo", "Vara", "Partes", "Sentenca Resumo", "Razoes Recurso (textarea)"]
  },
  "Trabalhista": {
    "Reclamação Trabalhista": ["Nome Reclamante", "Cpf", "Nome Reclamada", "Cnpj", "Fatos (textarea)", "Verbas", "Valor"],
    "Ação Trabalhista — Horas Extras": ["Nome Reclamante", "Nome Reclamada", "Jornada Real", "Jornada Contratada", "Fatos (textarea)"]
  }
};

export default function GerarPeticoes() {
  const [expandido, setExpandido] = useState(false);
  const [area, setArea] = useState("");
  const [peca, setPeca] = useState("");
  const [formOpen, setFormOpen] = useState(false);

  // 🔥 FUNÇÃO SEGURA (desktop não muda)
  const selecionarPeca = (p) => {
    setPeca(peca === p ? "" : p);

    // só abre drawer no mobile
    if (window.innerWidth <= 900) {
      setFormOpen(true);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Gerador de Peças Jurídicas</h2>

      <button
        className={styles.btnExpandir}
        onClick={() => setExpandido(!expandido)}
      >
        <FaFolder /> {expandido ? "Ocultar Áreas" : "Escolher Área do Direito"}
      </button>

      {expandido && (
        <div className={styles.gridContainer}>
          {Object.keys(configuracaoPecas).map((a) => (
            <div key={a} className={styles.itemWrapper}>
              <button
                className={`${styles.btnArea} ${area === a ? styles.ativoVerde : ""}`}
                onClick={() => {
                  setArea(area === a ? "" : a);
                  setPeca("");
                }}
              >
                <span className={styles.checkbox}></span> {a}
              </button>

              {area === a && (
                <div className={styles.containerPecasExpandido}>
                  {Object.keys(configuracaoPecas[a]).map((p) => (
                    <button
                      key={p}
                      className={`${styles.btnPeca} ${peca === p ? styles.ativoPeca : ""}`}
                      onClick={() => selecionarPeca(p)}
                    >
                      <span className={styles.checkbox}></span> {p}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* 🔥 FORM DESKTOP (NÃO MEXE NO FLUXO ORIGINAL) */}
      {area && peca && (
        <div className={`${styles.formGrid} ${formOpen ? styles.ativo : ""}`}>

          {/* botão só mobile */}
          <button
            className={styles.btnSairMobile}
            onClick={() => setFormOpen(false)}
          >
            ← Voltar
          </button>

          {configuracaoPecas[area][peca].map((campo) => {
            const label = campo.replace(" (textarea)", "");
            const isTextArea = campo.includes("(textarea)");

            return isTextArea ? (
              <textarea
                key={label}
                placeholder={label}
                className={`${styles.input} ${styles.fullWidth}`}
              />
            ) : (
              <input
                key={label}
                placeholder={label}
                className={styles.input}
              />
            );
          })}
        </div>
      )}

      {area && peca && (
        <button className={styles.btnGerar}>
          ⚖️ Gerar Peça com IA
        </button>
      )}
    </div>
  );
}