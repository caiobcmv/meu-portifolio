import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="glass-card modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Fechar modal">
          <X size={18} />
        </button>

        {/* Project Image Banner */}
        <div style={{
          width: '100%',
          height: '260px',
          borderRadius: '0.85rem',
          overflow: 'hidden',
          marginBottom: '1.5rem',
          border: '1px solid var(--border-subtle)',
          position: 'relative'
        }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <span className="project-overlay-badge" style={{ top: '1rem', left: '1rem' }}>
            {project.badge}
          </span>
        </div>

        {/* Title and Short Description */}
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.6rem' }}>
          {project.title}
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
          {project.shortDesc}
        </p>

        {/* Key Features */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={18} color="var(--accent-cyan)" />
            <span>Funcionalidades &amp; Destaques Técnicos</span>
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {project.features.map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
                <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stacks */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Layers size={18} color="var(--accent-purple)" />
            <span>Tecnologias Utilizadas</span>
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.techs.map((tech, idx) => (
              <span key={idx} className="tag" style={{ background: 'rgba(0, 240, 255, 0.08)', borderColor: 'rgba(0, 240, 255, 0.3)', color: 'var(--accent-cyan)' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
            style={{ flex: 1 }}
          >
            <GithubIcon size={18} />
            <span>Ver no GitHub</span>
          </a>

          <button
            className="btn btn-primary"
            style={{ flex: 1 }}
            onClick={() => {
              alert(`Simulação da aplicação: Em um ambiente de produção, este projeto conecta-se à API REST e banco de dados.`);
            }}
          >
            <ExternalLink size={18} />
            <span>Testar Demonstração</span>
          </button>
        </div>
      </div>
    </div>
  );
}
