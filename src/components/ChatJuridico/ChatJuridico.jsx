import { useState, useRef, useEffect } from "react";
import styles from "./ChatJuridico.module.css";
import { FaRocket, FaTrash } from "react-icons/fa";
import avatar from "../../assets/avatar.png";
import { obterRespostaDaIA } from "./chatService";

export default function ChatJuridico() {
  const [mensagem, setMensagem] = useState("");
  const [historico, setHistorico] = useState([]);
  
  // Referência para rolar até o final da conversa
  const chatEndRef = useRef(null);

  // Rola o chat para baixo sempre que o histórico mudar
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [historico]);

  async function handleEnviar() {
    if (!mensagem.trim()) return;

    const novaMensagemUsuario = { role: "user", content: mensagem };
    setHistorico((prev) => [...prev, novaMensagemUsuario]);
    setMensagem("");

    try {
      const resposta = await obterRespostaDaIA(mensagem);
      const novaMensagemIA = { role: "ai", content: resposta };
      setHistorico((prev) => [...prev, novaMensagemIA]);
    } catch (error) {
      console.error("Erro ao obter resposta da IA:", error);
    }
  }

  function handleLimpar() {
    setHistorico([]);
    setMensagem("");
  }

  return (
    <div className={styles.container}>
      {/* 1. TOPO: O Header fica estático no topo */}
      <div className={styles.headerContainer}>
        {historico.length === 0 && (
          <div className={styles.hero}>
            <div className={styles.heroContent}>
              <img src={avatar} alt="Avatar IA" className={styles.avatar} />
              <div className={styles.heroText}>
                <h2 className={styles.welcomeTitle}>Olá, Usuário!</h2>
                <p className={styles.heroSubtitle}>Sou seu Assistente Jurídico Inteligente</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 2. MEIO: Área de Chat que cresce e permite scroll */}
      <div className={styles.chatArea}>
        {historico.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.mensagemWrapper} ${styles[item.role + 'Wrapper']}`}
          >
            {item.role === 'ai' && (
              <img src={avatar} alt="IA" className={styles.avatarPequeno} />
            )}
            <div className={`${styles.mensagem} ${styles[item.role]}`}>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
        {/* Div invisível para ancorar o scroll automático */}
        <div ref={chatEndRef} />
      </div>

      {/* 3. BASE: Input fixado sempre na parte inferior */}
      <div className={styles.inputArea}>
        <textarea
          className={styles.textarea}
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          placeholder="Como posso te ajudar hoje?"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleEnviar();
            }
          }}
        />
        <div className={styles.inputActions}>
          <button className={styles.btnEnviar} onClick={handleEnviar}>
            <FaRocket />
          </button>
          <button className={styles.btnLimpar} onClick={handleLimpar}>
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}