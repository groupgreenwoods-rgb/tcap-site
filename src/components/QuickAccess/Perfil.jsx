import { useState } from "react";
import { FaUserShield, FaSave, FaCamera, FaEnvelope, FaIdCard, FaBriefcase } from "react-icons/fa";
import styles from "./Perfil.module.css";

export default function Perfil() {
  const [salvando, setSalvando] = useState(false);
  const [dados, setDados] = useState({
    nome: "Dr. Gabriel Alvarenga",
    oab: "MG 123.456",
    especialidade: "Direito Contratual e Digital",
    email: "gabriel.advocacia@exemplo.com",
    foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80" // Foto de perfil padrão profissional
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados((prev) => ({ ...prev, [name]: value }));
  };

  const handleSalvar = (e) => {
    e.preventDefault();
    setSalvando(true);

    // Simula um salvamento no banco de dados
    setTimeout(() => {
      setSalvando(false);
      alert("Perfil atualizado com sucesso! ⚖️");
    }, 1200);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <FaUserShield className={styles.iconTitle} />
        Perfil do Advogado
      </h2>

      <form onSubmit={handleSalvar} className={styles.form}>
        {/* Header do Perfil (Foto e Avatar) */}
        <div className={styles.avatarSection}>
          <div className={styles.avatarWrapper}>
            <img src={dados.foto} alt="Foto de Perfil" className={styles.avatar} />
            <label className={styles.changeFotoBtn} title="Alterar foto">
              <FaCamera />
              <input type="file" accept="image/*" style={{ display: "none" }} />
            </label>
          </div>
          <div className={styles.avatarInfo}>
            <h3>{dados.nome}</h3>
            <p>{dados.especialidade}</p>
          </div>
        </div>

        <hr className={styles.divider} />

        {/* Campos do Formulário */}
        <div className={styles.gridInputs}>
          <div className={styles.inputGroup}>
            <label><FaIdCard className={styles.inputIcon} /> Nome Completo</label>
            <input
              type="text"
              name="nome"
              value={dados.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label><FaIdCard className={styles.inputIcon} /> Inscrição OAB</label>
            <input
              type="text"
              name="oab"
              value={dados.oab}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label><FaBriefcase className={styles.inputIcon} /> Especialidade Principal</label>
            <input
              type="text"
              name="especialidade"
              value={dados.especialidade}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label><FaEnvelope className={styles.inputIcon} /> E-mail Profissional</label>
            <input
              type="email"
              name="email"
              value={dados.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Botão Salvar */}
        <button type="submit" className={styles.button} disabled={salvando}>
          <FaSave />
          {salvando ? "Salvando alterações..." : "Salvar Alterações"}
        </button>
      </form>
    </div>
  );
}