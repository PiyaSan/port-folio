import React, { useState, useEffect } from 'react';
import { 
  Microscope, 
  FolderGit2, 
  GraduationCap, 
  Award, 
  Users, 
  Mail, 
  BrainCircuit,
  ArrowDown
} from 'lucide-react';

export default function NeuralBranchTree() {
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
    {
      id: 'research',
      title: 'SRIP Medical Vision Research',
      subtitle: 'Deep Learning CXR Restoration (SwinIR / Restormer)',
      icon: Microscope,
      targetId: 'research',
      side: 'left'
    },
    {
      id: 'projects',
      title: 'AI & ML Engineering Projects',
      subtitle: 'Sahayata Legal Aid, Rescue Router & Gesture Drawing',
      icon: FolderGit2,
      targetId: 'projects',
      side: 'right'
    },
    {
      id: 'education',
      title: 'Education & Background',
      subtitle: 'B.Tech CSE (AI & ML) | VIT Chennai — 8.62 CGPA',
      icon: GraduationCap,
      targetId: 'education',
      side: 'left'
    },
    {
      id: 'skills',
      title: 'Technical Skills & Certs',
      subtitle: 'IBM Agentic AI, NVIDIA DLI, PyTorch & OpenCV',
      icon: Award,
      targetId: 'skills',
      side: 'right'
    },
    {
      id: 'leadership',
      title: 'Leadership & Campus Impact',
      subtitle: 'Vice Chairperson (Swarajya) & Festival Committees',
      icon: Users,
      targetId: 'leadership',
      side: 'left'
    },
    {
      id: 'contact',
      title: 'Get In Touch & Collaborate',
      subtitle: 'Open for Summer 2026 Internships & Research',
      icon: Mail,
      targetId: 'contact',
      side: 'right'
    }
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="neural-tree" className="py-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900 border border-stone-800 text-stone-300 text-xs font-mono">
            <BrainCircuit className="w-3.5 h-3.5 text-amber-400" />
            <span>INTERACTIVE NEURAL NAVIGATION STEM</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
            Neural Branch <span className="text-amber-400">Navigation Tree</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 max-w-xl mx-auto font-mono">
            Click any glowing branch node below to jump directly to detailed portfolio sections.
          </p>
        </div>

        {/* Neural Network Vertical Stem Container */}
        <div className="relative py-4">
          
          {/* SVG Center Neural Line Stem */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-amber-500/80 via-amber-400 to-amber-500/20 rounded-full" />

          {/* Nodes Stack */}
          <div className="space-y-10 relative">
            {nodes.map((node) => {
              const Icon = node.icon;
              const isActive = activeSection === node.id;
              const isLeft = node.side === 'left';

              return (
                <div
                  key={node.id}
                  className={`flex items-center gap-4 ${
                    isLeft ? 'flex-row' : 'flex-row-reverse md:flex-row'
                  } justify-between md:justify-center relative group`}
                >
                  {/* Content Card (Left Side on Desktop) */}
                  <div className={`w-full md:w-[42%] text-right ${isLeft ? 'md:text-right' : 'md:text-left md:order-3'}`}>
                    <button
                      onClick={() => scrollToSection(node.targetId)}
                      className={`glass-card p-4 rounded-2xl border transition-all text-left w-full cursor-pointer group ${
                        isActive
                          ? 'border-amber-500/50 bg-stone-900/90 shadow-lg shadow-amber-500/10'
                          : 'border-stone-800 hover:border-amber-500/30'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className={`text-xs font-bold font-heading ${isActive ? 'text-amber-300' : 'text-white group-hover:text-amber-300'}`}>
                          {node.title}
                        </span>
                        <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-amber-400' : 'text-stone-400'}`} />
                      </div>
                      <p className="text-[11px] text-stone-400 font-mono leading-tight">
                        {node.subtitle}
                      </p>
                    </button>
                  </div>

                  {/* Center Glowing Amber Core Node */}
                  <button
                    onClick={() => scrollToSection(node.targetId)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-300 cursor-pointer shrink-0 ${
                      isActive
                        ? 'bg-amber-500 text-stone-950 shadow-[0_0_20px_rgba(245,158,11,0.6)] scale-110'
                        : 'bg-stone-950 border-2 border-amber-500/40 text-amber-400 hover:scale-110'
                    }`}
                    aria-label={`Jump to ${node.title}`}
                  >
                    <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-stone-950 animate-ping' : 'bg-amber-400 animate-pulse'}`} />
                  </button>

                  {/* Empty Spacer on Right Side to balance layout */}
                  <div className="hidden md:block w-[42%]" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
