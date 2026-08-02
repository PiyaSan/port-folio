import React from 'react';
import { 
  Microscope, 
  FolderGit2, 
  GraduationCap, 
  Award, 
  Users, 
  Mail, 
  BrainCircuit
} from 'lucide-react';

export default function RadialNeuronGraph() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nodesList = [
    { id: 'research', title: 'SRIP Medical Vision Research', sub: 'Deep Learning CXR (SwinIR)', icon: Microscope },
    { id: 'projects', title: 'AI & ML Engineering Projects', sub: 'Sahayata & Rescue Router', icon: FolderGit2 },
    { id: 'education', title: 'Education & Academic CGPA', sub: 'VIT Chennai (8.62 CGPA)', icon: GraduationCap },
    { id: 'skills', title: 'Technical Skills & CUDA', sub: 'IBM & NVIDIA DLI Accredited', icon: Award },
    { id: 'leadership', title: 'Leadership & Campus Impact', sub: 'Swarajya & Tech Fests', icon: Users },
    { id: 'contact', title: 'Contact & Collaborations', sub: 'Summer 2026 AI Internships', icon: Mail }
  ];

  return (
    <section id="neural-tree" className="py-12 sm:py-16 relative overflow-hidden bg-transparent">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-900/60 border border-stone-800 text-stone-300 text-xs font-mono backdrop-blur-md">
            <BrainCircuit className="w-3.5 h-3.5 text-amber-400" />
            <span>RADIAL BIOLOGICAL NEURON GRAPH</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
            Biological Neuron <span className="text-amber-400">Soma Architecture</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 max-w-xl mx-auto font-mono">
            Click any radiating dendrite node to jump across research, engineering projects, and credentials.
          </p>
        </div>

        {/* Desktop Radial Biological Canvas (md:flex) */}
        <div className="hidden md:flex relative py-8 px-4 items-center justify-center">
          <div className="w-full max-w-4xl h-[420px] relative flex items-center justify-center">
            
            {/* SVG Organic Bezier Radiating Axons Layer */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 850 420" preserveAspectRatio="none">
              <defs>
                <linearGradient id="amberGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#d97706" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* 6 Radiating organic curvature bezier paths from Soma Center (425, 210) */}
              <path d="M 425 210 C 350 150, 260 80, 180 50" stroke="url(#amberGradient)" strokeWidth="2.5" fill="none" strokeDasharray="6 3" />
              <path d="M 425 210 C 500 150, 590 80, 670 50" stroke="url(#amberGradient)" strokeWidth="2.5" fill="none" strokeDasharray="6 3" />
              <path d="M 425 210 C 320 210, 220 210, 120 210" stroke="url(#amberGradient)" strokeWidth="2.5" fill="none" />
              <path d="M 425 210 C 530 210, 630 210, 730 210" stroke="url(#amberGradient)" strokeWidth="2.5" fill="none" />
              <path d="M 425 210 C 350 270, 260 340, 180 370" stroke="url(#amberGradient)" strokeWidth="2.5" fill="none" strokeDasharray="6 3" />
              <path d="M 425 210 C 500 270, 590 340, 670 370" stroke="url(#amberGradient)" strokeWidth="2.5" fill="none" strokeDasharray="6 3" />
            </svg>

            {/* Central Biological Soma (Cell Body) Nucleus */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-20">
              <div className="w-20 h-20 rounded-full bg-stone-950/90 border-2 border-amber-400 shadow-[0_0_35px_rgba(245,158,11,0.6)] flex items-center justify-center text-amber-400 backdrop-blur-md">
                <BrainCircuit className="w-10 h-10 animate-pulse" />
              </div>
              <span className="text-xs font-mono font-bold text-amber-300 whitespace-nowrap bg-stone-950/80 px-3 py-1 rounded-full border border-amber-500/30 shadow-md">
                Portfolio Soma Core
              </span>
            </div>

            {/* Radiating 6 Terminal Dendrite Node Buttons */}
            <button
              onClick={() => scrollToSection('research')}
              className="absolute top-2 left-6 px-4 py-3 rounded-2xl bg-stone-900/60 border border-amber-500/20 hover:border-amber-400 hover:scale-105 transition-all text-stone-200 shadow-lg backdrop-blur-md flex items-center gap-3 cursor-pointer z-10"
            >
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                <Microscope className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold font-heading block whitespace-nowrap">SRIP Medical Vision Research</span>
                <span className="text-[10px] font-mono text-stone-400 block whitespace-nowrap">Deep Learning CXR (SwinIR)</span>
              </div>
            </button>

            <button
              onClick={() => scrollToSection('projects')}
              className="absolute top-2 right-6 px-4 py-3 rounded-2xl bg-stone-900/60 border border-amber-500/20 hover:border-amber-400 hover:scale-105 transition-all text-stone-200 shadow-lg backdrop-blur-md flex items-center gap-3 cursor-pointer z-10"
            >
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                <FolderGit2 className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold font-heading block whitespace-nowrap">AI & ML Engineering Projects</span>
                <span className="text-[10px] font-mono text-stone-400 block whitespace-nowrap">Sahayata & Rescue Router</span>
              </div>
            </button>

            <button
              onClick={() => scrollToSection('education')}
              className="absolute top-1/2 -translate-y-1/2 left-0 px-4 py-3 rounded-2xl bg-stone-900/60 border border-amber-500/20 hover:border-amber-400 hover:scale-105 transition-all text-stone-200 shadow-lg backdrop-blur-md flex items-center gap-3 cursor-pointer z-10"
            >
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold font-heading block whitespace-nowrap">Education & Academic CGPA</span>
                <span className="text-[10px] font-mono text-stone-400 block whitespace-nowrap">VIT Chennai (8.62 CGPA)</span>
              </div>
            </button>

            <button
              onClick={() => scrollToSection('skills')}
              className="absolute top-1/2 -translate-y-1/2 right-0 px-4 py-3 rounded-2xl bg-stone-900/60 border border-amber-500/20 hover:border-amber-400 hover:scale-105 transition-all text-stone-200 shadow-lg backdrop-blur-md flex items-center gap-3 cursor-pointer z-10"
            >
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold font-heading block whitespace-nowrap">Technical Skills & CUDA</span>
                <span className="text-[10px] font-mono text-stone-400 block whitespace-nowrap">IBM & NVIDIA DLI Accredited</span>
              </div>
            </button>

            <button
              onClick={() => scrollToSection('leadership')}
              className="absolute bottom-2 left-6 px-4 py-3 rounded-2xl bg-stone-900/60 border border-amber-500/20 hover:border-amber-400 hover:scale-105 transition-all text-stone-200 shadow-lg backdrop-blur-md flex items-center gap-3 cursor-pointer z-10"
            >
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold font-heading block whitespace-nowrap">Leadership & Campus Impact</span>
                <span className="text-[10px] font-mono text-stone-400 block whitespace-nowrap">Swarajya & Tech Fest Fests</span>
              </div>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="absolute bottom-2 right-6 px-4 py-3 rounded-2xl bg-stone-900/60 border border-amber-500/20 hover:border-amber-400 hover:scale-105 transition-all text-stone-200 shadow-lg backdrop-blur-md flex items-center gap-3 cursor-pointer z-10"
            >
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold font-heading block whitespace-nowrap">Contact & Collaborations</span>
                <span className="text-[10px] font-mono text-stone-400 block whitespace-nowrap">Summer 2026 AI Internships</span>
              </div>
            </button>

          </div>
        </div>

        {/* Mobile Responsive Touch Grid (md:hidden) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
          {nodesList.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="p-3.5 rounded-2xl bg-stone-900/60 border border-amber-500/20 active:border-amber-400 transition-all text-stone-200 backdrop-blur-md flex items-center gap-3 text-left cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-bold font-heading block truncate text-stone-100">{item.title}</span>
                  <span className="text-[10px] font-mono text-stone-400 block truncate">{item.sub}</span>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
