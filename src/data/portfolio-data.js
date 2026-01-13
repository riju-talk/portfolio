// ============================================
// PORTFOLIO DATA CONFIGURATION
// ============================================
// Edit this file to update your portfolio content easily

export const personalInfo = {
  name: "Rijusmit Biswas",
  title: "Software & ML Engineer",
  subtitle: "Software Development Engineer DevOps & MLOps Enthusiast",
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
  tagline: "Building intelligent systems at the intersection of software engineering and machine learning",
  bio: [
    "I'm a passionate engineer with deep interest in building intelligent, end-to-end systems that combine full-stack development, DevOps, and AI. My journey began with curiosity about system architectures—from web app backends to neural network internals.",
    "With solid foundations in traditional software engineering and modern cloud-native architectures, I focus on building robust systems that bridge development and production. My experience spans containerized microservices, real-time APIs, and scalable ML deployment pipelines.",
    "I'm particularly passionate about developing applications that bring cutting-edge research to life—making NLP and deep learning models accessible and efficient. From orchestrating deployments to scaling training jobs and fine-tuning transformers, I work across the stack to deliver production-ready solutions."
  ]
}

export const languages = [
  { label: "English", value: 100 },
  { label: "Hindi", value: 100 },
]

export const skills = [
  { label: "Python", value: 95 },
  { label: "JavaScript", value: 88 },
  { label: "Go", value: 80 },
  { label: "React/Next.js", value: 90 },
  { label: "Docker/K8s", value: 85 }
]

export const toolkit = [
  "PyTorch, TensorFlow",
  "Docker, Kubernetes",
  "Git, GitHub Actions",
  "PostgreSQL, MongoDB"
]

export const techStack = [
  // Languages
  { name: "Python", icon: "/python.svg", category: "Language" },
  { name: "JavaScript", icon: "/js.svg", category: "Language" },
  { name: "TypeScript", icon: "/ts.svg", category: "Language" },
  { name: "Go", icon: "/go.svg", category: "Language" },
  { name: "Java", icon: "/java.svg", category: "Language" },
  { name: "C++", icon: "/cpp.svg", category: "Language" },
  { name: "R", icon: "/r.svg", category: "Language" },
  
  // Full Stack
  { name: "React", icon: "/reactjs.svg", category: "Full Stack" },
  { name: "Next.js", icon: "/nextjs.svg", category: "Full Stack" },
  { name: "Flask", icon: "/flask.svg", category: "Full Stack" },
  { name: "Express", icon: "/express.svg", category: "Full Stack" },
  { name: "FastAPI", icon: "/fastapi.svg", category: "Full Stack" },
  
  // DevOps
  { name: "Docker", icon: "/docker.svg", category: "DevOps" },
  { name: "Kubernetes", icon: "/kubernetes.svg", category: "DevOps" },
  { name: "GitHub Actions", icon: "/github.svg", category: "DevOps" },
  { name: "Git", icon: "/git.svg", category: "DevOps" },
  { name: "GitLab", icon: "/gitlab.svg", category: "DevOps" },
  
  // Database
  { name: "PostgreSQL", icon: "/pgsql.svg", category: "Database" },
  { name: "MongoDB", icon: "/mongo.svg", category: "Database" },
  { name: "Redis", icon: "/redis.svg", category: "Database" },
  { name: "MySQL", icon: "/mysql.svg", category: "Database" },
  { name: "Firebase", icon: "/firebase.svg", category: "Database" },
  { name: "ElasticSearch", icon: "/elasticsearch.svg", category: "Database" },
  
  // ML/AI
  { name: "PyTorch", icon: "/pytorch.svg", category: "ML/AI" },
  { name: "TensorFlow", icon: "/tensorflow.svg", category: "ML/AI" },
  { name: "Huggingface", icon: "/huggingface.svg", category: "ML/AI" },
  { name: "OpenCV", icon: "/opencv.svg", category: "ML/AI" },
  { name: "Unsloth", icon: "/unsloth.svg", category: "ML/AI" }
]

export const projects = [
  {
    title: "Multi-Modal Sarcasm Detection Tool",
    description: "Built a multi-modal sarcasm detection tool combining image and text analysis. Combined BART Encoders with VIT backbone and extracted image segments. Based on 'Target-Augmented Shared Fusion-based Multimodal Sarcasm Explanation Generation'.",
    tech: ["Python", "TensorFlow", "BART", "Vision Transformers", "Docker"],
    github: "https://github.com/riju-talk/TURBO",
    live: "#",
    featured: true
  },
  {
    title: "DreamDot - Microservices Social Platform",
    description: "Scalable creator-first social media platform with microservices architecture. Features content monetization, real-time chat, media sharing, and NFT marketplace powered by Razorpay. Blockchain integration for secure transaction logging.",
    tech: ["Go", "Docker", "Kubernetes", "PostgreSQL", "React"],
    github: "https://github.com/riju-talk/DreamDot",
    live: "#",
    featured: true
  },
  {
    title: "SpanBERT-CRF Question Answering System",
    description: "State-of-the-art QA system integrating SpanBERT with CRF layers for enhanced span-level prediction. Complete pipeline from data preprocessing to REST API deployment. Fine-tuned on SQuAD v2 for context-aware answer extraction.",
    tech: ["Python", "PyTorch", "Transformers", "spaCy", "Flask"],
    github: "https://github.com/riju-talk/SpanBERT-CRF",
    live: "#",
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
