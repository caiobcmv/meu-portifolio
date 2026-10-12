import React, { useState } from 'react';
import { 
  Mail, 
  MessageCircle, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  ExternalLink 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export function ContactSection({ onNotify }) {
  const { personal } = portfolioData;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    onNotify('E-mail copiado para a área de transferência!');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onNotify('Por favor, preencha nome, e-mail e mensagem.');
      return;
    }

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#8b5cf6', '#ff2a5f', '#10b981']
    });

    setSubmitted(true);
    onNotify('Mensagem enviada com sucesso! Obrigado pelo contato.');

    // Prepares WhatsApp link with the submitted details
    const textMsg = `Olá Caio! Meu nome é ${formData.name} (${formData.email}${formData.company ? `, da empresa ${formData.company}` : ''}): ${formData.message}`;
    const waUrl = `https://wa.me/${personal.whatsappClean}?text=${encodeURIComponent(textMsg)}`;

    setTimeout(() => {
      if (window.confirm('Deseja também abrir a conversa diretamente no WhatsApp para agilizar o contato?')) {
        window.open(waUrl, '_blank');
      }
    }, 600);
  };

  return (
    <section id="contato" className="contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Mail size={14} />
            <span>Vamos Conversar?</span>
          </div>
          <h2 className="section-title">
            Entre em <span className="gradient-text">Contato Comigo</span>
          </h2>
          <p className="section-subtitle">
            Estou disponível para entrevistas e oportunidades de estágio em Recife ou remoto. Fale comigo pelos canais abaixo!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Contact Channels List */}
          <div className="contact-channels-list">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${personal.whatsappClean}?text=Ol%C3%A1%20Caio,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade!`}
              target="_blank"
              rel="noreferrer"
              className="glass-card contact-card-box"
            >
              <div className="contact-card-left">
                <div className="contact-icon-bubble icon-whatsapp">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <div className="contact-channel-label">WhatsApp Direto</div>
                  <div className="contact-channel-val">{personal.phone}</div>
                </div>
              </div>
              <ExternalLink size={18} color="var(--text-muted)" />
            </a>

            {/* Email Card with Copy Button */}
            <div className="glass-card contact-card-box" style={{ cursor: 'pointer' }} onClick={handleCopyEmail}>
              <div className="contact-card-left">
                <div className="contact-icon-bubble icon-email">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="contact-channel-label">E-mail Profissional</div>
                  <div className="contact-channel-val" style={{ wordBreak: 'break-all', fontSize: '0.9rem' }}>
                    {personal.email}
                  </div>
                </div>
              </div>
              <button
                className="btn btn-secondary btn-sm"
                onClick={(e) => { e.stopPropagation(); handleCopyEmail(); }}
                title="Copiar e-mail"
              >
                {copiedEmail ? <Check size={14} color="#34d399" /> : <Copy size={14} />}
                <span>{copiedEmail ? 'Copiado!' : 'Copiar'}</span>
              </button>
            </div>

            {/* LinkedIn */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass-card contact-card-box"
            >
              <div className="contact-card-left">
                <div className="contact-icon-bubble icon-linkedin">
                  <LinkedinIcon size={24} />
                </div>
                <div>
                  <div className="contact-channel-label">LinkedIn</div>
                  <div className="contact-channel-val">{personal.linkedinUsername}</div>
                </div>
              </div>
              <ExternalLink size={18} color="var(--text-muted)" />
            </a>

            {/* GitHub */}
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="glass-card contact-card-box"
            >
              <div className="contact-card-left">
                <div className="contact-icon-bubble icon-github">
                  <GithubIcon size={24} />
                </div>
                <div>
                  <div className="contact-channel-label">GitHub</div>
                  <div className="contact-channel-val">@{personal.githubUsername}</div>
                </div>
              </div>
              <ExternalLink size={18} color="var(--text-muted)" />
            </a>

            {/* Location */}
            <div className="glass-card contact-card-box">
              <div className="contact-card-left">
                <div className="contact-icon-bubble" style={{ background: 'rgba(255, 42, 95, 0.1)', color: '#ff2a5f', border: '1px solid rgba(255, 42, 95, 0.3)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="contact-channel-label">Localização</div>
                  <div className="contact-channel-val">{personal.location}</div>
                </div>
              </div>
              <span className="tag">Presencial ou Remoto</span>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="glass-card contact-form-card">
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={18} color="var(--accent-blue-light)" />
              <span>Envie uma Mensagem</span>
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Tem uma vaga de estágio ou projeto em mente? Preencha os campos abaixo que responderei rapidamente.
            </p>

            {submitted ? (
              <div style={{
                padding: '2rem',
                textAlign: 'center',
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '1rem'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto',
                  color: '#34d399'
                }}>
                  <Check size={28} />
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>Mensagem Recebida!</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                  Muito obrigado pelo contato. Responderei o mais rápido possível no seu e-mail ou WhatsApp!
                </p>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', company: '', message: '' });
                  }}
                >
                  Enviar Outra Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Seu Nome *</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="Ex: Ana Silva / Tech Recruiter"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Seu E-mail *</label>
                    <input
                      type="email"
                      required
                      className="form-input"
                      placeholder="recrutador@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Empresa (Opcional)</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Nome da sua empresa"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Mensagem *</label>
                  <textarea
                    required
                    className="form-textarea"
                    placeholder="Olá Caio, temos uma oportunidade de estágio em desenvolvimento web..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  <Send size={18} />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
