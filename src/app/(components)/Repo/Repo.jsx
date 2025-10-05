
"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-panel rounded p-6 hover:border-navy-400/20 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-base font-light text-navy-300/80 group-hover:text-navy-200/90 transition-all duration-300 tracking-wide">
          {project.title}
        </h3>
        {project.featured && (
          <span className="px-2 py-1 text-xs bg-olive-500/10 text-olive-400/70 border border-olive-500/20 rounded font-extralight tracking-wide">
            FEATURED
          </span>
        )}
      </div>

      <p className="text-navy-200/60 mb-5 leading-relaxed border-l border-olive-500/10 pl-4 font-extralight text-sm">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs bg-navy-400/5 text-navy-300/50 border border-navy-400/10 rounded hover:border-navy-400/20 transition-colors duration-300 font-extralight"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-5">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-navy-300/60 hover:text-navy-200/80 transition-colors duration-300 text-sm font-light"
        >
          <Github className="mr-2 h-4 w-4" />
          CODE
        </a>
        <div className="relative group/tooltip">
          <button
            disabled
            className="inline-flex items-center text-navy-300/30 cursor-not-allowed text-sm font-light"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            DEMO
          </button>
          <div className="absolute bottom-full left-0 mb-2 px-3 py-2 glass-panel text-navy-200/60 text-xs rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10 font-extralight">
            Deployment in progress
          </div>
        </div>
      </div>
    </motion.div>
  );
}
