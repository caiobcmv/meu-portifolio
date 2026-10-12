import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileDown, 
  MessageCircle, 
  Mail, 
  Terminal, 
  GraduationCap, 
  MapPin, 
  Code2, 
  Briefcase,
  Cpu,
  Server,
  Database,
  Radio
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export function Hero({ onOpenTerminal, onOpenResume, onNotify }) {
  const { personal } = portfolioData;

  // Typewriter effect
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personal.roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 70);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % personal.roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, personal.roles]);

  const handleDownloadCv = () => {
    confetti({
      particleCount: 75,
      spread: 65,
      origin: { y: 0.6 },
      colors: ['#3b82f6', '#60a5fa', '#6366f1', '#10b981']
    });

    onNotify('Currículo baixado com sucesso!');
  };

  return (
    <section id="inicio" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left: Text & CTAs */}
          <div className="hero-content">
            <div className="hero-top-badge">
              <GraduationCap size={14} />
              <span>ADS • 4º Período • Faculdade Senac Recife</span>
            </div>

            <h1 className="hero-title">
              Olá, eu sou o <br />
              <span className="name-highlight">Caio Barreto</span>
            </h1>

            <div className="hero-dynamic-subtitle">
              <span>Atuando como</span>
              <span className="typing-text">{displayText || 'Desenvolvedor'}</span>
            </div>

            <p className="hero-description">
              Estudante de <strong>19 anos</strong> no <strong>4º período de ADS</strong> no Senac Recife. Focado na criação
              de aplicações modernas com <strong>React</strong>, <strong>JavaScript ES6+</strong>, back-end em <strong>Node.js</strong>,
              banco de dados <strong>SQL</strong> e integração de hardware com <strong>Internet das Coisas (IoT / ESP32)</strong>.
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <a href="#projetos" className="btn btn-primary">
                <span>Ver Projetos GitHub</span>
                <ArrowRight size={17} />
              </a>

              <a
                href={personal.resumePdf}
                download="Curriculo_Caio_Barreto.pdf"
                className="btn btn-secondary"
                onClick={handleDownloadCv}
              >
                <FileDown size={17} />
                <span>Baixar Currículo</span>
              </a>

              <a
                href={`https://wa.me/${personal.whatsappClean}?text=Ol%C3%A1%20Caio,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                <MessageCircle size={17} color="#25d366" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Social Links & Dev Console Shortcut */}
            <div className="hero-socials">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                title="GitHub @caiobcmv"
              >
                <GithubIcon size={19} />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                title="LinkedIn Caio Barreto"
              >
                <LinkedinIcon size={19} />
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="social-icon-btn"
                title={`Enviar e-mail para ${personal.email}`}
              >
                <Mail size={19} />
              </a>

              <button
                onClick={onOpenTerminal}
                className="social-icon-btn"
                title="Abrir Terminal Interativo"
                style={{ marginLeft: 'auto' }}
              >
                <Terminal size={19} color="var(--accent-blue-light)" />
              </button>
            </div>
          </div>

          {/* Right: Modern Avatar Showcase */}
          <div className="hero-visual-wrapper">
            <div className="avatar-halo-bg"></div>

            <div className="avatar-card-container">
              {/* Outer ring */}
              <div className="avatar-ring-outer"></div>

              {/* Photo Frame */}
              <div className="avatar-photo-frame">
                <img
                  src={personal.avatar}
                  alt="Caio Barreto"
                  className="avatar-photo-img"
                  loading="eager"
                />
              </div>

              {/* Floating tech pills (Clean - No emojis) */}
              <div className="floating-tech-pill pill-react">
                <Code2 size={13} />
                <span>React &amp; Vite</span>
              </div>

              <div className="floating-tech-pill pill-node">
                <Server size={13} />
                <span>Node.js</span>
              </div>

              <div className="floating-tech-pill pill-sql">
                <Database size={13} />
                <span>MySQL &amp; DER</span>
              </div>

              <div className="floating-tech-pill pill-iot">
                <Cpu size={13} />
                <span>IoT / ESP32</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Hero Stats Bar */}
        <div className="hero-stats-bar">
          <div className="stat-item-card">
            <div className="stat-icon-box">
              <GraduationCap size={22} />
            </div>
            <div className="stat-info">
              <span className="stat-number">4º Período</span>
              <span className="stat-label">ADS • Faculdade Senac Recife</span>
            </div>
          </div>

          <div className="stat-item-card">
            <div className="stat-icon-box">
              <MapPin size={22} />
            </div>
            <div className="stat-info">
              <span className="stat-number">Recife, PE</span>
              <span className="stat-label">19 anos • Residente</span>
            </div>
          </div>

          <div className="stat-item-card">
            <div className="stat-icon-box">
              <Cpu size={22} />
            </div>
            <div className="stat-info">
              <span className="stat-number">Web &amp; IoT</span>
              <span className="stat-label">React, Node, SQL &amp; ESP32</span>
            </div>
          </div>

          <div className="stat-item-card">
            <div className="stat-icon-box" style={{ color: '#10b981', background: 'rgba(16, 185, 129, 0.08)' }}>
              <Briefcase size={22} />
            </div>
            <div className="stat-info">
              <span className="stat-number" style={{ color: '#34d399' }}>Disponível</span>
              <span className="stat-label">Para Estágio em TI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
