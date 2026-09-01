// Editable portfolio content. Kept in sync with the résumé (last updated Sept 2026).

export const personalInfo = {
  name: "Rijusmit Biswas",
  title: "Software & ML Engineer",
  subtitle: "research prototypes to dependable systems",
  location: {
    country: "India",
    city: "New Delhi",
    age: "22",
  },
  contact: {
    email: "rijusmit.biswas@gmail.com",
    phone: "+91 8929693930",
    github: "https://github.com/riju-talk",
    linkedin: "https://www.linkedin.com/in/rijusmit-biswas/",
    website: "https://rijusmit.vercel.app",
  },
  tagline: "I ship software end to end, and stay with it after it goes live.",
  bio: [
    "I am a final-year CS student at IIIT-Delhi, graduating September 2026. I build software end to end, from the React screens through the API layer down to the database and the infrastructure that keeps it running.",
    "I have taken a SaaS product from an idea to a running deployment on AWS, led a stack migration on a live system with no user-facing downtime, and built a student-services portal that 500+ students use on a schema and API contracts I designed for other engineers to build against. Around the code I build the parts that keep it working: Dockerised services, CI that runs tests and static analysis on every pull request, retry and rate-limit handling, and structured logging.",
    "On the research side I have put machine learning into production: HorusLLM, a semantic evaluation pipeline my lab still uses, and satellite-imagery pipelines for crop prediction where I measured how far models drift across districts. I am first author on a paper on HorusLLM, currently under review at AAAI 2027.",
  ],
};

export const languages = [
  { label: "English", value: 100 },
  { label: "Hindi", value: 100 },
];

export const skills = [
  { label: "Python / PyTorch", value: 92 },
  { label: "Backend (Node.js / FastAPI)", value: 90 },
  { label: "React / Next.js", value: 85 },
  { label: "PostgreSQL / data modeling", value: 85 },
  { label: "Docker / CI/CD / AWS", value: 82 },
];

export const toolkit = [
  "Node.js, Express, FastAPI, GraphQL",
  "React, Next.js, Tailwind CSS",
  "PostgreSQL, MongoDB, Prisma, Pinecone",
  "Docker, AWS, GitHub Actions",
  "PyTorch, HuggingFace, LoRA / QLoRA",
];

export const techStack = [
  { name: "Python", icon: "/python.svg", category: "Language" },
  { name: "TypeScript", icon: "/ts.svg", category: "Language" },
  { name: "JavaScript", icon: "/js.svg", category: "Language" },
  { name: "C++", icon: "/cpp.svg", category: "Language" },
  { name: "SQL", icon: "/pgsql.svg", category: "Language" },
  { name: "React", icon: "/reactjs.svg", category: "Full Stack" },
  { name: "Next.js", icon: "/nextjs.svg", category: "Full Stack" },
  { name: "Express", icon: "/express.svg", category: "Full Stack" },
  { name: "FastAPI", icon: "/fastapi.svg", category: "Full Stack" },
  { name: "Docker", icon: "/docker.svg", category: "DevOps" },
  { name: "GitHub Actions", icon: "/github.svg", category: "DevOps" },
  { name: "Git", icon: "/git.svg", category: "DevOps" },
  { name: "PostgreSQL", icon: "/pgsql.svg", category: "Database" },
  { name: "MongoDB", icon: "/mongo.svg", category: "Database" },
  { name: "Firebase", icon: "/firebase.svg", category: "Database" },
  { name: "PyTorch", icon: "/pytorch.svg", category: "ML / AI" },
  { name: "Hugging Face", icon: "/huggingface.svg", category: "ML / AI" },
  { name: "OpenCV", icon: "/opencv.svg", category: "ML / AI" },
];

