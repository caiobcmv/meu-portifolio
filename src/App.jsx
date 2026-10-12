import React, { useState } from 'react';
import './index.css';
import './App.css';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DevTerminal } from './components/DevTerminal';
import { About } from './components/About';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { SqlStudio } from './components/SqlStudio';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

import { Sparkles, CheckCircle } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [terminalModalOpen, setTerminalModalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [activeTheme, setActiveTheme] = useState('cyber-cyan');

  const showNotification = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3500);
  };

  return (
    <div className="portfolio-app-root" data-theme={activeTheme}>
      {/* Background Ambient Layer */}
      <div className="bg-ambient-layer">
        <div className="bg-ambient-grid"></div>
        <div className="bg-ambient-orb orb-1"></div>
        <div className="bg-ambient-orb orb-2"></div>
        <div className="bg-ambient-orb orb-3"></div>
      </div>

      {/* Navigation Bar */}
      <Navbar
        onOpenTerminal={() => setTerminalModalOpen(true)}
        onOpenResume={() => setResumeModalOpen(true)}
        activeTheme={activeTheme}
        onChangeTheme={(th) => setActiveTheme(th)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenTerminal={() => setTerminalModalOpen(true)}
          onOpenResume={() => setResumeModalOpen(true)}
          onNotify={showNotification}
        />

        {/* 2. Interactive Terminal Section (CLI) */}
        <DevTerminal
          isOpen={false}
          onClose={() => {}}
          onNotify={showNotification}
          onOpenResume={() => setResumeModalOpen(true)}
        />

        {/* 3. About Section */}
        <About />

        {/* 4. Skills & Tech Stack Section */}
        <SkillsMatrix />

        {/* 5. Projects Showcase Section */}
        <ProjectsShowcase
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* 6. Interactive SQL Studio Playground */}
        <SqlStudio onNotify={showNotification} />

        {/* 7. Experience & Education Timeline */}
        <ExperienceTimeline />

        {/* 8. Contact Section */}
        <ContactSection onNotify={showNotification} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Resume Viewer / Downloader Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        onNotify={showNotification}
      />

      {/* Standalone Terminal Modal */}
      {terminalModalOpen && (
        <DevTerminal
          isOpen={true}
          onClose={() => setTerminalModalOpen(false)}
          onNotify={showNotification}
          onOpenResume={() => setResumeModalOpen(true)}
        />
      )}

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="toast-notification">
          <CheckCircle size={18} color="#34d399" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
