import React from 'react';
import { X, FileDown, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export function ResumeModal({ isOpen, onClose, onNotify }) {
  if (!isOpen) return null;

  const { personal } = portfolioData;

  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 65,
      origin: { y: 0.6 },
      colors: ['#3b82f6', '#60a5fa', '#6366f1', '#10b981']
    });

    const link = document.createElement('a');
    link.href = personal.resumePdf;
    link.download = 'Curriculo_Caio_Barreto.pdf';
    link.click();
    onNotify('Download do currículo iniciado com sucesso.');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="glass-card modal-card" style={{ maxWidth: '800px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Fechar modal">
          <X size={16} />
        </button>

        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '8px',
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-blue-light)'
          }}>
            <FileDown size={20} />
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800 }}>
              Currículo • Caio Barreto
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Estagiário em Tecnologia | Desenvolvedor Web • ADS 4º Período • Faculdade Senac Recife
            </p>
          </div>
        </div>

        {/* Quick Details Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '0.85rem',
          padding: '1.1rem',
          background: 'var(--bg-input)',
          borderRadius: '8px',
          border: '1px solid var(--border-subtle)',
          marginBottom: '1.25rem',
          fontSize: '0.82rem'
        }}>
          <div>
            <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem' }}>FORMAÇÃO</span>
            <strong>ADS • Senac Recife (4º Período)</strong>
          </div>
          <div>
            <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem' }}>LOCALIZAÇÃO</span>
            <strong>Recife - PE, Brasil (19 anos)</strong>
          </div>
          <div>
            <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem' }}>CONTATO</span>
            <strong>{personal.phone}</strong>
          </div>
          <div>
            <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem' }}>ESPECIALIDADES</span>
            <strong style={{ color: 'var(--accent-blue-light)' }}>Web (React/Node) &amp; IoT</strong>
          </div>
        </div>

        {/* PDF Frame Preview */}
        <div style={{
          height: '350px',
          borderRadius: '8px',
          overflow: 'hidden',
          border: '1px solid var(--border-subtle)',
          marginBottom: '1.25rem',
          background: '#0d101a'
        }}>
          <iframe
            src={`${personal.resumePdf}#toolbar=0`}
            title="Currículo PDF Preview"
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
          <button className="btn btn-primary" style={{ flex: 1 }} onClick={handleDownload}>
            <FileDown size={16} />
            <span>Baixar Currículo em PDF</span>
          </button>

          <a
            href={personal.resumePdf}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
            style={{ flex: 1 }}
          >
            <ExternalLink size={16} />
            <span>Abrir em Nova Aba</span>
          </a>
        </div>
      </div>
    </div>
  );
}
