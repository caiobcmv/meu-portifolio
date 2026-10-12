import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Terminal, FileDown, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Navbar({ onOpenTerminal, onOpenResume, activeTheme, onChangeTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'SQL Studio', href: '#sql-studio' },
    { label: 'Trajetória', href: '#trajetoria' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand */}
        <a href="#inicio" className="nav-brand">
          <div className="brand-logo-badge">CB</div>
          <div className="brand-text">
            <span className="brand-name">Caio Barreto</span>
            <span className="brand-role">Desenvolvedor Web</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {navLinks.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Nav Actions */}
        <div className="nav-actions">
          {/* Availability Pill */}
          <div className="availability-pill" title="Disponível para oportunidades de estágio">
            <span className="pulsing-dot"></span>
            <span>Disponível p/ Estágio</span>
          </div>

          {/* Terminal Shortcut */}
          <button 
            className="btn btn-secondary btn-sm"
            onClick={onOpenTerminal}
            title="Abrir Console de Desenvolvedor"
          >
            <Terminal size={15} />
            <span style={{ fontSize: '0.8rem' }}>Terminal</span>
          </button>

          {/* Currículo Button */}
          <button
            className="btn btn-outline-accent btn-sm"
            onClick={onOpenResume}
            title="Visualizar ou baixar currículo"
          >
            <FileDown size={15} />
            <span style={{ fontSize: '0.8rem' }}>Currículo</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-nav-drawer">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-nav-link"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
            <button
              className="btn btn-secondary btn-sm"
              style={{ flex: 1 }}
              onClick={() => { setMobileOpen(false); onOpenTerminal(); }}
            >
              <Terminal size={15} /> Terminal
            </button>
            <button
              className="btn btn-outline-rose btn-sm"
              style={{ flex: 1 }}
              onClick={() => { setMobileOpen(false); onOpenResume(); }}
            >
              <FileDown size={15} /> Ver CV
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
