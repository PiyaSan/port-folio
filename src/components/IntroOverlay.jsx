import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroOverlay({ isVisible, onComplete }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d0e12] text-white p-6"
        >
          <div className="text-center space-y-4 max-w-xl">
            {/* Top Tag */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 border border-stone-800 text-[11px] font-mono text-amber-400 tracking-widest uppercase"
            >
              <span>Portfolio & Research</span>
            </motion.div>

            {/* Name Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-heading"
            >
              Sharanya Ahire
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="text-sm sm:text-base font-sans text-stone-400 font-medium tracking-wide"
            >
              AI & ML Engineer <span className="text-amber-400 mx-1">·</span> Deep Learning Researcher
            </motion.p>

            {/* Minimalist Progress Line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.45, ease: "easeInOut" }}
              className="h-[2px] bg-gradient-to-r from-amber-500/20 via-amber-400 to-amber-500/20 max-w-xs mx-auto rounded-full mt-6 origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
