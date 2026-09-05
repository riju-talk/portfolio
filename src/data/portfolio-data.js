// Editable portfolio content. Kept in line with the résumé (last updated September 2026).

export const personalInfo = {
  name: "Rijusmit Biswas",
  title: "Software and Machine Learning Engineer",
  subtitle: "I turn research into software people can rely on",
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
  resume: {
    sde: "/Rijusmit_Biswas_SDE_Resume.pdf",
    ds: "/Rijusmit_Biswas_DS_Resume.pdf",
  },
  openTo: "Open to roles: SDE, SDE Intern, MLE, MLE Intern, Data Scientist, DS Intern, Data Engineer, Data Engineering Intern",
  tagline: "I build software end to end and stay with it once it goes live.",
  bio: [
    "I am in my final year of a computer science degree at IIIT Delhi and I graduate in September 2026. I like building the whole thing: the screens people click, the API behind them, the database under that, and the servers it all runs on.",
    "So far I have taken a product from a rough idea to something live on AWS, moved a running system onto a new stack without anyone noticing an outage, and built a portal that more than 500 students use. I designed its database and the API the rest of the team builds against. I also look after the quieter parts that keep software healthy, like containers, tests and checks that run on every pull request, sensible retries, and logs you can actually read.",
    "On the research side I have shipped machine learning that people keep using. HorusLLM is an evaluation tool my lab still runs to catch when a model starts giving worse answers. Before that I built satellite imagery pipelines for predicting crops and measured how much the models slip from one district to the next. I am the first author on a paper about HorusLLM that is under review at AAAI 2027.",
    "I also built a cross-portfolio credit risk system predicting defaults on credit cards and installment loans (XGBoost 0.7769 ROC-AUC, $18.7M estimated savings), a 7-agent swarm that runs a private executive job search offline, and a distributed creator platform with GraphQL federation. I care about the craft: clean boundaries, observable systems, and code that survives contact with production.",
  ],
};

export const languages = [
  { label: "English", value: 100 },
  { label: "Hindi", value: 100 },
];

export const skills = [
  { label: "Python and PyTorch", value: 92 },
  { label: "Backend with Node.js and FastAPI", value: 90 },
  { label: "React and Next.js", value: 85 },
  { label: "PostgreSQL and data modelling", value: 85 },
  { label: "Docker, CI and AWS", value: 82 },
];

export const toolkit = [
  "Node.js, Express, FastAPI, GraphQL",
  "React, Next.js, Tailwind CSS",
  "PostgreSQL, MongoDB, Prisma, Pinecone",
  "Docker, AWS, GitHub Actions",
  "PyTorch, HuggingFace, LoRA and QLoRA",
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
  { name: "PyTorch", icon: "/pytorch.svg", category: "ML and AI" },
  { name: "Hugging Face", icon: "/huggingface.svg", category: "ML and AI" },
  { name: "OpenCV", icon: "/opencv.svg", category: "ML and AI" },
];

