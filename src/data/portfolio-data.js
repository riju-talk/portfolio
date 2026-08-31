// Editable portfolio content. Keep project and profile links current as work changes.

export const personalInfo = {
  name: "Rijusmit Biswas",
  title: "Software & Machine Learning Engineer",
  subtitle: "Research prototypes, dependable developer systems",
  location: {
    country: "India",
    city: "New Delhi",
    age: "21",
  },
  contact: {
    email: "rijusmit2004@gmail.com",
    phone: "+91 8929693930",
    github: "https://github.com/riju-talk",
    linkedin: "https://www.linkedin.com/in/rijusmit-biswas/",
  },
  tagline: "I build the layer where ambitious research becomes useful software.",
  bio: [
    "I am a software and machine learning engineer working between research prototypes and the dependable systems that let people use them. My practice moves from model behavior and dataset design to APIs, interfaces, deployment, and the operational details in between.",
    "I care about the seam between an idea and its real-world constraint: a model that needs a measurable benchmark, a service that needs a clean failure mode, or a team that needs a system they can understand six months later.",
    "This notebook collects selected work, research threads, and the tools I reach for when the work has to leave the lab.",
  ],
};

export const languages = [
  { label: "English", value: 100 },
  { label: "Hindi", value: 100 },
];

export const skills = [
  { label: "Python", value: 95 },
  { label: "JavaScript", value: 88 },
  { label: "Go", value: 80 },
  { label: "React / Next.js", value: 90 },
  { label: "Docker / K8s", value: 85 },
];

export const toolkit = [
  "PyTorch, TensorFlow",
  "Docker, Kubernetes",
  "Git, GitHub Actions",
  "PostgreSQL, MongoDB",
];

export const techStack = [
  { name: "Python", icon: "/python.svg", category: "Language" },
  { name: "JavaScript", icon: "/js.svg", category: "Language" },
  { name: "TypeScript", icon: "/ts.svg", category: "Language" },
  { name: "Go", icon: "/go.svg", category: "Language" },
  { name: "Java", icon: "/java.svg", category: "Language" },
  { name: "C++", icon: "/cpp.svg", category: "Language" },
  { name: "R", icon: "/r.svg", category: "Language" },
  { name: "React", icon: "/reactjs.svg", category: "Full Stack" },
  { name: "Next.js", icon: "/nextjs.svg", category: "Full Stack" },
  { name: "Flask", icon: "/flask.svg", category: "Full Stack" },
  { name: "Express", icon: "/express.svg", category: "Full Stack" },
  { name: "FastAPI", icon: "/fastapi.svg", category: "Full Stack" },
  { name: "Docker", icon: "/docker.svg", category: "DevOps" },
  { name: "Kubernetes", icon: "/kubernetes.svg", category: "DevOps" },
  { name: "GitHub Actions", icon: "/github.svg", category: "DevOps" },
  { name: "Git", icon: "/git.svg", category: "DevOps" },
  { name: "GitLab", icon: "/gitlab.svg", category: "DevOps" },
  { name: "PostgreSQL", icon: "/pgsql.svg", category: "Database" },
  { name: "MongoDB", icon: "/mongo.svg", category: "Database" },
  { name: "Redis", icon: "/redis.svg", category: "Database" },
  { name: "MySQL", icon: "/mysql.svg", category: "Database" },
  { name: "Firebase", icon: "/firebase.svg", category: "Database" },
  { name: "ElasticSearch", icon: "/elasticsearch.svg", category: "Database" },
  { name: "PyTorch", icon: "/pytorch.svg", category: "ML / AI" },
  { name: "TensorFlow", icon: "/tensorflow.svg", category: "ML / AI" },
  { name: "Hugging Face", icon: "/huggingface.svg", category: "ML / AI" },
  { name: "OpenCV", icon: "/opencv.svg", category: "ML / AI" },
  { name: "Unsloth", icon: "/unsloth.svg", category: "ML / AI" },
];

export const projects = [
  {
    title: "Multi-Modal Sarcasm Detection Tool",
    description:
      "A multimodal sarcasm detection tool combining image and text analysis. It combines BART encoders with a ViT backbone and extracts image segments, based on target-augmented shared fusion research.",
    tech: ["Python", "TensorFlow", "BART", "Vision Transformers", "Docker"],
    github: "https://github.com/riju-talk/TURBO",
    live: "",
    type: "Machine learning",
    resource: "https://github.com/riju-talk/TURBO/blob/main/README.md",
    featured: true,
  },
  {
    title: "DreamDot",
    description:
      "A creator-first social platform shaped as a set of services: content monetization, real-time chat, media sharing, and an NFT marketplace with Razorpay and blockchain-backed transaction logging.",
    tech: ["Go", "Docker", "Kubernetes", "PostgreSQL", "React"],
    github: "https://github.com/riju-talk/DreamDot",
    live: "",
    type: "Developer systems",
    resource: "",
    featured: true,
  },
  {
    title: "Entropy",
    description:
      "A study ecospace and agentic study assistant. Python and FastAPI power asynchronous endpoints for personalized quizzes and study content through pluggable LLM adapters.",
    tech: ["Next.js", "FastAPI", "LangChain", "Docker", "Postgres", "Prisma"],
    github: "https://github.com/riju-talk/Entropy-Community-Forum",
    live: "https://entropy-community-forum.vercel.app/",
    type: "Web application",
    resource: "https://entropy-community-forum.vercel.app/",
    featured: true,
  },
  {
    title: "Quench++",
    description:
      "An extension of the Quench benchmark for reasoning in Indic contexts, adding bias injection, three languages, and structured cause-effect generation in Boolean logic for reproducible evaluation.",
    tech: ["Hugging Face", "Python", "PyTorch", "Unsloth"],
    github: "https://github.com/riju-talk/Quench-plus-plus",
    live: "",
    type: "Research tooling",
    resource: "https://github.com/riju-talk/Quench-plus-plus/blob/main/README.md",
    featured: true,
  },
];