export const projects = [
  {
    title: "Hostiggo",
    description:
      "An idea taken to a running cloud deployment on AWS. I own the React front end, the whole backend, the database design, and the infrastructure, with CI/CD and monitoring in place from day one so deploys stayed reliable as usage grew.",
    tech: ["Node.js", "React", "PostgreSQL", "AWS", "Docker"],
    github: "https://github.com/riju-talk/Hostiggo-full-website",
    live: "",
    type: "Production SaaS",
    resource: "",
    featured: true,
  },
  {
    title: "DreamDOT",
    description:
      "A creator platform — subscriptions, pay-per-view, media sharing — built as a federated GraphQL backend across multiple services that resolves cross-service queries without N+1 blowups. I defined the service boundaries and schema contracts so teams could ship independently.",
    tech: ["GraphQL", "Node.js", "Microservices", "MongoDB", "Docker"],
    github: "https://github.com/riju-talk/DreamDOT",
    live: "",
    type: "Distributed backend",
    resource: "",
    featured: true,
  },
  {
    title: "MineMEETS",
    description:
      "Ingestion pipelines that generate visual, text, and audio embeddings behind one interface, with dimension checks and idempotent reprocessing so a failed run can simply be re-run. Pinecone namespace isolation makes reindexing and rollback safe; CI runs Pytest, Black, Pylint, and MyPy.",
    tech: ["CLIP", "Whisper", "Pinecone", "Docker", "Pytest"],
    github: "https://github.com/riju-talk/MineMEETS",
    live: "",
    type: "Multimodal retrieval",
    resource: "https://github.com/riju-talk/MineMEETS/blob/main/README.md",
    featured: true,
  },
  {
    title: "TURBO",
    description:
      "Independent reimplementation of Goel et al. (arXiv:2502.07391): cross-attention fusion between Vision Transformer image features and a modified BART text encoder, trained on MORE+ and evaluated with BLEU / ROUGE / METEOR.",
    tech: ["PyTorch", "ViT", "BART", "Hugging Face"],
    github: "https://github.com/riju-talk/TURBO",
    live: "",
    type: "ML research",
    resource: "https://github.com/riju-talk/TURBO/blob/main/README.md",
    featured: true,
  },
  {
    title: "Flourish",
    description:
      "A plant-care assistant with a FastAPI backend that runs multi-step LLM tool calls against external APIs, with Firebase Auth and Firestore for identity and storage. Retry logic and graceful degradation keep an upstream failure from breaking the user flow.",
    tech: ["FastAPI", "LangChain", "Firebase", "Docker"],
    github: "https://github.com/riju-talk/Flourish",
    live: "",
    type: "Agentic service",
    resource: "",
    featured: false,
  },
  {
    title: "Quench++",
    description:
      "Extends Indic reasoning benchmarks with bias injection and structured Chain-of-Thought cause-effect generation in Boolean logic, for reproducible evaluation of LLM trustworthiness and reasoning.",
    tech: ["Hugging Face", "Python", "PyTorch", "LoRA / QLoRA"],
    github: "https://github.com/riju-talk/Quench-plus-plus",
    live: "",
    type: "Research tooling",
    resource: "https://github.com/riju-talk/Quench-plus-plus/blob/main/README.md",
    featured: false,
  },
  {
    title: "Entropy",
    description:
      "A study ecospace with an agentic study assistant. Python and FastAPI power asynchronous endpoints for personalized quizzes and study content through pluggable LLM adapters.",
    tech: ["Next.js", "FastAPI", "LangChain", "Docker", "Postgres", "Prisma"],
    github: "https://github.com/riju-talk/Entropy-Community-Forum",
    live: "https://entropy-community-forum.vercel.app/",
    type: "Web application",
    resource: "",
    featured: false,
  },
];

export const experience = [
  {
    key: 1,
    title: "Head of Product Development",
    company: "Student Council, IIIT-Delhi",
    name: "Student-services portal at institutional scale",
    period: "2025–Present",
    description:
      "Built and shipped a portal that 500+ students use, owning the schema, indexing, and API contracts other engineers build against.",
    kind: "Product engineering",
    highlights: [
      "Built and shipped a portal 500+ students use, with React, Node.js, Express, and PostgreSQL; owned the schema, indexing, and API contracts other engineers build against.",
      "Set up GitHub Actions CI/CD with automated tests and ran code review for a team of 8.",
      "Replaced manual data entry with validated forms, cutting admin work 60% and removing a recurring class of data-integrity bugs.",
      "Live at studentcouncil.iiitd.edu.in.",
    ],
  },
  {
    key: 2,
    title: "AI Engineer & Undergraduate Researcher",
    company: "MIDAS Lab, IIIT-Delhi",
    name: "HorusLLM — semantic evaluation for model outputs",
    period: "May 2025–Jan 2026",
    description:
      "Built HorusLLM, a semantic evaluation pipeline that scores model generations along alignment dimensions and flags degraded outputs automatically.",
    kind: "Research",
    highlights: [
      "Built HorusLLM, a semantic evaluation pipeline scoring generations along several alignment dimensions and auto-flagging degraded outputs; the auditing stage cut hallucinations 20% and the lab still uses it.",
      "Ran reproducible pipelines over three datasets with retry and rate-limit handling; trained models with LoRA / QLoRA under 4-bit quantization.",
      "First author on a paper under review at AAAI 2027; evaluation harness and benchmarks open-sourced.",
    ],
  },
  {
    key: 3,
    title: "Open Source Contributor",
    company: "Meshery, Layer5",
    name: "Layer5 documentation and Meshery.io",
    period: "2025",
    description:
      "Contributed bug reports, feature requests, documentation edits, and pull requests, and took part in reviews.",
    kind: "Open source",
    highlights: [
      "Contributed bug reports, feature requests, documentation edits, and pull requests.",
      "Participated in code reviews and gave feedback to improve maintainability.",
    ],
  },
];