export const projects = [
  {
    title: "Executive Career Agent",
    description:
      "A private, local-first workspace that helps a senior executive run a deliberate job search. Seven cooperating agents (scout, reader, curator, assessor, scribe, conductor, harvester) discover, read, de-duplicate, score, and tailor roles against the candidate's real, self-declared experience. Runs fully offline on a bundled corpus or against the real internet. Features anti-fabrication validator that checks every claim against the Master Résumé, deterministic fit scoring via rule-based rubric, and MCP server for Claude Desktop integration.",
    tech: ["React", "TypeScript", "Electron", "Node.js", "MCP", "LangChain", "Docker"],
    github: "https://github.com/riju-talk/executive-career-agent",
    live: "",
    type: "Agent swarm / Desktop app",
    resource: "https://github.com/riju-talk/executive-career-agent/blob/main/USING.md",
    featured: true,
  },
  {
    title: "TURBO",
    description:
      "My own reimplementation of the paper by Goel and colleagues (arXiv 2502.07391). It fuses image features from a Vision Transformer with a modified BART text encoder, trains on the MORE+ dataset, and is scored with BLEU, ROUGE, and METEOR.",
    tech: ["PyTorch", "ViT", "BART", "Hugging Face"],
    github: "https://github.com/riju-talk/TURBO",
    live: "",
    type: "ML research",
    resource: "https://github.com/riju-talk/TURBO/blob/main/README.md",
    featured: true,
  },
  {
    title: "MineMEETS",
    description:
      "Pipelines that turn images, text, and audio into embeddings behind one interface. Every step checks its dimensions and is safe to run again, so a failed run just gets rerun. Pinecone namespaces keep reindexing and rollback safe, and the test suite plus formatting and type checks run on every pull request.",
    tech: ["CLIP", "Whisper", "Pinecone", "Docker", "Pytest"],
    github: "https://github.com/riju-talk/MineMEETS",
    live: "",
    type: "Multimodal retrieval",
    resource: "https://github.com/riju-talk/MineMEETS/blob/main/README.md",
    featured: true,
  },
  {
    title: "Flourish",
    description:
      "A plant care assistant. The FastAPI backend runs several language model tool calls in sequence against outside APIs, with Firebase handling sign in and storage. Retries and graceful fallbacks keep a failure upstream from breaking what the user is doing.",
    tech: ["FastAPI", "LangChain", "Firebase", "Docker"],
    github: "https://github.com/riju-talk/Flourish",
    live: "https://flourish-web-iota.vercel.app/",
    type: "Agentic service",
    resource: "",
    featured: false,
  },
  {
    title: "Cross-Portfolio Default Risk Prediction",
    description:
      "Dual-study data science investigation into credit default prediction across credit cards (UCI, 30K rows) and installment loans (LendingClub, 5K rows). Engineered 31+ features including utilization ratios, payment trends, delinquency aggregates, and sorting-smoothing probability of default estimates. Built 13 models with isotonic calibration, SHAP explainability, cost-sensitive threshold optimization, and business impact assessment. XGBoost achieved 0.7769 ROC-AUC on cards; Random Forest 0.7467 on loans. Estimated $18.7M annual savings (18,641% ROI) on card portfolio.",
    tech: ["Python", "XGBoost", "LightGBM", "Random Forest", "SHAP", "scikit-learn", "Pandas", "Optuna"],
    github: "https://github.com/riju-talk/loan-defaulter-prediction-study",
    live: "",
    type: "Data science research",
    resource: "https://github.com/riju-talk/loan-defaulter-prediction-study/blob/main/CREDIT_RISK_ANALYSIS_REPORT.md",
    featured: true,
  },
  {
    title: "DreamDOT",
    description:
      "A platform for creators with subscriptions, pay per view, and media sharing. The backend is a set of GraphQL services that answer queries spanning several of them without firing a cascade of extra requests. I set the service boundaries and the schema contracts so teams could work in parallel without breaking the shared graph.",
    tech: ["GraphQL", "Node.js", "Microservices", "MongoDB", "Docker"],
    github: "https://github.com/riju-talk/DreamDOT",
    live: "",
    type: "Distributed backend",
    resource: "",
    featured: true,
  },
  {
    title: "Hostiggo",
    description:
      "I took this from an idea to a product running on AWS. I own the React front end, the whole backend, the database, and the servers, and I put continuous integration and monitoring in place from the first week so releases stayed calm as more people used it.",
    tech: ["Node.js", "React", "PostgreSQL", "AWS", "Docker"],
    github: "https://github.com/riju-talk/Hostiggo-full-website",
    live: "",
    type: "Production SaaS",
    resource: "",
    featured: true,
  },
  {
    title: "Entropy",
    description:
      "A study space with an assistant that helps you work through doubts. Python and FastAPI power the async endpoints that generate personalised quizzes and study material through language model adapters you can swap out.",
    tech: ["Next.js", "FastAPI", "LangChain", "Docker", "Postgres", "Prisma"],
    github: "https://github.com/riju-talk/Entropy-Community-Forum",
    live: "https://entropy-community-forum.vercel.app/",
    type: "Web application",
    resource: "",
    featured: true,
  },
  {
    title: "Quench++",
    description:
      "An extension of Indic reasoning benchmarks. It adds injected bias and structured chains of reasoning about cause and effect in Boolean logic, so trustworthiness and reasoning can be measured in a repeatable way.",
    tech: ["Hugging Face", "Python", "PyTorch", "LoRA", "QLoRA"],
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
    title: "Head of Product Development",
    company: "Student Council, IIIT Delhi",
    name: "A student services portal used across the institute",
    period: "2025 to now",
    link: "https://studentcouncil.iiitd.edu.in",
    description:
      "I built and shipped a portal that more than 500 students use, and I own its database and the API the other engineers build against.",
    kind: "Product engineering",
    highlights: [
      "Built and shipped a portal that more than 500 students use, with React on the front and Node.js, Express, and PostgreSQL behind it.",
      "Own the database, the indexing, and the API the rest of the team builds against.",
      "Set up continuous integration with automated tests, and review the code for a team of eight.",
      "Swapped manual data entry for forms that validate, which cut the admin work by about 60 percent and put a stop to a recurring class of bad records.",
    ],
  },
  {
    key: 2,
    title: "Software Engineering Intern",
    company: "Shipzee",
    name: "A courier aggregation product, full stack work and a live stack migration",
    period: "March 2026 to August 2026",
    link: "https://www.shipzee.tech/",
    description:
      "I shipped features across a live courier aggregation product, from the React screens through the API down to the database.",
    kind: "Engineering internship",
    highlights: [
      "Shipped features across a live courier aggregation product, from the React screens through the API down to the database, working with people inside the company and with outside partners.",
      "Led a move to a new stack so the system would scale and stay maintainable, and planned the switch so no one saw an outage.",
      "Chased down production failures that crossed service boundaries using logs and request traces, and wrote tests around the outside integrations that caught mismatched contracts before release.",
    ],
  },
  {
    key: 3,
    title: "AI Engineer and Undergraduate Researcher",
    company: "MIDAS Lab, IIIT Delhi",
    name: "HorusLLM, a tool for checking model output quality",
    period: "May 2025 to January 2026",
    description:
      "I built HorusLLM, a tool that scores what a model generates against a few notions of alignment and flags on its own when the quality drops.",
    kind: "Research",
    highlights: [
      "Built HorusLLM, which scores model output against several notions of alignment and flags on its own when quality drops. The checking step cut made up answers by about 20 percent, and the lab still uses it.",
      "Ran the pipelines over three datasets so a rerun gives the same result, with retries and rate limit handling for outside APIs.",
      "Trained models with LoRA and QLoRA at four bit precision to fit the memory we had.",
      "First author on a paper about the work, now under review at AAAI 2027, with the harness and benchmarks released as open source.",
    ],
  },
  {
    key: 4,
    title: "Machine Learning Research Intern",
    company: "Computational Social Science Lab, IIIT Delhi",
    name: "A satellite imagery pipeline for crop prediction",
    period: "January 2025 to May 2025",
    link: "https://sickle-plus-plus.vercel.app/",
    description:
      "I built a satellite imagery pipeline on Google Earth Engine that produced segmentation masks and inputs with several channels at the scale of a district.",
    kind: "Research internship",
    highlights: [
      "Built a satellite imagery pipeline on Google Earth Engine with preprocessing that runs in parallel, producing segmentation masks and inputs with several channels at the scale of a district.",
      "Compared several CNN backbones on predicting phenology dates, sorting crops by type, and estimating yield, all under one shared setup for a fair comparison.",
      "Measured how far the data drifts across more than ten districts using difference in differences and fixed effects models, so accuracy was checked outside the training area rather than on one held out split.",
    ],
  },
  {
    key: 5,
    title: "Data Science Intern",
    company: "Complex Systems Lab, IIIT Delhi",
    name: "Messy real world classification and interactive visualisation",
    period: "August 2024 to December 2024",
    description:
      "I led a team of five building a 25 class classifier on messy real world data, and built web apps that visualised the data as it came in.",
    kind: "Data internship",
    highlights: [
      "Led a team of five building a 25 class classifier on messy real world data, reaching 84.5 and 74.5 percent on two splits, and traced the gap to a shift in the data between them.",
      "Built web apps that visualised complex datasets in real time, pulling in open data like OpenFoodFacts, RecipeDB, Carbon Footprint DB, and FNDDS.",
      "Ran code reviews and mentored the junior members.",
    ],
  },
  {
    key: 6,
    title: "Open Source Contributor",
    company: "Meshery, Layer5",
    name: "Layer5 documentation and Meshery.io",
    period: "2025",
    description:
      "I sent bug reports, feature requests, documentation fixes, and pull requests, and took part in reviews.",
    kind: "Open source",
    highlights: [
      "Sent bug reports, feature requests, documentation fixes, and pull requests.",
      "Took part in code reviews and gave feedback aimed at keeping the code easy to maintain.",
    ],
  },
];

