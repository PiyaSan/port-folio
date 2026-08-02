import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'research', 'projects', 'education', 'skills', 'leadership', 'contact'];
      const scrollPosition = window.scrollY + 200;

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

  const navLinks = [
    { name: 'About', href: '#hero', id: 'hero' },
    { name: 'Research (SRIP)', href: '#research', id: 'research' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Leadership', href: '#leadership', id: 'leadership' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-40 flex justify-center px-4">
      <nav
        className={`w-full max-w-5xl rounded-full transition-all duration-300 glass-nav px-5 py-2.5 shadow-xl shadow-black/40 flex items-center justify-between border border-stone-800/80 ${
          scrolled ? 'bg-stone-950/85 backdrop-blur-md' : 'bg-stone-950/60 backdrop-blur-md'
        }`}
      >
        {/* Simplified Clean Branding */}
        <a
          href="#hero"
          className="flex items-center gap-2 group cursor-pointer"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
          <span className="font-heading font-bold text-base text-white group-hover:text-amber-300 transition-colors tracking-tight">
            Sharanya Ahire
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`text-xs font-medium transition-all duration-200 py-1 relative ${
                activeSection === link.id
                  ? 'text-amber-300 font-semibold after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-4 after:h-0.5 after:bg-amber-400 after:rounded-full'
                  : 'text-stone-400 hover:text-stone-100'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Resume Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30 hover:bg-amber-500/25 transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onOpenResume}
            className="p-1.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 text-xs font-medium flex items-center gap-1"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-stone-900 border border-stone-800 text-stone-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 text-amber-400" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-4 right-4 glass-card p-4 rounded-2xl border border-stone-800 shadow-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                    : 'text-stone-300 hover:bg-stone-800 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
