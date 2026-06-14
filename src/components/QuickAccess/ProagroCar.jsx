<<<<<<< HEAD
import React, { useState, useRef } from 'react';
import { FaLeaf, FaArrowLeft, FaPlus, FaMinus, FaUpload } from "react-icons/fa";
import styles from './proagrocar.module.css';

const ProagroCar = () => {
  // Lógica de Upload
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Arquivo selecionado:", file.name);
    }
  };

  // Seus estados originais
  const [abaAtiva, setAbaAtiva] = useState('sinistro');
  const [cultura, setCultura] = useState('Soja, Milho, Algodão...');
  const [tipoPerda, setTipoPerda] = useState('seca');
  const [areaPlantada, setAreaPlantada] = useState(0.00);
  const [bancoFinanciador, setBancoFinanciador] = useState('Banco do Brasil, Sicredi...');
  const [dataEvento, setDataEvento] = useState('2026-06-13');
  const [possuiCCR, setPossuiCCR] = useState('sim');
  const [estimativaPerda, setEstimativaPerda] = useState(40);
  const [municipioUF, setMunicipioUF] = useState('Sorriso/MT');
  const [observacoes, setObservacoes] = useState('');

  const [areaTotal, setAreaTotal] = useState(0.00);
  const [areaReservaLegal, setAreaReservaLegal] = useState(0.00);
  const [areaAPP, setAreaAPP] = useState(0.00);
  const [bioma, setBioma] = useState('amazonia');
  const [statusCAR, setStatusCAR] = useState('ativo');
  const [municipioCAR, setMunicipioCAR] = useState('');

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <div className={styles.cardHeader}>
        <button className={styles.botaoVoltar} onClick={() => window.location.href = "/"}>
          <FaArrowLeft /> Voltar
        </button>

<h1 className={styles.tituloPagina}>
  <FaLeaf className={styles.iconeTitulo} />
  Análise Agronegócio — PROAGRO & CAR
</h1>
        <p className={styles.subtituloPagina}>Especializado em Mato Grosso e Amazônia Legal</p>


      </div>

      {/* ABAS */}
      <div className={styles.cardAbas}>
        <button 
          className={`${styles.aba} ${abaAtiva === 'sinistro' ? styles.abaAtiva : ''}`} 
          onClick={() => setAbaAtiva('sinistro')}
        >
          📋 Sinistro PROAGRO
        </button>
        <button 
          className={`${styles.aba} ${abaAtiva === 'car' ? styles.abaAtiva : ''}`} 
          onClick={() => setAbaAtiva('car')}
        >
          🌿 Análise de CAR
        </button>
      </div>

      {/* FORMULÁRIO */}
      <div className={styles.cardFormulario}>
        {abaAtiva === 'sinistro' ? (
          <div className={styles.formulario} key="sinistro">
            <h2 className={styles.tituloSecao}>Dados do Sinistro PROAGRO:</h2>
            <div className={styles.gridFormulario}>
              <div className={styles.campo}>
                <label className={styles.rotulo}>Cultura*</label>
                <input type="text" value={cultura} onChange={(e) => setCultura(e.target.value)} className={styles.inputTexto} />
              </div>
              <div className={styles.campo}>
                <label className={styles.rotulo}>Tipo de perda*</label>
                <select value={tipoPerda} onChange={(e) => setTipoPerda(e.target.value)} className={styles.inputSelecao}>
                  <option value="seca">Seca</option>
                  <option value="geada">Geada</option>
                  <option value="chuva_excessiva">Chuva excessiva</option>
                  <option value="granizo">Granizo</option>
                </select>
              </div>
              <div className={styles.campo}>
                <label className={styles.rotulo}>Área plantada (ha)*</label>
                <div className={styles.inputNumero}>
                  <input type="number" step="0.01" value={areaPlantada} onChange={(e) => setAreaPlantada(Number(e.target.value))} className={styles.inputNumerico} />
                  <button type="button" onClick={() => setAreaPlantada(v => Number((v + 1).toFixed(2)))} className={styles.botaoMaisMenos}><FaPlus /></button>
                  <button type="button" onClick={() => setAreaPlantada(v => Math.max(0, Number((v - 1).toFixed(2))))} className={styles.botaoMaisMenos}><FaMinus /></button>
                </div>
              </div>
              <div className={styles.campo}>
                <label className={styles.rotulo}>Banco financiador*</label>
                <input type="text" value={bancoFinanciador} onChange={(e) => setBancoFinanciador(e.target.value)} className={styles.inputTexto} />
              </div>
              <div className={styles.campo}>
                <label className={styles.rotulo}>Data do evento*</label>
                <input type="date" value={dataEvento} onChange={(e) => setDataEvento(e.target.value)} className={styles.inputData} />
              </div>
              <div className={styles.campo}>
                <label className={styles.rotulo}>Possui CCR?</label>
                <select value={possuiCCR} onChange={(e) => setPossuiCCR(e.target.value)} className={styles.inputSelecao}>
                  <option value="sim">Sim</option>
                  <option value="nao">Não</option>
                </select>
              </div>
              <div className={styles.campo}>
                <label className={styles.rotulo}>Estimativa de perda (%)*</label>
                <input type="range" min="0" max="100" value={estimativaPerda} onChange={(e) => setEstimativaPerda(Number(e.target.value))} className={styles.inputRange} />
                <span>{estimativaPerda}%</span>
              </div>
              <div className={styles.campo}>
                <label className={styles.rotulo}>Município/UF</label>
                <input type="text" value={municipioUF} onChange={(e) => setMunicipioUF(e.target.value)} className={styles.inputTexto} />
              </div>
            </div>
            <button className={styles.botaoAcao}>Analisar Sinistro PROAGRO</button>
          </div>
        ) : (
          <div className={styles.formulario} key="car">
            <h2 className={styles.tituloSecao}>Análise de CAR — Cadastro Ambiental Rural:</h2>
            
            <div className={styles.uploadContainer}>
              <p className={styles.textoUpload}>Envie o PDF do CAR ou Relatório SICAR</p>
              <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} accept=".pdf" />
              <div className={styles.uploadArea} onClick={() => fileInputRef.current.click()} style={{ cursor: 'pointer' }}>
                <FaUpload className={styles.iconeUpload} />
                <span>200MB per file • PDF</span>
              </div>
            </div>

            <h3 className={styles.subtituloSecao}>Ou descreva os dados do CAR:</h3>
            <div className={styles.gridFormulario}>
              <div className={styles.campo}>
                <label className={styles.rotulo}>Área total (ha)</label>
                <div className={styles.inputNumero}>
                  <input type="number" step="0.01" value={areaTotal} onChange={(e) => setAreaTotal(Number(e.target.value))} className={styles.inputNumerico} />
                  <button type="button" onClick={() => setAreaTotal(v => Number((v + 1).toFixed(2)))} className={styles.botaoMaisMenos}><FaPlus /></button>
                  <button type="button" onClick={() => setAreaTotal(v => Math.max(0, Number((v - 1).toFixed(2))))} className={styles.botaoMaisMenos}><FaMinus /></button>
                </div>
              </div>
              {/* Restante dos campos do CAR preservados */}
            </div>
            <button className={styles.botaoAcao}>Diagnosticar CAR</button>
          </div>
        )}
      </div>
    </div>
  );
};

