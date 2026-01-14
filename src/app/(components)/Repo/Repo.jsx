
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
      className="bg-teal-950/80 border border-emerald-500/20 rounded-lg p-4 sm:p-5 lg:p-6 transition-all duration-300 hover:border-emerald-400/40 group touch-manipulation"
    >
      <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
        <h3 className="text-sm sm:text-base font-light text-white group-hover:text-white transition-all duration-300 tracking-wide">
          {project.title}
        </h3>
        {project.featured && (
          <span className="px-2 py-0.5 sm:py-1 text-xs bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 rounded font-extralight tracking-wide whitespace-nowrap">
            FEATURED
          </span>
        )}
      </div>

      <p className="text-white/80 mb-4 sm:mb-5 leading-relaxed border-l-2 border-emerald-500/40 pl-3 sm:pl-4 font-extralight text-xs sm:text-sm">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs bg-teal-900/60 border border-emerald-500/20 text-emerald-100 rounded font-extralight hover:bg-teal-900/80 transition"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 sm:gap-5 flex-wrap">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-emerald-200 hover:text-white transition-colors duration-300 text-xs sm:text-sm font-light touch-manipulation"
        >
          <Github className="mr-2 h-4 w-4" />
          CODE
        </a>
        {project.type === "Web App" ? (
          project.live && project.live !== "" ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-emerald-200 hover:text-white transition-colors duration-300 text-xs sm:text-sm font-light touch-manipulation"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              LIVE
            </a>
          ) : (
            <div className="relative group/tooltip">
              <button
                disabled
                className="inline-flex items-center text-white/30 cursor-not-allowed text-xs sm:text-sm font-light"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                LIVE
              </button>
              <div className="absolute bottom-full left-0 mb-2 px-3 py-2 bg-teal-900 border border-emerald-500/20 text-emerald-200/70 text-xs rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10 font-extralight">
                Deployment in progress
              </div>
            </div>
          )
        ) : (
          project.resource && project.resource !== "" && (
            <a
              href={project.resource}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-emerald-200 hover:text-white transition-colors duration-300 text-xs sm:text-sm font-light touch-manipulation"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              RESOURCE
            </a>
          )
        )}
      </div>
    </motion.div>
  );
}
