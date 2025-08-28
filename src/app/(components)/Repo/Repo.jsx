
"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-black/50 backdrop-blur-sm border border-green-500/30 hover:border-cyan-400/50 rounded-lg p-6 transition-all duration-300 group tron-border hover:shadow-lg hover:shadow-cyan-500/20"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-300">
          {project.title}
        </h3>
        {project.featured && (
          <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 border border-green-500/30 rounded animate-pulse-green">
            [FEATURED]
          </span>
        )}
      </div>

      <p className="text-green-100 mb-4 leading-relaxed border-l-2 border-green-500/50 pl-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs bg-green-500/10 text-green-300 border border-green-500/30 rounded hover:bg-green-500/20 transition-colors duration-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-green-300 hover:text-green-400 transition-colors duration-300 hover:glow"
        >
          <Github className="mr-2 h-4 w-4" />
          [CODE]
        </a>
        <div className="relative group/tooltip">
          <button
            disabled
            className="inline-flex items-center text-green-500/50 cursor-not-allowed"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            [DEMO]
          </button>
          <div className="absolute bottom-full left-0 mb-2 px-3 py-2 bg-black border border-green-500/30 text-green-300 text-sm rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
            &gt; Deployment in progress...
            <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-green-500/30"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