=======
import React, { useState, useRef } from 'react';
import { FaLeaf, FaArrowLeft, FaPlus, FaMinus, FaUpload } from "react-icons/fa";
import styles from './proagrocar.module.css';

const ProagroCar = () => {
  // Lógica de Upload
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Arquivo selecionado:", file.name);
    }
  };

  // Seus estados originais
  const [abaAtiva, setAbaAtiva] = useState('sinistro');
  const [cultura, setCultura] = useState('Soja, Milho, Algodão...');
  const [tipoPerda, setTipoPerda] = useState('seca');
  const [areaPlantada, setAreaPlantada] = useState(0.00);
  const [bancoFinanciador, setBancoFinanciador] = useState('Banco do Brasil, Sicredi...');
  const [dataEvento, setDataEvento] = useState('2026-06-13');
  const [possuiCCR, setPossuiCCR] = useState('sim');
  const [estimativaPerda, setEstimativaPerda] = useState(40);
  const [municipioUF, setMunicipioUF] = useState('Sorriso/MT');
  const [observacoes, setObservacoes] = useState('');

  const [areaTotal, setAreaTotal] = useState(0.00);
  const [areaReservaLegal, setAreaReservaLegal] = useState(0.00);
  const [areaAPP, setAreaAPP] = useState(0.00);
  const [bioma, setBioma] = useState('amazonia');
  const [statusCAR, setStatusCAR] = useState('ativo');
  const [municipioCAR, setMunicipioCAR] = useState('');

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <div className={styles.cardHeader}>
        <button className={styles.botaoVoltar} onClick={() => window.location.href = "/"}>
          <FaArrowLeft /> Voltar
        </button>

<h1 className={styles.tituloPagina}>
  <FaLeaf className={styles.iconeTitulo} />
  Análise Agronegócio — PROAGRO & CAR
