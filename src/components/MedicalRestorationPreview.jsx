import React, { useState } from 'react';
import { 
  Sparkles, 
  Activity, 
  Layers, 
  Sliders, 
  CheckCircle2, 
  AlertTriangle,
  Zap
} from 'lucide-react';

export default function MedicalRestorationPreview() {
  const [sliderPos, setSliderPos] = useState(65); // 0 to 100%
  const [selectedArch, setSelectedArch] = useState('SwinIR'); // 'SwinIR' | 'Restormer' | 'NAFNet'

  const archMetrics = {
    SwinIR: { psnr: '+6.42 dB', ssim: '0.942', latency: '42 ms', status: 'Best Reconstruction Quality' },
    Restormer: { psnr: '+5.95 dB', ssim: '0.938', latency: '68 ms', status: 'High Spatial Resolution' },
    NAFNet: { psnr: '+5.10 dB', ssim: '0.929', latency: '18 ms', status: 'Sub-20ms Real-Time PACS' }
  };

  const currentMetrics = archMetrics[selectedArch];

  return (
    <div className="glass-card rounded-3xl p-5 sm:p-6 border border-stone-800 shadow-2xl relative space-y-4 overflow-hidden bg-stone-950/80 backdrop-blur-xl">
      {/* Card Top Title Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-stone-800/80">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs font-mono font-bold text-stone-200 uppercase tracking-wider">
            Medical Vision Restoration Simulator
          </span>
        </div>
        <div className="flex items-center gap-1">
          {['SwinIR', 'Restormer', 'NAFNet'].map((arch) => (
            <button
              key={arch}
              onClick={() => setSelectedArch(arch)}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-mono transition-colors cursor-pointer ${
                selectedArch === arch
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
                  : 'bg-stone-900 text-stone-400 hover:text-white'
              }`}
            >
              {arch}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Split-Slider Canvas Display */}
      <div className="relative w-full h-52 sm:h-60 rounded-2xl bg-stone-950 border border-stone-800 overflow-hidden select-none">
        
        {/* Scanning Laser Line */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-amber-400 to-transparent z-20 animate-pulse" style={{ left: `${sliderPos}%` }} />

        {/* RESTORED IMAGE LAYER (Right Side) */}
        <div className="absolute inset-0 bg-[#0c0e12] flex items-center justify-center">
          <svg className="w-full h-full p-4 text-stone-300" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="200" fill="#0d0e12" />
            {/* Ribcage Trabecular Rib Structures (Clean & Restored) */}
            <path d="M 60 40 Q 150 20 240 40" stroke="#fef3c7" strokeWidth="6" strokeLinecap="round" opacity="0.85" />
            <path d="M 50 70 Q 150 45 250 70" stroke="#fef3c7" strokeWidth="7" strokeLinecap="round" opacity="0.85" />
            <path d="M 45 105 Q 150 75 255 105" stroke="#fef3c7" strokeWidth="8" strokeLinecap="round" opacity="0.85" />
            <path d="M 50 140 Q 150 110 250 140" stroke="#fef3c7" strokeWidth="7" strokeLinecap="round" opacity="0.85" />
            {/* Spine Column */}
            <rect x="142" y="20" width="16" height="160" rx="3" fill="#fafaf9" opacity="0.9" />
            {/* Soft Lung Tissue & Heart Silhouette */}
            <ellipse cx="95" cy="100" rx="42" ry="55" fill="#38bdf8" fillOpacity="0.08" />
            <ellipse cx="205" cy="100" rx="42" ry="55" fill="#38bdf8" fillOpacity="0.08" />
            <path d="M 125 105 Q 165 140 185 160 Q 145 160 125 105" fill="#f59e0b" fillOpacity="0.25" />
          </svg>
          <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-mono font-bold">
            ✓ Restored ({selectedArch})
          </span>
        </div>

        {/* DEGRADED IMAGE LAYER (Left Side clipped by Slider) */}
        <div 
          className="absolute inset-0 bg-[#0c0e12] overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="w-full h-full relative" style={{ width: '100%', minWidth: '300px' }}>
            <svg className="w-full h-full p-4 text-stone-600 filter blur-[1.5px]" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="300" height="200" fill="#13151b" />
              {/* Noisy Ribs */}
              <path d="M 60 40 Q 150 20 240 40" stroke="#78716c" strokeWidth="5" opacity="0.4" />
              <path d="M 50 70 Q 150 45 250 70" stroke="#78716c" strokeWidth="5" opacity="0.4" />
              <path d="M 45 105 Q 150 75 255 105" stroke="#78716c" strokeWidth="6" opacity="0.4" />
              <rect x="142" y="20" width="16" height="160" rx="3" fill="#78716c" opacity="0.4" />
            </svg>
            {/* Synthetic Clinical Poisson-Gaussian Noise Overlay */}
            <div 
              className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
                backgroundSize: '4px 4px'
              }}
            />
            <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/40 text-[10px] font-mono font-bold">
              ⚠ Degraded CXR Input
            </span>
          </div>
        </div>

        {/* Interactive Drag Control Overlay */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          title="Drag left/right to compare Degraded vs Restored Medical Image"
        />

        <div className="absolute top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-stone-950/80 border border-stone-800 text-[10px] font-mono text-stone-400 pointer-events-none flex items-center gap-1">
          <Sliders className="w-3 h-3 text-amber-400" />
          <span>Drag slider to inspect restoration</span>
        </div>

      </div>

      {/* Real-Time Quantitative Metrics Bar */}
      <div className="grid grid-cols-3 gap-2 text-center pt-1">
        <div className="p-2.5 rounded-xl bg-stone-900 border border-stone-800">
          <span className="text-[10px] font-mono text-stone-400 block">PEAK PSNR GAIN</span>
          <span className="text-sm font-extrabold text-amber-400 font-mono">{currentMetrics.psnr}</span>
        </div>
        <div className="p-2.5 rounded-xl bg-stone-900 border border-stone-800">
          <span className="text-[10px] font-mono text-stone-400 block">SSIM SCORE</span>
          <span className="text-sm font-extrabold text-emerald-400 font-mono">{currentMetrics.ssim}</span>
        </div>
        <div className="p-2.5 rounded-xl bg-stone-900 border border-stone-800">
          <span className="text-[10px] font-mono text-stone-400 block">INFERENCE LATENCY</span>
          <span className="text-sm font-extrabold text-stone-200 font-mono">{currentMetrics.latency}</span>
        </div>
      </div>

    </div>
  );
}
