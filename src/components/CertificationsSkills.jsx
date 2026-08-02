import React, { useState } from 'react';
import { 
  Award, 
  Code2, 
  BrainCircuit, 
  Sparkles,
  Layers,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { certifications, skills } from '../data/portfolioData';

export default function CertificationsSkills() {
  const [activeTab, setActiveTab] = useState('certifications'); // 'certifications' | 'aiml' | 'fullstack' | 'languages'

  return (
    <section id="skills" className="py-16 sm:py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="space-y-3 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 border border-stone-800 text-stone-300 text-xs font-mono">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>INTERACTIVE TECH STACK & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading flex items-center justify-center md:justify-start gap-3">
            <Award className="w-8 h-8 text-amber-400 hidden sm:inline-block" />
            <span>Certifications & <span className="text-amber-400">Technical Stack</span></span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base max-w-2xl">
            Select a category below to explore industry-verified credentials and domain-specific toolkits dynamically.
          </p>
        </div>

        {/* Dynamic Category Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-stone-800/80 pb-3">
          {[
            { id: 'certifications', label: 'Industry Certifications', icon: Sparkles },
            { id: 'aiml', label: 'AI, ML & Vision Frameworks', icon: BrainCircuit },
            { id: 'fullstack', label: 'Web & Developer Tools', icon: Layers },
            { id: 'languages', label: 'Programming Languages', icon: Code2 }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30 font-bold shadow-md'
                    : 'text-stone-400 hover:text-white hover:bg-stone-900/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Certifications View */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-3xl p-5 sm:p-6 border border-stone-800 flex flex-col justify-between group relative overflow-hidden space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800/80 pb-3">
                    <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-mono font-semibold shrink-0">
                      {cert.badge}
                    </span>
                    <span className="text-[11px] font-mono text-stone-400 font-medium text-right truncate">
                      {cert.issuer}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors font-heading leading-snug">
                    {cert.title}
                  </h4>

                  <p className="text-xs text-stone-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">
                    {cert.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: AI/ML & Vision View */}
        {activeTab === 'aiml' && (
          <div className="glass-card rounded-3xl p-5 sm:p-8 border border-stone-800 space-y-6 animate-in fade-in duration-200 bg-stone-900/40 backdrop-blur-md">
            <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
              <BrainCircuit className="w-6 h-6 text-amber-400 shrink-0" />
              <div>
                <h4 className="font-heading font-bold text-white text-base sm:text-lg">AI, Machine Learning & Computer Vision</h4>
                <p className="text-xs text-stone-400 font-mono">PyTorch restoration pipelines, OpenCV matrix algorithms & MediaPipe hands</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {skills.aiMlVision.map((s, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-stone-950/70 border border-stone-800 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-stone-200 font-mono truncate">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Web & Tools View */}
        {activeTab === 'fullstack' && (
          <div className="glass-card rounded-3xl p-5 sm:p-8 border border-stone-800 space-y-6 animate-in fade-in duration-200 bg-stone-900/40 backdrop-blur-md">
            <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
              <Layers className="w-6 h-6 text-amber-400 shrink-0" />
              <div>
                <h4 className="font-heading font-bold text-white text-base sm:text-lg">Web Development & Developer Tools</h4>
                <p className="text-xs text-stone-400 font-mono">Modern React architecture, Express APIs & deployment environments</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {skills.webTools.map((s, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-stone-950/70 border border-stone-800 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-stone-200 font-mono truncate">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Languages View */}
        {activeTab === 'languages' && (
          <div className="glass-card rounded-3xl p-5 sm:p-8 border border-stone-800 space-y-6 animate-in fade-in duration-200 bg-stone-900/40 backdrop-blur-md">
            <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
              <Code2 className="w-6 h-6 text-amber-400 shrink-0" />
              <div>
                <h4 className="font-heading font-bold text-white text-base sm:text-lg">Programming Languages Proficiency</h4>
                <p className="text-xs text-stone-400 font-mono">Algorithm problem solving in Python, C/C++, JavaScript and SQL</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.languages.map((s, i) => (
                <div key={i} className="p-4 rounded-2xl bg-stone-950/70 border border-stone-800 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-white flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-amber-400" />
                      {s.name}
                    </span>
                    <span className="text-amber-400 font-bold">{s.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-stone-900 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
