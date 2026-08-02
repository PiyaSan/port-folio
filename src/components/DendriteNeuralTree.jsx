import React, { useState, useEffect } from 'react';
import { 
  Microscope, 
  FolderGit2, 
  GraduationCap, 
  Award, 
  Users, 
  Mail, 
  BrainCircuit
} from 'lucide-react';

export default function DendriteNeuralTree() {
  const [activeSection, setActiveSection] = useState('research');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['research', 'projects', 'education', 'skills', 'leadership', 'contact'];
      const scrollPosition = window.scrollY + 300;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="neural-tree" className="py-12 relative overflow-hidden bg-transparent">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-900/80 border border-stone-800 text-stone-300 text-xs font-mono backdrop-blur-md">
            <BrainCircuit className="w-3.5 h-3.5 text-amber-400" />
            <span>DENDRITE NEURAL ARCHITECTURE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
            Multi-Branch Neural <span className="text-amber-400">Dendrite Tree</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 max-w-xl mx-auto font-mono">
            Click any dendrite node to navigate across research, engineering projects, and credentials.
          </p>
        </div>

        {/* Full-Width Transparent Canvas with SVG Dendrite Bezier Branching */}
        <div className="relative py-8 overflow-x-auto">
          <div className="min-w-[900px] relative py-12 px-4">
            
            {/* SVG Dendrite Branching Bezier Curves Layer */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 900 240" preserveAspectRatio="none">
              {/* Main Axon Trunk Line */}
              <line x1="60" y1="120" x2="840" y2="120" stroke="#f59e0b" strokeWidth="2.5" strokeOpacity="0.5" />
              
              {/* Dendrite Branch 1: Top-Left (SRIP Research) */}
              <path d="M 120 120 C 140 50, 180 35, 230 35" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.45" fill="none" />
              
              {/* Dendrite Branch 2: Bottom-Left (AI Projects) */}
              <path d="M 120 120 C 140 190, 180 205, 230 205" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.45" fill="none" />

              {/* Dendrite Branch 3: Top-Center (Education) */}
              <path d="M 380 120 C 400 50, 440 35, 490 35" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.45" fill="none" />

              {/* Dendrite Branch 4: Bottom-Center (Skills) */}
              <path d="M 380 120 C 400 190, 440 205, 490 205" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.45" fill="none" />

              {/* Dendrite Branch 5: Top-Right (Leadership) */}
              <path d="M 640 120 C 660 50, 700 35, 750 35" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.45" fill="none" />

              {/* Dendrite Branch 6: Bottom-Right (Contact) */}
              <path d="M 640 120 C 660 190, 700 205, 750 205" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.45" fill="none" />
            </svg>

            {/* Central Root Soma Core Node */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 z-20">
              <div className="w-14 h-14 rounded-full bg-stone-950/90 border-2 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.5)] flex items-center justify-center text-amber-400 backdrop-blur-md">
                <BrainCircuit className="w-7 h-7 animate-pulse" />
              </div>
              <span className="text-[11px] font-mono font-bold text-amber-300 whitespace-nowrap bg-stone-950/80 px-2 py-0.5 rounded-full border border-stone-800">
                Portfolio Soma Core
              </span>
            </div>

            {/* Branch Tip Nodes Matrix */}
            <div className="grid grid-cols-3 gap-y-24 gap-x-12 pl-28 pr-4 relative z-10">
              
              {/* Node 1 (Top-Left): SRIP Medical Vision Research */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => scrollToSection('research')}
                  className={`px-4 py-3 rounded-2xl border backdrop-blur-md text-left transition-all cursor-pointer flex items-center gap-3 ${
                    activeSection === 'research'
                      ? 'border-amber-400 bg-amber-500/15 text-amber-300 shadow-lg shadow-amber-500/20 scale-105'
                      : 'border-amber-500/30 bg-stone-900/60 text-stone-200 hover:border-amber-400 hover:scale-105'
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                    <Microscope className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold font-heading block whitespace-nowrap">SRIP Medical Vision Research</span>
                    <span className="text-[10px] font-mono text-stone-400 block whitespace-nowrap">Deep Learning CXR (SwinIR)</span>
                  </div>
                </button>
              </div>

              {/* Node 3 (Top-Center): Education & Academic CGPA */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => scrollToSection('education')}
                  className={`px-4 py-3 rounded-2xl border backdrop-blur-md text-left transition-all cursor-pointer flex items-center gap-3 ${
                    activeSection === 'education'
                      ? 'border-amber-400 bg-amber-500/15 text-amber-300 shadow-lg shadow-amber-500/20 scale-105'
                      : 'border-amber-500/30 bg-stone-900/60 text-stone-200 hover:border-amber-400 hover:scale-105'
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold font-heading block whitespace-nowrap">Education & Academic CGPA</span>
                    <span className="text-[10px] font-mono text-stone-400 block whitespace-nowrap">VIT Chennai (8.62 CGPA)</span>
                  </div>
                </button>
              </div>

              {/* Node 5 (Top-Right): Leadership & Impact */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => scrollToSection('leadership')}
                  className={`px-4 py-3 rounded-2xl border backdrop-blur-md text-left transition-all cursor-pointer flex items-center gap-3 ${
                    activeSection === 'leadership'
                      ? 'border-amber-400 bg-amber-500/15 text-amber-300 shadow-lg shadow-amber-500/20 scale-105'
                      : 'border-amber-500/30 bg-stone-900/60 text-stone-200 hover:border-amber-400 hover:scale-105'
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold font-heading block whitespace-nowrap">Leadership & Impact</span>
                    <span className="text-[10px] font-mono text-stone-400 block whitespace-nowrap">Swarajya & Tech Fest Fests</span>
                  </div>
                </button>
              </div>

              {/* Node 2 (Bottom-Left): AI & ML Engineering Projects */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => scrollToSection('projects')}
                  className={`px-4 py-3 rounded-2xl border backdrop-blur-md text-left transition-all cursor-pointer flex items-center gap-3 ${
                    activeSection === 'projects'
                      ? 'border-amber-400 bg-amber-500/15 text-amber-300 shadow-lg shadow-amber-500/20 scale-105'
                      : 'border-amber-500/30 bg-stone-900/60 text-stone-200 hover:border-amber-400 hover:scale-105'
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                    <FolderGit2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold font-heading block whitespace-nowrap">AI & ML Engineering Projects</span>
                    <span className="text-[10px] font-mono text-stone-400 block whitespace-nowrap">Sahayata Legal Aid & Rescue Router</span>
                  </div>
                </button>
              </div>

              {/* Node 4 (Bottom-Center): Technical Skills & CUDA */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => scrollToSection('skills')}
                  className={`px-4 py-3 rounded-2xl border backdrop-blur-md text-left transition-all cursor-pointer flex items-center gap-3 ${
                    activeSection === 'skills'
                      ? 'border-amber-400 bg-amber-500/15 text-amber-300 shadow-lg shadow-amber-500/20 scale-105'
                      : 'border-amber-500/30 bg-stone-900/60 text-stone-200 hover:border-amber-400 hover:scale-105'
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold font-heading block whitespace-nowrap">Technical Skills & CUDA</span>
                    <span className="text-[10px] font-mono text-stone-400 block whitespace-nowrap">IBM & NVIDIA DLI Accredited</span>
                  </div>
                </button>
              </div>

              {/* Node 6 (Bottom-Right): Contact & Collaborations */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`px-4 py-3 rounded-2xl border backdrop-blur-md text-left transition-all cursor-pointer flex items-center gap-3 ${
                    activeSection === 'contact'
                      ? 'border-amber-400 bg-amber-500/15 text-amber-300 shadow-lg shadow-amber-500/20 scale-105'
                      : 'border-amber-500/30 bg-stone-900/60 text-stone-200 hover:border-amber-400 hover:scale-105'
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold font-heading block whitespace-nowrap">Contact & Collaborations</span>
                    <span className="text-[10px] font-mono text-stone-400 block whitespace-nowrap">Summer 2026 AI Internships</span>
                  </div>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
