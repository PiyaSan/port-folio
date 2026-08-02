import React, { useState } from 'react';
import { 
  BrainCircuit, 
  Microscope, 
  Bot, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function ResearchMindmap() {
  const [activeBranch, setActiveBranch] = useState('medical'); // 'medical' | 'agentic' | 'fullstack'

  const mindmapData = {
    medical: {
      title: "Medical Image Vision (VIT SRIP)",
      badge: "Featured Internship",
      subtitle: "Deep Learning Restoration of Degraded Clinical CXR Scans",
      keyMetrics: [
        { label: "PEAK PSNR", value: "+6.42 dB (34.82 dB)" },
        { label: "MAX SSIM", value: "0.942" },
        { label: "SOTA MODELS", value: "SwinIR, Restormer, NAFNet" }
      ],
      description: "Trained PyTorch supervised pipelines with Poisson-Gaussian synthetic noise injection to restore fine clinical X-Ray structures.",
      tools: ["PyTorch", "SwinIR", "Restormer", "NAFNet", "OpenCV", "Scikit-image"],
      link: "#research"
    },
    agentic: {
      title: "Agentic AI & Multi-Agent Workflows",
      badge: "IBM Professional Accredited",
      subtitle: "Autonomous LLM Orchestration & Intelligent Tool Calling",
      keyMetrics: [
        { label: "CREDENTIAL", value: "IBM Agentic AI Cert" },
        { label: "PARADIGM", value: "Multi-Agent Systems" },
        { label: "INTEGRATION", value: "Tool Calling & Prompts" }
      ],
      description: "Engineering autonomous AI agents capable of multi-step planning, domain-specific retrieval, and tool execution.",
      tools: ["IBM Agentic Framework", "GPT API", "Python", "LangChain", "Vector Search"],
      link: "#skills"
    },
    fullstack: {
      title: "Full-Stack AI & Computer Vision",
      badge: "Applied AI Products",
      subtitle: "Sahayata Legal Aid, Emergency Router & Hand Gesture Drawing",
      keyMetrics: [
        { label: "PROJECTS", value: "3 Production Demos" },
        { label: "TRACKING", value: "21 MediaPipe Landmarks" },
        { label: "OPTIMIZATION", value: "A* & Bayesian Networks" }
      ],
      description: "Building production web apps integrating real-time computer vision gesture controls and Bayesian rescue dispatch optimization.",
      tools: ["React.js", "Node.js", "MediaPipe", "OpenCV", "A* Search", "Tailwind"],
      link: "#projects"
    }
  };

  const currentInfo = mindmapData[activeBranch];

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-7 border border-stone-800 shadow-2xl space-y-6 bg-stone-950/85 backdrop-blur-xl relative">
      
      {/* Mindmap Node Controls Header */}
      <div className="space-y-3 border-b border-stone-800/80 pb-4">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <BrainCircuit className="w-3.5 h-3.5" />
            Interactive Research Mindmap
          </span>
          <span className="text-[10px] font-mono text-stone-500">Click node to explore</span>
        </div>

        {/* Central & Branching Node Selection Buttons */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          <button
            onClick={() => setActiveBranch('medical')}
            className={`p-2.5 rounded-xl text-xs font-mono flex flex-col items-center gap-1 transition-all cursor-pointer ${
              activeBranch === 'medical'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-md font-bold'
                : 'bg-stone-900/90 text-stone-400 border border-stone-800 hover:text-white'
            }`}
          >
            <Microscope className="w-4 h-4 text-amber-400" />
            <span className="truncate w-full text-center">Medical Vision</span>
          </button>

          <button
            onClick={() => setActiveBranch('agentic')}
            className={`p-2.5 rounded-xl text-xs font-mono flex flex-col items-center gap-1 transition-all cursor-pointer ${
              activeBranch === 'agentic'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-md font-bold'
                : 'bg-stone-900/90 text-stone-400 border border-stone-800 hover:text-white'
            }`}
          >
            <Bot className="w-4 h-4 text-amber-400" />
            <span className="truncate w-full text-center">Agentic AI</span>
          </button>

          <button
            onClick={() => setActiveBranch('fullstack')}
            className={`p-2.5 rounded-xl text-xs font-mono flex flex-col items-center gap-1 transition-all cursor-pointer ${
              activeBranch === 'fullstack'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-md font-bold'
                : 'bg-stone-900/90 text-stone-400 border border-stone-800 hover:text-white'
            }`}
          >
            <Cpu className="w-4 h-4 text-amber-400" />
            <span className="truncate w-full text-center">Full-Stack AI</span>
          </button>
        </div>
      </div>

      {/* Dynamic Summary Panel based on active branch */}
      <div className="space-y-4 animate-in fade-in duration-200">
        
        {/* Title & Badge */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-mono font-medium">
              {currentInfo.badge}
            </span>
            <a
              href={currentInfo.link}
              className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <h3 className="text-xl font-bold text-white font-heading">
            {currentInfo.title}
          </h3>
          <p className="text-xs text-amber-400/90 font-mono">
            {currentInfo.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs text-stone-300 leading-relaxed font-sans">
          {currentInfo.description}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          {currentInfo.keyMetrics.map((m, idx) => (
            <div key={idx} className="p-2 rounded-xl bg-stone-900 border border-stone-800 text-center">
              <span className="text-[9px] font-mono text-stone-500 block uppercase">{m.label}</span>
              <span className="text-xs font-extrabold text-amber-300 font-mono block truncate">{m.value}</span>
            </div>
          ))}
        </div>

        {/* Tools Stack */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {currentInfo.tools.map((t, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded-md bg-stone-900 border border-stone-800 text-[10px] font-mono text-stone-300 flex items-center gap-1"
            >
              <span className="w-1 h-1 rounded-full bg-amber-400"></span>
              {t}
            </span>
          ))}
        </div>

      </div>

    </div>
  );
}
