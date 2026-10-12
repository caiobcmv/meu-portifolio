import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, Trash2, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export function DevTerminal({ isOpen, onClose, onNotify }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: `Console de Desenvolvedor Caio Barreto [v3.0.0] - Recife, PE\nDigite 'help' para listar os comandos ou clique nos atalhos acima.`
    }
  ]);
  const [cmdIndex, setCmdIndex] = useState(-1);
  const [cmdHistory, setCmdHistory] = useState([]);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    setCmdHistory((prev) => [...prev, cmd]);
    setCmdIndex(-1);

    const newHistory = [...history, { type: 'user', text: `$ ${cmd}` }];

    switch (cleanCmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Comandos disponiveis:
  • about       - Perfil de Caio Barreto
  • skills      - Habilidades tecnicas (Web & IoT)
  • projects    - Projetos no GitHub
  • education   - Formacao academica (Senac Recife - 4º Periodo)
  • contact     - Canais de contato
  • cv          - Download do curriculo em PDF
  • hire        - Contato direto para estagio
  • clear       - Limpar console`
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          text: `Caio Barreto:
  • Idade: 19 anos
  • Local: Recife - PE, Brasil
  • Formacao: ADS na Faculdade Senac Recife (4º Periodo • Cursando)
  • Foco: Front-End (React/JS), Back-End (Node.js), SQL e IoT (ESP32)
  • Objetivo: Estagio em Tecnologia da Informacao`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `Stacks Tecnicas:
  [Front-End] : React, JavaScript ES6+, HTML5 Semantico, CSS3 Moderno, DOM
  [Back-End]  : Node.js, Express.js, APIs RESTful
  [IoT]       : ESP32, Arduino, Sensores, Telemetria, Automacao
  [Database]  : MySQL, Queries SQL (SELECT, JOINs, DDL/DML), Modelagem DER/MER
  [Tools]     : Git, GitHub, VS Code, Figma (basico)`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `Repositorios GitHub em Destaque (@caiobcmv):
  1. front-end-PI       - Projeto Integrador Front-End (JavaScript)
  2. PI                 - Repositorio Central do Projeto Integrador
  3. atividade-mobile   - Desenvolvimento Mobile com TypeScript
  4. boletim            - Sistema de Gestao e Boletim Academico
  5. iot-telemetria     - Integracao ESP32 e Sensores`
        });
        break;

      case 'education':
        newHistory.push({
          type: 'output',
          text: `Formacao Academica:
  • Instituicao : Faculdade Senac Recife
  • Curso       : Analise e Desenvolvimento de Sistemas (ADS)
  • Periodo     : 4º Periodo (Cursando)
  • Localizacao : Recife - PE`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Canais de Contato:
  • E-mail    : caiobarretovalle269@outlook.com
  • WhatsApp  : (81) 98593-5093
  • LinkedIn  : https://linkedin.com/in/caio-barreto
  • GitHub    : https://github.com/caiobcmv`
        });
        break;

      case 'cv':
      case 'curriculo':
        confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
        onNotify('Iniciando download do currículo...');
        const link = document.createElement('a');
        link.href = portfolioData.personal.resumePdf;
        link.download = 'Curriculo_Caio_Barreto.pdf';
        link.click();
        newHistory.push({
          type: 'output',
          text: `Download iniciado: Curriculo_Caio_Barreto.pdf`
        });
        break;

      case 'hire':
      case 'sudo hire':
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#3b82f6', '#60a5fa', '#6366f1', '#10b981']
        });
        newHistory.push({
          type: 'output',
          text: `[STATUS: PRONTO PARA INTEGRAR SUA EQUIPE]
Caio Barreto esta disponivel para estagio em desenvolvimento web e IoT.
Abrindo WhatsApp direto...`
        });
        setTimeout(() => {
          window.open(
            `https://wa.me/${portfolioData.personal.whatsappClean}?text=Ol%C3%A1%20Caio!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20vaga%20de%20est%C3%A1gio!`,
            '_blank'
          );
        }, 1200);
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'output',
          text: `Comando desconhecido: '${cleanCmd}'. Digite 'help' para comandos validos.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      if (cmdHistory.length > 0) {
        const nextIdx = cmdIndex === -1 ? cmdHistory.length - 1 : Math.max(0, cmdIndex - 1);
        setCmdIndex(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      if (cmdIndex !== -1) {
        const nextIdx = cmdIndex + 1;
        if (nextIdx < cmdHistory.length) {
          setCmdIndex(nextIdx);
          setInputVal(cmdHistory[nextIdx]);
        } else {
          setCmdIndex(-1);
          setInputVal('');
        }
      }
    }
  };

  const chips = ['help', 'skills', 'projects', 'education', 'contact', 'cv', 'hire', 'clear'];

  if (!isOpen) {
    return (
      <section className="terminal-section" id="terminal" style={{ paddingTop: '0.5rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="terminal-title">
                <Terminal size={13} color="var(--accent-blue-light)" />
                <span>caio@senac-recife: ~/portfolio</span>
              </div>
              <div className="terminal-quick-chips">
                {chips.map((chip) => (
                  <button
                    key={chip}
                    className="chip-btn"
                    onClick={() => executeCommand(chip)}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            <div className="terminal-body">
              {history.map((item, idx) => (
                <div key={idx} className="terminal-history-item">
                  {item.type === 'user' ? (
                    <div className="terminal-prompt-line">
                      <span className="terminal-prompt-symbol">➜</span>
                      <span>{item.text}</span>
                    </div>
                  ) : (
                    <div className="terminal-output">{item.text}</div>
                  )}
                </div>
              ))}

              <div className="terminal-input-row">
                <span className="terminal-prompt-symbol">➜</span>
                <span style={{ color: 'var(--accent-blue-light)' }}>~/guest $</span>
                <input
                  ref={inputRef}
                  type="text"
                  className="terminal-input"
                  placeholder="Digite um comando (ex: skills, projects, cv, hire)..."
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
              <div ref={terminalEndRef} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Modal variant
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" style={{ maxWidth: '780px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={16} />
        </button>

        <div className="terminal-window" style={{ marginTop: '0.5rem' }}>
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="terminal-title">
              <Terminal size={13} color="var(--accent-blue-light)" />
              <span>caio@senac-recife: ~/portfolio</span>
            </div>
            <div className="terminal-quick-chips">
              {chips.map((chip) => (
                <button
                  key={chip}
                  className="chip-btn"
                  onClick={() => executeCommand(chip)}
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          <div className="terminal-body" style={{ minHeight: '300px' }}>
            {history.map((item, idx) => (
              <div key={idx} className="terminal-history-item">
                {item.type === 'user' ? (
                  <div className="terminal-prompt-line">
                    <span className="terminal-prompt-symbol">➜</span>
                    <span>{item.text}</span>
                  </div>
                ) : (
                  <div className="terminal-output">{item.text}</div>
                )}
              </div>
            ))}

            <div className="terminal-input-row">
              <span className="terminal-prompt-symbol">➜</span>
              <span style={{ color: 'var(--accent-blue-light)' }}>~/guest $</span>
              <input
                ref={inputRef}
                type="text"
                className="terminal-input"
                placeholder="Digite um comando..."
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
              />
            </div>
            <div ref={terminalEndRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
