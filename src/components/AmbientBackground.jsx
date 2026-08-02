import React from 'react';
import { motion } from 'framer-motion';

export default function AmbientBackground() {
  // Semi-transparent ambient neural nodes
  const nodes = [
    { id: 1, top: '15%', left: '10%', size: 6, delay: 0 },
    { id: 2, top: '25%', left: '85%', size: 8, delay: 2 },
    { id: 3, top: '45%', left: '18%', size: 5, delay: 4 },
    { id: 4, top: '65%', left: '80%', size: 7, delay: 1 },
    { id: 5, top: '80%', left: '25%', size: 6, delay: 3 },
    { id: 6, top: '35%', left: '50%', size: 4, delay: 5 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Warm Ambient Canvas Radial Glow Spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-amber-500/10 via-amber-400/5 to-purple-600/5 rounded-full blur-[160px] animate-ambient-glow" />
      <div className="absolute top-2/3 right-10 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[140px] animate-ambient-glow" style={{ animationDelay: '4s' }} />

      {/* Floating AI Neural Network Ambient Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          initial={{ y: 0, opacity: 0.2 }}
          animate={{
            y: [-15, 15, -15],
            x: [-10, 10, -10],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 14 + node.delay * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: node.delay
          }}
          style={{
            position: 'absolute',
            top: node.top,
            left: node.left,
            width: `${node.size}px`,
            height: `${node.size}px`
          }}
          className="rounded-full bg-amber-400/70 shadow-[0_0_12px_rgba(245,158,11,0.6)]"
        />
      ))}
    </div>
  );
}
