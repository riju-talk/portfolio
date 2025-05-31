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
    title: "Multi-Modal Image and Caption based Sarcasm Detection Tool (Self Implementation)",
    description:
      "Built an multi-modal sarcasm detection tool that combines image and text analysis to identify sarcastic content. \
      Combined BART Encoders to  a backbone of VIT, along with extracted segments from images. Orignal paper: 'Target-Augmented Shared Fusion-based Multimodal Sarcasm Explanation Generation' (Palaash Goel, Dushyant Singh Chauhan, Md Shad Akhtar, 2025).",
    tech: ["Python", "TensorFlow", "Docker", "Kubernetes", "PostgreSQL"],
    github: "https://github.com/yourusername/ml-pipeline",
    live: "#",
    featured: true,
  },
  {
  title: "DreamDot (Microservices-based Platform)",
  description:
    "Developed a scalable, creator-first social media platform using a robust microservices architecture. Integrated content monetization, real-time chat, media sharing, and an NFT marketplace powered by Razorpay, with blockchain used solely for secure transaction logging. Designed for high performance, modularity, and seamless UX to support a global creator economy across web and mobile platforms.",
  tech: ["Go", "Docker", "Kubernetes", "PostgreSQL", "React"],
  github: "https://github.com/yourusername/iac-platform",
  live: "#",
  featured: true,
},
{
  title: "SpanBERT-CRF for Question Answering",
  description:
    "Implemented a state-of-the-art QA system by integrating SpanBERT with CRF layers to boost span-level prediction accuracy. Developed the complete pipeline—from data ingestion and preprocessing to training, evaluation, and REST API deployment. Fine-tuned on SQuAD v2 to extract context-aware answers from complex texts, demonstrating improved performance on challenging, ambiguous input queries.",
  tech: ["Python", "PyTorch", "Transformers", "spaCy", "Flask"],
  github: "https://github.com/yourusername/analytics-dashboard",
  live: "#",
  featured: true,
}
];


  return (
    <div className="min-h-screen relative overflow-hidden">
      <LiveBackground />

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-900/20 border-b border-gray-700/30">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xl font-bold text-white"
              >
                Hello There
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex gap-6"
              >
                <Link href="/" className="text-gray-200 hover:text-white transition-colors duration-300">
                  Home
                </Link>
                <Link href="/about" className="text-gray-200 hover:text-white transition-colors duration-300">
                  About
                </Link>
              </motion.div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div variants={staggerContainer} initial="initial" animate="animate" className="max-w-4xl">
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Rijusmit Biswas
              </motion.h1>

              <motion.div variants={fadeInUp} className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
                <p className="mb-4">Machine Learning Developer and Full Stack Deveopler advancing to Devops</p>
                <p className="text-lg text-gray-200">
                  I'm a final-year B.Tech student at IIIT-Delhi majoring in Computer Science and Economics, with a strong foundation in Full Stack Development and Machine Learning. Currently, I’m expanding my skills in DevOps and MLOps, focusing on building scalable, AI-driven applications that solve complex problems efficiently.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="group inline-flex items-center px-6 py-3 bg-teal-500 hover:bg-teal-400 text-gray-900 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <a
                  href="mailto:rijusmit2004@gmail.com"
                  className="inline-flex items-center px-6 py-3 border border-teal-400 text-teal-300 hover:text-white hover:border-teal-300 rounded-lg transition-all duration-300"
                >
                  Get in Touch
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="pb-10 px-6 ">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technologies & Tools</h2>
              <div className="w-20 h-1 bg-teal-400 rounded"></div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
              <div className="w-20 h-1 bg-teal-400 rounded"></div>
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
                className="inline-flex items-center px-6 py-3 border border-teal-400 text-teal-300 hover:text-white hover:border-teal-300 rounded-lg transition-all duration-300"
              >
                <Github className="mr-2 h-4 w-4" />
                View All Projects
              </a>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 mb-4">Let's build scalable, intelligent systems together.</p>
              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com/riju-talk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-300 transition-colors duration-300"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/rijusmit-biswas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-300 transition-colors duration-300"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:rijusmit2004@gmail.com"
                  className="text-gray-400 hover:text-teal-300 transition-colors duration-300"
                >
                  Email
                </a>
              </div>
            </motion.div>
          </div>
        </footer>
      </div>
    </div>
  )
}
