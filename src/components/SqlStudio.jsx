import React, { useState } from 'react';
import { Database, Play, RotateCcw, Table, Check, Code2, Server } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function SqlStudio({ onNotify }) {
  const sampleQueries = [
    {
      label: "Perfil do Desenvolvedor",
      sql: "SELECT nome, idade, faculdade, periodo, objetivo FROM dev_candidato;"
    },
    {
      label: "Habilidades com Alta Proficiência",
      sql: "SELECT stack, categoria, proficiencia FROM competencias WHERE proficiencia >= 80 ORDER BY proficiencia DESC;"
    },
    {
      label: "Repositórios do GitHub",
      sql: "SELECT repo, tecnologia_principal, categoria FROM github_projetos;"
    }
  ];

  const [queryInput, setQueryInput] = useState(sampleQueries[0].sql);
  const [resultData, setResultData] = useState({
    headers: ["nome", "idade", "faculdade", "periodo", "foco_principal"],
    rows: [
      ["Caio Barreto", "19 anos", "Faculdade Senac Recife", "4º Período ADS", "Desenvolvimento Web & IoT"]
    ],
    executionTime: "6ms",
    rowCount: 1
  });

  const handleRunQuery = () => {
    const q = queryInput.trim().toLowerCase();

    if (q.includes("competencias") || q.includes("habilidades")) {
      setResultData({
        headers: ["stack", "categoria", "proficiencia", "descricao"],
        rows: [
          ["HTML5 Semântico", "Front-End", "95%", "Estrutura semântica e acessibilidade"],
          ["CSS3 Moderno", "Front-End", "92%", "Flexbox, CSS Grid e responsividade"],
          ["JavaScript ES6+", "Front-End", "90%", "DOM, Fetch API e Async/Await"],
          ["Queries SQL", "Database", "88%", "SELECT, JOINs, DDL/DML e normalização"],
          ["React", "Front-End", "85%", "Componentes, hooks e Vite"],
          ["MySQL", "Database", "85%", "Modelagem relacional DER/MER"],
          ["Node.js / Express", "Back-End", "82%", "Construção de APIs RESTful"],
          ["IoT (ESP32 / Arduino)", "Hardware/IoT", "80%", "Microcontroladores e leitura de sensores"]
        ],
        executionTime: "10ms",
        rowCount: 8
      });
    } else if (q.includes("projetos") || q.includes("github") || q.includes("repo")) {
      setResultData({
        headers: ["repo", "tecnologia_principal", "categoria", "perfil"],
        rows: [
          ["front-end-PI", "JavaScript / HTML / CSS", "Front-End", "@caiobcmv"],
          ["PI", "JavaScript", "Faculdade Senac", "@caiobcmv"],
          ["atividade-mobile", "TypeScript", "Mobile", "@caiobcmv"],
          ["boletim", "CSS / JavaScript", "Front-End", "@caiobcmv"],
          ["iot-telemetria", "C++ / ESP32", "IoT & Hardware", "@caiobcmv"]
        ],
        executionTime: "11ms",
        rowCount: 5
      });
    } else {
      setResultData({
        headers: ["nome", "idade", "faculdade", "periodo", "foco_principal"],
        rows: [
          ["Caio Barreto", "19 anos", "Faculdade Senac Recife", "4º Período ADS", "Desenvolvimento Web & IoT"]
        ],
        executionTime: "6ms",
        rowCount: 1
      });
    }

    onNotify('Consulta SQL executada com sucesso.');
  };

  return (
    <section id="sql-studio" className="sql-studio-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Database size={13} />
            <span>Banco de Dados Relacional</span>
          </div>
          <h2 className="section-title">
            Nexus <span className="gradient-text">SQL Studio</span> Interativo
          </h2>
          <p className="section-subtitle">
            Demonstração prática dos meus conhecimentos em modelagem relacional (DER/MER) e consultas SQL no MySQL.
          </p>
        </div>

        <div className="glass-card sql-playground-card" style={{
          padding: '1.75rem',
          border: '1px solid rgba(59, 130, 246, 0.25)',
          background: 'rgba(15, 18, 28, 0.75)'
        }}>
          <div className="sql-header" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1rem',
            flexWrap: 'wrap',
            gap: '0.85rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700 }}>
              <Database size={20} color="var(--accent-blue-light)" />
              <span>Console MySQL • Senac Recife</span>
            </div>

            {/* Quick Sample Query Chips */}
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {sampleQueries.map((item, idx) => (
                <button
                  key={idx}
                  className="chip-btn"
                  onClick={() => setQueryInput(item.sql)}
                  title="Carregar consulta pré-definida"
                >
                  <Code2 size={11} style={{ display: 'inline', marginRight: '3px' }} />
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* SQL Input Bar */}
          <div className="sql-query-bar" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'var(--bg-input)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            padding: '0.5rem 0.85rem',
            marginBottom: '1rem'
          }}>
            <span style={{ color: 'var(--accent-blue-light)', fontWeight: 700, fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
              SQL&gt;
            </span>
            <input
              type="text"
              className="sql-input"
              value={queryInput}
              onChange={(e) => setQueryInput(e.target.value)}
              placeholder="Digite sua query SQL..."
              onKeyDown={(e) => e.key === 'Enter' && handleRunQuery()}
            />
            <button className="btn btn-primary btn-sm" onClick={handleRunQuery}>
              <Play size={13} />
              <span>Executar</span>
            </button>
          </div>

          {/* Query Stats */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            marginBottom: '0.75rem',
            fontFamily: 'var(--font-mono)'
          }}>
            <span>Linhas retornadas: {resultData.rowCount}</span>
            <span style={{ color: '#34d399' }}>Tempo: {resultData.executionTime} (Otimizada)</span>
          </div>

          {/* Results Table */}
          <div className="sql-table-wrapper">
            <table className="sql-table">
              <thead>
                <tr>
                  {resultData.headers.map((col, idx) => (
                    <th key={idx}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {resultData.rows.map((row, rIdx) => (
                  <tr key={rIdx}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Theoretical Foundations */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginTop: '1.5rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid var(--border-subtle)'
          }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              <strong style={{ color: '#fff', display: 'block', marginBottom: '0.2rem' }}>DER &amp; MER</strong>
              Modelagem conceitual e lógica com cardinalidades e relacionamentos.
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              <strong style={{ color: '#fff', display: 'block', marginBottom: '0.2rem' }}>Normalização</strong>
              Aplicação de 1FN, 2FN e 3FN para garantia de integridade.
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              <strong style={{ color: '#fff', display: 'block', marginBottom: '0.2rem' }}>Queries SQL</strong>
              Consultas com filtros WHERE, JOINs e agrupamentos no MySQL.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
