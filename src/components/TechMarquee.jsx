import React from 'react';
import { 
  Code2, 
  Cpu, 
  BrainCircuit, 
  Layers, 
  Terminal, 
  Database, 
  GitBranch, 
  Sparkles,
  Zap
} from 'lucide-react';

export default function TechMarquee() {
  const techStack = [
    { name: "Python", category: "Language", icon: Code2 },
    { name: "PyTorch", category: "Deep Learning", icon: BrainCircuit },
    { name: "OpenCV", category: "Computer Vision", icon: Cpu },
    { name: "CUDA C/C++", category: "Accelerated GPU", icon: Zap },
    { name: "React.js", category: "Frontend Framework", icon: Layers },
    { name: "Node.js & Express", category: "Backend Runtime", icon: Terminal },
    { name: "Tailwind CSS", category: "Design System", icon: Sparkles },
    { name: "MediaPipe", category: "Hand Landmark Vision", icon: Cpu },
    { name: "Scikit-image", category: "Image Processing", icon: Code2 },
    { name: "SQL", category: "Database Engine", icon: Database },
    { name: "Git & GitHub", category: "Version Control", icon: GitBranch },
    { name: "Vercel & Render", category: "Cloud Deployment", icon: Layers }
  ];

  // Duplicate for seamless infinite loop
  const marqueeItems = [...techStack, ...techStack];

  return (
    <div className="w-full py-6 border-y border-stone-800/80 bg-stone-950/60 overflow-hidden relative group">
      {/* Subtle fade masks on edges */}
      <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-[#0f1115] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-[#0f1115] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-4">
        {marqueeItems.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-stone-900/80 border border-stone-800/90 hover:border-amber-500/40 transition-colors shrink-0 cursor-default"
            >
              <div className="w-6 h-6 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Icon className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-stone-200 font-sans tracking-wide">
                  {tech.name}
                </span>
                <span className="text-[9px] font-mono text-stone-500 uppercase tracking-wider">
                  {tech.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
