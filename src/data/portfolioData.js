export const personalInfo = {
  name: "Sharanya Ahire",
  title: "AI & ML Engineer · Deep Learning Researcher",
  tagline: "Specializing in Computer Vision, Medical Image Processing, and Agentic AI Systems.",
  bio: "B.Tech Computer Science & Engineering (AI & ML) student at VIT Chennai passionate about building scalable artificial intelligence models, computer vision systems, and intelligent agentic workflows. Actively researching state-of-the-art deep learning architectures for medical image restoration and spatial scene understanding.",
  location: "Chennai, Tamil Nadu, India",
  email: "ahiresharanya@gmail.com",
  gmailComposeUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=ahiresharanya@gmail.com",
  github: "https://github.com/PiyaSan",
  linkedin: "https://www.linkedin.com/in/sharanya-ahire-7467772b7",
  status: "Available for AI/ML Research & Summer 2026 Internships",
  resumeUrl: "/Resume_final_Sharanya.pdf",
  stats: [
    { label: "Current CGPA", value: "8.62", subtext: "VIT Chennai" },
    { label: "Research Focus", value: "Medical Vision", subtext: "Deep Learning & CXR" },
    { label: "SOTA Models", value: "4 Architectures", subtext: "SwinIR, Restormer, NAFNet" },
    { label: "Certifications", value: "3 Professional", subtext: "IBM & NVIDIA Accredited" }
  ]
};

export const featuredResearch = {
  id: "srip-vit",
  title: "Deep Learning-Based Restoration of Degraded Chest X-Ray Images for Medical Imaging",
  program: "Summer Research Internship Program (SRIP) — VIT",
  role: "Lead Deep Learning Research Intern",
  duration: "Summer Research Program",
  tags: ["PyTorch", "Deep Learning", "Restormer", "SwinIR", "NAFNet", "DnCNN", "Medical Vision", "Chest X-Ray"],
  summary: "Engineered and benchmarked end-to-end PyTorch deep learning pipelines to restore degraded clinical Chest X-Ray (CXR) scans. Evaluated state-of-the-art transformer and CNN restoration architectures under severe Gaussian noise, Poisson blur, and contrast degradation.",
  keyDetails: [
    "Implemented supervised PyTorch data pipelines with custom synthetic noise injection and degradation models matching real clinical X-ray artifact distributions.",
    "Trained and fine-tuned Restormer, SwinIR (Swin Transformer for Image Restoration), NAFNet (Nonlinear Activation Free Network), and DnCNN architectures.",
    "Conducted rigorous quantitative evaluation across PSNR, SSIM, FSIM, GMSD, and inference runtime to determine optimal clinical deployment feasibility."
  ],
  benchmarks: [
    { model: "DnCNN", psnr: "33.66", ssim: "0.8894", fsim: "0.7221", gmsd: "0.0428", status: "Baseline CNN Control" },
    { model: "NAFNet", psnr: "33.11", ssim: "0.8818", fsim: "0.9277", gmsd: "0.0447", status: "Fast Latency CNN" },
    { model: "SwinIR", psnr: "34.16", ssim: "0.9041", fsim: "0.9377", gmsd: "0.0381", status: "Swin Transformer" },
    { model: "Restormer", psnr: "34.45", ssim: "0.9101", fsim: "0.9430", gmsd: "0.0344", status: "Best Reconstruction Performance", highlighted: true }
  ],
  codeSnippet: `import torch
import torch.nn as nn
from torchvision.transforms import functional as F

class MedicalXRayDegradationPipeline(nn.Module):
    """
    Synthetic clinical degradation pipeline for Chest X-Ray restoration training.
    Applies coupled Poisson-Gaussian noise and spatial blur.
    """
    def __init__(self, sigma_g=25.0, scale_p=1.0):
        super().__init__()
        self.sigma_g = sigma_g / 255.0
        self.scale_p = scale_p

    def forward(self, clean_cxr):
        # 1. Poisson shot noise simulation (photon counting statistics)
        noisy = torch.poisson(clean_cxr * self.scale_p) / self.scale_p
        
        # 2. Additive Gaussian sensor noise
        gaussian_noise = torch.randn_like(noisy) * self.sigma_g
        degraded = torch.clamp(noisy + gaussian_noise, 0.0, 1.0)
        return degraded

# PyTorch Restormer / SwinIR Training Step
def train_restoration_step(model, optimizer, criterion, clean_img):
    pipeline = MedicalXRayDegradationPipeline()
    degraded_img = pipeline(clean_img)
    
    optimizer.zero_grad()
    restored_img = model(degraded_img)
    loss = criterion(restored_img, clean_img) # Charbonnier Loss
    loss.backward()
    optimizer.step()
    return loss.item()`
};

