import React from 'react';
import { GraduationCap, Calendar, Award, CheckCircle2, BookOpen } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-3 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 border border-stone-800 text-stone-300 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading flex items-center justify-center md:justify-start gap-3">
            <GraduationCap className="w-8 h-8 text-amber-400 hidden sm:inline-block" />
            <span>Education & <span className="text-amber-400">Academic Excellence</span></span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base max-w-2xl">
            Consistently strong academic performance with specialized coursework in Artificial Intelligence & Machine Learning.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="space-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-stone-800 space-y-4"
            >
              {/* Header Badge & Date */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800/80 pb-3">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-mono font-medium flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  {item.badge}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-stone-400 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>{item.duration}</span>
                </div>
              </div>

              {/* Degree & Score */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white font-heading leading-tight flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>{item.degree}</span>
                  </h3>
                  <p className="text-sm font-medium text-stone-300">
                    {item.institution}
                  </p>
                </div>

                {/* Score Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-stone-950 border border-stone-800 shrink-0">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-mono font-bold text-amber-300">
                    {item.score}
                  </span>
                </div>
              </div>

              {/* Highlights list */}
              <ul className="space-y-2 pt-2 border-t border-stone-800/80">
                {item.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-stone-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
