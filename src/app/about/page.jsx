
"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Download, MapPin, Calendar } from "lucide-react"
import Link from "next/link"
import LiveBackground from "../(components)/BackgrounGradient"

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
    },
    {
      key: 3,
      title: "Machine Learning Engineer",
      company: "Independent Projects",
      name: "Multi-Modal AI Systems Development",
      period: "2024-2025",
      description:
        "Developed advanced multi-modal AI systems combining computer vision and NLP. Built sarcasm detection tools using BART encoders with VIT backbone architecture. Implemented SpanBERT-CRF systems for enhanced question-answering capabilities. Focused on creating production-ready AI solutions with Docker and Kubernetes deployment strategies.",
    },
    {
      key: 4,
      title: "Full Stack Developer",
      company: "DreamDot Platform",
      name: "Microservices Architecture & Social Platform",
      period: "2024",
      description:
        "Architected and developed a scalable creator-first social media platform using microservices architecture. Implemented content monetization, real-time chat, media sharing, and NFT marketplace features. Utilized Go for backend services, PostgreSQL for data persistence, and React for frontend. Integrated blockchain technology for secure transaction logging with Razorpay payment processing.",
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden tron-grid">
      <LiveBackground />

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-green-500/20 tron-border">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <Link
                href="/"
                className="inline-flex items-center text-green-200 hover:text-green-400 transition-colors duration-300 hover:glow"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                [RETURN_TO_MAIN]
              </Link>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex gap-6"
              >
                <Link href="/" className="text-green-200 hover:text-green-400 transition-colors duration-300 hover:glow">
                  [HOME]
                </Link>
                <Link href="/about" className="text-green-400 font-medium glow">
                  [ABOUT]
                </Link>
              </motion.div>
            </div>
          </div>
        </nav>

        {/* About Hero */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div variants={staggerContainer} initial="initial" animate="animate">
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-green-400 mb-6 animate-glow">
                &gt; PROFILE_DATA.load()
              </motion.h1>

              <motion.div variants={fadeInUp} className="text-lg text-green-100 leading-relaxed space-y-6">
                <p className="border-l-2 border-green-500 pl-4">
                  I'm a passionate engineer with deep interest in building intelligent, end-to-end systems that combine full-stack development, DevOps, and AI. 
                  My journey began with curiosity about system architectures—from web app backends to neural network internals. 
                  That curiosity evolved into hands-on pursuit of creating meaningful, scalable applications where NLP, deep learning, and system design converge to solve real-world problems.
                </p>
                <p className="border-l-2 border-green-500 pl-4">
                  With solid foundations in traditional software engineering and modern cloud-native architectures, I focus on building robust systems that bridge development and production. 
                  My experience spans containerized microservices, real-time APIs, and scalable ML deployment pipelines. 
                  I've developed intelligent applications, integrated ML models, and automated CI/CD workflows to end-to-end ML lifecycles—always optimizing for performance, simplicity, and reproducibility.
                </p>
                <p className="border-l-2 border-green-500 pl-4">
                  I'm particularly passionate about developing applications that bring cutting-edge research to life—making NLP and deep learning models accessible and efficient. 
                  From orchestrating deployments to scaling training jobs and fine-tuning transformers, I work across the stack to deliver production-ready solutions. 
                  I believe great engineering combines empathy, creativity, and clarity—and I'm excited to push boundaries at the intersection of DevOps, AI, and modern software development.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center text-green-200 border border-green-500/30 px-3 py-1 rounded">
                  <MapPin className="mr-2 h-4 w-4" />
                  New Delhi, India
                </div>
                <div className="flex items-center text-green-200 border border-green-500/30 px-3 py-1 rounded">
                  <Calendar className="mr-2 h-4 w-4" />
                  Open to opportunities
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-8">
                <a
                  href="https://drive.google.com/uc?export=download&id=15GJJ1hBnv1jkQDGqw6AGF20U9IHD-YMx"
                  download
                  className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 tron-glow"
                >
                  <Download className="mr-2 h-4 w-4" />
                  [DOWNLOAD_RESUME]
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">&gt; EXPERIENCE_LOG.display()</h2>
              <div className="w-20 h-1 bg-green-400 rounded animate-pulse-green"></div>
            </motion.div>

            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={job.key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-lg p-6 tron-border hover:tron-glow transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-green-400 mb-1">[{job.title}]</h3>
                      <p className="text-green-300 font-medium">{job.company}</p>
                      <p className="text-green-200 text-sm mt-2 md:mt-0 italic">{job.name}</p>
                    </div>
                    <span className="text-green-400 text-sm mt-2 md:mt-0 border border-green-500/30 px-2 py-1 rounded">{job.period}</span>
                  </div>
                  <p className="text-green-100 leading-relaxed border-l-2 border-green-500/50 pl-4">{job.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-6 animate-glow">&gt; ESTABLISH_CONNECTION.init()</h2>
              <p className="text-lg text-green-200 mb-8 max-w-2xl mx-auto border border-green-500/20 p-4 rounded-lg">
                I'm always interested in challenging DevOps and MLOps opportunities. Whether you need infrastructure
                automation, ML pipeline development, or scalable system architecture, let's discuss how we can collaborate
                to build the future.
              </p>
              <a
                href="mailto:rijusmit2004@gmail.com"
                className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 text-lg tron-glow"
              >
                [INITIATE_COMMUNICATION]
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