export const experience = [
  {
    key: 1,
    title: "Product Developer",
    company: "Student Council, IIIT-Delhi",
    name: "Student Council Web Ecosystem",
    period: "2025–2026",
    description:
      "Revamped the council website and led the end-to-end design, development, and deployment of a web ecosystem spanning grievances, event proposals, member records, and 30+ student clubs. Visit the live site: studentcouncil.iiitd.edu.in",
    kind: "Product engineering",
    highlights: [
      "Revamped the council website and improved the experience for students and administrators.",
      "Built grievances, event proposal, member records, and club management workflows.",
      "Led the end-to-end design, development, and deployment of the web ecosystem.",
    ],
  },
  {
    key: 2,
    title: "Undergraduate Researcher",
    company: "MIDAS Lab, IIIT-Delhi",
    name: "Pretraining and Benchmarking Small Language Models",
    period: "2025–2026",
    description:
      "Leading the pretraining and benchmarking of lightweight language models for specialized healthcare, legal, and technical tasks. The work focuses on dataset curation, architecture tuning, and efficient training strategies.",
    kind: "Research",
    highlights: [
      "Leading pretraining and benchmarking of lightweight language models for specialized tasks.",
      "Curating datasets, tuning architectures, and testing efficient training strategies.",
    ],
  },
  {
    key: 3,
    title: "Open Source Contributor",
    company: "Meshery, Layer5",
    name: "Layer5 documentation and Meshery.io",
    period: "2025",
    description:
      "Contributed bug reports, feature requests, documentation edits, and pull requests. Participated in reviews and gave feedback intended to make the codebase easier to use and maintain.",
    kind: "Open source",
    highlights: [
      "Contributed bug reports, feature requests, documentation edits, and pull requests.",
      "Participated in code reviews and gave feedback to improve maintainability.",
    ],
  },
];

// Replace these honest placeholders with final internship details when ready.
export const internships = [
  {
    key: "intern-1",
    title: "Research Intern",
    company: "Computational Social Science Lab, IIIT-Delhi",
    name: "Groundwork on SICKLE++",
    period: "2025–2026",
    description:
      "Placeholder: document the satellite-data study, the Andhra Pradesh extension, and the Google Earth Engine and machine learning workflows used to explore crop patterns and yield prediction.",
    kind: "Internship · research",
    highlights: [
      "Placeholder: add the research question, study area, and final outcomes.",
      "Placeholder: document the Google Earth Engine and machine learning workflow.",
    ],
  },
  {
    key: "intern-2",
    title: "Data Science Intern",
    company: "Complex Systems Lab, IIIT-Delhi",
    name: "Real-time data integration and interactive visualization",
    period: "2024",
    description:
      "Placeholder: add the final impact, datasets, and technical decisions behind the real-time visualization work across OpenFoodFacts, RecipeDB, Carbon Footprint DB, and FNDDS.",
    kind: "Internship · data systems",
    highlights: [
      "Placeholder: add the final impact and scope of the visualization work.",
      "Placeholder: document the datasets, architecture, and technical decisions.",
    ],
  },
];

// Replace this editable record with the final citation, venue, and publication link.
export const publications = [
  {
    key: "publication-1",
    label: "Publication 01",
    title: "Publication details to be added",
    description:
      "Placeholder record for a publication or working paper. Add the final title, co-authors, venue, year, abstract, and DOI when the owner is ready to publish the work.",
    status: "Details pending",
    link: "",
  },
];

export const skillGroups = [
  { label: "Languages", value: "Python, JavaScript, TypeScript, Go, Java, C++, R" },
  { label: "ML / AI", value: "PyTorch, TensorFlow, LLMs, model serving, inference optimization" },
  { label: "Backend", value: "FastAPI, Flask, Express, REST APIs, async services" },
  { label: "Data", value: "PostgreSQL, MongoDB, Redis, MySQL, Elasticsearch" },
  { label: "Cloud / DevOps", value: "Docker, Kubernetes, GitHub Actions, Git, GitLab" },
  { label: "Frontend", value: "React, Next.js, responsive interfaces, accessibility" },
];

export const stats = [
  { label: "Years in the field", value: "3+" },
  { label: "Projects completed", value: "25+" },
  { label: "Tools in rotation", value: "30+" },
  { label: "Research threads", value: "2" },
];