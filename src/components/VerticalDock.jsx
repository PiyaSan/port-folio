import React, { useState, useEffect } from 'react';
import { 
  User, 
  Microscope, 
  FolderGit2, 
  GraduationCap, 
  Award, 
  Users, 
  Mail, 
  FileText,
  Terminal
} from 'lucide-react';

export default function VerticalDock({ onOpenResume }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'research', 'projects', 'education', 'skills', 'leadership', 'contact'];
      const scrollPosition = window.scrollY + 250;

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

  const navItems = [
    { id: 'hero', label: 'About Sharanya', icon: User, href: '#hero' },
    { id: 'research', label: 'Medical Vision Research (SRIP)', icon: Microscope, href: '#research' },
    { id: 'projects', label: 'Engineering Projects', icon: FolderGit2, href: '#projects' },
    { id: 'education', label: 'Academic Credentials', icon: GraduationCap, href: '#education' },
    { id: 'skills', label: 'Certifications & Tech Stack', icon: Award, href: '#skills' },
    { id: 'leadership', label: 'Leadership & Impact', icon: Users, href: '#leadership' },
    { id: 'contact', label: 'Contact & Collaboration', icon: Mail, href: '#contact' },
  ];

  return (
    <>
      {/* Desktop Vertical Dock Anchored Left */}
      <div className="fixed left-4 lg:left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-3">
        
        {/* Dock Container */}
        <div className="glass-card rounded-full py-5 px-3 flex flex-col items-center gap-4 border border-stone-800/90 shadow-2xl bg-stone-950/80 backdrop-blur-xl relative">
          
          {/* Logo Mark */}
          <a
            href="#hero"
            className="w-9 h-9 rounded-full bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-1 hover:scale-110 transition-transform"
            title="Sharanya Ahire Portfolio"
          >
            <Terminal className="w-4 h-4" />
          </a>

          <div className="w-6 h-[1px] bg-stone-800 my-0.5" />

          {/* Navigation Icons */}
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() => setHoveredLink(item.id)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <a
                  href={item.href}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/20 scale-105 font-bold'
                      : 'text-stone-400 hover:text-stone-100 hover:bg-stone-900/80'
                  }`}
                  aria-label={item.label}
                >
                  <Icon className="w-4 h-4" />
                </a>

                {/* Hover Tooltip Label */}
                {hoveredLink === item.id && (
                  <div className="absolute left-12 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-stone-900 border border-stone-800 text-xs font-mono text-stone-200 whitespace-nowrap shadow-xl pointer-events-none animate-in fade-in duration-150 z-50">
                    <span className="text-amber-400 mr-1.5">•</span>
                    {item.label}
                  </div>
                )}
              </div>
            );
          })}

          <div className="w-6 h-[1px] bg-stone-800 my-0.5" />

          {/* Resume Direct Download Button */}
          <div className="relative group">
            <a
              href="/Resume_final_Sharanya.pdf"
              download="Resume_final_Sharanya.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-stone-900 hover:bg-stone-800 border border-stone-800 text-amber-400 hover:text-amber-300 flex items-center justify-center transition-all cursor-pointer"
              title="Download Resume CV"
            >
              <FileText className="w-4 h-4" />
            </a>
            <div className="absolute left-12 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-stone-900 border border-stone-800 text-xs font-mono text-amber-300 whitespace-nowrap shadow-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-50">
              Download Resume CV
            </div>
          </div>

        </div>

      </div>

      {/* Mobile Floating Horizontal Dock at Bottom */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden flex items-center gap-2 max-w-[95vw] px-4 py-2 rounded-full glass-card border border-stone-800 bg-stone-950/90 shadow-2xl backdrop-blur-xl overflow-x-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              className={`p-2 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                isActive ? 'bg-amber-500 text-stone-950' : 'text-stone-400 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
            </a>
          );
        })}
        <a
          href="/Resume_final_Sharanya.pdf"
          download="Resume_final_Sharanya.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 shrink-0"
          title="Download Resume"
        >
          <FileText className="w-4 h-4" />
        </a>
      </div>
    </>
  );
}
