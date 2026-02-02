// ============================================
// PORTFOLIO DATA CONFIGURATION
// ============================================
// Edit this file to update your portfolio content easily

export const personalInfo = {
  name: "Rijusmit Biswas",
  title: "ML Engineer, Data Scientist & Developer",
  subtitle: "Bridging Research & Production | LLMs, Systems & Data",
  location: {
    country: "India",
    city: "New Delhi",
    age: "21"
  },
  contact: {
    email: "rijusmit2004@gmail.com",
    phone: "+91 8929693930",
    github: "https://github.com/riju-talk",
    linkedin: "https://www.linkedin.com/in/rijusmit-biswas/"
  },
  tagline: "Building scalable intelligent systems at the intersection of Research and Engineering.",
  bio: [
    "I am an ML Engineer and Data Scientist with a strong foundation in full-stack development. My work bridges the gap between cutting-edge research and production-grade systems.",
    "On the research front, I specialize in LLM finetuning, alignment (DPO, GRPO), and low-resource language modeling. I have worked on pretraining small language models and developing benchmarks for reasoning capabilities.",
    "As a developer, I architect scalable backends and interactive frontends, ensuring that complex AI models are accessible and usable. From microservices to distributed training pipelines, I build the infrastructure that powers intelligence."
  ]
}

export const languages = [
  { label: "English", value: 100 },
  { label: "Hindi", value: 100 },
]

export const skills = [
  { label: "Python/PyTorch", value: 95 },
  { label: "LLMs (Finetuning/RAG)", value: 92 },
  { label: "Data Science", value: 88 },
  { label: "Backend (Go/FastAPI)", value: 85 },
  { label: "Full Stack (React/Next)", value: 85 }
]

export const toolkit = [
  "PyTorch, Transformers, Unsloth",
  "GRPO, DPO, RLHF",
  "Docker, Kubernetes, AWS",
  "Next.js, FastAPI, PostgreSQL"
]

export const research = [
  {
    title: "Pretraining and Benchmarking Small Language Models",
    description: "Leading the pretraining and benchmarking of lightweight LLMs optimized for specialized tasks across healthcare, legal, and technical domains. Focused on maximizing performance-to-cost ratio through careful dataset curation, architecture tuning, and efficient training strategies.",
    role: "Lead Researcher",
    year: "2025",
    link: ""
  },
  {
    title: "SICKLE++: Satellite Imagery for Crop Knowledge Learning",
    description: "Extended the SICKLE research to study crop patterns in Andhra Pradesh using Google Earth Engine and ML. Analyzing multi-spectral satellite data to predict crop yields and patterns, contributing to precision agriculture.",
    role: "Research Intern",
    year: "2025",
    link: ""
  }
]

export const techStack = [
  // Languages
  { name: "Python", icon: "/python.svg", category: "Language" },
  { name: "JavaScript", icon: "/js.svg", category: "Language" },
  { name: "TypeScript", icon: "/ts.svg", category: "Language" },
  { name: "Go", icon: "/go.svg", category: "Language" },
  { name: "SQL", icon: "/pgsql.svg", category: "Language" },

  // ML/AI
  { name: "PyTorch", icon: "/pytorch.svg", category: "ML/AI" },
  { name: "TensorFlow", icon: "/tensorflow.svg", category: "ML/AI" },
  { name: "Huggingface", icon: "/huggingface.svg", category: "ML/AI" },
  { name: "Unsloth", icon: "/unsloth.svg", category: "ML/AI" },
  { name: "LangChain", icon: "/python.svg", category: "ML/AI" }, // Placeholder icon if needed

  // Full Stack & DevOps
  { name: "Next.js", icon: "/nextjs.svg", category: "Full Stack" },
  { name: "FastAPI", icon: "/fastapi.svg", category: "Backend" },
  { name: "Docker", icon: "/docker.svg", category: "DevOps" },
  { name: "Kubernetes", icon: "/kubernetes.svg", category: "DevOps" },
  { name: "PostgreSQL", icon: "/pgsql.svg", category: "Database" },
]

