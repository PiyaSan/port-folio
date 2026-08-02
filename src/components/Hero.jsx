import React from 'react';
import { ArrowRight, FileText, Mail, Sparkles, BrainCircuit, Microscope } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section id="hero" className="relative pt-24 pb-10 sm:pt-32 sm:pb-16 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 text-center">
        
        {/* Availability Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/70 border border-stone-800 text-stone-300 text-[11px] sm:text-xs font-mono shadow-md backdrop-blur-md max-w-full truncate">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="truncate">{personalInfo.status}</span>
        </div>

        {/* Name Headline & Subtitle */}
        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight text-white font-heading leading-tight">
            {personalInfo.name}
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl font-semibold text-amber-400/90 font-sans tracking-wide flex items-center justify-center gap-2 flex-wrap">
            <BrainCircuit className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 shrink-0" />
            <span>{personalInfo.title}</span>
          </p>
        </div>

        {/* Concise 2-Sentence Bio */}
        <div className="max-w-2xl mx-auto space-y-2 text-stone-300 text-xs sm:text-base leading-relaxed font-sans font-light px-2">
          <p className="text-stone-200 font-normal italic">
            "{personalInfo.tagline}"
          </p>
          <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
            Specializing in state-of-the-art deep learning architectures for medical image restoration (SRIP at VIT) and autonomous agentic AI systems.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1">
          <a
            href="#neural-tree"
            className="flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/10 transition-all duration-200 cursor-pointer"
          >
            <Microscope className="w-4 h-4" />
            <span>Explore Research ↓</span>
          </a>

          <a
            href="/Resume_final_Sharanya.pdf"
            download="Resume_final_Sharanya.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-stone-900/70 hover:bg-stone-800/90 border border-stone-800 text-stone-200 hover:text-white font-medium text-xs sm:text-sm backdrop-blur-md transition-all duration-200 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-amber-400" />
            <span>Download Resume CV</span>
          </a>
        </div>

        {/* Social Links Footer Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 border-t border-stone-800/80 text-xs font-mono text-stone-400 max-w-xl mx-auto">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
          >
            <GithubIcon className="w-4 h-4 text-stone-400" />
            <span>GitHub</span>
          </a>

          <span className="text-stone-700 font-bold">•</span>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4 text-stone-400" />
            <span>LinkedIn</span>
          </a>

          <span className="text-stone-700 font-bold">•</span>

          <a
            href={personalInfo.gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
          >
            <Mail className="w-4 h-4 text-amber-400/80" />
            <span>{personalInfo.email}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
