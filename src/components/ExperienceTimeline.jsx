import React from 'react';
import { GraduationCap, Briefcase, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function ExperienceTimeline() {
  return (
    <section id="trajetoria" className="timeline-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={13} />
            <span>Formação &amp; Experiência</span>
          </div>
          <h2 className="section-title">
            Jornada Acadêmica &amp; <span className="gradient-text">Evolução Técnica</span>
          </h2>
          <p className="section-subtitle">
            Base acadêmica sólida na Faculdade Senac Recife combinada com desenvolvimento contínuo de projetos práticos e IoT.
          </p>
        </div>

        <div className="timeline-grid">
          {/* Column 1: Formação Acadêmica */}
          <div className="glass-card timeline-column-card">
            <div className="timeline-column-header">
              <GraduationCap size={22} color="var(--accent-blue-light)" />
              <h3 className="timeline-column-title">Formação Acadêmica</h3>
            </div>

            <div className="timeline-item">
              <span className="timeline-date-tag">2024 - Presente • 4º Período (Cursando)</span>
              <h4 className="timeline-title">Análise e Desenvolvimento de Sistemas (ADS)</h4>
              <p className="timeline-inst">Faculdade Senac Recife</p>
              <p className="timeline-desc">
                Graduação superior tecnológica focada na formação prática de desenvolvimento de software, modelagem de banco de dados,
                engenharia de software, lógica algorítmica e arquitetura de sistemas web.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-date-tag">Disciplinas de ADS • Senac Recife</span>
              <h4 className="timeline-title">Banco de Dados Relacional</h4>
              <p className="timeline-inst">Senac Recife</p>
              <p className="timeline-desc">
                Modelagem conceitual e lógica (DER e MER), normalização de dados até a 3ª Forma Normal, escrita de queries SQL
                avançadas (SELECT, JOIN, subqueries) e uso prático do MySQL.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-date-tag">Disciplinas de ADS • Senac Recife</span>
              <h4 className="timeline-title">Engenharia de Software &amp; Projetos Integradores</h4>
              <p className="timeline-inst">Senac Recife</p>
              <p className="timeline-desc">
                Desenvolvimento em equipe de aplicações web completas, levantamento de requisitos, versionamento com Git e arquitetura cliente-servidor.
              </p>
            </div>
          </div>

          {/* Column 2: Experiências & Prática Técnica */}
          <div className="glass-card timeline-column-card">
            <div className="timeline-column-header">
              <Briefcase size={22} color="var(--accent-indigo)" />
              <h3 className="timeline-column-title">Prática Técnica &amp; IoT</h3>
            </div>

            <div className="timeline-item">
              <span className="timeline-date-tag">Estudos e Projetos Pessoais</span>
              <h4 className="timeline-title">Desenvolvimento Front-End &amp; Back-End</h4>
              <p className="timeline-inst">Aplicações Web Interativas</p>
              <p className="timeline-desc">
                Criação de páginas web responsivas com HTML5 semântico e CSS3 moderno. Desenvolvimento de interfaces dinâmicas em
                JavaScript puro e React (Vite), além de criação de servidores e rotas RESTful com Node.js e Express.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-date-tag">Hardware &amp; Conectividade</span>
              <h4 className="timeline-title">Internet das Coisas (IoT) com ESP32</h4>
              <p className="timeline-inst">Sistemas Embarcados &amp; Telemetria</p>
              <p className="timeline-desc">
                Programação de microcontroladores em ambiente Arduino/C++, leitura e calibração de sensores físicos e transmissão de métricas em tempo real para aplicações web.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-date-tag">Objetivo Atual</span>
              <h4 className="timeline-title">Estágio em Tecnologia da Informação</h4>
              <p className="timeline-inst">Pronto para Integrar sua Equipe</p>
              <p className="timeline-desc">
                Disponível para atuar como estagiário em desenvolvimento Web (Front-End, Back-End, Full-Stack ou IoT), com comunicação clara, responsabilidade e rápida curva de aprendizado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
