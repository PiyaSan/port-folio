import React from 'react';
import { motion } from 'framer-motion';

export default function NeuralOrbitBackground() {
  const innerOrbitSkills = ['PyTorch', 'Medical Vision', 'SwinIR', 'Restormer'];
  const outerOrbitSkills = ['Agentic AI', 'CUDA C/C++', 'OpenCV', 'React.js'];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0f1115]">
      {/* Background Soft Canvas Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-gradient-to-tr from-amber-500/5 via-amber-400/5 to-purple-600/5 rounded-full blur-[170px] animate-ambient-glow" />

      {/* Orbital Container centered in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] flex items-center justify-center opacity-40 md:opacity-60">
        
        {/* Central Research Core Node */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-stone-950 border-2 border-amber-500/40 shadow-[0_0_30px_rgba(245,158,11,0.25)] flex items-center justify-center z-10">
          <div className="w-3 h-3 rounded-full bg-amber-400 animate-ping" />
        </div>

        {/* Inner Orbital Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border border-amber-500/15 border-dashed"
        >
          {innerOrbitSkills.map((skill, idx) => {
            const angle = (idx * 360) / innerOrbitSkills.length;
            const radius = 210; // approx half container
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={idx}
                style={{
                  position: 'absolute',
                  top: `calc(50% + ${y}px - 14px)`,
                  left: `calc(50% + ${x}px - 45px)`
                }}
                className="px-2.5 py-1 rounded-full bg-stone-900/90 border border-amber-500/30 text-[10px] font-mono text-amber-300 shadow-md whitespace-nowrap"
              >
                {skill}
              </div>
            );
          })}
        </motion.div>

        {/* Outer Orbital Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 65, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] rounded-full border border-amber-500/10"
        >
          {outerOrbitSkills.map((skill, idx) => {
            const angle = (idx * 360) / outerOrbitSkills.length;
            const radius = 325;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={idx}
                style={{
                  position: 'absolute',
                  top: `calc(50% + ${y}px - 14px)`,
                  left: `calc(50% + ${x}px - 45px)`
                }}
                className="px-2.5 py-1 rounded-full bg-stone-950/90 border border-stone-800 text-[10px] font-mono text-stone-400 shadow-md whitespace-nowrap"
              >
                {skill}
              </div>
            );
          })}
        </motion.div>

      </div>
    </div>
  );
}
