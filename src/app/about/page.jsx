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
      title: "DevOps Engineer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Lead infrastructure automation and ML pipeline development. Implemented CI/CD pipelines reducing deployment time by 70% and built scalable Kubernetes clusters serving ML models.",
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Innovation Co.",
      period: "2020 - 2022",
      description:
        "Developed cloud-native applications and automated deployment processes. Built microservices architecture handling 1M+ requests daily with 99.9% uptime.",
    },
    {
      title: "Software Engineer",
      company: "StartUp Ventures",
      period: "2019 - 2020",
      description:
        "Built scalable web applications and implemented monitoring solutions. Gained expertise in containerization and cloud platforms while working in agile environments.",
    },
  ]

  const skills = [
    {
      category: "DevOps & Cloud",
      items: ["Docker", "Kubernetes", "AWS/GCP", "Terraform", "Jenkins", "GitLab CI/CD"],
    },
    {
      category: "MLOps & AI",
      items: ["TensorFlow", "PyTorch", "MLflow", "Kubeflow", "Model Deployment", "Data Pipelines"],
    },
    {
      category: "Programming",
      items: ["Python", "Go", "JavaScript", "TypeScript", "Java", "SQL"],
    },
    {
      category: "Databases & Tools",
      items: ["PostgreSQL", "MongoDB", "Redis", "Prometheus", "Grafana", "ELK Stack"],
    },
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
                  I'm a passionate DevOps and MLOps engineer with expertise spanning infrastructure automation, machine
                  learning operations, and full-stack development. My journey combines the precision of systems
                  engineering with the innovation of AI/ML technologies.
                </p>
                <p>
                  With a strong foundation in both traditional software development and modern cloud-native
                  architectures, I specialize in building robust, scalable systems that bridge the gap between
                  development and operations. My experience ranges from containerized microservices to complex ML
                  pipeline orchestration.
                </p>
                <p>
                  I'm particularly passionate about automating complex workflows, optimizing system performance, and
                  implementing best practices that enable teams to deploy with confidence. Whether it's setting up CI/CD
                  pipelines, orchestrating ML model deployments, or architecting cloud infrastructure, I focus on
                  creating solutions that scale.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center text-gray-200">
                  <MapPin className="mr-2 h-4 w-4" />
                  Your Location
                </div>
                <div className="flex items-center text-gray-200">
                  <Calendar className="mr-2 h-4 w-4" />
                  Open to opportunities
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-8">
                <a
                  href="/resume.pdf"
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

        {/* Skills Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
              <div className="w-20 h-1 bg-teal-400 rounded"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/40 backdrop-blur-sm border border-gray-600/30 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{skillGroup.category}</h3>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <div key={skill} className="text-gray-200 py-1">
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
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
                  key={job.title}
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
                href="mailto:your.email@example.com"
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
