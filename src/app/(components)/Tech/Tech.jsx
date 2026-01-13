"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { techStack } from "@/data/portfolio-data"

export default function TechStack() {
  const categories = ["Language", "Full Stack", "DevOps", "Database", "ML/AI"]

  return (
    <div className="relative">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
        {categories.map((category, categoryIndex) => {
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-teal-900/60 border border-emerald-500/10 rounded-lg p-3 sm:p-4 transition-all duration-300 hover:border-emerald-400/30 touch-manipulation"
            >
              <h3 className="text-emerald-300/75 font-light text-xs tracking-widest mb-3 sm:mb-4 text-center border-b border-emerald-500/20 pb-2 sm:pb-3 uppercase">
                {category}
              </h3>
              <div className="space-y-1.5 sm:space-y-2">
                {techStack
                  .filter((tech) => tech.category === category)
                  .map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 sm:gap-2.5 p-1 sm:p-1.5 rounded bg-teal-800/30 hover:bg-teal-800/50 transition-all duration-300 group touch-manipulation"
                    >
                      <div className="w-4 h-4 relative flex-shrink-0">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={20}
                          height={20}
                          className="transition-opacity duration-300"
                        />
                      </div>
                      <span className="text-emerald-300/70 text-xs group-hover:text-emerald-200 transition-colors duration-300 font-light">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
