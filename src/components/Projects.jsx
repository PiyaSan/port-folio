import React, { useState } from 'react';
import { 
  FolderGit2, 
  CheckCircle2,
  ExternalLink,
  Code2,
  Cpu,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const activeProject = projects[activeProjectIndex];

  const handleNext = () => {
    setActiveProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900/70 border border-stone-800 text-stone-300 text-xs font-mono backdrop-blur-md">
              <FolderGit2 className="w-3.5 h-3.5 text-amber-400" />
              <span>ENGINEERING REPOSITORIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading flex items-center gap-3">
              <FolderGit2 className="w-8 h-8 text-amber-400 hidden sm:inline-block" />
              <span>Featured <span className="text-amber-400">Engineering Projects</span></span>
            </h2>
            <p className="text-stone-400 text-sm sm:text-base">
              Explore deep architectural details, feature breakdowns, and GitHub source code repositories.
            </p>
          </div>

          {/* Project Carousel Controls */}
          <div className="flex items-center gap-3 bg-stone-900/60 p-2 rounded-2xl border border-stone-800 shrink-0 backdrop-blur-md">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl bg-stone-950 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer"
              title="Previous Project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-stone-400 px-2">
              <span className="text-amber-400 font-bold">{activeProjectIndex + 1}</span> / {projects.length}
            </span>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl bg-stone-950 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer"
              title="Next Project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Interactive Tab Selectors */}
        <div className="flex flex-wrap items-center gap-2 border-b border-stone-800/80 pb-3">
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setActiveProjectIndex(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                activeProjectIndex === idx
                  ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30 font-bold shadow-md'
                  : 'text-stone-400 hover:text-white hover:bg-stone-900/60'
              }`}
            >
              <span className="text-amber-400 mr-1.5">0{idx + 1}.</span>
              <span>{proj.title.split('—')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Featured Project Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-stone-800/80 shadow-2xl relative space-y-8 animate-in fade-in duration-200 bg-stone-900/40 backdrop-blur-md">
          
          {/* Top Bar Metadata */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800/80 pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-medium">
                  {activeProject.badge}
                </span>
                {activeProject.category !== activeProject.badge && (
                  <span className="text-xs text-stone-400 font-mono">
                    {activeProject.category}
                  </span>
                )}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading pt-1">
                {activeProject.title}
              </h3>
            </div>

            {/* Direct GitHub Code Button */}
            <a
              href={activeProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md transition-colors cursor-pointer shrink-0"
            >
              <GithubIcon className="w-4 h-4 fill-stone-950" />
              <span>View Code on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Description */}
          <p className="text-stone-300 text-sm leading-relaxed">
            {activeProject.description}
          </p>

          {/* Architectural Features Grid */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-amber-400" />
              Key Architectural Innovations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeProject.features.map((feat, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-stone-950/70 border border-stone-800 flex items-start gap-2.5 text-xs text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-stone-800/80">
            {activeProject.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-xl bg-stone-900/80 border border-stone-800 text-xs font-mono text-stone-300 flex items-center gap-1.5"
              >
                <Code2 className="w-3 h-3 text-amber-400/80" />
                {t}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
