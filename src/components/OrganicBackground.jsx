import React from 'react';

export default function OrganicBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0B0C0E]">
      {/* Top-Left Amber Glow */}
      <div className="fixed top-10 left-10 w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[120px] animate-pulse pointer-events-none" />

      {/* Center-Right Orange Glow */}
      <div className="fixed top-1/3 right-10 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Bottom-Center Warm Amber Glow */}
      <div className="fixed bottom-10 left-1/3 w-[650px] h-[650px] bg-amber-600/15 rounded-full blur-[130px] pointer-events-none" />
    </div>
  );
}
