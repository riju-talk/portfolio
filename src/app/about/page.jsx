
"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Download, MapPin, Calendar } from "lucide-react"
import Link from "next/link"

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

export default function AboutPage() {
  const experience = [
    {
      key: 1,
      title: "Undergraduate Researcher",
      company: "MIDAS Lab",
      name: "Pretraining and Benchmarking Small Language Models (LLMs)",
      period: "2025",
      description:
        "Leading the pretraining and benchmarking of lightweight LLMs optimized for specialized tasks across healthcare, legal, and technical domains. Focused on maximizing performance-to-cost ratio through careful dataset curation, architecture tuning, and efficient training strategies. Evaluating model effectiveness on standard NLP benchmarks with emphasis on minimizing compute requirements while preserving high accuracy.",
    },
    {
      key: 2,
      title: "Undergraduate Researcher",
      company: "Complex Systems Lab",
      name: "Real-Time Data Integration & Interactive Web Visualization",
      period: "2024",
      description:
        "Designed and developed dynamic web applications for real-time complex dataset visualization. Led full-stack development from UI/UX design to backend optimization. Integrated multiple open-source datasets including OpenFoodFacts, RecipeDB, Carbon Footprint DB, and FNDDS. Applied ML models for exploratory and spatial data analysis, enabling real-time deployment of insights for data-driven decision-making.",
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden minimal-grid">
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-navy-400/10">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <Link
                href="/"
                className="inline-flex items-center text-olive-400/70 hover:text-olive-300/90 transition-colors duration-300 text-sm font-light tracking-wide"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                BACK
              </Link>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex gap-8"
              >
                <Link href="/" className="text-navy-300/60 hover:text-navy-200/80 transition-colors duration-300 text-sm font-light tracking-wide">
                  HOME
                </Link>
                <Link href="/about" className="text-olive-400/80 text-sm font-light tracking-wide">
                  ABOUT
                </Link>
              </motion.div>
            </div>
          </div>
        </nav>

        {/* About Hero */}
        <section className="pt-40 pb-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div variants={staggerContainer} initial="initial" animate="animate">
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-thin text-navy-300/90 mb-10 tracking-tight">
                PROFILE
              </motion.h1>

              <motion.div variants={fadeInUp} className="text-base font-extralight text-navy-200/60 leading-relaxed space-y-6">
                <p className="border-l border-olive-500/20 pl-6">
                  I'm a passionate engineer with deep interest in building intelligent, end-to-end systems that combine full-stack development, DevOps, and AI. 
                  My journey began with curiosity about system architectures—from web app backends to neural network internals. 
                  That curiosity evolved into hands-on pursuit of creating meaningful, scalable applications where NLP, deep learning, and system design converge to solve real-world problems.
                </p>
                <p className="border-l border-navy-400/20 pl-6">
                  With solid foundations in traditional software engineering and modern cloud-native architectures, I focus on building robust systems that bridge development and production. 
                  My experience spans containerized microservices, real-time APIs, and scalable ML deployment pipelines. 
                  I've developed intelligent applications, integrated ML models, and automated CI/CD workflows to end-to-end ML lifecycles—always optimizing for performance, simplicity, and reproducibility.
                </p>
                <p className="border-l border-olive-500/20 pl-6">
                  I'm particularly passionate about developing applications that bring cutting-edge research to life—making NLP and deep learning models accessible and efficient. 
                  From orchestrating deployments to scaling training jobs and fine-tuning transformers, I work across the stack to deliver production-ready solutions. 
                  I believe great engineering combines empathy, creativity, and clarity—and I'm excited to push boundaries at the intersection of DevOps, AI, and modern software development.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mt-10">
                <div className="flex items-center text-olive-400/60 tech-badge-olive px-4 py-2 rounded text-sm font-light">
                  <MapPin className="mr-2 h-4 w-4" />
                  New Delhi, India
                </div>
                <div className="flex items-center text-olive-400/60 tech-badge-olive px-4 py-2 rounded text-sm font-light">
                  <Calendar className="mr-2 h-4 w-4" />
                  Open to opportunities
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-10">
                <a
                  href="https://drive.google.com/file/d/1Q-4PVssFwFDguvYlFkkRol9v7J5QM93x/view?usp=sharing"
                  download
                  className="inline-flex items-center px-6 py-3 btn-olive-primary text-olive-300/85 font-light text-sm tracking-wide rounded transition-all duration-300"
                >
                  <Download className="mr-2 h-4 w-4" />
                  DOWNLOAD RESUME
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-thin text-navy-300/80 mb-3 tracking-wide">EXPERIENCE</h2>
              <div className="w-16 h-px bg-olive-500/30"></div>
            </motion.div>

            <div className="space-y-6">
              {experience.map((job, index) => (
                <motion.div
                  key={job.key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-panel rounded p-8 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-lg font-light text-navy-300/80 mb-1 tracking-wide">{job.title}</h3>
                      <p className="text-olive-400/70 font-extralight text-sm">{job.company}</p>
                      <p className="text-navy-200/50 text-sm mt-2 font-extralight italic">{job.name}</p>
                    </div>
                    <span className="text-olive-400/70 text-xs mt-2 md:mt-0 tech-badge-olive px-3 py-1 rounded font-light">{job.period}</span>
                  </div>
                  <p className="text-navy-200/60 leading-relaxed border-l border-olive-500/15 pl-6 font-extralight text-sm">{job.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-thin text-navy-300/80 mb-6 tracking-wide">CONNECT</h2>
              <p className="text-base font-extralight text-navy-200/60 mb-10 max-w-2xl mx-auto leading-relaxed glass-panel p-6 rounded">
                I'm always interested in challenging DevOps and MLOps opportunities. Whether you need infrastructure
                automation, ML pipeline development, or scalable system architecture, let's discuss how we can collaborate
                to build the future.
              </p>
              <a
                href="mailto:rijusmit2004@gmail.com"
                className="inline-flex items-center px-8 py-4 btn-olive-primary text-olive-300/85 font-light text-sm tracking-wide rounded transition-all duration-300"
              >
                SEND MESSAGE
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