export const projects = [
  {
    title: "Quench++ - LLM Reasoning Benchmark",
    description: "Extends Indic reasoning benchmarks with bias injection and Chain-of-Thought cause-effect generation. Enables robust evaluation of LLM trustworthiness and reasoning capabilities (GRPO/DPO styles).",
    tech: ["Python", "HuggingFace", "PyTorch", "Unsloth"],
    github: "https://github.com/riju-talk/Quench-plus-plus",
    live: "",
    type: "Research Code",
    resource: "https://github.com/riju-talk/Quench-plus-plus/blob/main/README.md",
    featured: true
  },
  {
    title: "Entropy - Agentic Study Assistant",
    description: "A semi-anonymous doubt solving platform featuring 4 AI study agents. Built with scalable async microservices, generating personalized content using pluggable LLM adapters.",
    tech: ["Next.js", "FastAPI", "LangChain", "Docker", "Postgres"],
    github: "https://github.com/riju-talk/Entropy-Community-Forum",
    live: "https://entropy-community-forum.vercel.app/",
    type: "Web App",
    resource: "",
    featured: true
  },
  {
    title: "Multi-Modal Sarcasm Detection",
    description: "Novel architecture combining BART Encoders with ViT backbones to detect sarcasm in image-text pairs. Based on 'Target-Augmented Shared Fusion-based Multimodal Sarcasm Explanation Generation'.",
    tech: ["Python", "TensorFlow", "BART", "ViT"],
    github: "https://github.com/riju-talk/TURBO",
    live: "",
    type: "ML Research",
    resource: "https://github.com/riju-talk/TURBO/blob/main/README.md",
    featured: true
  },
  {
    title: "DreamDot - Microservices Platform",
    description: "Scalable creator economy platform with microservices. Features real-time chat, NFT marketplace, and secure transactions. Demonstrates complex backend orchestration.",
    tech: ["Go", "Docker", "Kubernetes", "PostgreSQL", "React"],
    github: "https://github.com/riju-talk/DreamDot",
    live: "",
    type: "Web App",
    resource: "",
    featured: true
  }
]

export const experience = [
  {
    key: 1,
    title: "Product Developer",
    company: "Student Council, IIIT-Delhi (Student Affairs, IIITD)",
    name: "Student Council Web Eco-System",
    period: "2025-2026",
    description: [
      "Revamped the IIIT-Delhi Student Council website, enhancing user experience and accessibility.",
      "Developed a comprehensive Grievances Portal to streamline student issue reporting and resolution.",
      "Built an Event Proposal Tracking system for efficient event management and approval workflows.",
      "Designed and implemented a unified database to maintain complete records of all Student Council members and ongoing events.",
      "Created a centralized system to manage detailed information for 30+ active student clubs.",
      "Led the end-to-end design, development, and deployment of the entire web ecosystem.",
      "Visit the live site: https://studentcouncil.iiitd.edu.in",
    ].join("\n")
  },
  {
    key: 2,
    title: "Undergraduate Researcher",
    company: "MIDAS Lab, IIIT-Delhi",
    name: "Pretraining and Benchmarking Small Language Models",
    period: "2025-2026",
    description: "Leading the pretraining and benchmarking of lightweight LLMs optimized for specialized tasks across healthcare, legal, and technical domains. Focused on maximizing performance-to-cost ratio through careful dataset curation, architecture tuning, and efficient training strategies."
  },
  {
    key: 3,
    title: "Research Intern",
    company: "Computational Social Science Lab, IIIT-Delhi",
    name: "Ground Work on SICKLE++",
    period: "2025-2026",
    description: "Did initial ground work study on SICKLE++ research to study crop patterns in India using satellite data. Extending the original study from Cauvery delta to Andhra Pradesh, using Google Earth Engine to extract crop patterns and ML to predict crop yields."
  },
  {
    key: 4,
    title: "Data Science Intern",
    company: "Complex Systems Lab, IIIT-Delhi",
    name: "Real-Time Data Integration & Interactive Web Visualization",
    period: "2024",
    description: "Designed and developed dynamic web applications for real-time complex dataset visualization. Led full-stack development from UI/UX design to backend optimization. Integrated multiple open-source datasets including OpenFoodFacts, RecipeDB, Carbon Footprint DB, and FNDDS."
  },
  {
    key: 5,
    title: "Open Source Contributor",
    company: "Meshery, Layer5",
    name: "Layer5 Documentation and Meshery.io",
    period: "2025",
    description: "Contributed to Meshery and Layer5 open-source projects by submitting bug reports, feature requests, editing documentation, and pull requests. Participated in code reviews and provided constructive feedback to improve the codebase."
  },
]

export const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "25+" },
  { label: "Technologies", value: "30+" },
  { label: "Research Papers", value: "2" }
]