export const projects = [
  {
    id: "sahayata",
    title: "Sahayata — AI-Powered Legal Assistance Platform",
    category: "Full-Stack AI",
    badge: "Featured AI App",
    tech: ["React", "Node.js", "Express", "Tailwind CSS", "GPT API", "Google Maps API"],
    description: "An intuitive legal navigation platform designed to bridge the accessibility gap in legal aid through AI guidance, multilingual voice queries, and real-time station mapping.",
    features: [
      "Multilingual voice interaction supporting natural language queries for legal rights and procedure summaries.",
      "Location-based police station and legal cell discovery utilizing Google Maps API.",
      "Verified lawyer directory with filterable specialization search and direct appointment routing.",
      "Custom prompt-engineered GPT workflow delivering plain-language explanations of complex legal statutes."
    ],
    github: "https://github.com/PiyaSan/LegalAid"
  },
  {
    id: "rescue-planner",
    title: "Intelligent Emergency Rescue Planner",
    category: "AI/ML & Algorithms",
    badge: "Decision Intelligence",
    tech: ["Python", "A* Search", "BFS", "UCS", "Bayesian Networks", "NetworkX"],
    description: "An algorithmic emergency dispatch engine optimizing ambulance allocation and dynamic rescue routing under severe road network uncertainty.",
    features: [
      "Optimal multi-objective routing using A* Search with heuristic distance metrics and Uninformed Search (BFS, UCS).",
      "Bayesian belief network modeling dynamic road blockages, weather severity, and traffic delay probabilities.",
      "Interactive graph visualization depicting optimal path vs hazardous alternative routes in real-time.",
      "Priority queue dispatch algorithm prioritizing life-critical emergency requests."
    ],
    github: "https://github.com/PiyaSan/Intelligent-Emergency-Rescue-Planner"
  },
  {
    id: "gesture-drawing",
    title: "Hand Gesture Virtual Drawing Canvas",
    category: "Computer Vision",
    badge: "Gesture Controls",
    tech: ["React", "JavaScript", "OpenCV", "MediaPipe", "HTML5 Canvas"],
    description: "A touchless digital drawing application allowing users to paint, write, and erase on screen in real time using hand gesture recognition.",
    features: [
      "Real-time 21-point hand landmark tracking powered by MediaPipe Hands.",
      "Fingertip trajectory exponential moving average (EMA) smoothing for crisp, jitter-free digital ink.",
      "Dynamic gesture controls: index finger to paint, pinch to change brush thickness, open palm to erase.",
      "Multi-color palette selection and instant canvas clear controls."
    ],
    github: "https://github.com/PiyaSan/WebDraw"
  }
];

export const education = [
  {
    institution: "Vellore Institute of Technology (VIT), Chennai",
    degree: "B.Tech in Computer Science & Engineering (Spec. in AI & ML)",
    duration: "Jul 2024 - Present",
    score: "CGPA: 8.62",
    badge: "Current Degree",
    highlights: [
      "Specialization in Artificial Intelligence, Deep Learning, and Computer Vision.",
      "Selected for Summer Research Internship Program (SRIP) in Medical Vision Restoration.",
      "Active leadership roles in campus technical and literary organizations."
    ]
  },
  {
    institution: "New Bombay City School (CBSE)",
    degree: "Class XII — Senior Secondary Education",
    duration: "Completed 2024",
    score: "83.0%",
    badge: "High School",
    highlights: [
      "Focused on Physics, Chemistry, Mathematics, and Computer Science.",
      "Demonstrated academic excellence in algorithmic problem solving."
    ]
  },
  {
    institution: "New Horizon Public School (CBSE)",
    degree: "Class X — Secondary School Certificate",
    duration: "Completed 2022",
    score: "92.0%",
    badge: "Secondary",
    highlights: [
      "Distinction award for outstanding academic performance across STEM subjects."
    ]
  }
];

export const certifications = [
  {
    title: "IBM Agentic AI Professional Certificate",
    issuer: "IBM",
    category: "Agentic AI & LLMs",
    description: "Mastery in designing autonomous multi-agent workflows, tool calling, prompt engineering, and LLM orchestration.",
    badge: "Professional Cert"
  },
  {
    title: "NVIDIA Fundamentals of Deep Learning",
    issuer: "NVIDIA Deep Learning Institute",
    category: "Deep Learning & Neural Nets",
    description: "Hands-on training in convolutional neural networks (CNNs), recurrent networks, multi-GPU model training, and computer vision deployment.",
    badge: "NVIDIA DLI"
  },
  {
    title: "NVIDIA Fundamentals of Accelerated Computing with CUDA C/C++",
    issuer: "NVIDIA Deep Learning Institute",
    category: "Accelerated GPU Computing",
    description: "High-performance parallel programming on NVIDIA CUDA GPUs, memory optimization, kernel management, and parallel execution models.",
    badge: "NVIDIA DLI"
  }
];

export const skills = {
  languages: [
    { name: "Python", level: 95 },
    { name: "C / C++", level: 85 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "SQL", level: 80 }
  ],
  aiMlVision: [
    { name: "PyTorch" },
    { name: "OpenCV" },
    { name: "NumPy & Pandas" },
    { name: "Scikit-image" },
    { name: "MediaPipe" },
    { name: "Pillow (PIL)" }
  ],
  webTools: [
    { name: "React.js" },
    { name: "Tailwind CSS" },
    { name: "Node.js & Express" },
    { name: "Git & GitHub" },
    { name: "VS Code" },
    { name: "Vercel & Render" }
  ]
};

export const leadership = [
  {
    role: "Vice Chairperson",
    organization: "Swarajya Marathi Literary Association",
    type: "Student Leadership",
    period: "2026 - Present",
    description: "Directing event execution, cultural initiatives, team operations, and editorial publications for a 100+ member university association."
  },
  {
    role: "Volunteer — Special Teams Committee",
    organization: "Technovit 2025",
    type: "University Tech Fest",
    period: "2025",
    description: "Coordinating logistics, speaker management, and technical workshop operations for VIT Chennai's flagship international tech festival."
  },
  {
    role: "Volunteer — Special Guest Care Committee",
    organization: "Vibrance 2025",
    type: "Cultural Festival",
    period: "2025",
    description: "Managing VIP guest protocol, hospitality, itinerary coordination, and main stage operations for a university-wide cultural fest."
  }
];
