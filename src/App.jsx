import React, { useState } from 'react';
import IntroOverlay from './components/IntroOverlay';
import OrganicBackground from './components/OrganicBackground';
import VerticalDock from './components/VerticalDock';
import Hero from './components/Hero';
import RadialNeuronGraph from './components/RadialNeuronGraph';
import FeaturedResearch from './components/FeaturedResearch';
import Projects from './components/Projects';
import Education from './components/Education';
import CertificationsSkills from './components/CertificationsSkills';
import Leadership from './components/Leadership';
import ContactFooter from './components/ContactFooter';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-stone-100 relative selection:bg-amber-500/30 selection:text-amber-200 antialiased font-sans">
      
      {/* Fixed Background Layer with #0B0C0E slate base and 3 glowing ambient gradient orbs at z-0 */}
      <OrganicBackground />

      {/* Intro Animation Overlay */}
      <IntroOverlay
        isVisible={showIntro}
        onComplete={() => setShowIntro(false)}
      />

      {/* Floating Vertical Navigation Dock */}
      {!showIntro && (
        <VerticalDock onOpenResume={() => setIsResumeOpen(true)} />
      )}

      {/* Main Content Sections */}
      <main className="relative z-10 md:pl-16">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        
        {/* Radial Biological Neuron Soma Architecture Graph */}
        <RadialNeuronGraph />

        <FeaturedResearch />
        <Projects />
        <Education />
        <CertificationsSkills />
        <Leadership />
      </main>

      {/* Contact & Footer */}
      <ContactFooter onOpenResume={() => setIsResumeOpen(true)} />

      {/* Resume Preview Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}
