import styles from "./Sidebar.module.css";
import logoImage from "../../assets/logo.jpeg";
import { useNavigate } from "react-router-dom";

import {
  FaComments,
  FaBalanceScale,
  FaSearch,
  FaBrain,
  FaFileAlt,
  FaUser,
  FaBuilding,
  FaChartBar,
  FaSignOutAlt,
  FaUserCircle,
  FaTimes
} from "react-icons/fa";

export default function Sidebar({ open, setOpen }) {
  const navigate = useNavigate();

  return (
    <>
      {/* OVERLAY */}
      {open && (
        <div
          className={styles.overlay}
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside className={`${styles.sidebar} ${open ? styles.open : ""}`}>

        {/* BOTÃO FECHAR */}
        <button
          className={styles.closeBtn}
          onClick={() => setOpen(false)}
        >
          <FaTimes />
        </button>

        {/* LOGO */}
        <div
          className={styles.logoArea}
          onClick={() => {
            navigate("/");
            setOpen(false);
          }}
          style={{ cursor: "pointer" }}
        >
          <div className={styles.logo}>
            <img src={logoImage} alt="Logo TCAP IA²" />
          </div>

          <h2>TCAP IA²</h2>
          <span>v9.7</span>
        </div>

        {/* USER */}
        <div className={styles.userArea}>
          <button className={styles.userBtn}>
            <FaUser />
            <span>Usuário</span>
          </button>
          <p className={styles.userEmail}>demo@tcap.ai</p>
        </div>

        {/* COMPANY */}
        <div className={styles.companyArea}>
          <label>
            <FaBuilding /> Sua Empresa
          </label>
          <input type="text" placeholder="Nome da empresa..." />
        </div>

        {/* MENU */}
        <div className={styles.menu}>
          <h3 className={styles.menuTitle}>Menu</h3>

          {/* CHAT */}
          <button
            className={`${styles.menuButton} ${styles.active}`}
            onClick={() => {
              navigate("/");
              setOpen(false);
            }}
          >
            <FaComments />
            <span>Chat Jurídico</span>
          </button>

          {/* PETIÇÕES */}
          <button
            className={styles.menuButton}
            onClick={() => {
              navigate("/peticoes");
              setOpen(false);
            }}
          >
            <FaBalanceScale />
            <span>Gerar Peça Jurídica</span>
          </button>

          {/* JURISPRUDÊNCIA */}
          <button
            className={styles.menuButton}
            onClick={() => {
              navigate("/jurisprudencia");
              setOpen(false);
            }}
          >
            <FaSearch />
            <span>Buscar Jurisprudência</span>
          </button>

          {/* PROAGRO / CAR */}
          <button
            className={styles.menuButton}
            onClick={() => {
              navigate("/proagro-car");
              setOpen(false);
            }}
          >
            <FaChartBar />
            <span>Análise PROAGRO/CAR</span>
          </button>

          {/* IA TREINO */}
          <button className={styles.menuButton}>
            <FaBrain />
            <span>Treinar IA do Escritório</span>
          </button>

          {/* DOCUMENTO */}
          <button
            className={styles.menuButton}
            onClick={() => {
              navigate("/analisar-documento");
              setOpen(false);
            }}
          >
            <FaFileAlt />
            <span>Analisar Documento</span>
          </button>

          {/* DOC LONGO */}
          <button
            className={styles.menuButton}
            onClick={() => {
              navigate("/doc-longo-pdf");
              setOpen(false);
            }}
          >
            <FaFileAlt />
            <span>Doc. Longo (PDF)</span>
          </button>

          {/* HISTÓRICO */}
          <button
  className={styles.menuButton}
  onClick={() => {
    navigate("/historico");
    setOpen(false);
  }}
>
  <FaChartBar />
  <span>Histórico</span>
</button>
          {/* PERFIL */}
          <button
            className={styles.menuButton}
            onClick={() => {
              navigate("/perfil");
              setOpen(false);
            }}
          >
            <FaUserCircle />
            <span>Meu Perfil</span>
          </button>
        </div>

        {/* FOOTER */}
        <div className={styles.sidebarFooter}>
          <button className={styles.logoutBtn}>
            <FaSignOutAlt />
            <span>Sair</span>
          </button>

          <p className={styles.footerMeta}>Hk=0.000206836</p>
          <p className={styles.footerMeta}>Selo: 653d2227...</p>
        </div>

      </aside>
    </>
  );
}