export const internships = [
  {
    key: "intern-1",
    title: "Software Engineering Intern",
    company: "Shipzee",
    name: "Courier-aggregation SaaS — full-stack delivery & a live stack migration",
    period: "Mar 2026–Aug 2026",
    description:
      "Shipped features across a live courier-aggregation SaaS, from the React screens through the API layer down to the database.",
    kind: "Internship · engineering",
    highlights: [
      "Shipped features across a live courier-aggregation SaaS, from the React screens through the API layer down to the database, alongside internal teams and outside partners.",
      "Led a stack migration for scalability and maintainability, sequencing the cutover with no user-facing downtime.",
      "Traced cross-service production failures via logs and request traces; wrote unit and integration tests over third-party integrations that caught contract mismatches before release.",
    ],
  },
  {
    key: "intern-2",
    title: "ML Research Intern",
    company: "Computational Social Science Lab, IIIT-Delhi",
    name: "Geospatial pipeline for agricultural prediction",
    period: "Jan 2025–May 2025",
    description:
      "Built a satellite-imagery pipeline on Google Earth Engine producing segmentation masks and multi-channel inputs at district scale.",
    kind: "Internship · research",
    highlights: [
      "Built a satellite-imagery pipeline on Google Earth Engine with parallel preprocessing, producing segmentation masks and multi-channel inputs at district scale.",
      "Benchmarked CNN backbones across phenology-date prediction, crop-type classification, and yield estimation under one shared evaluation harness.",
      "Measured domain shift across 10+ districts with difference-in-differences and fixed-effects models, establishing accuracy outside the training distribution.",
    ],
  },
  {
    key: "intern-3",
    title: "Data Science Intern",
    company: "Complex Systems Lab, IIIT-Delhi",
    name: "Noisy real-world classification & interactive visualization",
    period: "Aug 2024–Dec 2024",
    description:
      "Led a team of five building a 25-class classifier on noisy real-world data, and built real-time dataset visualizations.",
    kind: "Internship · data systems",
    highlights: [
      "Led a team of five building a 25-class classifier on noisy real-world data, reaching 84.5% and 74.5% across two splits and tracing the gap to distribution shift.",
      "Built dynamic web apps for real-time visualization, integrating OpenFoodFacts, RecipeDB, Carbon Footprint DB, and FNDDS.",
      "Ran code review and mentored junior members.",
    ],
  },
];

export const publications = [
  {
    key: "publication-1",
    label: "Publication 01",
    title: "HorusLLM: A Cross-Evaluation Protocol for Tri-Vector Alignment Interference",
    description:
      "First-author work (R. Biswas, A. G. Kumar, A. Anand, E. Cambria, Z. Wang, R. R. Shah). A semantic evaluation pipeline that scores model generations along several alignment dimensions and flags degraded outputs automatically; the auditing stage cut hallucinations by 20%. Evaluation harness and benchmarks open-sourced.",
    status: "Under review · AAAI 2027",
    link: "",
  },
];

export const skillGroups = [
  { label: "Languages", value: "Python, TypeScript, JavaScript, C++, SQL, C" },
  { label: "Backend & APIs", value: "Node.js, Express, FastAPI, REST & GraphQL, GraphQL federation, WebSockets, retry / rate-limit handling" },
  { label: "Frontend", value: "React, Next.js, Tailwind CSS, dashboards, WebSocket UIs" },
  { label: "Infra & delivery", value: "AWS, Docker, GitHub Actions CI/CD, Linux, Vercel, Pytest, structured logging, static analysis" },
  { label: "Data & distributed", value: "PostgreSQL, MongoDB, Prisma, Pinecone, schema design, indexing, PySpark, Airflow, ETL" },
  { label: "ML & research", value: "PyTorch, Hugging Face, LoRA / QLoRA, LangChain, RAG, CLIP & Whisper, Google Earth Engine" },
];

export const stats = [
  { label: "Production deploys", value: "3+" },
  { label: "Portal users", value: "500+" },
  { label: "First-author papers", value: "1" },
  { label: "LeetCode solved", value: "2500+" },
];
