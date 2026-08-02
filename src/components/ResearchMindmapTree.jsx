import React, { useState } from 'react';
import { 
  BrainCircuit, 
  Microscope, 
  Bot, 
  Navigation, 
  Paintbrush, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  Code2
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ResearchMindmapTree() {
  const [selectedBranch, setSelectedBranch] = useState('medical'); // 'medical' | 'agentic' | 'optimization' | 'gestures'

  const branches = [
    {
      id: 'medical',
      title: 'Deep Learning & Medical Vision',
      badge: 'VIT SRIP Featured Research',
      icon: Microscope,
      metrics: [
        { label: 'PEAK PSNR GAIN', value: '+6.42 dB (34.82 dB)' },
        { label: 'MAX SSIM SCORE', value: '0.942' },
        { label: 'SOTA ARCHITECTURES', value: 'SwinIR, Restormer, NAFNet' }
      ],
      description: 'Engineered PyTorch deep learning pipelines with Poisson-Gaussian synthetic noise injection to restore degraded clinical Chest X-Ray (CXR) scans for medical diagnosis.',
      tech: ['PyTorch', 'SwinIR', 'Restormer', 'NAFNet', 'OpenCV', 'Scikit-image'],
      link: '#research'
    },
    {
      id: 'agentic',
      title: 'Agentic & Legal AI Systems',
      badge: 'Sahayata Platform — IBM Cert',
      icon: Bot,
      metrics: [
        { label: 'CREDENTIAL', value: 'IBM Agentic AI Cert' },
        { label: 'VOICE ASSIST', value: 'Multilingual NLP' },
        { label: 'GEOLOCATION', value: 'Google Maps API' }
      ],
      description: 'AI-powered legal assistance platform leveraging GPT prompt workflows, multilingual voice interaction, and verified lawyer directory discovery.',
      tech: ['React', 'Node.js', 'Express', 'Tailwind', 'GPT API', 'Google Maps API'],
      github: 'https://github.com/sharanyaahire/sahayata-legal-ai',
      link: '#projects'
    },
    {
      id: 'optimization',
      title: 'Optimization & Graph Search',
      badge: 'Emergency Rescue Planner',
      icon: Navigation,
      metrics: [
        { label: 'ALGORITHMS', value: 'A* Search, BFS, UCS' },
        { label: 'PROBABILITY', value: 'Bayesian Belief Nets' },
        { label: 'DISPATCH', value: 'Dynamic Risk ETAs' }
      ],
      description: 'Algorithmic emergency dispatch engine optimizing ambulance allocation and dynamic rescue routing under severe road network congestion and weather uncertainty.',
      tech: ['Python', 'A* Search', 'BFS', 'UCS', 'Bayesian Networks', 'NetworkX'],
      github: 'https://github.com/sharanyaahire/emergency-rescue-planner',
      link: '#projects'
    },
    {
      id: 'gestures',
      title: 'Computer Vision & Gestures',
      badge: 'Hand Gesture Virtual Drawing',
      icon: Paintbrush,
      metrics: [
        { label: 'TRACKING', value: '21 MediaPipe Landmarks' },
        { label: 'SMOOTHING', value: 'Fingertip Trajectory EMA' },
        { label: 'INTERACTION', value: 'Touchless Canvas Ink' }
      ],
      description: 'Touchless digital drawing canvas using real-time 21-point hand tracking, fingertip trajectory smoothing, dynamic brush sizing, and palm erase controls.',
      tech: ['React', 'JavaScript', 'OpenCV', 'MediaPipe', 'HTML5 Canvas'],
      github: 'https://github.com/sharanyaahire/hand-gesture-drawing',
      link: '#projects'
    }
  ];

  const currentInfo = branches.find(b => b.id === selectedBranch);

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-7 border border-stone-800 shadow-2xl space-y-6 bg-stone-950/85 backdrop-blur-xl relative">
      
      {/* Mindmap Tree Header */}
      <div className="flex items-center justify-between border-b border-stone-800/80 pb-3">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
          <BrainCircuit className="w-4 h-4" />
          <span>Sharanya Ahire — AI/ML Research Engine</span>
        </div>
        <span className="text-[10px] font-mono text-stone-500">Select branch node</span>
      </div>

      {/* Visual Interactive Branching Nodes Tree */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {branches.map((branch) => {
          const Icon = branch.icon;
          const isSelected = selectedBranch === branch.id;
          return (
            <button
              key={branch.id}
              onClick={() => setSelectedBranch(branch.id)}
              className={`p-3 rounded-2xl text-xs font-mono flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                isSelected
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-lg shadow-amber-500/10 font-bold scale-[1.02]'
                  : 'bg-stone-900/90 text-stone-400 border border-stone-800 hover:text-white hover:border-stone-700'
              }`}
            >
              <div className={`p-2 rounded-xl ${isSelected ? 'bg-amber-500/20 text-amber-400' : 'bg-stone-950 text-stone-400'}`}>
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-[11px] text-center leading-tight tracking-tight">
                {branch.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Highlighted Branch Detail Panel */}
      <div className="p-5 rounded-2xl bg-stone-950/90 border border-stone-800 space-y-4 animate-in fade-in duration-200">
        
        {/* Title & Badge */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-mono font-semibold">
              {currentInfo.badge}
            </span>
            <a
              href={currentInfo.link}
              className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
            >
              <span>Explore Section</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <h3 className="text-xl font-bold text-white font-heading">
            {currentInfo.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-xs text-stone-300 leading-relaxed font-sans">
          {currentInfo.description}
        </p>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-2">
          {currentInfo.metrics.map((m, idx) => (
            <div key={idx} className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 text-center">
              <span className="text-[9px] font-mono text-stone-500 block uppercase">{m.label}</span>
              <span className="text-xs font-extrabold text-amber-300 font-mono block truncate">{m.value}</span>
            </div>
          ))}
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {currentInfo.tech.map((t, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded-md bg-stone-900 border border-stone-800 text-[10px] font-mono text-stone-300 flex items-center gap-1"
            >
              <Code2 className="w-2.5 h-2.5 text-amber-400" />
              {t}
            </span>
          ))}
        </div>

      </div>

    </div>
  );
}
