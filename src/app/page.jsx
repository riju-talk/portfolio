"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github } from "lucide-react"
import Link from "next/link"
import TechStack from "./(components)/Tech/Tech"
import ProjectCard from "./(components)/Repo/Repo"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
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
    <div className="min-h-screen relative overflow-hidden minimal-grid">
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-navy-400/10">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-sm font-thin tracking-widest text-navy-300/70"
              >
                SYSTEM ACTIVE
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex gap-8"
              >
                <Link href="/" className="text-navy-300/60 hover:text-navy-200/80 transition-colors duration-300 text-sm font-light tracking-wide">
                  HOME
                </Link>
                <Link href="/about" className="text-olive-400/60 hover:text-olive-300/80 transition-colors duration-300 text-sm font-light tracking-wide">
                  ABOUT
                </Link>
              </motion.div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-40 pb-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div variants={staggerContainer} initial="initial" animate="animate" className="max-w-4xl">
              <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-thin text-navy-300/90 mb-8 leading-tight tracking-tight">
                RIJUSMIT BISWAS
              </motion.h1>

              <motion.div variants={fadeInUp} className="space-y-4 mb-12">
                <p className="text-lg font-light text-olive-400/70 tracking-wide">
                  Machine Learning Developer / Full Stack Engineer / DevOps Specialist
                </p>
                <p className="text-base font-extralight text-navy-200/60 leading-relaxed max-w-2xl">
                  Final-year B.Tech student at IIIT-Delhi specializing in Computer Science and Economics. 
                  Building scalable AI-driven applications with expertise in ML, full-stack development, and emerging DevOps/MLOps practices.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="group inline-flex items-center px-6 py-3 glass-panel hover:border-navy-400/30 text-navy-300/80 font-light text-sm tracking-wide rounded transition-all duration-300"
                >
                  VIEW PROFILE
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <a
                  href="mailto:rijusmit2004@gmail.com"
                  className="inline-flex items-center px-6 py-3 border border-olive-500/20 text-olive-400/70 hover:border-olive-400/30 font-light text-sm tracking-wide rounded transition-all duration-300"
                >
                  CONTACT
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-thin text-navy-300/80 mb-3 tracking-wide">TECH STACK</h2>
              <div className="w-16 h-px bg-olive-500/30"></div>
            </motion.div>

            <TechStack />
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-thin text-navy-300/80 mb-3 tracking-wide">FEATURED PROJECTS</h2>
              <div className="w-16 h-px bg-olive-500/30"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <a
                href="https://github.com/riju-talk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-navy-400/20 text-navy-300/70 hover:border-navy-300/30 font-light text-sm tracking-wide rounded transition-all duration-300"
              >
                <Github className="mr-2 h-4 w-4" />
                VIEW REPOSITORY
              </a>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 border-t border-navy-400/10">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-navy-300/50 mb-6 font-extralight text-sm tracking-wide">Building intelligent systems for the future</p>
              <div className="flex justify-center gap-8">
                <a
                  href="https://github.com/riju-talk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-300/60 hover:text-navy-200/80 transition-colors duration-300 text-sm font-light tracking-wide"
                >
                  GITHUB
                </a>
                <a
                  href="https://www.linkedin.com/in/rijusmit-biswas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-olive-400/60 hover:text-olive-300/80 transition-colors duration-300 text-sm font-light tracking-wide"
                >
                  LINKEDIN
                </a>
                <a
                  href="mailto:rijusmit2004@gmail.com"
                  className="text-navy-300/60 hover:text-navy-200/80 transition-colors duration-300 text-sm font-light tracking-wide"
                >
                  EMAIL
                </a>
              </div>
            </motion.div>
          </div>
        </footer>
      </div>
    </div>
  )
}
