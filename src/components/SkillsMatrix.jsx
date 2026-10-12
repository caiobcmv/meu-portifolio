import React, { useState } from 'react';
import { 
  Cpu, 
  CheckCircle2, 
  Languages, 
  Layers, 
  Code2, 
  Server, 
  Database, 
  Activity, 
  Radio, 
  GitBranch, 
  Terminal, 
  Monitor, 
  Sliders 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function SkillsMatrix() {
  const { skills, languages } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'Todas as Stacks' },
    { id: 'frontend', label: 'Front-End' },
    { id: 'backend', label: 'Back-End' },
    { id: 'iot', label: 'IoT & Hardware' },
    { id: 'database', label: 'Banco de Dados' },
    { id: 'tools', label: 'Ferramentas' },
  ];

  const renderIcon = (key) => {
    switch (key) {
      case 'react':
      case 'code':
        return <Code2 size={17} />;
      case 'layout':
        return <Layers size={17} />;
      case 'palette':
        return <Sliders size={17} />;
      case 'monitor':
        return <Monitor size={17} />;
      case 'server':
        return <Server size={17} />;
      case 'database':
        return <Database size={17} />;
      case 'cpu':
        return <Cpu size={17} />;
      case 'activity':
        return <Activity size={17} />;
      case 'radio':
        return <Radio size={17} />;
      case 'gitBranch':
        return <GitBranch size={17} />;
      case 'terminal':
        return <Terminal size={17} />;
      default:
        return <Cpu size={17} />;
    }
  };

  const filteredSkills = activeFilter === 'all'
    ? skills
    : skills.filter((item) => item.category === activeFilter);

  return (
    <section id="habilidades" className="skills-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Cpu size={13} />
            <span>Tech Stack</span>
          </div>
          <h2 className="section-title">
            Habilidades &amp; <span className="gradient-text">Competências Técnicas</span>
          </h2>
          <p className="section-subtitle">
            Tecnologias, linguagens e conceitos aplicados em projetos de software web e sistemas conectados (IoT).
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="skills-filter-nav">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              className={`filter-btn ${activeFilter === tab.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="glass-card skill-card">
              <div className="skill-header">
                <div className="skill-icon-name">
                  <div className="skill-icon-bubble">
                    {renderIcon(skill.iconKey)}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
                <span className="skill-badge">{skill.level}%</span>
              </div>

              {/* Progress Meter */}
              <div className="skill-meter-track">
                <div
                  className="skill-meter-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              <p className="skill-desc">{skill.exp}</p>
            </div>
          ))}
        </div>

        {/* Languages & Methodology Banner */}
        <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {languages.map((lang, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: 'rgba(59, 130, 246, 0.08)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-blue-light)'
              }}>
                <Languages size={20} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <strong style={{ fontSize: '0.95rem' }}>{lang.name}</strong>
                  <span className="tag" style={{ fontSize: '0.68rem' }}>{lang.level}</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                  {lang.desc}
                </p>
              </div>
            </div>
          ))}

          <div className="glass-card" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#34d399'
            }}>
              <CheckCircle2 size={20} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <strong style={{ fontSize: '0.95rem' }}>Versionamento &amp; Boas Práticas</strong>
                <span className="tag" style={{ fontSize: '0.68rem', color: '#34d399' }}>Git Flow</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                Commits semânticos, branches organizadas e documentação clara.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
