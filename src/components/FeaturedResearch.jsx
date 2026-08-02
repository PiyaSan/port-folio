import React, { useState } from 'react';
import { Microscope, Code2, Sparkles, CheckCircle2, ChevronRight, BarChart3, Database } from 'lucide-react';
import { featuredResearch } from '../data/portfolioData';

export default function FeaturedResearch() {
  const [showCode, setShowCode] = useState(false);

  return (
    <section id="research" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-3 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/70 border border-stone-800 text-stone-300 text-xs font-mono backdrop-blur-md">
            <Microscope className="w-3.5 h-3.5 text-amber-400" />
            <span>FEATURED MEDICAL VISION RESEARCH (SRIP VIT)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading flex items-center justify-center md:justify-start gap-3">
            <Microscope className="w-8 h-8 text-amber-400 hidden sm:inline-block" />
            <span>Medical Image <span className="text-amber-400">Restoration Research</span></span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base max-w-2xl">
            PyTorch deep learning benchmarks for clinical Chest X-Ray (CXR) restoration under Poisson-Gaussian noise degradation.
          </p>
        </div>

        {/* Research Overview Glass Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-2xl space-y-8 relative overflow-hidden bg-stone-900/40 backdrop-blur-md">
          
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800/80 pb-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-medium">
                  {featuredResearch.program}
                </span>
                <h3 className="text-2xl font-extrabold text-white font-heading pt-2">
                  {featuredResearch.title}
                </h3>
              </div>
              <span className="text-xs font-mono text-stone-400">
                {featuredResearch.role}
              </span>
            </div>

            <p className="text-stone-300 text-sm leading-relaxed font-sans">
              {featuredResearch.summary}
            </p>

            {/* Key Innovations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
              {featuredResearch.keyDetails.map((detail, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-stone-950/70 border border-stone-800 text-xs text-stone-300 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics Dataset Table */}
          <div className="space-y-4 pt-4 border-t border-stone-800/80">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Experimental Quantitative Performance Benchmark Dataset
              </h4>
              <span className="text-[10px] font-mono text-stone-500">Evaluating 4 SOTA Architectures</span>
            </div>

            {/* Stylized Dark Metrics Table */}
            <div className="overflow-x-auto rounded-2xl border border-stone-800 bg-stone-950/90">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-stone-900/90 text-stone-400 uppercase text-[10px] border-b border-stone-800">
                  <tr>
                    <th className="py-3 px-4">Model Architecture</th>
                    <th className="py-3 px-4 text-amber-400">PSNR (dB) ↑</th>
                    <th className="py-3 px-4 text-emerald-400">SSIM ↑</th>
                    <th className="py-3 px-4 text-blue-400">FSIM ↑</th>
                    <th className="py-3 px-4 text-rose-400">GMSD ↓</th>
                    <th className="py-3 px-4 text-right">Deployment Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-800/60 text-stone-200">
                  {featuredResearch.benchmarks.map((row, idx) => (
                    <tr 
                      key={idx} 
                      className={`transition-colors ${
                        row.highlighted 
                          ? 'bg-amber-500/10 font-bold text-amber-200 border-l-4 border-l-amber-400' 
                          : 'hover:bg-stone-900/50'
                      }`}
                    >
                      <td className="py-3 px-4 flex items-center gap-2">
                        {row.highlighted && <Sparkles className="w-3.5 h-3.5 text-amber-400" />}
                        <span>{row.model}</span>
                      </td>
                      <td className="py-3 px-4 text-amber-300 font-extrabold">{row.psnr}</td>
                      <td className="py-3 px-4 text-emerald-300 font-semibold">{row.ssim}</td>
                      <td className="py-3 px-4 text-blue-300">{row.fsim}</td>
                      <td className="py-3 px-4 text-stone-400">{row.gmsd}</td>
                      <td className="py-3 px-4 text-right text-[11px] text-stone-400">{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Toggle PyTorch Code Snippet */}
          <div className="pt-2">
            <button
              onClick={() => setShowCode(!showCode)}
              className="flex items-center gap-2 text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
            >
              <Code2 className="w-4 h-4" />
              <span>{showCode ? 'Hide PyTorch Degradation Pipeline Snippet' : 'View PyTorch Synthetic Degradation Pipeline Snippet'}</span>
              <ChevronRight className={`w-3.5 h-3.5 transition-transform ${showCode ? 'rotate-90' : ''}`} />
            </button>

            {showCode && (
              <div className="mt-3 p-4 rounded-2xl bg-stone-950 border border-stone-800 font-mono text-[11px] text-amber-300/90 overflow-x-auto animate-in fade-in duration-150">
                <pre>{featuredResearch.codeSnippet}</pre>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
