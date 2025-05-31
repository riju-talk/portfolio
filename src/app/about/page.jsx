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
        "Led the pretraining and benchmarking of lightweight LLMs optimized for specialized tasks across healthcare, legal, and technical domains. \
        Focused on maximizing performance-to-cost ratio through careful dataset curation, architecture tuning, and efficient training strategies. \
        Evaluated model effectiveness on standard NLP benchmarks (e.g., QA, NER, summarization) with an emphasis on minimizing compute requirements while preserving high accuracy. \
        This work contributes to making AI more accessible and deployable in constrained environments such as mobile devices, embedded systems, and low-latency applications.",
    },
    {
      key: 2,
      title: "Undergraduate Researcher",
      company: "Complex Systems Lab",
      name: "Real-Time Data Integration & Interactive Web Visualization",
      period: "2024",
      description:
        "Designed and developed a dynamic web application to visualize and interpret complex datasets in real-time. \
        Led the full-stack development—from designing the frontend UI/UX to updating the backend codebase for optimized performance. \
        Integrated multiple open-source datasets including OpenFoodFacts, RecipeDB, Carbon Footprint DB, and FNDDS.\
        Applied machine learning models to perform exploratory and spatial data analysis, uncovering trends and patterns in food, nutrition, and environmental data across regions. \
        Enabled real-time deployment of visualized insights to support data-driven storytelling, sustainability awareness, and informed decision-making.",
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      <LiveBackground />

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-900/20 border-b border-gray-700/30">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <Link
                href="/"
                className="inline-flex items-center text-gray-200 hover:text-white transition-colors duration-300"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex gap-6"
              >
                <Link href="/" className="text-gray-200 hover:text-white transition-colors duration-300">
                  Home
                </Link>
                <Link href="/about" className="text-white font-medium">
                  About
                </Link>
              </motion.div>
            </div>
          </div>
        </nav>

        {/* About Hero */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div variants={staggerContainer} initial="initial" animate="animate">
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-white mb-6">
                About Me
              </motion.h1>

              <motion.div variants={fadeInUp} className="text-lg text-gray-100 leading-relaxed space-y-6">
                <p>
                  I'm a passionate engineer with a deep interest in building smart, end-to-end systems that combine the best of full-stack development, DevOps, and AI. 
                  My journey began with a curiosity for how things work—whether it's the backend of a web app or the inner workings of a neural network. 
                  That curiosity quickly turned into a hands-on pursuit of creating meaningful, scalable applications. 
                  I thrive on merging creativity with engineering discipline, and I’m especially driven by projects where NLP, deep learning, and system design come together to solve real-world problems in elegant ways.
                </p>
                <p>
                  With a solid foundation in both traditional software engineering and modern cloud-native architectures, I focus on building robust systems that bridge development and production. 
                  My experience spans containerized microservices, real-time APIs, and scalable ML deployment pipelines. 
                  I've developed intelligent apps, integrated ML models, and automated everything from CI/CD workflows to end-to-end ML lifecycles—always aiming for performance, simplicity, and reproducibility.
                </p>

                <p>
                  I’m particularly passionate about developing applications that bring cutting-edge research to life—making NLP and deep learning models usable, efficient, and accessible. 
                  From orchestrating deployments to scaling training jobs and fine-tuning transformers, I enjoy working across the stack to deliver production-ready solutions. 
                  I love building tools that not only function well but also empower others—whether it's a user-friendly interface for a complex AI model or an automated pipeline that lets teams ship faster and smarter. 
                  I believe great engineering is about empathy, creativity, and clarity—and I'm excited to keep pushing boundaries at the intersection of DevOps, AI, and modern software development.
                </p>

              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center text-gray-200">
                  <MapPin className="mr-2 h-4 w-4" />
                  New Delhi
                </div>
                <div className="flex items-center text-gray-200">
                  <Calendar className="mr-2 h-4 w-4" />
                  Open to opportunities
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-8">
                <a
                  href="https://drive.google.com/uc?export=download&id=1m3woSryg1-CGR3q-rZJgmJF5oQAnsC_4"
                  download
                  className="inline-flex items-center px-6 py-3 bg-teal-500 hover:bg-teal-400 text-gray-900 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
              <div className="w-20 h-1 bg-teal-400 rounded"></div>
            </motion.div>

            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={job.key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/40 backdrop-blur-sm border border-gray-600/30 rounded-lg p-6"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{job.title}</h3>
                      <p className="text-teal-300 font-medium">{job.company}</p>
                      <p className="text-gray-400 text-sm mt-2 md:mt-0">{job.name}</p>
                    </div>
                    <span className="text-gray-400 text-sm mt-2 md:mt-0">{job.period}</span>
                  </div>
                  <p className="text-gray-200 leading-relaxed">{job.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Build Something Great</h2>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                I'm always interested in challenging DevOps and MLOps opportunities. Whether you need infrastructure
                automation, ML pipeline development, or scalable system architecture, let's discuss how we can work
                together.
              </p>
              <a
                href="mailto:rijusmit2004@gmail.com"
                className="inline-flex items-center px-8 py-4 bg-teal-500 hover:bg-teal-400 text-gray-900 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 text-lg"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
