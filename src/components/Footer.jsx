import React, { useState, useEffect } from 'react';
import { Mail, MessageCircle, Heart, ArrowUp, Clock } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export function Footer() {
  const { personal } = portfolioData;
  const [recifeTime, setRecifeTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Recife (America/Recife, UTC-3)
      const options = {
        timeZone: 'America/Recife',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setRecifeTime(new Intl.DateTimeFormat('pt-BR', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand info */}
          <div style={{ maxWidth: '400px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div className="brand-logo-badge" style={{ width: '36px', height: '36px', fontSize: '0.95rem' }}>CB</div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem' }}>Caio Barreto</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Desenvolvedor Web &amp; Estagiário em Tecnologia. Cursando ADS na Faculdade Senac Recife. Criando interfaces dinâmicas, código escalável e soluções inovadoras.
            </p>
          </div>

          {/* Quick links & Time */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {recifeTime && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                color: 'var(--accent-cyan)',
                background: 'rgba(0, 240, 255, 0.06)',
                padding: '0.4rem 0.85rem',
                borderRadius: '9999px',
                border: '1px solid rgba(0, 240, 255, 0.2)'
              }}>
                <Clock size={14} />
                <span>Recife: {recifeTime} (UTC-3)</span>
              </div>
            )}

            <button
              onClick={scrollToTop}
              className="social-icon-btn"
              title="Voltar ao Topo"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} Caio Barreto. Todos os direitos reservados.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>Construído com React e Vite</span>
            <span style={{ color: 'var(--accent-blue)' }}>•</span>
            <span>Recife, Pernambuco</span>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href={personal.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }} title="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }} title="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href={`https://wa.me/${personal.whatsappClean}`} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }} title="WhatsApp">
              <MessageCircle size={18} />
            </a>
            <a href={`mailto:${personal.email}`} style={{ color: 'var(--text-muted)' }} title="E-mail">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
