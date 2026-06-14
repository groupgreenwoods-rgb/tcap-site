<<<<<<< HEAD
import React, { useState } from 'react';
import { FaSearch, FaBalanceScale, FaDatabase, FaRocket, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from './Jurisprudencia.module.css';

const Jurisprudencia = () => {
    const navigate = useNavigate();
    const [termoBusca, setTermoBusca] = useState('');
    const [tribunalSelecionado, setTribunalSelecionado] = useState('stj');

    const handleBuscar = () => {
        console.log("Busca:", termoBusca, tribunalSelecionado);
    };

    return (
        <div className={styles.container}>
            {/* Botão Voltar FORA do card */}
            <button
                className={styles.botaoVoltar}
                onClick={() => navigate(-1)}
            >
                <FaArrowLeft /> Voltar
            </button>

            {/* Cabeçalho */}
            <div className={styles.card}>
                <h1 className={styles.tituloPagina}>
                    <FaSearch className={styles.iconeTitulo} />
                    Busca de Jurisprudência
                </h1>
                <p className={styles.subtituloPagina}>
                    STF · STJ · DataJud/CNJ — 91 tribunais do Brasil — tempo real
                </p>
            </div>

            {/* Área de Busca */}
            <div className={styles.card}>
                <div className={styles.linhaBusca}>
                    <div className={styles.campoPesquisa}>
                        <label className={styles.labelCampo}>Pesquisar jurisprudência</label>
                        <input
                            type="text"
                            value={termoBusca}
                            onChange={(e) => setTermoBusca(e.target.value)}
                            placeholder="Digite palavras-chave, número do processo ou tema..."
                            className={styles.input}
                            onKeyDown={(e) => { if (e.key === "Enter") handleBuscar(); }}
                        />
                    </div>
                    <div className={styles.campoTribunal}>
                        <label className={styles.labelCampo}>Tribunal</label>
                        <select
                            value={tribunalSelecionado}
                            onChange={(e) => setTribunalSelecionado(e.target.value)}
                            className={styles.select}
                        >
                            <option value="stf">STF - Supremo Tribunal Federal</option>
                            <option value="stj">STJ - Superior Tribunal de Justiça</option>
                            <option value="tjsp">TJSP - Tribunal de Justiça de São Paulo</option>
                            <option value="tjrj">TJRJ - Tribunal de Justiça do Rio de Janeiro</option>
                            <option value="datajud">DataJud/CNJ</option>
                        </select>
                    </div>
                </div>

                <div className={styles.botoesRapidos}>
                    <button className={styles.btn}>🏛️ Buscar STF</button>
                    <button className={styles.btn}><FaBalanceScale /> Buscar STJ</button>
                    <button className={styles.btn}><FaDatabase /> DataJud/CNJ</button>
                </div>

                <button
                    className={`${styles.btn} ${styles.btnPrimary}`}
                    onClick={handleBuscar}
                    disabled={!termoBusca.trim()}
                >
                    <FaRocket /> Busca Completa — STF + STJ + DataJud
                </button>
            </div>
        </div>
    );
};

=======
import React, { useState } from 'react';
import { FaSearch, FaBalanceScale, FaDatabase, FaRocket, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from './Jurisprudencia.module.css';

const Jurisprudencia = () => {
    const navigate = useNavigate();
    const [termoBusca, setTermoBusca] = useState('');
    const [tribunalSelecionado, setTribunalSelecionado] = useState('stj');

    const handleBuscar = () => {
        console.log("Busca:", termoBusca, tribunalSelecionado);
    };

    return (
        <div className={styles.container}>
            {/* Botão Voltar FORA do card */}
            <button
                className={styles.botaoVoltar}
                onClick={() => navigate(-1)}
            >
                <FaArrowLeft /> Voltar
            </button>

            {/* Cabeçalho */}
            <div className={styles.card}>
                <h1 className={styles.tituloPagina}>
                    <FaSearch className={styles.iconeTitulo} />
                    Busca de Jurisprudência
                </h1>
                <p className={styles.subtituloPagina}>
                    STF · STJ · DataJud/CNJ — 91 tribunais do Brasil — tempo real
                </p>
            </div>

            {/* Área de Busca */}
            <div className={styles.card}>
                <div className={styles.linhaBusca}>
                    <div className={styles.campoPesquisa}>
                        <label className={styles.labelCampo}>Pesquisar jurisprudência</label>
                        <input
                            type="text"
                            value={termoBusca}
                            onChange={(e) => setTermoBusca(e.target.value)}
                            placeholder="Digite palavras-chave, número do processo ou tema..."
                            className={styles.input}
                            onKeyDown={(e) => { if (e.key === "Enter") handleBuscar(); }}
                        />
                    </div>
                    <div className={styles.campoTribunal}>
                        <label className={styles.labelCampo}>Tribunal</label>
                        <select
                            value={tribunalSelecionado}
                            onChange={(e) => setTribunalSelecionado(e.target.value)}
                            className={styles.select}
                        >
                            <option value="stf">STF - Supremo Tribunal Federal</option>
                            <option value="stj">STJ - Superior Tribunal de Justiça</option>
                            <option value="tjsp">TJSP - Tribunal de Justiça de São Paulo</option>
                            <option value="tjrj">TJRJ - Tribunal de Justiça do Rio de Janeiro</option>
                            <option value="datajud">DataJud/CNJ</option>
                        </select>
                    </div>
                </div>

                <div className={styles.botoesRapidos}>
                    <button className={styles.btn}>🏛️ Buscar STF</button>
                    <button className={styles.btn}><FaBalanceScale /> Buscar STJ</button>
                    <button className={styles.btn}><FaDatabase /> DataJud/CNJ</button>
                </div>

                <button
                    className={`${styles.btn} ${styles.btnPrimary}`}
                    onClick={handleBuscar}
                    disabled={!termoBusca.trim()}
                >
                    <FaRocket /> Busca Completa — STF + STJ + DataJud
                </button>
            </div>
        </div>
    );
};

>>>>>>> 8ef10752ed7f969bcf80b9bfa2d39fc6bdb670e5
export default Jurisprudencia;