export const publications = [
  {
    key: "publication-1",
    label: "Publication one",
    title: "HorusLLM, a Cross Evaluation Protocol for Tri Vector Alignment Interference",
    description:
      "My first author work, with A. G. Kumar, A. Anand, E. Cambria, Z. Wang, and R. R. Shah. It is a tool that scores what a model generates against several notions of alignment and flags on its own when the quality drops. The checking step cut made up answers by about 20 percent. The harness and benchmarks are released as open source.",
    status: "Under review at AAAI 2027",
    link: "",
  },
];

export const skillGroups = [
  { label: "Languages", value: "Python, TypeScript, JavaScript, C++, SQL, C" },
  { label: "Backend and APIs", value: "Node.js, Express, FastAPI, REST and GraphQL, GraphQL federation, WebSockets, retries and rate limiting" },
  { label: "Frontend", value: "React, Next.js, Tailwind CSS, dashboards, live interfaces over WebSockets" },
  { label: "Infrastructure and delivery", value: "AWS, Docker, GitHub Actions, Linux, Vercel, Pytest, structured logging, static analysis" },
  { label: "Data and distributed systems", value: "PostgreSQL, MongoDB, Prisma, Pinecone, schema design, indexing, PySpark, Airflow, ETL" },
  { label: "Machine learning and research", value: "PyTorch, Hugging Face, LoRA and QLoRA, LangChain, RAG, CLIP and Whisper, Google Earth Engine" },
];

export const stats = [
  { label: "Live deployments", value: "12+" },
  { label: "First author papers", value: "1" },
  { label: "LeetCode problems", value: "150+" },
  { label: "Codeforces rating", value: "1403" },
  { label: "Models evaluated", value: "13" },
];
