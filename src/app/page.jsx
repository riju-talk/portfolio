
"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github } from "lucide-react"
import Link from "next/link"
import LiveBackground from "./(components)/BackgrounGradient"
import TechStack from "./(components)/Tech/Tech"
import ProjectCard from "./(components)/Repo/Repo"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function HomePage() {
  const projects = [
    {
      title: "Multi-Modal Image and Caption based Sarcasm Detection Tool",
      description:
        "Built a multi-modal sarcasm detection tool combining image and text analysis. Combined BART Encoders with VIT backbone and extracted image segments. Based on 'Target-Augmented Shared Fusion-based Multimodal Sarcasm Explanation Generation' (Palaash Goel, Dushyant Singh Chauhan, Md Shad Akhtar, 2025).",
      tech: ["Python", "TensorFlow", "Docker", "Kubernetes", "PostgreSQL"],
      github: "https://github.com/riju-talk/TURBO",
      live: "#",
      featured: true,
    },
    {
      title: "DreamDot - Microservices Social Platform",
      description:
        "Scalable creator-first social media platform with microservices architecture. Features content monetization, real-time chat, media sharing, and NFT marketplace powered by Razorpay. Blockchain integration for secure transaction logging.",
      tech: ["Go", "Docker", "Kubernetes", "PostgreSQL", "React"],
      github: "https://github.com/riju-talk/DreamDot",
      live: "#",
      featured: true,
    },
    {
      title: "SpanBERT-CRF Question Answering System",
      description:
        "State-of-the-art QA system integrating SpanBERT with CRF layers for enhanced span-level prediction. Complete pipeline from data preprocessing to REST API deployment. Fine-tuned on SQuAD v2 for context-aware answer extraction.",
      tech: ["Python", "PyTorch", "Transformers", "spaCy", "Flask"],
      github: "https://github.com/riju-talk/SpanBERT-CRF",
      live: "#",
      featured: true,
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden tron-grid">
      <LiveBackground />

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-green-500/20 tron-border">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xl font-bold text-green-400 glow-text"
              >
                &gt; SYSTEM_ACTIVE
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex gap-6"
              >
                <Link href="/" className="text-green-200 hover:text-green-400 transition-colors duration-300 hover:glow">
                  [HOME]
                </Link>
                <Link href="/about" className="text-green-200 hover:text-green-400 transition-colors duration-300 hover:glow">
                  [ABOUT]
                </Link>
              </motion.div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div variants={staggerContainer} initial="initial" animate="animate" className="max-w-4xl">
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-green-400 mb-6 leading-tight animate-glow">
                RIJUSMIT_BISWAS.exe
              </motion.h1>

              <motion.div variants={fadeInUp} className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed">
                <p className="mb-4 text-green-300">&gt; ROLE: Machine Learning Developer | Full Stack Engineer | DevOps Specialist</p>
                <p className="text-lg text-green-200">
                  Final-year B.Tech student at IIIT-Delhi specializing in Computer Science and Economics. 
                  Building scalable AI-driven applications with expertise in ML, full-stack development, and emerging DevOps/MLOps practices. 
                  Focused on creating intelligent systems that solve complex problems efficiently.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="group inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 tron-glow"
                >
                  [INITIALIZE_PROFILE]
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <a
                  href="mailto:rijusmit2004@gmail.com"
                  className="inline-flex items-center px-6 py-3 border border-green-400 text-green-300 hover:text-green-100 hover:border-green-300 rounded-lg transition-all duration-300 tron-border hover:tron-glow"
                >
                  [ESTABLISH_CONNECTION]
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="pb-10 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">&gt; TECH_STACK.initialized</h2>
              <div className="w-20 h-1 bg-green-400 rounded animate-pulse-green"></div>
            </motion.div>

            <TechStack />
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">&gt; FEATURED_PROJECTS.exe</h2>
              <div className="w-20 h-1 bg-green-400 rounded animate-pulse-green"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <a
                href="https://github.com/riju-talk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-green-400 text-green-300 hover:text-green-100 hover:border-green-300 rounded-lg transition-all duration-300 tron-border hover:tron-glow"
              >
                <Github className="mr-2 h-4 w-4" />
                [ACCESS_REPOSITORY]
              </a>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-green-500/20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-green-300 mb-4">&gt; Building the future with intelligent systems...</p>
              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com/riju-talk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors duration-300 hover:glow"
                >
                  [GITHUB]
                </a>
                <a
                  href="https://www.linkedin.com/in/rijusmit-biswas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors duration-300 hover:glow"
                >
                  [LINKEDIN]
                </a>
                <a
                  href="mailto:rijusmit2004@gmail.com"
                  className="text-green-400 hover:text-green-300 transition-colors duration-300 hover:glow"
                >
                  [EMAIL]
                </a>
              </div>
            </motion.div>
          </div>
        </footer>
      </div>
    </div>
  )
}
