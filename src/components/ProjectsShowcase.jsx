import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Code2, ArrowUpRight, GitBranch } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export function ProjectsShowcase() {
  const { projects, personal } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Todos os Repositórios' },
    { id: 'frontend', label: 'Front-End' },
    { id: 'tools', label: 'Mobile & TypeScript' },
    { id: 'iot', label: 'IoT & Hardware' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const getLanguageDotClass = (lang) => {
    if (lang.includes('TypeScript')) return 'lang-dot-ts';
    if (lang.includes('JS') || lang.includes('JavaScript')) return 'lang-dot-js';
    if (lang.includes('CSS')) return 'lang-dot-css';
    if (lang.includes('IoT') || lang.includes('C++')) return 'lang-dot-iot';
    return '';
  };

  return (
    <section id="projetos" className="projects-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={13} />
            <span>Repositórios GitHub</span>
          </div>
          <h2 className="section-title">
            Projetos em <span className="gradient-text">Destaque no GitHub</span>
          </h2>
          <p className="section-subtitle">
            Repositórios acadêmicos e práticos desenvolvidos durante o curso no Senac Recife e estudos contínuos.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="skills-filter-nav">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* GitHub Projects Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="github-project-card">
              <div>
                <div className="repo-card-top">
                  <div className="repo-name-header">
                    <FolderGit2 size={16} color="var(--accent-blue-light)" />
                    <span>caiobcmv / {project.name}</span>
                  </div>
                  <span className="tag">{project.badge}</span>
                </div>

                <h3 className="repo-card-title">{project.title}</h3>
                <p className="repo-card-desc">{project.description}</p>

                {/* Tech tags */}
                <div className="repo-tech-list">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer with Language & Direct Link */}
              <div className="repo-card-actions">
                <div className="repo-lang-indicator">
                  <span className={`lang-dot ${getLanguageDotClass(project.language)}`}></span>
                  <span>{project.language}</span>
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary btn-sm"
                  title={`Abrir repositório ${project.name} no GitHub`}
                >
                  <GithubIcon size={15} />
                  <span>Ver no GitHub</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Profile Banner */}
        <div className="github-banner-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff'
            }}>
              <GithubIcon size={28} />
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                Explore mais repositórios no GitHub
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Confira commits, códigos-fonte completos e atividades acadêmicas no perfil <strong>@caiobcmv</strong>.
              </p>
            </div>
          </div>

          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <GithubIcon size={17} />
            <span>Acessar Perfil GitHub</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
