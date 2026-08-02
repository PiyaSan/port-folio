import React from 'react';
import { X, Printer, FileText, Mail, MapPin, Award } from 'lucide-react';
import { personalInfo, education, featuredResearch, projects, certifications } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-stone-800 shadow-2xl p-6 sm:p-10 space-y-6 relative text-stone-100 print:bg-white print:text-black print:p-0 print:border-none">
        
        {/* Controls */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-800 print:hidden">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
            <FileText className="w-4 h-4" />
            <span>Resume_final_Sharanya.pdf</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 text-xs font-semibold text-stone-200 hover:text-white transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-amber-400" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="space-y-6 text-xs leading-relaxed font-sans">
          
          {/* Header */}
          <div className="space-y-2 border-b border-stone-800 pb-4">
            <h1 className="text-3xl font-extrabold text-white font-heading tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-semibold text-amber-400 font-sans">
              {personalInfo.title}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono text-stone-300 pt-1">
              <a href={personalInfo.gmailComposeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-amber-300"><Mail className="w-3.5 h-3.5 text-amber-400" /> {personalInfo.email}</a>
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-stone-400" /> {personalInfo.location}</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-amber-300">GitHub: github.com/PiyaSan</a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-amber-300">LinkedIn: in/sharanya-ahire</a>
            </div>
          </div>

          {/* Academic Background */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold font-heading uppercase tracking-wider text-amber-400 border-b border-stone-800 pb-1">
              Education
            </h2>
            <div className="space-y-2">
              {education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-white block">{edu.degree}</span>
                    <span className="text-stone-300">{edu.institution}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-amber-300 font-bold block">{edu.score}</span>
                    <span className="text-stone-400 text-[10px]">{edu.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Experience */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold font-heading uppercase tracking-wider text-amber-400 border-b border-stone-800 pb-1">
              Research Experience
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-bold text-white text-sm block">{featuredResearch.title}</span>
                  <span className="text-amber-300 font-mono text-[11px]">{featuredResearch.program} — {featuredResearch.role}</span>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-stone-300">
                {featuredResearch.keyDetails.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold font-heading uppercase tracking-wider text-amber-400 border-b border-stone-800 pb-1">
              Technical Projects
            </h2>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white">{proj.title}</span>
                    <span className="text-[10px] font-mono text-stone-400">{proj.tech.join(', ')}</span>
                  </div>
                  <p className="text-stone-300">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h2 className="text-sm font-bold font-heading uppercase tracking-wider text-amber-400 border-b border-stone-800 pb-1">
                Certifications
              </h2>
              <ul className="space-y-1 text-stone-300">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>{cert.title}</strong> — {cert.issuer}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-sm font-bold font-heading uppercase tracking-wider text-amber-400 border-b border-stone-800 pb-1">
                Core Technical Skills
              </h2>
              <div className="space-y-1 text-stone-300">
                <p><strong>Languages:</strong> Python, C, C++, SQL, JavaScript</p>
                <p><strong>AI/ML & Vision:</strong> PyTorch, OpenCV, NumPy, Scikit-image, MediaPipe, Pillow</p>
                <p><strong>Web & Tools:</strong> React.js, Tailwind CSS, Node.js, Express, Git, Vercel</p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-stone-800 print:hidden">
          <span className="text-[11px] font-mono text-stone-400">
            Available for Summer 2026 AI/ML Research & Internships
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-amber-500/15 text-amber-300 border border-amber-500/30 hover:bg-amber-500/25 text-xs font-semibold transition-colors cursor-pointer"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
}
