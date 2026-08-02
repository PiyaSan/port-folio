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

export default function HorizontalNeuralTree() {
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

  const nodes = [
    { id: 'research', label: 'SRIP Research', icon: Microscope, targetId: 'research', sub: 'Deep Learning CXR' },
    { id: 'projects', label: 'AI Projects', icon: FolderGit2, targetId: 'projects', sub: 'Full-Stack & CV' },
    { id: 'education', label: 'Education (8.62 CGPA)', icon: GraduationCap, targetId: 'education', sub: 'VIT Chennai' },
    { id: 'skills', label: 'Skills & CUDA', icon: Award, targetId: 'skills', sub: 'IBM & NVIDIA Certs' },
    { id: 'leadership', label: 'Leadership', icon: Users, targetId: 'leadership', sub: 'Swarajya & Fests' },
    { id: 'contact', label: 'Contact', icon: Mail, targetId: 'contact', sub: 'Summer Internships' }
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="neural-tree" className="py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-900 border border-stone-800 text-stone-300 text-xs font-mono">
            <BrainCircuit className="w-3.5 h-3.5 text-amber-400" />
            <span>ORGANIC NEURAL BRANCH GRAPH</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
            Horizontal Neural <span className="text-amber-400">Branch Network</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 max-w-xl mx-auto font-mono">
            Click any node on the organic neural branch below to navigate across research, projects, and credentials.
          </p>
        </div>

        {/* Custom SVG-Based Horizontal Organic Neural Branch Graph */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-2xl relative overflow-x-auto bg-stone-950/80 backdrop-blur-xl">
          
          {/* Main Horizontal Flow */}
          <div className="min-w-[800px] flex items-center justify-between relative py-6 px-4">
            
            {/* SVG Organic Bezier Connection Paths Layer */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 140" preserveAspectRatio="none">
              {/* Root Soma to Node Bezier Curves */}
              <path d="M 90 70 C 140 30, 180 30, 220 70" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.4" fill="none" />
              <path d="M 220 70 C 270 110, 310 110, 350 70" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.4" fill="none" />
              <path d="M 350 70 C 400 30, 440 30, 480 70" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.4" fill="none" />
              <path d="M 480 70 C 530 110, 570 110, 610 70" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.4" fill="none" />
              <path d="M 610 70 C 660 30, 700 30, 740 70" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.4" fill="none" />
              
              {/* Connecting Baseline */}
              <line x1="90" y1="70" x2="740" y2="70" stroke="#d97706" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.25" />
            </svg>

            {/* Central Root Soma Input Node */}
            <div className="flex flex-col items-center gap-2 z-10 shrink-0">
              <div className="w-14 h-14 rounded-full bg-stone-950 border-2 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.5)] flex items-center justify-center text-amber-400">
                <BrainCircuit className="w-7 h-7 animate-pulse" />
              </div>
              <span className="text-xs font-mono font-bold text-amber-300 tracking-tight text-center">
                Sharanya's Portfolio Core
              </span>
            </div>

            {/* Radiating Axon Nodes */}
            {nodes.map((node, index) => {
              const Icon = node.icon;
              const isActive = activeSection === node.id;

              return (
                <div key={node.id} className="flex flex-col items-center gap-2 z-10 shrink-0 group">
                  
                  {/* Organic Circular Glowing Node */}
                  <button
                    onClick={() => scrollToSection(node.targetId)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-amber-500 text-stone-950 shadow-[0_0_25px_rgba(245,158,11,0.7)] scale-110 font-bold'
                        : 'bg-stone-950 border-2 border-amber-500/40 text-amber-400 hover:scale-110 hover:border-amber-400'
                    }`}
                    aria-label={`Navigate to ${node.label}`}
                  >
                    <Icon className="w-5 h-5" />
                  </button>

                  {/* Node Label & Subtitle */}
                  <button
                    onClick={() => scrollToSection(node.targetId)}
                    className="text-center cursor-pointer space-y-0.5"
                  >
                    <span className={`text-xs font-bold font-heading block whitespace-nowrap transition-colors ${
                      isActive ? 'text-amber-300' : 'text-stone-200 group-hover:text-amber-300'
                    }`}>
                      {node.label}
                    </span>
                    <span className="text-[9px] font-mono text-stone-500 block whitespace-nowrap">
                      {node.sub}
                    </span>
                  </button>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
