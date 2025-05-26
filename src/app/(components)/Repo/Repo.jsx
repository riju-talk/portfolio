"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-gray-800/40 backdrop-blur-sm border border-gray-600/30 rounded-lg p-6 hover:border-teal-400/50 hover:bg-gray-700/40 transition-all duration-300"
    >
      {project.featured && (
        <div className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 text-sm rounded-full mb-4">
          Featured
        </div>
      )}

      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-teal-100 transition-colors duration-300">
        {project.title}
      </h3>

      <p className="text-gray-200 mb-4 leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-gray-700/50 text-gray-300 text-sm rounded"
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
          className="inline-flex items-center text-gray-300 hover:text-white transition-colors duration-300"
        >
          <Github className="mr-2 h-4 w-4" />
          Code
        </a>
        <div className="relative group/tooltip">
          <button
            disabled
            className="inline-flex items-center text-gray-500 cursor-not-allowed"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </button>
          <div className="absolute bottom-full left-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
            Deployment in development
            <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
