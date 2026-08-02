import React from 'react';
import { Users, ShieldCheck, Calendar, Award } from 'lucide-react';
import { leadership } from '../data/portfolioData';

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-3 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 border border-stone-800 text-stone-300 text-xs font-mono">
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span>CAMPUS IMPACT & LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading flex items-center justify-center md:justify-start gap-3">
            <Users className="w-8 h-8 text-amber-400 hidden sm:inline-block" />
            <span>Leadership & <span className="text-amber-400">Community Impact</span></span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base max-w-2xl">
            Directing student publications, managing international tech fest operations, and fostering campus initiatives.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leadership.map((item, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 border border-stone-800 flex flex-col justify-between group relative overflow-hidden space-y-4"
            >
              <div className="space-y-3">
                {/* Header Row - Single line non-wrapping badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800/80 pb-3 w-full">
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-mono whitespace-nowrap inline-flex items-center gap-1 shrink-0 font-semibold">
                    <Award className="w-3 h-3 text-amber-400" />
                    {item.type}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-stone-400 shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Role */}
                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors font-heading leading-snug">
                  {item.role}
                </h3>

                {/* Organization - Uniform muted text across all cards */}
                <p className="text-xs font-semibold text-amber-400 font-mono">
                  {item.organization}
                </p>

                {/* Description */}
                <p className="text-stone-300 text-xs leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between">
                <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">
                  VIT Campus Initiative
                </span>
                <ShieldCheck className="w-4 h-4 text-amber-400" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
