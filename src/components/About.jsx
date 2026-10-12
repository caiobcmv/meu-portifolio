import React from 'react';
import { User, Code2, Database, Server, Cpu, Target, Award, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function About() {
  const { personal } = portfolioData;

  const pillars = [
    {
      icon: <Code2 size={22} />,
      title: "Desenvolvimento Front-End",
      desc: "Construção de aplicações web responsivas e modernas com React, HTML5 semântico, CSS3 (Flexbox/Grid) e JavaScript ES6+ (manipulação de DOM, consumo de APIs via Fetch)."
    },
    {
      icon: <Server size={22} />,
      title: "Back-End & APIs REST",
      desc: "Desenvolvimento de servidores com Node.js e Express, criação e estruturação de rotas RESTful para integração com bancos de dados e aplicações clientes."
    },
    {
      icon: <Database size={22} />,
      title: "Banco de Dados & SQL",
      desc: "Modelagem relacional completa com DER e MER, normalização de dados (3FN) e elaboração de consultas SQL organizadas (SELECT, JOINs, subqueries) com MySQL."
    },
    {
      icon: <Cpu size={22} />,
      title: "Internet das Coisas (IoT)",
      desc: "Conhecimentos práticos em programação de microcontroladores (ESP32 / Arduino), leitura de sensores, atuadores e comunicação de dados via endpoints web."
    }
  ];

  return (
    <section id="sobre" className="about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <User size={13} />
            <span>Perfil Profissional</span>
          </div>
          <h2 className="section-title">
            Dedicação Técnica &amp; <span className="gradient-text">Evolução Contínua</span>
          </h2>
          <p className="section-subtitle">
            Conheça meu perfil, trajetória no Senac Recife e motivações na área de tecnologia.
          </p>
        </div>

        <div className="about-grid">
          {/* Left: Detailed Story Card */}
          <div className="glass-card about-text-card">
            <h3 style={{ fontSize: '1.35rem', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Code2 size={18} color="var(--accent-blue-light)" />
              <span>Trajetória &amp; Foco</span>
            </h3>

            <p className="about-paragraph">
              Sou estudante de <strong>Análise e Desenvolvimento de Sistemas</strong> na{' '}
              <strong>Faculdade Senac Recife</strong>, atualmente no <strong>4º período</strong>. Aos 19 anos,
              busco minha primeira oportunidade de estágio para colocar em prática meu conhecimento e evoluir diariamente.
            </p>

            <p className="about-paragraph">
              Tenho experiência prática no desenvolvimento de interfaces com <strong>React</strong>, <strong>JavaScript ES6+</strong> e{' '}
              <strong>CSS3 moderno</strong>, além de construção de servidores e rotas REST com <strong>Node.js</strong> e manipulação de bancos relacionais com <strong>MySQL</strong>.
            </p>

            <p className="about-paragraph">
              Também desenvolvo projetos e estudos na área de <strong>Internet das Coisas (IoT)</strong>, utilizando microcontroladores <strong>ESP32 e Arduino</strong> para conectar hardware, leitura de sensores e interfaces web.
            </p>

            {/* Objective Banner */}
            <div style={{
              marginTop: '1.5rem',
              padding: '1.15rem',
              borderRadius: '8px',
              background: 'rgba(59, 130, 246, 0.06)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              display: 'flex',
              gap: '0.85rem',
              alignItems: 'flex-start'
            }}>
              <div style={{ color: 'var(--accent-blue-light)', marginTop: '2px' }}>
                <Target size={20} />
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--accent-blue-light)', fontSize: '0.82rem', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Objetivo Profissional
                </strong>
                <p style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: '1.55' }}>
                  {personal.objective}
                </p>
              </div>
            </div>

            {/* Tags (Clean - No Emojis) */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.25rem' }}>
              <span className="tag">Recife - PE</span>
              <span className="tag">19 Anos</span>
              <span className="tag">Senac Recife</span>
              <span className="tag">4º Período ADS</span>
              <span className="tag">Web &amp; IoT</span>
            </div>
          </div>

          {/* Right: Pillars & Strengths */}
          <div className="about-pillars-grid">
            {pillars.map((pillar, index) => (
              <div key={index} className="glass-card pillar-card">
                <div className="pillar-icon-box">
                  {pillar.icon}
                </div>
                <div>
                  <h4 className="pillar-title">{pillar.title}</h4>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