</h1>
        <p className={styles.subtituloPagina}>Especializado em Mato Grosso e Amazônia Legal</p>


      </div>

      {/* ABAS */}
      <div className={styles.cardAbas}>
        <button 
          className={`${styles.aba} ${abaAtiva === 'sinistro' ? styles.abaAtiva : ''}`} 
          onClick={() => setAbaAtiva('sinistro')}
        >
          📋 Sinistro PROAGRO
        </button>
        <button 
          className={`${styles.aba} ${abaAtiva === 'car' ? styles.abaAtiva : ''}`} 
          onClick={() => setAbaAtiva('car')}
        >
          🌿 Análise de CAR
        </button>
      </div>

      {/* FORMULÁRIO */}
      <div className={styles.cardFormulario}>
        {abaAtiva === 'sinistro' ? (
          <div className={styles.formulario} key="sinistro">
            <h2 className={styles.tituloSecao}>Dados do Sinistro PROAGRO:</h2>
            <div className={styles.gridFormulario}>
              <div className={styles.campo}>
                <label className={styles.rotulo}>Cultura*</label>
                <input type="text" value={cultura} onChange={(e) => setCultura(e.target.value)} className={styles.inputTexto} />
              </div>
              <div className={styles.campo}>
                <label className={styles.rotulo}>Tipo de perda*</label>
                <select value={tipoPerda} onChange={(e) => setTipoPerda(e.target.value)} className={styles.inputSelecao}>
                  <option value="seca">Seca</option>
                  <option value="geada">Geada</option>
                  <option value="chuva_excessiva">Chuva excessiva</option>
                  <option value="granizo">Granizo</option>
                </select>
              </div>
              <div className={styles.campo}>
                <label className={styles.rotulo}>Área plantada (ha)*</label>
                <div className={styles.inputNumero}>
                  <input type="number" step="0.01" value={areaPlantada} onChange={(e) => setAreaPlantada(Number(e.target.value))} className={styles.inputNumerico} />
                  <button type="button" onClick={() => setAreaPlantada(v => Number((v + 1).toFixed(2)))} className={styles.botaoMaisMenos}><FaPlus /></button>
                  <button type="button" onClick={() => setAreaPlantada(v => Math.max(0, Number((v - 1).toFixed(2))))} className={styles.botaoMaisMenos}><FaMinus /></button>
                </div>
              </div>
              <div className={styles.campo}>
                <label className={styles.rotulo}>Banco financiador*</label>
                <input type="text" value={bancoFinanciador} onChange={(e) => setBancoFinanciador(e.target.value)} className={styles.inputTexto} />
              </div>
              <div className={styles.campo}>
                <label className={styles.rotulo}>Data do evento*</label>
                <input type="date" value={dataEvento} onChange={(e) => setDataEvento(e.target.value)} className={styles.inputData} />
              </div>
              <div className={styles.campo}>
                <label className={styles.rotulo}>Possui CCR?</label>
                <select value={possuiCCR} onChange={(e) => setPossuiCCR(e.target.value)} className={styles.inputSelecao}>
                  <option value="sim">Sim</option>
                  <option value="nao">Não</option>
                </select>
              </div>
              <div className={styles.campo}>
                <label className={styles.rotulo}>Estimativa de perda (%)*</label>
                <input type="range" min="0" max="100" value={estimativaPerda} onChange={(e) => setEstimativaPerda(Number(e.target.value))} className={styles.inputRange} />
                <span>{estimativaPerda}%</span>
              </div>
              <div className={styles.campo}>
                <label className={styles.rotulo}>Município/UF</label>
                <input type="text" value={municipioUF} onChange={(e) => setMunicipioUF(e.target.value)} className={styles.inputTexto} />
              </div>
            </div>
            <button className={styles.botaoAcao}>Analisar Sinistro PROAGRO</button>
          </div>
        ) : (
          <div className={styles.formulario} key="car">
            <h2 className={styles.tituloSecao}>Análise de CAR — Cadastro Ambiental Rural:</h2>
            
            <div className={styles.uploadContainer}>
              <p className={styles.textoUpload}>Envie o PDF do CAR ou Relatório SICAR</p>
              <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} accept=".pdf" />
              <div className={styles.uploadArea} onClick={() => fileInputRef.current.click()} style={{ cursor: 'pointer' }}>
                <FaUpload className={styles.iconeUpload} />
                <span>200MB per file • PDF</span>
              </div>
            </div>

            <h3 className={styles.subtituloSecao}>Ou descreva os dados do CAR:</h3>
            <div className={styles.gridFormulario}>
              <div className={styles.campo}>
                <label className={styles.rotulo}>Área total (ha)</label>
                <div className={styles.inputNumero}>
                  <input type="number" step="0.01" value={areaTotal} onChange={(e) => setAreaTotal(Number(e.target.value))} className={styles.inputNumerico} />
                  <button type="button" onClick={() => setAreaTotal(v => Number((v + 1).toFixed(2)))} className={styles.botaoMaisMenos}><FaPlus /></button>
                  <button type="button" onClick={() => setAreaTotal(v => Math.max(0, Number((v - 1).toFixed(2))))} className={styles.botaoMaisMenos}><FaMinus /></button>
                </div>
              </div>
              {/* Restante dos campos do CAR preservados */}
            </div>
            <button className={styles.botaoAcao}>Diagnosticar CAR</button>
          </div>
        )}
      </div>
    </div>
  );
};

>>>>>>> 8ef10752ed7f969bcf80b9bfa2d39fc6bdb670e5
export default ProagroCar;